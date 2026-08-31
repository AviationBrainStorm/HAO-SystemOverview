/* ============================================================
   roadmap.js — job cards, delivery dates and gap coverage.

   Two questions this answers that nothing else in the tool can:
     1. When does the work that closes each gap actually land?
     2. Which gaps have no job card behind them at all?

   The second is the important one. A gap with high severity and
   no owning job card is an unfunded liability in the work
   programme, and it is invisible in a gap register alone.
   ============================================================ */

/* ---- ICAO date parsing -------------------------------------------------
   Job cards express dates as "Q2 2028", "Nov 2028", "Dec 2025" or "2028".
   Return a fractional year so items can be laid out on a linear axis. */
const MONTHS = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 };

function parseIcaoDate(s) {
  if (!s) return null;
  const t = String(s).trim();
  let m = t.match(/^Q([1-4])\s+(\d{4})$/i);
  if (m) return { year: +m[2], frac: +m[2] + (+m[1] - 1) * 0.25 + 0.125, label: t, precision: 'quarter' };
  m = t.match(/^([A-Za-z]{3})\w*\s+(\d{4})$/);
  if (m && MONTHS[m[1].toLowerCase()] !== undefined) {
    const mi = MONTHS[m[1].toLowerCase()];
    return { year: +m[2], frac: +m[2] + (mi + 0.5) / 12, label: t, precision: 'month' };
  }
  m = t.match(/^(\d{4})$/);
  if (m) return { year: +m[1], frac: +m[1] + 0.5, label: t, precision: 'year' };
  return null;
}

const STATUS_COLOUR = {
  'Delivered':    '#3f9a6d',
  'Completed':    '#3f9a6d',
  'On-schedule':  '#4fa3e0',
  'Approved':     '#4fa3e0',
  'Proposed':     '#8f7fe8',
  'Draft':        '#f2a541',
  'Re-scheduled': '#e0654f',
  'Cancelled':    '#7a8ca3'
};
function statusColour(s) { return STATUS_COLOUR[s] || '#7a8ca3'; }

const COVERAGE_META = {
  resolving: { label: 'Resolving', colour: '#3f9a6d', note: 'A job card exists whose output would change the provision.' },
  partial:   { label: 'Partial',   colour: '#f2a541', note: 'Work exists but does not cover the whole gap.' },
  framing:   { label: 'Framing',   colour: '#8f7fe8', note: 'The gap is scoped conceptually but no provision changes as a result.' },
  none:      { label: 'Uncovered', colour: '#c63a36', note: 'No job card addresses this gap.' }
};

/* ---- coverage index ---------------------------------------------------- */
function buildCoverage(data) {
  const idx = {};
  (data.provisionGaps || []).forEach(g => { idx[g.id] = { gap: g, entries: [] }; });
  (data.jobCards || []).forEach(jc => {
    (jc.addressesGaps || []).forEach(a => {
      if (idx[a.gapId]) idx[a.gapId].entries.push({ jobCard: jc, coverage: a.coverage });
    });
  });
  // Strongest coverage wins for the headline classification.
  const rank = { resolving: 3, partial: 2, framing: 1 };
  Object.values(idx).forEach(e => {
    // NB: rank[null] is undefined and every numeric comparison against
    // undefined is false, so the accumulator must be coerced to 0.
    e.best = e.entries.reduce((acc, x) =>
      ((rank[x.coverage] || 0) > (rank[acc] || 0) ? x.coverage : acc), null) || 'none';
    e.earliest = e.entries.reduce((acc, x) => {
      const ds = (x.jobCard.workProgrammeElements || [])
        .map(w => parseIcaoDate(w.delivery)).filter(Boolean).sort((a, b) => a.frac - b.frac);
      if (!ds.length) return acc;
      return (!acc || ds[0].frac < acc.frac) ? ds[0] : acc;
    }, null);
  });
  return idx;
}

/* ---- Gantt timeline ---------------------------------------------------- */
function renderRoadmap(host, data, opts = {}) {
  HAOSafe.clear(host);
  const cards = (data.jobCards || []).slice();
  if (!cards.length) { HAOSafe.setHTML(host, '<p class="empty-note">No job cards in the dataset.</p>'); return; }

  if (opts.groupFilter) {
    // Keep cards where the group is primary OR supporting.
    for (let i = cards.length - 1; i >= 0; i--) {
      const c = cards[i];
      if (c.primaryGroup !== opts.groupFilter && !(c.supportingGroups || []).includes(opts.groupFilter)) {
        cards.splice(i, 1);
      }
    }
  }
  if (!cards.length) { HAOSafe.setHTML(host, '<p class="empty-note">No job cards involve that expert group.</p>'); return; }

  // Axis extent from all parsed dates.
  const all = [];
  cards.forEach(c => (c.workProgrammeElements || []).forEach(w => {
    ['delivery', 'effective', 'applicability'].forEach(k => { const p = parseIcaoDate(w[k]); if (p) all.push(p.frac); });
  }));
  const y0 = Math.floor(Math.min(...all, 2025.0));
  const y1 = Math.ceil(Math.max(...all, 2029.0));

  const groupName = id => (data.expertGroups || []).find(g => g.id === id)?.name || id;
  const pct = f => ((f - y0) / (y1 - y0)) * 100;

  // Year ruler
  let ruler = '<div class="rm-ruler"><div class="rm-label"></div><div class="rm-lane">';
  for (let y = y0; y <= y1; y++) {
    ruler += `<span class="rm-year" style="left:${pct(y)}%">${y}</span>`;
  }
  const now = 2026 + (7 / 12);   // Aug 2026
  ruler += `<span class="rm-now" style="left:${pct(now)}%" title="Today"></span></div></div>`;

  const rows = cards.map(c => {
    const wpes = (c.workProgrammeElements || []).map(w => {
      const d = parseIcaoDate(w.delivery);
      const ap = parseIcaoDate(w.applicability);
      if (!d) return '';
      const left = pct(d.frac);
      const right = ap ? pct(ap.frac) : left;
      const barW = Math.max(1.2, right - left);
      return `<div class="rm-item" style="left:${left}%;width:${barW}%;background:${statusColour(w.status)}"
                   title="${w.wpe} — ${w.description}\n\nStatus: ${w.status}\nDelivery: ${w.delivery}${w.effective ? '\nEffective: ' + w.effective : ''}${w.applicability ? '\nApplicability: ' + w.applicability : ''}">
                <span class="rm-item-lbl">${w.wpe} · ${w.delivery}</span>
              </div>`;
    }).join('');

    const gapCount = (c.addressesGaps || []).length;
    return `<div class="rm-row" data-jc="${c.id}">
      <div class="rm-label">
        <strong>${c.id}${c.idProvisional ? ' <em class="rm-prov">provisional</em>' : ''}</strong>
        <span>${c.title}</span>
        <span class="rm-meta">${groupName(c.primaryGroup)} · <span style="color:${statusColour(c.status)}">${c.status}</span> · ${gapCount} gap${gapCount === 1 ? '' : 's'}</span>
      </div>
      <div class="rm-lane">${wpes}</div>
    </div>`;
  }).join('');

  HAOSafe.setHTML(host, ruler + rows +
    `<div class="heat-key" style="margin-top:1rem"><span style="margin-right:.3rem">Element status:</span>` +
    Object.entries(STATUS_COLOUR).map(([k, v]) => `<i style="background:${v}"></i><span>${k}</span>`).join('') +
    `</div>`);

  host.querySelectorAll('.rm-row').forEach(r => {
    r.addEventListener('click', () => opts.onCard && opts.onCard(cards.find(c => c.id === r.dataset.jc)));
  });
}

/* ---- coverage table ---------------------------------------------------- */
function renderCoverage(host, data, opts = {}) {
  const idx = buildCoverage(data);
  let rows = Object.values(idx);

  if (opts.onlyUncovered) rows = rows.filter(r => r.best === 'none');
  rows.sort((a, b) => {
    const rank = { none: 0, framing: 1, partial: 2, resolving: 3 };
    if (rank[a.best] !== rank[b.best]) return rank[a.best] - rank[b.best];
    return b.gap.severity - a.gap.severity;
  });

  const uncovered = Object.values(idx).filter(r => r.best === 'none');
  const criticalUncovered = uncovered.filter(r => r.gap.severity >= 4);

  const summary = `
    <div class="cov-summary">
      <div class="kpi"><span class="kpi-n">${Object.keys(idx).length}</span><span class="kpi-l">gaps in register</span></div>
      <div class="kpi"><span class="kpi-n" style="color:${COVERAGE_META.resolving.colour}">${Object.values(idx).filter(r => r.best === 'resolving').length}</span><span class="kpi-l">resolving</span></div>
      <div class="kpi"><span class="kpi-n" style="color:${COVERAGE_META.partial.colour}">${Object.values(idx).filter(r => r.best === 'partial').length}</span><span class="kpi-l">partial</span></div>
      <div class="kpi"><span class="kpi-n" style="color:${COVERAGE_META.framing.colour}">${Object.values(idx).filter(r => r.best === 'framing').length}</span><span class="kpi-l">framing only</span></div>
      <div class="kpi"><span class="kpi-n" style="color:${COVERAGE_META.none.colour}">${uncovered.length}</span><span class="kpi-l">no job card</span></div>
    </div>
    ${criticalUncovered.length ? `<div class="cov-alert">
      <strong>${criticalUncovered.length} gap${criticalUncovered.length === 1 ? '' : 's'} at severity 4 or above ${criticalUncovered.length === 1 ? 'has' : 'have'} no job card behind ${criticalUncovered.length === 1 ? 'it' : 'them'}.</strong>
      ${criticalUncovered.map(r => r.gap.title).join('; ')}.
      These are unfunded liabilities in the work programme: the requirement is recognised but no expert group is tasked to deliver against it.
    </div>` : ''}`;

  const groupName = id => (data.expertGroups || []).find(g => g.id === id)?.name || id;

  const table = `<table class="grid">
    <thead><tr>
      <th style="width:58px">Sev</th>
      <th style="width:110px">Coverage</th>
      <th>Gap</th>
      <th style="width:230px">Job cards</th>
      <th style="width:110px">Earliest delivery</th>
    </tr></thead><tbody>
    ${rows.map(r => {
      const m = COVERAGE_META[r.best];
      return `<tr>
        <td><span class="sev" style="background:${window.HAOHeat.heatColour(r.gap.severity)}">${r.gap.severity}</span></td>
        <td><span class="pill" style="border-color:${m.colour};color:${m.colour}">${m.label}</span></td>
        <td><strong>${r.gap.title}</strong><br><span class="muted">${r.gap.instrument}${r.gap.reference ? ' · ' + r.gap.reference : ''}</span>
            ${r.best === 'none' ? `<br><span style="color:${COVERAGE_META.none.colour};font-size:.78rem">Suggested owner${(r.gap.owningGroups || []).length === 1 ? '' : 's'}: ${(r.gap.owningGroups || []).map(groupName).join(', ') || 'unassigned'}</span>` : ''}</td>
        <td>${r.entries.length
              ? r.entries.map(e => `<span class="pill accent" title="${e.jobCard.title}">${e.jobCard.id}</span><span class="pill" style="border-color:${COVERAGE_META[e.coverage].colour};color:${COVERAGE_META[e.coverage].colour}">${COVERAGE_META[e.coverage].label}</span>`).join('<br>')
              : `<span class="muted">None</span>`}</td>
        <td>${r.earliest ? `<strong style="color:var(--accent)">${r.earliest.label}</strong>` : '<span class="muted">—</span>'}</td>
      </tr>`;
    }).join('')}
    </tbody></table>`;

  HAOSafe.setHTML(host, summary + table);
}

/* ---- job card detail --------------------------------------------------- */
function jobCardDetailHTML(c, data) {
  if (!c) return '<p class="muted">Select a job card to see its work programme elements, dependencies and the gaps it addresses.</p>';
  const groupName = id => (data.expertGroups || []).find(g => g.id === id)?.name || id;
  const gapTitle  = id => (data.provisionGaps || []).find(g => g.id === id)?.title || id;

  return `
    <h3>${c.id}${c.idProvisional ? ' <span class="pill" style="border-color:var(--warn);color:var(--warn)">reference not yet assigned</span>' : ''}</h3>
    <p style="font-size:.95rem;font-weight:600;margin-bottom:.5rem">${c.title}</p>
    <div class="kv"><span class="k">Primary expert group</span><span class="v">${groupName(c.primaryGroup)}</span></div>
    <div class="kv"><span class="k">Status / priority</span><span class="v"><span style="color:${statusColour(c.status)};font-weight:600">${c.status}</span> · ${c.priority || '—'}</span></div>
    <div class="kv"><span class="k">Source</span><span class="v">${c.source || '—'}</span></div>
    <div class="kv"><span class="k">Problem statement</span><span class="v">${c.problemStatement || '—'}</span></div>
    ${c.ganpGaspLink ? `<div class="kv"><span class="k">GANP / GASP link</span><span class="v">${c.ganpGaspLink}</span></div>` : ''}
    ${c.proposedMetric ? `<div class="kv"><span class="k">Proposed metric</span><span class="v">${c.proposedMetric}</span></div>` : ''}
    <div class="kv"><span class="k">Supporting groups</span><span class="v">${(c.supportingGroups || []).map(g => `<span class="pill">${groupName(g)}</span>`).join('') || '—'}</span></div>
    ${(c.interdependencies || []).length ? `<div class="kv"><span class="k">Interdependencies</span><span class="v">${c.interdependencies.map(i => `<span class="pill accent">${i}</span>`).join('')}</span></div>` : ''}

    <h4 style="font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text-3);margin:1rem 0 .4rem">Work programme elements</h4>
    <table class="grid" style="font-size:.78rem">
      <thead><tr><th style="width:72px">WPE</th><th>Description</th><th style="width:84px">Status</th><th style="width:72px">Delivery</th><th style="width:80px">Applicability</th></tr></thead>
      <tbody>${(c.workProgrammeElements || []).map(w => `<tr>
        <td><strong>${w.wpe}</strong><br><span class="muted">${w.documentAffected || ''}</span></td>
        <td>${w.description}</td>
        <td><span style="color:${statusColour(w.status)};font-weight:600">${w.status}</span></td>
        <td><strong>${w.delivery || '—'}</strong></td>
        <td>${w.applicability || '—'}</td>
      </tr>`).join('')}</tbody>
    </table>

    ${(c.expectedBenefits || []).length ? `<h4 style="font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text-3);margin:1rem 0 .4rem">Expected benefits</h4>
      <ul class="tight-list">${c.expectedBenefits.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}

    <h4 style="font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text-3);margin:1rem 0 .4rem">Gaps addressed</h4>
    ${(c.addressesGaps || []).length
      ? c.addressesGaps.map(a => `<div class="gap-mini" style="border-left-color:${COVERAGE_META[a.coverage].colour};cursor:default">
          <strong>${gapTitle(a.gapId)}</strong>
          <span class="gm-inst">${COVERAGE_META[a.coverage].label} — ${COVERAGE_META[a.coverage].note}</span></div>`).join('')
      : '<p class="empty-note">None recorded.</p>'}

    ${c.notes ? `<p class="muted" style="margin-top:.9rem;padding:.6rem .75rem;background:var(--panel-2);border-left:3px solid var(--accent);border-radius:var(--radius-sm)">${c.notes}</p>` : ''}
    ${(c.references || []).length ? `<p class="muted" style="margin-top:.6rem"><em>References:</em> ${c.references.join('; ')}</p>` : ''}`;
}

window.HAORoadmap = {
  renderRoadmap, renderCoverage, jobCardDetailHTML,
  buildCoverage, parseIcaoDate, statusColour, COVERAGE_META
};
