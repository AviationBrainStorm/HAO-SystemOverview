/* ============================================================
   data-registry.js — assembles the dataset from its parts.

   WHY THIS EXISTS
   ---------------
   The dataset used to live in one generated file, data/embedded-data.js.
   That file grew past 220 kB and every edit, however small, touched it.
   Each collection now lives in its own file under data/parts/, and each
   of those files does one thing: it calls HAO_DATA.register() with a
   small envelope saying which document it belongs to, where it mounts,
   which schema governs it, and its payload.

   This module is the only thing that knows how the pieces fit together.
   It exposes window.HAO_SEED as a lazily-assembled, cached object with
   exactly the shape the renderers already expect, so nothing downstream
   had to change.

   ENVELOPE
   --------
     HAO_DATA.register({
       part:   'vehicle-classes',                 // unique id, for diagnostics
       root:   'dataset',                         // dataset | ontology | taxonomy
       mount:  'vehicleClasses',                  // dot path, e.g. 'gatmoc.kpas'
       schema: 'schemas/parts/vehicle-classes.schema.json',
       payload: [ ... ]                           // array or object
     });

   MERGE RULES
   -----------
   - Array payloads mounted at the same path are CONCATENATED in load
     order. That is what lets scenarios be split across five files.
   - Object payloads are shallow-merged, later keys winning.
   - Anything else replaces, and a replacement is reported as a clash.

   Order of <script> tags therefore controls the order of array items,
   and nothing else. A part can be added or removed by editing
   index.html alone.
   ============================================================ */
(function () {
  'use strict';

  var ROOTS = ['dataset', 'ontology', 'taxonomy'];

  var registry = {
    parts: [],          // envelopes in load order
    problems: [],       // strings, surfaced by report()
    _cache: null
  };

  function problem(msg) {
    registry.problems.push(msg);
    if (window.console && console.warn) console.warn('[HAO_DATA] ' + msg);
  }

  /* Walk/create a dot path and return { container, key }. */
  function resolve(target, mount) {
    var segs = String(mount).split('.');
    var node = target;
    for (var i = 0; i < segs.length - 1; i++) {
      if (typeof node[segs[i]] !== 'object' || node[segs[i]] === null) node[segs[i]] = {};
      node = node[segs[i]];
    }
    return { container: node, key: segs[segs.length - 1] };
  }

  function isPlainObject(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
  }

  function mergeInto(target, env) {
    var slot = resolve(target, env.mount);
    var existing = slot.container[slot.key];
    var payload = env.payload;

    if (existing === undefined) {
      slot.container[slot.key] = Array.isArray(payload) ? payload.slice() : payload;
      return;
    }
    if (Array.isArray(existing) && Array.isArray(payload)) {
      slot.container[slot.key] = existing.concat(payload);
      return;
    }
    if (isPlainObject(existing) && isPlainObject(payload)) {
      for (var k in payload) if (Object.prototype.hasOwnProperty.call(payload, k)) existing[k] = payload[k];
      return;
    }
    problem('part "' + env.part + '" replaces an incompatible value at ' + env.root + '.' + env.mount);
    slot.container[slot.key] = payload;
  }

  /* ---- public API ---------------------------------------------------- */

  function register(env) {
    if (!env || typeof env !== 'object') { problem('register() called with a non-object'); return; }
    if (!env.part)  { problem('a part was registered without an id'); return; }
    if (ROOTS.indexOf(env.root) === -1) {
      problem('part "' + env.part + '" declares unknown root "' + env.root + '"'); return;
    }
    if (!env.mount) { problem('part "' + env.part + '" declares no mount path'); return; }
    if (env.payload === undefined) { problem('part "' + env.part + '" carries no payload'); return; }

    registry.parts.push(env);
    registry._cache = null;               // invalidate; assembly is lazy
  }

  function assemble() {
    if (registry._cache) return registry._cache;

    var out = { dataset: {}, ontology: {}, taxonomy: {} };
    registry.parts.forEach(function (env) { mergeInto(out[env.root], env); });

    // Referential integrity checks. These are cheap, they run once, and
    // they catch the failure mode that splitting files actually
    // introduces: a part that silently never loaded.
    var d = out.dataset;
    if (!d.scenarios || !d.scenarios.length) problem('no scenarios registered - is a data part missing from index.html?');
    if (!d.vehicleClasses || !d.vehicleClasses.length) problem('no vehicle classes registered');

    var ids = function (list) {
      var s = {};
      (list || []).forEach(function (x) { s[x.id] = true; });
      return s;
    };
    var vc = ids(d.vehicleClasses), ph = ids(d.flightPhases), uc = ids(d.useCases),
        gp = ids(d.provisionGaps), eg = ids(d.expertGroups), sv = ids(d.serviceCatalogue);

    (d.scenarios || []).forEach(function (s) {
      if (!vc[s.vehicleClassId]) problem('scenario ' + s.id + ' references unknown vehicle class ' + s.vehicleClassId);
      if (!ph[s.phaseId])        problem('scenario ' + s.id + ' references unknown phase ' + s.phaseId);
      (s.useCases || []).forEach(function (u) { if (!uc[u]) problem('scenario ' + s.id + ' references unknown use case ' + u); });
      (s.provisionGaps || []).forEach(function (g) { if (!gp[g]) problem('scenario ' + s.id + ' references unknown gap ' + g); });
      (s.services || []).forEach(function (x) { if (!sv[x]) problem('scenario ' + s.id + ' references unknown service ' + x); });
      Object.keys(s.expertGroupDependency || {}).forEach(function (g) {
        if (!eg[g]) problem('scenario ' + s.id + ' scores unknown expert group ' + g);
      });
    });
    (d.jobCards || []).forEach(function (c) {
      (c.addressesGaps || []).forEach(function (a) {
        if (!gp[a.gapId]) problem('job card ' + c.id + ' addresses unknown gap ' + a.gapId);
      });
      if (!eg[c.primaryGroup]) problem('job card ' + c.id + ' names unknown primary group ' + c.primaryGroup);
    });

    // Duplicate scenario ids are the likely consequence of copying a
    // scenario file rather than editing it.
    var seen = {};
    (d.scenarios || []).forEach(function (s) {
      if (seen[s.id]) problem('duplicate scenario id ' + s.id);
      seen[s.id] = true;
    });

    registry._cache = out;
    return out;
  }

  /* Console-friendly summary: which parts loaded, how many items each
     contributed, and anything that looks wrong. */
  function report() {
    assemble();
    var rows = registry.parts.map(function (p) {
      return {
        part: p.part, root: p.root, mount: p.mount,
        items: Array.isArray(p.payload) ? p.payload.length : '(object)',
        schema: p.schema || '(none declared)'
      };
    });
    if (window.console && console.table) console.table(rows);
    if (registry.problems.length) {
      console.warn('[HAO_DATA] ' + registry.problems.length + ' problem(s):');
      registry.problems.forEach(function (m) { console.warn('  • ' + m); });
    } else if (window.console) {
      console.log('[HAO_DATA] ' + rows.length + ' parts loaded, no integrity problems found.');
    }
    return rows;
  }

  window.HAO_DATA = {
    register: register,
    assemble: assemble,
    report: report,
    parts: registry.parts,
    problems: registry.problems,
    get problemCount() { return registry.problems.length; }
  };

  /* Backward compatibility: every renderer still reads window.HAO_SEED.
     Defining it as a getter means assembly happens on first access,
     after every part script has executed. */
  Object.defineProperty(window, 'HAO_SEED', {
    configurable: true,
    enumerable: true,
    get: function () { return assemble(); }
  });
})();
