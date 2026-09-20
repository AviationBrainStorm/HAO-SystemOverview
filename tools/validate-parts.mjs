/* ============================================================
   validate-parts.mjs — check the split data before it ships.

   Runs in plain Node with no dependencies. It executes every file in
   data/parts/ in a minimal sandbox that provides HAO_DATA.register(),
   assembles the three documents exactly as the browser would, and then
   checks the things that matter and that JSON Schema cannot express on
   its own:

     1. the registration envelope of every part (hao-part.schema.json);
     2. that each part names a schema file that actually exists;
     3. id uniqueness within every collection, including across the
        several files that mount at dataset.scenarios;
     4. cross-part references — scenario to vehicle class, phase, use
        case, service, gap and expert group; job card to gap and group;
        taxonomy worked example to facet term; ontology axiom and class
        to BFO backbone;
     5. required top-level properties of each assembled document.

   Usage:  node tools/validate-parts.mjs
   Exit code 1 on any error. Warnings do not fail the run.
   ============================================================ */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PARTS_DIR = join(ROOT, 'data', 'parts');

const errors = [];
const warnings = [];
const err = m => errors.push(m);
const warn = m => warnings.push(m);

/* ---- 1. load the parts exactly as a browser would ------------------- */

const parts = [];
const files = readdirSync(PARTS_DIR).filter(f => f.endsWith('.js')).sort();
if (!files.length) err('no part files found in data/parts/');

const sandbox = { HAO_DATA: { register: env => parts.push({ ...env, _file: null }) }, console };
vm.createContext(sandbox);

for (const file of files) {
  const before = parts.length;
  try {
    vm.runInContext(readFileSync(join(PARTS_DIR, file), 'utf8'), sandbox, { filename: file });
  } catch (e) {
    err(`${file}: failed to execute — ${e.message}`);
    continue;
  }
  if (parts.length === before) err(`${file}: executed but registered nothing`);
  for (let i = before; i < parts.length; i++) parts[i]._file = file;
}

/* ---- 2. envelope checks --------------------------------------------- */

const ROOTS = ['dataset', 'ontology', 'taxonomy'];
const MOUNT_RE = /^[A-Za-z][A-Za-z0-9]*(\.[A-Za-z][A-Za-z0-9]*)*$/;
const seenPartIds = new Set();

for (const p of parts) {
  const at = p._file;
  if (!p.part || !/^[a-z0-9-]+$/.test(p.part)) err(`${at}: part id missing or not kebab-case`);
  if (seenPartIds.has(p.part)) err(`${at}: duplicate part id "${p.part}"`);
  seenPartIds.add(p.part);
  if (!ROOTS.includes(p.root)) err(`${at}: root "${p.root}" is not one of ${ROOTS.join(', ')}`);
  if (!p.mount || !MOUNT_RE.test(p.mount)) err(`${at}: mount "${p.mount}" is not a valid dot path`);
  if (p.payload === undefined) err(`${at}: no payload`);
  if (!p.schema) warn(`${at}: declares no schema`);
  else if (!existsSync(join(ROOT, p.schema))) err(`${at}: declared schema not found — ${p.schema}`);
  for (const k of Object.keys(p)) {
    if (!['part', 'root', 'mount', 'schema', 'version', 'note', 'payload', '_file'].includes(k)) {
      warn(`${at}: unrecognised envelope key "${k}"`);
    }
  }
}

/* ---- 3. assemble ----------------------------------------------------- */

const docs = { dataset: {}, ontology: {}, taxonomy: {} };
for (const p of parts) {
  if (!docs[p.root]) continue;
  const segs = p.mount.split('.');
  let node = docs[p.root];
  for (let i = 0; i < segs.length - 1; i++) {
    if (typeof node[segs[i]] !== 'object' || node[segs[i]] === null) node[segs[i]] = {};
    node = node[segs[i]];
  }
  const key = segs[segs.length - 1];
  const cur = node[key];
  if (cur === undefined) node[key] = Array.isArray(p.payload) ? p.payload.slice() : p.payload;
  else if (Array.isArray(cur) && Array.isArray(p.payload)) node[key] = cur.concat(p.payload);
  else if (cur && typeof cur === 'object' && p.payload && typeof p.payload === 'object') Object.assign(cur, p.payload);
  else err(`${p._file}: incompatible merge at ${p.root}.${p.mount}`);
}

const { dataset: d, ontology: o, taxonomy: t } = docs;

/* ---- 4. required properties ------------------------------------------ */

const require_ = (doc, name, keys) => keys.forEach(k => {
  if (doc[k] === undefined) err(`${name}: required property "${k}" was never registered`);
});
require_(d, 'dataset', ['meta', 'vehicleClasses', 'flightPhases', 'scenarios', 'provisionGaps', 'expertGroups']);
require_(o, 'ontology', ['meta', 'bfoBackbone', 'relations', 'classes', 'axioms']);
require_(t, 'taxonomy', ['meta', 'facets']);

/* ---- 5. id uniqueness ------------------------------------------------ */

const idsOf = list => new Set((list || []).map(x => x.id));
const checkUnique = (list, label) => {
  const seen = new Set();
  (list || []).forEach(x => {
    if (seen.has(x.id)) err(`${label}: duplicate id ${x.id}`);
    seen.add(x.id);
  });
};
checkUnique(d.scenarios, 'dataset.scenarios');
checkUnique(d.vehicleClasses, 'dataset.vehicleClasses');
checkUnique(d.provisionGaps, 'dataset.provisionGaps');
checkUnique(d.expertGroups, 'dataset.expertGroups');
checkUnique(d.jobCards, 'dataset.jobCards');
checkUnique(d.firRegions, 'dataset.firRegions');
checkUnique(o.classes, 'ontology.classes');
checkUnique(o.relations, 'ontology.relations');

/* ---- 6. cross-part references ---------------------------------------- */

const vc = idsOf(d.vehicleClasses), ph = idsOf(d.flightPhases), uc = idsOf(d.useCases),
      gp = idsOf(d.provisionGaps), eg = idsOf(d.expertGroups), sv = idsOf(d.serviceCatalogue),
      fir = idsOf(d.firRegions);
const gatmocIds = idsOf(d.gatmoc?.components), kpaIds = idsOf(d.gatmoc?.kpas),
      gpIds = idsOf(d.gatmoc?.guidingPrinciples), layerIds = idsOf(d.ganp?.layers),
      asbuIds = idsOf(d.ganp?.asbuThreads), bbbIds = idsOf(d.ganp?.bbb);

for (const s of d.scenarios || []) {
  const say = m => err(`scenario ${s.id}: ${m}`);
  if (!vc.has(s.vehicleClassId)) say(`unknown vehicle class ${s.vehicleClassId}`);
  if (!ph.has(s.phaseId)) say(`unknown phase ${s.phaseId}`);
  (s.useCases || []).forEach(x => !uc.has(x) && say(`unknown use case ${x}`));
  (s.services || []).forEach(x => !sv.has(x) && say(`unknown service ${x}`));
  (s.provisionGaps || []).forEach(x => !gp.has(x) && say(`unknown gap ${x}`));
  Object.keys(s.expertGroupDependency || {}).forEach(x => !eg.has(x) && say(`unknown expert group ${x}`));
  const m = s.mapping || {};
  (m.gatmocComponents || []).forEach(x => !gatmocIds.has(x) && say(`unknown GATMOC component ${x}`));
  (m.kpas || []).forEach(x => !kpaIds.has(x) && say(`unknown KPA ${x}`));
  (m.guidingPrinciples || []).forEach(x => !gpIds.has(x) && say(`unknown guiding principle ${x}`));
  (m.ganpLayers || []).forEach(x => !layerIds.has(x) && say(`unknown GANP layer ${x}`));
  (m.asbuThreads || []).forEach(x => !asbuIds.has(x) && say(`unknown ASBU thread ${x}`));
  (m.bbb || []).forEach(x => !bbbIds.has(x) && say(`unknown BBB ${x}`));
  const wps = s.groundTrack?.waypoints || [];
  (s.groundTrack?.firCrossings || []).forEach(c => {
    if (c.atIndex >= wps.length) say(`FIR crossing atIndex ${c.atIndex} is past the end of the ground track`);
    [c.from, c.to].forEach(f => { if (f && !fir.has(f)) warn(`scenario ${s.id}: FIR ${f} is not in firRegions`); });
  });
}

for (const c of d.jobCards || []) {
  if (!eg.has(c.primaryGroup)) err(`job card ${c.id}: unknown primary group ${c.primaryGroup}`);
  (c.supportingGroups || []).forEach(g => !eg.has(g) && err(`job card ${c.id}: unknown supporting group ${g}`));
  (c.addressesGaps || []).forEach(a => !gp.has(a.gapId) && err(`job card ${c.id}: unknown gap ${a.gapId}`));
}
for (const g of d.provisionGaps || []) {
  (g.owningGroups || []).forEach(x => !eg.has(x) && err(`gap ${g.id}: unknown owning group ${x}`));
}

/* ontology: every class grounds in a backbone class */
const bfoIds = idsOf(o.bfoBackbone), classIds = idsOf(o.classes), relIds = idsOf(o.relations);
for (const c of o.classes || []) {
  if (!bfoIds.has(c.bfo)) err(`ontology class ${c.id}: bfo "${c.bfo}" is not in the backbone`);
  if (c.parent && !classIds.has(c.parent)) err(`ontology class ${c.id}: parent ${c.parent} not defined`);
}
for (const a of o.axioms || []) {
  if (!relIds.has(a.relation)) err(`ontology axiom: unknown relation ${a.relation}`);
  [a.subject, a.object].forEach(x => {
    if (!classIds.has(x) && !bfoIds.has(x)) err(`ontology axiom: unknown term ${x}`);
  });
}

/* taxonomy: worked example codings resolve to facet terms */
const termIds = new Set();
const walk = term => { termIds.add(term.id); (term.children || []).forEach(walk); };
(t.facets || []).forEach(f => (f.terms || []).forEach(walk));
const facetIds = idsOf(t.facets);
for (const ex of t.workedExamples || []) {
  for (const [fid, val] of Object.entries(ex.coding || {})) {
    if (!facetIds.has(fid)) err(`taxonomy example "${ex.label}": unknown facet ${fid}`);
    [].concat(val).forEach(x => !termIds.has(x) && err(`taxonomy example "${ex.label}": unknown term ${x}`));
  }
}

/* ---- 7. report ------------------------------------------------------- */

const counts = [
  ['scenarios', d.scenarios?.length], ['vehicle classes', d.vehicleClasses?.length],
  ['provision gaps', d.provisionGaps?.length], ['job cards', d.jobCards?.length],
  ['expert groups', d.expertGroups?.length], ['FIR regions', d.firRegions?.length],
  ['ontology classes', o.classes?.length], ['ontology axioms', o.axioms?.length],
  ['taxonomy facets', t.facets?.length]
];
console.log(`Loaded ${parts.length} parts from ${files.length} files.`);
console.log(counts.map(([k, v]) => `  ${String(v ?? 0).padStart(4)}  ${k}`).join('\n'));

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach(w => console.log('  ! ' + w));
}
if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  errors.forEach(e => console.error('  ✗ ' + e));
  process.exit(1);
}
console.log('\nAll integrity checks passed.');
