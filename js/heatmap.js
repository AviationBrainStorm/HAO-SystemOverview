/* ============================================================
   heatmap.js — expert group dependency heat map.

   Rows are scenarios, columns are ICAO expert groups, cells are
   a 0–5 dependency judgement. Column totals show which groups
   the HAO work programme leans on hardest, which is the question
   a work-programme owner actually needs answered.
   ============================================================ */

const HEAT_STOPS = [
  { v: 0, c: [ 38,  50,  68], label: 'None' },
  { v: 1, c: [ 33,  86, 120], label: 'Marginal' },
  { v: 2, c: [ 32, 122, 158], label: 'Low' },
  { v: 3, c: [201, 152,  56], label: 'Moderate' },
  { v: 4, c: [212, 106,  58], label: 'High' },
  { v: 5, c: [198,  58,  54], label: 'Blocking' }
];

function heatColour(v) {
  const s = HEAT_STOPS[Math.max(0, Math.min(5, Math.round(v)))];
  return `rgb(${s.c.join(',')})`;
}

/**
 * Build the heat map table.
 * @param {HTMLElement} host
 * @param {Object} data          full dataset
 * @param {Object} opts          { vehicleId, useCaseId, sortByLoad, onScenario, onGroup }
 */
function renderHeatMap(host, data, opts = {}) {
  host.innerHTML = '';

  let scenarios = data.scenarios.slice();
  if (opts.vehicleId) scenarios = scenarios.filter(s => s.vehicleClassId === opts.vehicleId);
  if (opts.useCaseId) scenarios = scenarios.filter(s => (s.useCases || []).includes(opts.useCaseId));

  if (!scenarios.length) {
    host.innerHTML = '<p class="empty-note">No scenarios match the current filter.</p>';
    return;
  }

  // Column totals decide ordering when sortByLoad is on.
  const groups = data.expertGroups.map(g => {
    const total = scenarios.reduce((a, s) => a + (s.expertGroupDependency?.[g.id] || 0), 0);
    const max = scenarios.reduce((a, s) => Math.max(a, s.expertGroupDependency?.[g.id] || 0), 0);
    return { ...g, total, max, mean: total / scenarios.length };
  });
  if (opts.sortByLoad) groups.sort((a, b) => b.total - a.total);

  const table = document.createElement('table');
  table.className = 'heat';

  // header
  const thead = document.createElement('thead');
  const hr = document.createElement('tr');
  hr.appendChild(Object.assign(document.createElement('th'), { className: 'rowhead', textContent: '' }));
  groups.forEach(g => {
    const th = document.createElement('th');
    th.className = 'colhead';
    th.textContent = g.name;
    th.title = g.fullName || g.name;
    th.addEventListener('click', () => opts.onGroup && opts.onGroup(g, scenarios));
    hr.appendChild(th);
  });
  const thTot = document.createElement('th');
  thTot.className = 'colhead';
  thTot.textContent = 'Scenario load';
  hr.appendChild(thTot);
  thead.appendChild(hr);
  table.appendChild(thead);

  // body
  const tbody = document.createElement('tbody');
  scenarios.forEach(s => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.className = 'rowhead';
    th.textContent = s.name;
    th.title = s.name;
    th.addEventListener('click', () => opts.onScenario && opts.onScenario(s));
    tr.appendChild(th);

    let rowTotal = 0;
    groups.forEach(g => {
      const v = s.expertGroupDependency?.[g.id] || 0;
      rowTotal += v;
      const td = document.createElement('td');
      td.className = 'cell';
      td.style.background = heatColour(v);
      td.style.opacity = v === 0 ? '.35' : '1';
      td.textContent = v || '';
      td.title = `${s.name}\n${g.fullName || g.name}\nDependency ${v}/5 — ${HEAT_STOPS[v].label}`;
      tr.appendChild(td);
    });

    const tdTot = document.createElement('td');
    tdTot.className = 'total';
    tdTot.textContent = rowTotal;
    tr.appendChild(tdTot);
    tbody.appendChild(tr);
  });

  // footer with column totals
  const tfoot = document.createElement('tfoot');
  const fr = document.createElement('tr');
  const fth = document.createElement('th');
  fth.className = 'rowhead';
  fth.innerHTML = '<em style="color:var(--text-3);font-size:.7rem">Total dependency</em>';
  fr.appendChild(fth);
  groups.forEach(g => {
    const td = document.createElement('td');
    td.className = 'total';
    td.style.textAlign = 'center';
    td.textContent = g.total;
    fr.appendChild(td);
  });
  fr.appendChild(document.createElement('td'));
  tfoot.appendChild(fr);
  table.appendChild(tfoot);

  host.appendChild(table);

  // key
  const key = document.createElement('div');
  key.className = 'heat-key';
  key.innerHTML = '<span style="margin-right:.3rem">Dependency:</span>' +
    HEAT_STOPS.map(s => `<i style="background:${heatColour(s.v)}"></i><span>${s.v} ${s.label}</span>`).join('');
  host.appendChild(key);
}

/** Summary card for a clicked expert group. */
function groupDetailHTML(group, scenarios) {
  const rows = scenarios
    .map(s => ({ s, v: s.expertGroupDependency?.[group.id] || 0 }))
    .filter(r => r.v > 0)
    .sort((a, b) => b.v - a.v);

  const total = rows.reduce((a, r) => a + r.v, 0);
  const blocking = rows.filter(r => r.v >= 4);

  return `
    <h3>${group.fullName || group.name}</h3>
    <p class="muted">${group.role || ''}</p>
    <p style="font-size:.85rem">
      Total dependency across the filtered scenarios: <strong style="color:var(--accent)">${total}</strong>.
      ${blocking.length
        ? `<strong style="color:var(--danger)">${blocking.length}</strong> scenario${blocking.length === 1 ? '' : 's'} depend${blocking.length === 1 ? 's' : ''} on this group at level 4 or 5, meaning the HAO concept cannot be completed for ${blocking.length === 1 ? 'that scenario' : 'those scenarios'} without its output.`
        : 'No scenario depends on this group at a blocking level.'}
    </p>
    <div style="margin-top:.6rem">
      ${rows.slice(0, 10).map(r => `
        <div class="bar-row">
          <span class="lbl">${r.s.name}</span>
          <span class="num">${r.v}/5</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(r.v / 5) * 100}%"></div></div>
        </div>`).join('')}
    </div>`;
}

window.HAOHeat = { renderHeatMap, heatColour, groupDetailHTML, HEAT_STOPS };
