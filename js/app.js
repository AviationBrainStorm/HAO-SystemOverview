/* ============================================================
   app.js — HAO Navigator controller.
   State, routing, rendering and data import/export.
   ============================================================ */

(function () {
  'use strict';

  const $  = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  const state = {
    data: null,
    ont: null,
    tax: null,
    vehicleId: null,
    phaseId: null,
    scenarioId: null,
    useCaseFilter: null,
    view: 'explorer',
    ont_selected: null,
    ont_filter: '',
    ont_search: '',
    jcSelected: null
  };

  /* ---------------- helpers ---------------- */

  const byId = (arr, id) => (arr || []).find(x => x.id === id);

  function toast(msg, isErr) {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'toast' + (isErr ? ' err' : '');
    t.hidden = false;
    clearTimeout(t._h);
    t._h = setTimeout(() => { t.hidden = true; }, 3600);
  }

  function sevColour(s) {
    return window.HAOHeat.heatColour(s);
  }

  /* ---------------- theme ---------------- */

  function applyTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    $('#themeLabel').textContent = mode === 'dark' ? 'Dark' : 'Light';
    $('#themeIcon').textContent  = mode === 'dark' ? '◐' : '◑';
    try { localStorage.setItem('hao-theme', mode); } catch (e) {}
    // The chart reads colours from CSS custom properties, so it must be redrawn.
    if (state.view === 'explorer') drawChart();
    if (state.view === 'heat') drawHeat();
    if (state.view === 'planview') drawPlanView();
    if (state.view === 'roadmap') drawRoadmap();
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem('hao-theme'); } catch (e) {}
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(saved || (prefersLight ? 'light' : 'dark'));
    $('#themeToggle').addEventListener('click', () => {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---------------- routing ---------------- */

  function setView(v) {
    state.view = v;
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === v));
    $$('.view').forEach(s => s.classList.toggle('active', s.id === 'view-' + v));
    if (v === 'explorer') drawChart();
    if (v === 'planview') drawPlanView();
    if (v === 'gaps') drawGaps();
    if (v === 'roadmap') drawRoadmap();
    if (v === 'heat') drawHeat();
    if (v === 'ganp') drawGanp();
    if (v === 'ontology') drawOntology();
    if (v === 'taxonomy') drawTaxonomy();
    if (v === 'about') drawAbout();
  }

  /* ---------------- selectors ---------------- */

  function scenariosFor(vehicleId, phaseId, useCaseId) {
    return state.data.scenarios.filter(s =>
      (!vehicleId || s.vehicleClassId === vehicleId) &&
      (!phaseId   || s.phaseId === phaseId) &&
      (!useCaseId || (s.useCases || []).includes(useCaseId)));
  }

  function currentScenario() {
    return byId(state.data.scenarios, state.scenarioId);
  }

  /* ---------------- left rail ---------------- */

  function drawVehicles() {
    const host = $('#vehicleList');
    host.innerHTML = '';
    state.data.vehicleClasses.forEach(v => {
      const b = document.createElement('button');
      b.className = 'chip' + (state.vehicleId === v.id ? ' on' : '');
      b.innerHTML = `<span class="dot" style="background:${v.colour || 'var(--accent)'}"></span>${v.shortName || v.name}`;
      b.title = `${v.name}\nLift: ${v.liftPrinciple}\n${v.controlAuthority || ''}`;
      b.addEventListener('click', () => {
        state.vehicleId = state.vehicleId === v.id ? null : v.id;
        state.phaseId = null;
        reconcileScenario();
        drawExplorer();
      });
      host.appendChild(b);
    });
  }

  function drawPhases() {
    const host = $('#phaseList');
    host.innerHTML = '';
    const avail = new Set(scenariosFor(state.vehicleId, null, state.useCaseFilter).map(s => s.phaseId));
    state.data.flightPhases
      .slice().sort((a, b) => (a.order || 0) - (b.order || 0))
      .forEach(p => {
        if (!avail.has(p.id)) return;
        const b = document.createElement('button');
        b.className = 'chip' + (state.phaseId === p.id ? ' on' : '');
        b.textContent = p.name;
        b.addEventListener('click', () => {
          state.phaseId = state.phaseId === p.id ? null : p.id;
          reconcileScenario();
          drawExplorer();
        });
        host.appendChild(b);
      });
    if (!host.children.length) host.innerHTML = '<p class="empty-note">No phases for this filter.</p>';
  }

  function drawScenarioList() {
    const host = $('#scenarioList');
    host.innerHTML = '';
    const list = scenariosFor(state.vehicleId, state.phaseId, state.useCaseFilter);
    if (!list.length) { host.innerHTML = '<p class="empty-note">No scenarios match. Clear a filter.</p>'; return; }
    list.forEach(s => {
      const v = byId(state.data.vehicleClasses, s.vehicleClassId);
      const ph = byId(state.data.flightPhases, s.phaseId);
      const b = document.createElement('button');
      b.className = 'sc-item' + (state.scenarioId === s.id ? ' on' : '');
      b.style.borderLeftColor = v?.colour || 'var(--accent)';
      b.innerHTML = `${s.name}<span class="sc-meta">${ph?.name || ''} · ${(s.provisionGaps || []).length} gaps</span>`;
      b.addEventListener('click', () => { state.scenarioId = s.id; drawExplorer(); });
      host.appendChild(b);
    });
  }

  function drawUseCaseFilter() {
    const host = $('#useCaseFilter');
    host.innerHTML = '';
    (state.data.useCases || []).forEach(u => {
      const b = document.createElement('button');
      b.className = 'chip' + (state.useCaseFilter === u.id ? ' on' : '');
      b.textContent = u.name;
      b.title = u.description || '';
      b.style.fontSize = '.72rem';
      b.addEventListener('click', () => {
        state.useCaseFilter = state.useCaseFilter === u.id ? null : u.id;
        reconcileScenario();
        drawExplorer();
      });
      host.appendChild(b);
    });
  }

  function reconcileScenario() {
    const list = scenariosFor(state.vehicleId, state.phaseId, state.useCaseFilter);
    if (!list.some(s => s.id === state.scenarioId)) {
      state.scenarioId = list.length ? list[0].id : null;
    }
  }

  /* ---------------- stage ---------------- */

  function drawChart() {
    const s = currentScenario();
    const v = s ? byId(state.data.vehicleClasses, s.vehicleClassId) : null;
    window.HAOChart.renderFlightPath(
      $('#flightChart'), s, v,
      state.data.referenceAirspace?.bands || [],
      $('#chartTip'));

    const leg = $('#stageLegend');
    leg.innerHTML = s
      ? window.HAOChart.flightPathLegend(s)
          .map(l => `<span><i style="background:${l.colour}"></i>${l.label}</span>`).join('')
      : '';
  }

  function drawStage() {
    const s = currentScenario();
    if (!s) {
      $('#scenarioTitle').textContent = 'No scenario selected';
      $('#scenarioSub').textContent = '';
      $('#scenarioNarrative').textContent = '';
      ['#atsBox', '#servicesBox', '#cnsBox', '#equipageBox', '#infoBox', '#gapMini']
        .forEach(sel => { $(sel).innerHTML = ''; });
      return;
    }

    const v = byId(state.data.vehicleClasses, s.vehicleClassId);
    const ph = byId(state.data.flightPhases, s.phaseId);
    const ucNames = (s.useCases || []).map(id => byId(state.data.useCases, id)?.name).filter(Boolean);

    $('#scenarioTitle').textContent = s.name;
    $('#scenarioSub').innerHTML =
      `<span class="pill accent">${v?.name || ''}</span>` +
      `<span class="pill">${ph?.name || ''}</span>` +
      ucNames.map(n => `<span class="pill">${n}</span>`).join('');
    $('#scenarioNarrative').textContent = s.narrative || '';

    drawChart();

    // KPIs
    const gaps = (s.provisionGaps || []).map(id => byId(state.data.provisionGaps, id)).filter(Boolean);
    const maxSev = gaps.reduce((a, g) => Math.max(a, g.severity || 0), 0);
    const heavy = Object.values(s.expertGroupDependency || {}).filter(x => x >= 4).length;
    $('#kpiGaps    .kpi-n').textContent = gaps.length;
    $('#kpiSeverity .kpi-n').textContent = maxSev + '/5';
    $('#kpiSeverity .kpi-n').style.color = sevColour(maxSev);
    $('#kpiGroups  .kpi-n').textContent = heavy;
    $('#kpiServices .kpi-n').textContent = (s.services || []).length;

    // ATS
    $('#atsBox').innerHTML = `
      <span class="mode-badge">${s.atsInteraction?.mode || 'n/a'}</span>
      <p class="muted">${s.atsInteraction?.description || ''}</p>
      ${(s.atsInteraction?.responsibilities || []).length
        ? `<ul class="tight-list">${s.atsInteraction.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}`;

    // services
    $('#servicesBox').innerHTML = (s.services || []).map(id => {
      const sv = byId(state.data.serviceCatalogue, id);
      return `<span class="chip static" style="font-size:.72rem" title="${sv?.gatmoc ? 'GATMOC: ' + sv.gatmoc : ''}">${sv?.name || id}</span>`;
    }).join('') || '<p class="empty-note">None specified.</p>';

    // CNS
    $('#cnsBox').innerHTML = `
      <div class="kv"><span class="k">Communication</span><span class="v">${s.cns?.communication || '—'}</span></div>
      <div class="kv"><span class="k">Navigation</span><span class="v">${s.cns?.navigation || '—'}</span></div>
      <div class="kv"><span class="k">Surveillance</span><span class="v">${s.cns?.surveillance || '—'}</span></div>`;

    $('#equipageBox').innerHTML = (s.equipage || []).map(e => `<li>${e}</li>`).join('') || '<li class="empty-note">None specified.</li>';
    $('#infoBox').innerHTML     = (s.informationRequirements || []).map(e => `<li>${e}</li>`).join('') || '<li class="empty-note">None specified.</li>';

    $('#gapMini').innerHTML = gaps
      .sort((a, b) => b.severity - a.severity)
      .map(g => `<div class="gap-mini" style="border-left-color:${sevColour(g.severity)}" data-gap="${g.id}">
          <strong>${g.title}</strong>
          <span class="gm-inst">${g.instrument}${g.reference ? ' · ' + g.reference : ''} · severity ${g.severity}/5</span>
        </div>`).join('') || '<p class="empty-note">No gaps recorded.</p>';

    $$('#gapMini .gap-mini').forEach(n => n.addEventListener('click', () => {
      $('#gapScopeToggle').checked = true;
      setView('gaps');
    }));

    // Surface work-programme coverage for this scenario's gaps.
    if (state.data.jobCards) {
      const cov = window.HAORoadmap.buildCoverage(state.data);
      const un = gaps.filter(g => cov[g.id] && cov[g.id].best === 'none');
      if (un.length) {
        const note = document.createElement('p');
        note.className = 'empty-note';
        note.style.color = 'var(--danger)';
        note.style.fontStyle = 'normal';
        note.innerHTML = `${un.length} of these ${un.length === 1 ? 'has' : 'have'} no job card behind ${un.length === 1 ? 'it' : 'them'}.`;
        $('#gapMini').appendChild(note);
      }
    }
  }

  function drawExplorer() {
    drawVehicles(); drawPhases(); drawScenarioList(); drawUseCaseFilter(); drawStage();
  }


  /* ---------------- plan view ---------------- */

  function drawPvScenarioList() {
    const host = $('#pvScenarioList');
    host.innerHTML = '';
    const list = state.data.scenarios.filter(s => s.groundTrack);
    if (!list.length) { host.innerHTML = '<p class="empty-note">No scenarios carry a ground track.</p>'; return; }
    list.forEach(s => {
      const v = byId(state.data.vehicleClasses, s.vehicleClassId);
      const n = (s.groundTrack.firCrossings || []).length;
      const b = document.createElement('button');
      b.className = 'sc-item' + (state.scenarioId === s.id ? ' on' : '');
      b.style.borderLeftColor = v?.colour || 'var(--accent)';
      b.innerHTML = `${s.name}<span class="sc-meta">${n} boundary crossing${n === 1 ? '' : 's'}</span>`;
      b.addEventListener('click', () => { state.scenarioId = s.id; drawPlanView(); });
      host.appendChild(b);
    });
  }

  function drawPlanView() {
    drawPvScenarioList();
    let s = currentScenario();
    if (!s || !s.groundTrack) {
      s = state.data.scenarios.find(x => x.groundTrack);
      if (s) state.scenarioId = s.id;
    }
    if (!s) return;
    const v = byId(state.data.vehicleClasses, s.vehicleClassId);
    const ph = byId(state.data.flightPhases, s.phaseId);

    $('#pvTitle').textContent = s.name;
    $('#pvSub').innerHTML = `<span class="pill accent">${v?.name || ''}</span><span class="pill">${ph?.name || ''}</span>`;
    $('#pvNote').textContent = s.groundTrack.note || s.narrative || '';

    window.HAOPlan.renderPlanView($('#planChart'), s, v, state.data.firRegions || [], {
      showFIR: $('#pvShowFIR').checked,
      fitMode: $('#pvWorld').checked ? 'world' : 'track',
      tipEl: $('#planTip')
    });

    $('#pvLegend').innerHTML = window.HAOPlan.planViewLegend()
      .map(l => `<span class="chip static" style="font-size:.72rem"><span class="dot" style="background:${l.colour}"></span>${l.label}</span>`).join('');

    $('#pvJurisdiction').innerHTML = window.HAOPlan.jurisdictionSummary(s, state.data.firRegions || []);
  }

  /* ---------------- roadmap ---------------- */

  function drawRoadmap() {
    const sel = $('#rmGroupFilter');
    if (sel.options.length <= 1) {
      (state.data.expertGroups || []).forEach(g => sel.add(new Option(g.name, g.id)));
    }
    window.HAORoadmap.renderRoadmap($('#roadmapGantt'), state.data, {
      groupFilter: sel.value,
      onCard: c => { state.jcSelected = c.id; $('#jcDetail').innerHTML = window.HAORoadmap.jobCardDetailHTML(c, state.data); }
    });
    const sc = state.jcSelected ? (state.data.jobCards || []).find(c => c.id === state.jcSelected) : null;
    $('#jcDetail').innerHTML = window.HAORoadmap.jobCardDetailHTML(sc, state.data);
    window.HAORoadmap.renderCoverage($('#coverageTable'), state.data, {
      onlyUncovered: $('#rmOnlyUncovered').checked
    });
  }

  /* ---------------- gaps view ---------------- */

  function drawGaps() {
    const scoped = $('#gapScopeToggle').checked;
    const s = currentScenario();
    let gaps = state.data.provisionGaps.slice();
    if (scoped && s) gaps = gaps.filter(g => (s.provisionGaps || []).includes(g.id));

    const freq = {};
    state.data.scenarios.forEach(sc => (sc.provisionGaps || []).forEach(id => { freq[id] = (freq[id] || 0) + 1; }));

    const sort = $('#gapSort').value;
    if (sort === 'severity')  gaps.sort((a, b) => b.severity - a.severity || a.instrument.localeCompare(b.instrument));
    if (sort === 'instrument') gaps.sort((a, b) => a.instrument.localeCompare(b.instrument));
    if (sort === 'frequency') gaps.sort((a, b) => (freq[b.id] || 0) - (freq[a.id] || 0));

    const groupName = id => byId(state.data.expertGroups, id)?.name || id;

    $('#gapTable').innerHTML = gaps.length ? `
      <table class="grid">
        <thead><tr>
          <th style="width:60px">Sev</th>
          <th style="width:220px">Instrument</th>
          <th>Gap and proposed action</th>
          <th style="width:150px">Owning groups</th>
          <th style="width:80px">Scenarios</th>
        </tr></thead>
        <tbody>
          ${gaps.map(g => `<tr>
            <td><span class="sev" style="background:${sevColour(g.severity)}">${g.severity}</span></td>
            <td><strong>${g.instrument}</strong><br><span class="muted">${g.reference || ''}</span><br><span class="pill">${g.gapType}</span></td>
            <td>
              <strong>${g.title}</strong>
              <p style="margin:.35rem 0 .3rem">${g.description || ''}</p>
              ${g.proposedAction ? `<p style="margin:0"><em style="color:var(--accent-2)">Proposed:</em> ${g.proposedAction}</p>` : ''}
            </td>
            <td>${(g.owningGroups || []).map(id => `<span class="pill accent">${groupName(id)}</span>`).join('')}</td>
            <td style="text-align:center;font-weight:700;color:var(--accent)">${freq[g.id] || 0}</td>
          </tr>`).join('')}
        </tbody>
      </table>` : '<p class="empty-note">No gaps in scope.</p>';
  }

  /* ---------------- heat view ---------------- */

  function drawHeat() {
    const vSel = $('#heatFilterVehicle'), uSel = $('#heatFilterUseCase');
    if (vSel.options.length <= 1) {
      state.data.vehicleClasses.forEach(v => vSel.add(new Option(v.name, v.id)));
      (state.data.useCases || []).forEach(u => uSel.add(new Option(u.name, u.id)));
    }
    window.HAOHeat.renderHeatMap($('#heatMap'), state.data, {
      vehicleId: vSel.value,
      useCaseId: uSel.value,
      sortByLoad: $('#heatSortByLoad').checked,
      onGroup: (g, scen) => { $('#heatDetail').innerHTML = window.HAOHeat.groupDetailHTML(g, scen); },
      onScenario: sc => { state.scenarioId = sc.id; state.vehicleId = sc.vehicleClassId; state.phaseId = null; drawExplorer(); setView('explorer'); }
    });
  }

  /* ---------------- GANP / GATMOC view ---------------- */

  function countAcross(key, list) {
    const counts = {};
    state.data.scenarios.forEach(s => (s.mapping?.[key] || []).forEach(id => { counts[id] = (counts[id] || 0) + 1; }));
    return (list || []).map(x => ({ ...x, n: counts[x.id] || 0 })).sort((a, b) => b.n - a.n);
  }

  function barCard(title, rows, note) {
    const max = Math.max(1, ...rows.map(r => r.n));
    return `<div class="ganp-card">
      <h3>${title}</h3>
      ${note ? `<p class="muted">${note}</p>` : ''}
      ${rows.map(r => `
        <div class="bar-row"><span class="lbl" title="${r.note || r.name}">${r.name}</span><span class="num">${r.n}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${(r.n / max) * 100}%"></div></div></div>`).join('')}
    </div>`;
  }

  function drawGanp() {
    $('#visionQuote').innerHTML = state.data.meta?.holisticVision
      ? `<em>“${state.data.meta.holisticVision}”</em><br><span style="font-size:.78rem">HAO Holistic Vision V0.2, endorsed by ATMRPP-WG/47. The mapping below counts how many scenarios in the dataset touch each element, so that HAO is expressed in existing GATMOC and GANP language rather than a parallel vocabulary.</span>`
      : '';

    const g = state.data.gatmoc || {}, p = state.data.ganp || {};
    $('#ganpGrid').innerHTML =
      barCard('GATMOC concept components', countAcross('gatmocComponents', g.components),
        'Doc 9854 is the only overarching Concept of Operations for the Air Navigation Bureau; every HAO element should map to it or generate an amendment proposal.') +
      barCard('Key performance areas', countAcross('kpas', g.kpas),
        'HAO inherits the GANP performance ambitions for each KPA. Where a more precise ambition is needed, that is fed back to the GANP.') +
      barCard('GATMOC guiding principles', countAcross('guidingPrinciples', g.guidingPrinciples)) +
      barCard('GANP layers', countAcross('ganpLayers', p.layers),
        'The four-layer structure aligns global strategic and technical direction with regional and national plans.') +
      barCard('ASBU threads', countAcross('asbuThreads', p.asbuThreads),
        'HAO is expected to be an early adopter of some of the more advanced ASBU concepts.') +
      barCard('Basic Building Blocks', countAcross('bbb', p.bbb),
        'The BBB framework identifies the essential services that must exist before any operational improvement can be built on them.') +
      `<div class="ganp-card">
        <h3>ATM community</h3>
        <p class="muted">HAO stakeholders map into existing GATMOC ATM community categories rather than creating new ones. An "HAO service provider" is a subset of the ATM service provider or ATM support industry categories.</p>
        ${(g.atmCommunity || []).map(c => `<span class="pill">${c}</span>`).join('')}
      </div>
      <div class="ganp-card">
        <h3>Vertical reference constraint</h3>
        <p class="muted">${state.data.referenceAirspace?.altimetryNote || ''}</p>
      </div>`;
  }

  /* ---------------- ontology / taxonomy views ---------------- */

  function drawOntology() {
    $('#ontNote').textContent = state.ont.meta?.designNote || '';
    if (!$('#ontFilter').options.length || $('#ontFilter').options.length === 1) {
      window.HAOOnt.renderOntFilterOptions($('#ontFilter'), state.ont);
    }
    window.HAOOnt.renderOntTree($('#ontTree'), state.ont,
      { selected: state.ont_selected, filter: state.ont_filter, search: state.ont_search },
      id => { state.ont_selected = id; drawOntology(); });
    window.HAOOnt.renderOntDetail($('#ontDetail'), state.ont, state.ont_selected);
  }

  function drawTaxonomy() {
    $('#taxNote').textContent = state.tax.meta?.structure || '';
    window.HAOOnt.renderTaxonomy($('#taxGrid'), state.tax);
    window.HAOOnt.renderTaxExamples($('#taxExamples'), state.tax);
  }

  /* ---------------- about ---------------- */

  function drawAbout() {
    const m = state.data.meta || {};
    $('#aboutBox').innerHTML = `
      <h3>What this is</h3>
      <p>A working prototype for navigating the Higher Airspace Operations data set: vehicle classes, design flight paths and their intersection with other traffic, ATS interactions, services, CNS and equipage, the resulting gaps in ICAO provisions, the mapping to the GANP and GATMOC, and the dependency of that work on ICAO expert groups.</p>

      <h3>Scope</h3>
      <p>${m.scopeNote || ''}</p>

      <h3>This is a shared, read-only build</h3>
      <p>Dataset upload is disabled in this build so that everyone viewing it sees the same data. Use <strong>Export</strong> to download the dataset as JSON if you want to work with it yourself. The three schemas below are still shipped, so a colleague can build a conforming dataset and load it into a working copy of the tool:</p>
      <ul>
        <li><code>hao-dataset.schema.json</code> — vehicle classes, phases, scenarios with trajectories, ground tracks and traffic, services, CNS, equipage, information requirements, provision gaps, job cards, FIR regions, GANP/GATMOC mapping and expert group dependency.</li>
        <li><code>hao-ontology.schema.json</code> — BFO-conformant ontology; every domain class must declare exactly one BFO class.</li>
        <li><code>hao-taxonomy.schema.json</code> — faceted taxonomy with arbitrarily nested terms.</li>
      </ul>

      <h3>Reading the flight path</h3>
      <p>The vertical scale is deliberately piecewise: altitudes below 45 000 ft receive a disproportionate share of the canvas, because that is where the integration problem with conventional traffic actually occurs. Hatched layers are volumes occupied by other users; dashed vectors with a marker are point encounters, coloured by conflict risk. Numbered waypoints carry the design notes.</p>

      <h3>Judgement values</h3>
      <p>Gap severity and expert group dependency are 0–5 analytical judgements recorded in the dataset, not ICAO positions. They exist so that the tool can rank and aggregate; they should be reviewed by the HAO Working Group before being relied upon.</p>

      <h3>Sources drawn on for the seed data</h3>
      <ul>${(m.provenance || []).map(p => `<li>${p}</li>`).join('')}</ul>

      <p class="muted" style="margin-top:1.2rem">Dataset <code>${m.datasetId || ''}</code> version ${m.version || ''}${m.issued ? ', issued ' + m.issued : ''}. Ontology ${state.ont.meta?.version || ''}, taxonomy ${state.tax.meta?.version || ''}.</p>`;
  }

  /* ---------------- data import / export ---------------- */

  function wireIO() {
    // SHARED BUILD: dataset upload and reset are disabled by design.
    // The controls are absent from the markup, so every lookup here is
    // guarded - an unguarded addEventListener on null would throw during
    // init and leave the user staring at a blank page.
    const exp = $('#btnExport');
    if (exp) {
      exp.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = (state.data.meta?.datasetId || 'hao-dataset') + '.json';
        a.click();
        URL.revokeObjectURL(a.href);
        toast('Dataset exported');
      });
    }
  }

  /* ---------------- boot ---------------- */

  function init() {
    if (!window.HAO_SEED) { document.body.innerHTML = '<p style="padding:2rem">Seed data failed to load. Check data/embedded-data.js.</p>'; return; }
    state.data = JSON.parse(JSON.stringify(window.HAO_SEED.dataset));
    state.ont  = window.HAO_SEED.ontology;
    state.tax  = window.HAO_SEED.taxonomy;
    state.scenarioId = state.data.scenarios[0].id;
    $('#datasetTitle').textContent = state.data.meta?.title || '';

    initTheme();
    wireIO();

    $$('.tab').forEach(t => t.addEventListener('click', () => setView(t.dataset.view)));
    $('#gapScopeToggle').addEventListener('change', drawGaps);
    $('#pvShowFIR').addEventListener('change', drawPlanView);
    $('#pvWorld').addEventListener('change', drawPlanView);
    $('#rmGroupFilter').addEventListener('change', drawRoadmap);
    $('#rmOnlyUncovered').addEventListener('change', drawRoadmap);
    $('#gapSort').addEventListener('change', drawGaps);
    $('#heatFilterVehicle').addEventListener('change', drawHeat);
    $('#heatFilterUseCase').addEventListener('change', drawHeat);
    $('#heatSortByLoad').addEventListener('change', drawHeat);
    $('#ontFilter').addEventListener('change', e => { state.ont_filter = e.target.value; drawOntology(); });
    $('#ontSearch').addEventListener('input', e => { state.ont_search = e.target.value; drawOntology(); });

    let rz;
    window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => {
      if (state.view === 'explorer') drawChart();
      if (state.view === 'planview') drawPlanView();
    }, 160); });

    drawExplorer();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
