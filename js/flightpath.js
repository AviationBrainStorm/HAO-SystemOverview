/* ============================================================
   flightpath.js — renders the design flight path as an SVG
   altitude/range profile with airspace bands, other traffic
   layers, crossing encounters and annotated waypoints.

   This is the centrepiece of the display. It is deliberately
   dependency-free: everything is built with createElementNS so
   the prototype runs from file:// with no build step.
   ============================================================ */

const NS = 'http://www.w3.org/2000/svg';

function el(name, attrs = {}, text) {
  const n = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (text != null) n.textContent = text;
  return n;
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/* Altitude scale.
   A linear scale wastes most of the canvas on empty stratosphere while
   compressing the 0–41 000 ft band where every conflict with conventional
   traffic actually happens. A piecewise scale gives the lower airspace a
   disproportionate share of the vertical extent, which is where the
   integration problem lives. */
function makeAltScale(minFt, maxFt, y0, y1) {
  const KNEE = 45000;              // ft
  const KNEE_SHARE = 0.55;         // fraction of pixel height given to <= KNEE
  const lo = Math.max(0, minFt);
  const hi = Math.max(maxFt, lo + 1000);
  const H = y1 - y0;

  return function scale(ft) {
    const f = Math.min(Math.max(ft, lo), hi);
    let frac;
    if (hi <= KNEE) {
      frac = (f - lo) / (hi - lo);
    } else if (f <= KNEE) {
      const loClamped = Math.min(lo, KNEE);
      frac = ((f - loClamped) / (KNEE - loClamped || 1)) * KNEE_SHARE;
    } else {
      frac = KNEE_SHARE + ((f - KNEE) / (hi - KNEE)) * (1 - KNEE_SHARE);
    }
    return y1 - frac * H;          // invert: high altitude = small y
  };
}

function ftLabel(ft) {
  if (ft === 0) return 'SFC';
  if (ft < 18000) return (ft / 1000).toFixed(0) + 'k';
  return 'FL' + Math.round(ft / 100);
}

function riskColour(risk) {
  if (risk === 'high') return cssVar('--danger');
  if (risk === 'medium') return cssVar('--warn');
  return cssVar('--text-3');
}

function densityOpacity(d) {
  return d === 'high' ? 0.20 : d === 'medium' ? 0.13 : 0.07;
}

/**
 * Render a scenario into an <svg> element.
 * @param {SVGElement} svg      target element
 * @param {Object} scenario     scenario record
 * @param {Object} vehicle      vehicle class record
 * @param {Array}  bands        referenceAirspace.bands
 * @param {HTMLElement} tipEl   tooltip container
 */
function renderFlightPath(svg, scenario, vehicle, bands, tipEl) {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  if (!scenario) return;

  const rect = svg.getBoundingClientRect();
  const W = Math.max(rect.width || svg.clientWidth || 900, 480);
  const H = Math.max(rect.height || svg.clientHeight || 460, 320);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'none');

  const M = { t: 22, r: 26, b: 40, l: 62 };
  const x0 = M.l, x1 = W - M.r, y0 = M.t, y1 = H - M.b;

  // ---- vertical extent -------------------------------------------------
  const traj = (scenario.trajectory || []).slice().sort((a, b) => a.t - b.t);
  const alts = traj.map(p => p.altFt);
  (scenario.otherTraffic || []).forEach(o => {
    if (o.type === 'band') { alts.push(o.fromFt, o.toFt); }
    else if (o.altFt != null) alts.push(o.altFt);
  });
  let minFt = scenario.altitudeBandFt ? scenario.altitudeBandFt[0] : Math.min(...alts);
  let maxFt = scenario.altitudeBandFt ? scenario.altitudeBandFt[1] : Math.max(...alts);
  minFt = Math.min(minFt, Math.min(...alts));
  maxFt = Math.max(maxFt, Math.max(...alts));
  const pad = (maxFt - minFt) * 0.06;
  minFt = Math.max(0, minFt - pad);
  maxFt = maxFt + pad;

  const yAlt = makeAltScale(minFt, maxFt, y0, y1);
  const xT = t => x0 + t * (x1 - x0);

  const gDefs = el('defs');
  const grad = el('linearGradient', { id: 'pathGrad', x1: '0', y1: '0', x2: '1', y2: '0' });
  grad.appendChild(el('stop', { offset: '0%',  'stop-color': vehicle?.colour || cssVar('--accent'), 'stop-opacity': '.55' }));
  grad.appendChild(el('stop', { offset: '100%', 'stop-color': vehicle?.colour || cssVar('--accent'), 'stop-opacity': '1' }));
  gDefs.appendChild(grad);
  const glow = el('filter', { id: 'softGlow', x: '-40%', y: '-40%', width: '180%', height: '180%' });
  glow.appendChild(el('feGaussianBlur', { stdDeviation: '3.5', result: 'b' }));
  const merge = el('feMerge');
  merge.appendChild(el('feMergeNode', { in: 'b' }));
  merge.appendChild(el('feMergeNode', { in: 'SourceGraphic' }));
  glow.appendChild(merge);
  gDefs.appendChild(glow);
  svg.appendChild(gDefs);

  // ---- reference airspace bands ---------------------------------------
  const gBands = el('g', { class: 'bands' });
  bands.forEach(b => {
    if (b.toFt < minFt || b.fromFt > maxFt) return;
    const yTop = yAlt(Math.min(b.toFt, maxFt));
    const yBot = yAlt(Math.max(b.fromFt, minFt));
    if (yBot - yTop < 1.5) return;
    const isHAO = b.id === 'BAND-HAO' || b.id === 'BAND-TRANSITION';
    gBands.appendChild(el('rect', {
      x: x0, y: yTop, width: x1 - x0, height: yBot - yTop,
      fill: isHAO ? cssVar('--chart-band') : cssVar('--chart-band-2'),
      opacity: isHAO ? '1' : '.55'
    }));
    gBands.appendChild(el('line', {
      x1: x0, x2: x1, y1: yTop, y2: yTop,
      stroke: cssVar('--chart-grid'), 'stroke-width': '1', 'stroke-dasharray': '3 4'
    }));
    if (yBot - yTop > 22) {
      gBands.appendChild(el('text', {
        x: x1 - 6, y: yTop + 13, 'text-anchor': 'end',
        'font-size': '9.5', fill: cssVar('--text-3'), 'letter-spacing': '.04em'
      }, b.label.toUpperCase()));
    }
  });
  svg.appendChild(gBands);

  // ---- other traffic bands --------------------------------------------
  const gTraffic = el('g', { class: 'traffic' });
  (scenario.otherTraffic || []).filter(o => o.type === 'band').forEach(o => {
    const yTop = yAlt(Math.min(o.toFt, maxFt));
    const yBot = yAlt(Math.max(o.fromFt, minFt));
    if (yBot - yTop < 1) return;
    gTraffic.appendChild(el('rect', {
      x: x0, y: yTop, width: x1 - x0, height: yBot - yTop,
      fill: cssVar('--text-2'), opacity: densityOpacity(o.density)
    }));
    // hatching conveys "occupied by other users" without competing with the path
    const step = 16;
    for (let hx = x0; hx < x1; hx += step) {
      gTraffic.appendChild(el('line', {
        x1: hx, y1: yBot, x2: Math.min(hx + (yBot - yTop), x1), y2: Math.max(yBot - (x1 - hx), yTop),
        stroke: cssVar('--text-3'), 'stroke-width': '.5', opacity: densityOpacity(o.density) * 1.6
      }));
    }
    gTraffic.appendChild(el('text', {
      x: x0 + 8, y: yTop + 12, 'font-size': '9.5',
      fill: cssVar('--text-2'), opacity: '.85'
    }, o.label));
  });
  svg.appendChild(gTraffic);

  // ---- axes ------------------------------------------------------------
  const gAxis = el('g', { class: 'axes' });
  const ticks = [0, 10000, 18000, 29000, 41000, 51000, 60000, 70000, 80000, 100000]
    .filter(v => v >= minFt - 1 && v <= maxFt + 1);
  ticks.forEach(v => {
    const y = yAlt(v);
    gAxis.appendChild(el('line', { x1: x0 - 5, x2: x0, y1: y, y2: y, stroke: cssVar('--text-3'), 'stroke-width': '1' }));
    gAxis.appendChild(el('text', {
      x: x0 - 9, y: y + 3.5, 'text-anchor': 'end', 'font-size': '10', fill: cssVar('--text-2')
    }, ftLabel(v)));
  });
  gAxis.appendChild(el('line', { x1: x0, x2: x0, y1: y0, y2: y1, stroke: cssVar('--line'), 'stroke-width': '1' }));
  gAxis.appendChild(el('line', { x1: x0, x2: x1, y1: y1, y2: y1, stroke: cssVar('--line'), 'stroke-width': '1' }));
  gAxis.appendChild(el('text', {
    x: x0 - 46, y: (y0 + y1) / 2, 'font-size': '10', fill: cssVar('--text-3'),
    transform: `rotate(-90 ${x0 - 46} ${(y0 + y1) / 2})`, 'text-anchor': 'middle'
  }, 'PRESSURE ALTITUDE'));
  gAxis.appendChild(el('text', {
    x: (x0 + x1) / 2, y: y1 + 30, 'text-anchor': 'middle', 'font-size': '10', fill: cssVar('--text-3')
  }, 'PROGRESS THROUGH THE DESIGN PHASE  →'));
  svg.appendChild(gAxis);

  // ---- crossing encounters --------------------------------------------
  const gCross = el('g', { class: 'crossings' });
  (scenario.otherTraffic || []).filter(o => o.type === 'crossing').forEach(o => {
    const cx = xT(o.atT), cy = yAlt(o.altFt);
    const col = riskColour(o.conflictRisk);
    // a short opposing vector conveys "traffic passing through this point"
    gCross.appendChild(el('line', {
      x1: cx - 26, y1: cy + 9, x2: cx + 26, y2: cy - 9,
      stroke: col, 'stroke-width': '1.6', 'stroke-dasharray': '5 3', opacity: '.85'
    }));
    const marker = el('g', { class: 'hit', style: 'cursor:pointer' });
    marker.appendChild(el('circle', { cx, cy, r: 12, fill: 'transparent' }));
    marker.appendChild(el('circle', { cx, cy, r: 5.5, fill: col, opacity: '.25' }));
    marker.appendChild(el('circle', { cx, cy, r: 3.2, fill: col }));
    marker.dataset.tip = `<strong>${o.label}</strong>Conflict risk: ${o.conflictRisk || 'n/a'}<br>Altitude: ${ftLabel(o.altFt)}`;
    gCross.appendChild(marker);
  });
  svg.appendChild(gCross);

  // ---- the design flight path -----------------------------------------
  const pts = traj.map(p => [xT(p.t), yAlt(p.altFt)]);
  if (pts.length >= 2) {
    // Catmull–Rom to cubic Bézier: the profile reads as a flown trajectory
    // rather than a series of straight legs.
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i], p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
    }
    const glowPath = el('path', {
      d, fill: 'none', stroke: vehicle?.colour || cssVar('--accent'),
      'stroke-width': '7', opacity: '.18', 'stroke-linecap': 'round', filter: 'url(#softGlow)'
    });
    svg.appendChild(glowPath);
    svg.appendChild(el('path', {
      d, fill: 'none', stroke: 'url(#pathGrad)', 'stroke-width': '2.8',
      'stroke-linecap': 'round', 'stroke-linejoin': 'round'
    }));
  }

  // ---- waypoints -------------------------------------------------------
  const gPts = el('g', { class: 'waypoints' });
  traj.forEach((p, i) => {
    const cx = xT(p.t), cy = yAlt(p.altFt);
    const g = el('g', { class: 'hit', style: 'cursor:pointer' });
    g.appendChild(el('circle', { cx, cy, r: 13, fill: 'transparent' }));
    g.appendChild(el('circle', {
      cx, cy, r: 5.4, fill: cssVar('--panel'),
      stroke: vehicle?.colour || cssVar('--accent'), 'stroke-width': '2.2'
    }));
    g.appendChild(el('text', {
      x: cx, y: cy + 2.6, 'text-anchor': 'middle', 'font-size': '7.5',
      'font-weight': '700', fill: vehicle?.colour || cssVar('--accent')
    }, String(i + 1)));

    if (p.label) {
      const above = i % 2 === 0;
      const ly = above ? cy - 16 : cy + 25;
      const anchor = p.t > 0.86 ? 'end' : p.t < 0.12 ? 'start' : 'middle';
      g.appendChild(el('text', {
        x: cx, y: ly, 'text-anchor': anchor, 'font-size': '9.5',
        'font-weight': '600', fill: cssVar('--text')
      }, p.label));
      g.appendChild(el('text', {
        x: cx, y: ly + 11, 'text-anchor': anchor, 'font-size': '8.5', fill: cssVar('--text-3')
      }, ftLabel(p.altFt)));
    }
    g.dataset.tip = `<strong>${p.label || 'Point ' + (i + 1)}</strong>${ftLabel(p.altFt)}${p.note ? '<br><br>' + p.note : ''}`;
    gPts.appendChild(g);
  });
  svg.appendChild(gPts);

  // ---- tooltip wiring --------------------------------------------------
  if (tipEl) {
    const wrap = svg.parentElement;
    svg.querySelectorAll('.hit').forEach(node => {
      node.addEventListener('mouseenter', e => {
        tipEl.innerHTML = node.dataset.tip;
        tipEl.hidden = false;
      });
      node.addEventListener('mousemove', e => {
        const r = wrap.getBoundingClientRect();
        let lx = e.clientX - r.left + 14;
        let ly = e.clientY - r.top + 14;
        if (lx + 300 > r.width) lx = e.clientX - r.left - 296;
        if (ly + 120 > r.height) ly = e.clientY - r.top - 110;
        tipEl.style.left = lx + 'px';
        tipEl.style.top = Math.max(0, ly) + 'px';
      });
      node.addEventListener('mouseleave', () => { tipEl.hidden = true; });
    });
  }
}

/** Legend entries for the current scenario. */
function flightPathLegend(scenario) {
  const out = [
    { colour: 'var(--accent)', label: 'Design flight path' },
    { colour: 'var(--chart-band)', label: 'Higher airspace bands' }
  ];
  const risks = new Set((scenario?.otherTraffic || []).filter(o => o.type === 'crossing').map(o => o.conflictRisk));
  if (risks.has('high'))   out.push({ colour: 'var(--danger)', label: 'High-risk encounter' });
  if (risks.has('medium')) out.push({ colour: 'var(--warn)',   label: 'Medium-risk encounter' });
  if ((scenario?.otherTraffic || []).some(o => o.type === 'band')) {
    out.push({ colour: 'var(--text-3)', label: 'Other traffic layers' });
  }
  return out;
}

window.HAOChart = { renderFlightPath, flightPathLegend, ftLabel };
