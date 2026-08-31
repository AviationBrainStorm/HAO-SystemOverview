/* ============================================================
   planview.js — geographic plan view for cross-FIR transit.

   Complements the altitude profile. The profile answers "what
   does this vehicle cross vertically"; the plan view answers
   "whose airspace is it in, and who has to authorise it".

   Deliberate design choice: the track is coloured by ALTITUDE.
   A plan view of HAO without altitude is misleading, because
   whether a given point is a regulatory problem depends almost
   entirely on what flight level it is at.
   ============================================================ */

const PNS = 'http://www.w3.org/2000/svg';

function pel(name, attrs = {}, text) {
  const n = document.createElementNS(PNS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (text != null) n.textContent = text;
  return n;
}
function pvar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/* ---- altitude → colour band -------------------------------------------
   Bands mirror referenceAirspace so the two views agree visually. */
const ALT_BANDS = [
  { max: 18000,  colour: '#7a8ca3', label: 'Surface–FL180' },
  { max: 41000,  colour: '#4fa3e0', label: 'FL180–FL410 (RVSM)' },
  { max: 51000,  colour: '#6fd3c7', label: 'FL410–FL510' },
  { max: 60000,  colour: '#f2a541', label: 'FL510–FL600 (transition)' },
  { max: 1e9,    colour: '#e0654f', label: 'FL600+ (HAO core)' }
];
function altColour(ft) {
  for (const b of ALT_BANDS) if (ft <= b.max) return b.colour;
  return ALT_BANDS[ALT_BANDS.length - 1].colour;
}

/* ---- projection --------------------------------------------------------
   Equirectangular. Honest about being schematic; distortion at the poles
   is irrelevant because HAO tracks in this dataset are mid-latitude. */
function makeProjection(bounds, w, h, pad) {
  const [lonMin, latMin, lonMax, latMax] = bounds;
  const sx = (w - pad * 2) / (lonMax - lonMin || 1);
  const sy = (h - pad * 2) / (latMax - latMin || 1);
  const s = Math.min(sx, sy);
  const cx = (lonMin + lonMax) / 2, cy = (latMin + latMax) / 2;
  return {
    scale: s,
    x: lon => w / 2 + (lon - cx) * s,
    y: lat => h / 2 - (lat - cy) * s
  };
}

function trackBounds(wps, marginDeg) {
  const lons = wps.map(p => p.lon), lats = wps.map(p => p.lat);
  const m = marginDeg;
  return [
    Math.max(-180, Math.min(...lons) - m),
    Math.max(-85,  Math.min(...lats) - m),
    Math.min(180,  Math.max(...lons) + m),
    Math.min(85,   Math.max(...lats) + m)
  ];
}

/**
 * Render the plan view.
 * @param {SVGElement} svg
 * @param {Object} scenario
 * @param {Object} vehicle
 * @param {Array}  firRegions
 * @param {Object} opts { showFIR, fitMode: 'track'|'world', tipEl }
 */
function renderPlanView(svg, scenario, vehicle, firRegions, opts = {}) {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const gt = scenario && scenario.groundTrack;
  if (!gt || !gt.waypoints || gt.waypoints.length < 2) {
    svg.appendChild(pel('text', {
      x: 20, y: 40, 'font-size': '13', fill: pvar('--text-3')
    }, 'No ground track defined for this scenario.'));
    return;
  }

  const rect = svg.getBoundingClientRect();
  const W = Math.max(rect.width || 900, 480);
  const H = Math.max(rect.height || 520, 340);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

  const wps = gt.waypoints;
  const bounds = opts.fitMode === 'world'
    ? [-180, -60, 180, 78]
    : trackBounds(wps, Math.max(14, (Math.max(...wps.map(p => p.lon)) - Math.min(...wps.map(p => p.lon))) * 0.28));
  const proj = makeProjection(bounds, W, H, 26);

  // ---- ocean backdrop --------------------------------------------------
  svg.appendChild(pel('rect', {
    x: 0, y: 0, width: W, height: H,
    fill: pvar('--chart-band'), opacity: '.5'
  }));

  // ---- graticule -------------------------------------------------------
  const gGrat = pel('g', { class: 'graticule' });
  const lonStep = (bounds[2] - bounds[0]) > 120 ? 30 : (bounds[2] - bounds[0]) > 50 ? 15 : 5;
  const latStep = (bounds[3] - bounds[1]) > 80 ? 20 : (bounds[3] - bounds[1]) > 30 ? 10 : 5;
  for (let lon = Math.ceil(bounds[0] / lonStep) * lonStep; lon <= bounds[2]; lon += lonStep) {
    const x = proj.x(lon);
    gGrat.appendChild(pel('line', { x1: x, y1: 0, x2: x, y2: H, stroke: pvar('--chart-grid'), 'stroke-width': '.5', opacity: '.6' }));
    gGrat.appendChild(pel('text', { x: x + 3, y: H - 6, 'font-size': '8.5', fill: pvar('--text-3') },
      `${Math.abs(lon)}°${lon < 0 ? 'W' : lon > 0 ? 'E' : ''}`));
  }
  for (let lat = Math.ceil(bounds[1] / latStep) * latStep; lat <= bounds[3]; lat += latStep) {
    const y = proj.y(lat);
    gGrat.appendChild(pel('line', { x1: 0, y1: y, x2: W, y2: y, stroke: pvar('--chart-grid'), 'stroke-width': '.5', opacity: '.6' }));
    gGrat.appendChild(pel('text', { x: 4, y: y - 3, 'font-size': '8.5', fill: pvar('--text-3') },
      `${Math.abs(lat)}°${lat < 0 ? 'S' : lat > 0 ? 'N' : ''}`));
  }
  svg.appendChild(gGrat);

  // ---- landmasses ------------------------------------------------------
  if (window.HAO_WORLD) {
    const gLand = pel('g', { class: 'land' });
    window.HAO_WORLD.paths.forEach(d => {
      // Path data is raw lon,lat — re-project each vertex.
      const pts = d.slice(1, -1).split(/[ML]/).filter(Boolean);
      let out = '';
      pts.forEach((pt, i) => {
        const [lon, lat] = pt.split(',').map(Number);
        out += (i === 0 ? 'M' : 'L') + proj.x(lon).toFixed(1) + ',' + proj.y(lat).toFixed(1);
      });
      if (out) gLand.appendChild(pel('path', {
        d: out + 'Z', fill: pvar('--panel-2'),
        stroke: pvar('--line'), 'stroke-width': '.6', opacity: '.95'
      }));
    });
    svg.appendChild(gLand);
  }

  // ---- FIR regions -----------------------------------------------------
  if (opts.showFIR !== false) {
    const gFir = pel('g', { class: 'firs' });
    (firRegions || []).forEach(f => {
      const [a, b, c, dd] = f.bbox;
      if (c < a) return;                            // skip antimeridian-wrapping boxes
      if (c < bounds[0] || a > bounds[2] || dd < bounds[1] || b > bounds[3]) return;
      const x1 = proj.x(a), x2 = proj.x(c), y1 = proj.y(dd), y2 = proj.y(b);
      const stroke = f.type === 'highSeas' ? pvar('--violet')
                   : f.type === 'oceanic'  ? pvar('--accent-2')
                                           : pvar('--accent');
      const g = pel('g', { class: 'hitp', style: 'cursor:pointer' });
      g.appendChild(pel('rect', {
        x: x1, y: y1, width: Math.max(1, x2 - x1), height: Math.max(1, y2 - y1),
        fill: stroke, 'fill-opacity': '.05',
        stroke, 'stroke-width': '1', 'stroke-dasharray': f.type === 'sovereign' ? '0' : '5 3',
        'stroke-opacity': '.55'
      }));
      if (x2 - x1 > 54) {
        g.appendChild(pel('text', {
          x: x1 + 5, y: y1 + 12, 'font-size': '9', fill: stroke, opacity: '.9', 'font-weight': '600'
        }, f.name));
      }
      g.dataset.tip = `<strong>${f.name}</strong>${f.type === 'highSeas' ? 'High seas — no sovereign authority' : f.type === 'oceanic' ? 'Oceanic FIR' : 'Sovereign airspace'}${f.note ? '<br><br>' + f.note : ''}`;
      gFir.appendChild(g);
    });
    svg.appendChild(gFir);
  }

  // ---- station area ----------------------------------------------------
  if (gt.stationArea) {
    const sa = gt.stationArea;
    const rPx = (sa.radiusKm / 111) * proj.scale;
    svg.appendChild(pel('circle', {
      cx: proj.x(sa.lon), cy: proj.y(sa.lat), r: Math.max(6, rPx),
      fill: vehicle?.colour || pvar('--accent'), 'fill-opacity': '.10',
      stroke: vehicle?.colour || pvar('--accent'), 'stroke-width': '1.2',
      'stroke-dasharray': '6 4', 'stroke-opacity': '.7'
    }));
    svg.appendChild(pel('text', {
      x: proj.x(sa.lon), y: proj.y(sa.lat) - Math.max(6, rPx) - 6,
      'text-anchor': 'middle', 'font-size': '9.5',
      fill: vehicle?.colour || pvar('--accent'), 'font-weight': '600'
    }, `Service area · ${sa.radiusKm} km radius`));
  }

  // ---- uncertainty cone (contingency scenarios) ------------------------
  if (gt.uncertaintyGrowth) {
    const gU = pel('g', { class: 'uncertainty' });
    wps.forEach((p, i) => {
      if (i === 0) return;
      const grow = (i / (wps.length - 1)) * 1.5 + 0.25;   // degrees, widening with time
      gU.appendChild(pel('circle', {
        cx: proj.x(p.lon), cy: proj.y(p.lat), r: grow * proj.scale,
        fill: pvar('--danger'), 'fill-opacity': '.07',
        stroke: pvar('--danger'), 'stroke-width': '.8',
        'stroke-dasharray': '3 3', 'stroke-opacity': '.45'
      }));
    });
    svg.appendChild(gU);
  }

  // ---- ground track, coloured by altitude ------------------------------
  const gTrack = pel('g', { class: 'track' });
  for (let i = 0; i < wps.length - 1; i++) {
    const a = wps[i], b = wps[i + 1];
    // Sub-divide so the colour gradient reads as continuous.
    const STEPS = 14;
    for (let k = 0; k < STEPS; k++) {
      const t0 = k / STEPS, t1 = (k + 1) / STEPS;
      const lon0 = a.lon + (b.lon - a.lon) * t0, lat0 = a.lat + (b.lat - a.lat) * t0;
      const lon1 = a.lon + (b.lon - a.lon) * t1, lat1 = a.lat + (b.lat - a.lat) * t1;
      const alt = a.altFt + (b.altFt - a.altFt) * ((t0 + t1) / 2);
      gTrack.appendChild(pel('line', {
        x1: proj.x(lon0), y1: proj.y(lat0), x2: proj.x(lon1), y2: proj.y(lat1),
        stroke: altColour(alt), 'stroke-width': '3.2', 'stroke-linecap': 'round', opacity: '.92'
      }));
    }
  }
  svg.appendChild(gTrack);

  // ---- FIR crossing markers -------------------------------------------
  const firName = id => (firRegions || []).find(f => f.id === id)?.name || id;
  (gt.firCrossings || []).forEach(c => {
    const p = wps[c.atIndex];
    if (!p) return;
    const x = proj.x(p.lon), y = proj.y(p.lat);
    const col = c.type === 'regimeChange' ? pvar('--warn')
              : c.type === 'toHighSeas'   ? pvar('--violet')
                                          : pvar('--danger');
    const g = pel('g', { class: 'hitp', style: 'cursor:pointer' });
    g.appendChild(pel('circle', { cx: x, cy: y, r: 14, fill: 'transparent' }));
    g.appendChild(pel('path', {
      d: `M${x - 8},${y - 8}L${x + 8},${y + 8}M${x + 8},${y - 8}L${x - 8},${y + 8}`,
      stroke: col, 'stroke-width': '2.4', 'stroke-linecap': 'round'
    }));
    g.appendChild(pel('circle', { cx: x, cy: y, r: 11, fill: 'none', stroke: col, 'stroke-width': '1.2', opacity: '.55' }));
    g.dataset.tip = `<strong>${c.type === 'regimeChange' ? 'Regime change' : 'FIR / boundary crossing'}</strong>` +
                    `${firName(c.from)} → ${firName(c.to)}${c.note ? '<br><br>' + c.note : ''}`;
    gTrack.appendChild(g);
  });

  // ---- waypoints -------------------------------------------------------
  const gW = pel('g', { class: 'wps' });
  wps.forEach((p, i) => {
    const x = proj.x(p.lon), y = proj.y(p.lat);
    const g = pel('g', { class: 'hitp', style: 'cursor:pointer' });
    g.appendChild(pel('circle', { cx: x, cy: y, r: 13, fill: 'transparent' }));
    g.appendChild(pel('circle', {
      cx: x, cy: y, r: 5, fill: pvar('--panel'),
      stroke: altColour(p.altFt), 'stroke-width': '2.4'
    }));
    g.appendChild(pel('text', {
      x, y: y + 2.5, 'text-anchor': 'middle', 'font-size': '7',
      'font-weight': '700', fill: altColour(p.altFt)
    }, String(i + 1)));
    if (p.label) {
      const dx = i === wps.length - 1 ? -9 : 9;
      const anchor = i === wps.length - 1 ? 'end' : 'start';
      g.appendChild(pel('text', {
        x: x + dx, y: y - 8, 'text-anchor': anchor,
        'font-size': '9.5', 'font-weight': '600', fill: pvar('--text')
      }, p.label));
      g.appendChild(pel('text', {
        x: x + dx, y: y + 3, 'text-anchor': anchor,
        'font-size': '8.5', fill: pvar('--text-3')
      }, window.HAOChart.ftLabel(p.altFt)));
    }
    g.dataset.tip = `<strong>${p.label || 'Point ' + (i + 1)}</strong>` +
      `${p.lat.toFixed(1)}°${p.lat < 0 ? 'S' : 'N'}, ${Math.abs(p.lon).toFixed(1)}°${p.lon < 0 ? 'W' : 'E'}` +
      `<br>${window.HAOChart.ftLabel(p.altFt)}${p.note ? '<br><br>' + p.note : ''}`;
    gW.appendChild(g);
  });
  svg.appendChild(gW);

  // ---- tooltips --------------------------------------------------------
  const tipEl = opts.tipEl;
  if (tipEl) {
    const wrap = svg.parentElement;
    svg.querySelectorAll('.hitp').forEach(node => {
      node.addEventListener('mouseenter', () => { HAOSafe.setHTML(tipEl, node.dataset.tip); tipEl.hidden = false; });
      node.addEventListener('mousemove', e => {
        const r = wrap.getBoundingClientRect();
        let lx = e.clientX - r.left + 14, ly = e.clientY - r.top + 14;
        if (lx + 300 > r.width)  lx = e.clientX - r.left - 296;
        if (ly + 130 > r.height) ly = e.clientY - r.top - 120;
        tipEl.style.left = lx + 'px';
        tipEl.style.top = Math.max(0, ly) + 'px';
      });
      node.addEventListener('mouseleave', () => { tipEl.hidden = true; });
    });
  }
}

function planViewLegend() {
  return ALT_BANDS.map(b => ({ colour: b.colour, label: b.label }));
}

/** Jurisdictional summary for the side panel. */
function jurisdictionSummary(scenario, firRegions) {
  const gt = scenario?.groundTrack;
  if (!gt) return '<p class="empty-note">No ground track defined.</p>';
  const firName = id => (firRegions || []).find(f => f.id === id)?.name || id;
  const firType = id => (firRegions || []).find(f => f.id === id)?.type || '';
  const crossings = gt.firCrossings || [];

  const involved = new Set();
  crossings.forEach(c => { involved.add(c.from); involved.add(c.to); });

  const sovereign = [...involved].filter(i => firType(i) === 'sovereign');
  const highSeas  = [...involved].filter(i => firType(i) === 'highSeas');

  return `
    <div class="kv"><span class="k">Boundary crossings</span>
      <span class="v">${crossings.length || 'None in this phase'}</span></div>
    <div class="kv"><span class="k">Sovereign States involved</span>
      <span class="v">${sovereign.length ? sovereign.map(firName).join(', ') : 'Single jurisdiction'}</span></div>
    ${highSeas.length ? `<div class="kv"><span class="k">High seas segment</span>
      <span class="v">Yes — no sovereign authority, but deconfliction coverage is still required.</span></div>` : ''}
    ${gt.dueRegard ? `<div class="kv"><span class="k">Due regard</span>
      <span class="v">Identity, position and intent withheld; cooperative data consumed one-way.</span></div>` : ''}
    ${crossings.length ? `<h4 style="font-size:.67rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin:.7rem 0 .35rem">Crossings</h4>
      ${crossings.map(c => `<div class="gap-mini" style="border-left-color:${c.type === 'regimeChange' ? 'var(--warn)' : 'var(--danger)'};cursor:default">
        <strong>${firName(c.from)} → ${firName(c.to)}</strong>
        <span class="gm-inst">${c.note || c.type}</span></div>`).join('')}` : ''}
    ${gt.note ? `<p class="muted" style="margin-top:.6rem">${gt.note}</p>` : ''}`;
}

window.HAOPlan = { renderPlanView, planViewLegend, jurisdictionSummary, altColour, ALT_BANDS };
