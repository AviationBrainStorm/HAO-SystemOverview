/* Proves the split parts reassemble into exactly the document the
   monolithic data/embedded-data.js used to provide. Give it the old
   file as an argument to compare against it directly:

     node tests/roundtrip.test.mjs ../hao-navigator-shared/data/embedded-data.js

   With no argument it falls back to tests/fixtures/expected-seed.json. */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/* assemble from parts */
const parts = [];
const sandbox = { HAO_DATA: { register: e => parts.push(e) }, console };
vm.createContext(sandbox);
const dir = join(ROOT, 'data', 'parts');
for (const f of readdirSync(dir).filter(f => f.endsWith('.js')).sort()) {
  vm.runInContext(readFileSync(join(dir, f), 'utf8'), sandbox, { filename: f });
}
// Script order in index.html, not alphabetical order, is what the browser
// uses; replay it so array order matches the shipped page exactly.
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
const order = [...html.matchAll(/data\/parts\/([a-z0-9-]+\.js)/g)].map(m => m[1]);
const byFile = new Map();
{
  const p2 = [];
  const sb2 = { HAO_DATA: { register: e => p2.push(e) }, console };
  vm.createContext(sb2);
  for (const f of order) {
    const before = p2.length;
    vm.runInContext(readFileSync(join(dir, f), 'utf8'), sb2, { filename: f });
    byFile.set(f, p2.slice(before));
  }
}
const docs = { dataset: {}, ontology: {}, taxonomy: {} };
for (const f of order) for (const p of byFile.get(f)) {
  const segs = p.mount.split('.');
  let node = docs[p.root];
  for (let i = 0; i < segs.length - 1; i++) node[segs[i]] ??= {}, node = node[segs[i]];
  const k = segs.at(-1), cur = node[k];
  node[k] = cur === undefined ? p.payload
          : Array.isArray(cur) ? cur.concat(p.payload)
          : Object.assign(cur, p.payload);
}

/* expected */
const arg = process.argv[2];
const fixture = join(ROOT, 'tests', 'fixtures', 'expected-seed.json');
let expected;
if (arg && existsSync(arg)) {
  const src = readFileSync(arg, 'utf8');
  const body = src.slice(src.indexOf('{', src.indexOf('window.HAO_SEED'))).trim().replace(/;$/, '');
  const sb = { window: {} };
  vm.createContext(sb);
  vm.runInContext('window.HAO_SEED = ' + body, sb);
  expected = sb.window.HAO_SEED;
} else if (existsSync(fixture)) {
  expected = JSON.parse(readFileSync(fixture, 'utf8'));
} else {
  console.error('No reference to compare against.');
  process.exit(1);
}

/* Compare canonically: object key order is not meaningful in JSON or in
   JS, and it legitimately changes when scenarios mount from five files
   at the end of the load order. Array order IS meaningful and is
   compared strictly. The $schema pointer the old single file carried at
   the dataset root is dropped. */
const canon = v => Array.isArray(v) ? v.map(canon)
  : (v && typeof v === 'object')
    ? Object.fromEntries(Object.keys(v).sort().map(k => [k, canon(v[k])]))
    : v;
const strip = d => { const c = structuredClone(d); delete c.$schema; return canon(c); };

let failures = 0;
for (const root of ['dataset', 'ontology', 'taxonomy']) {
  const a = strip(docs[root]), b = strip(expected[root]);
  if (JSON.stringify(a) === JSON.stringify(b)) {
    const sameOrder = JSON.stringify(Object.keys(docs[root]).filter(k => k !== '$schema'))
                   === JSON.stringify(Object.keys(expected[root]).filter(k => k !== '$schema'));
    console.log(`\u2713 ${root} reassembles identically${sameOrder ? '' : ' (top-level key order differs, which is not significant)'}`);
  } else {
    failures++;
    console.error(`\u2717 ${root} differs`);
    const ka = Object.keys(a), kb = Object.keys(b);
    console.error('  keys only in parts:    ', ka.filter(k => !kb.includes(k)));
    console.error('  keys only in reference:', kb.filter(k => !ka.includes(k)));
    for (const k of kb.filter(k => ka.includes(k))) {
      if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) console.error('  differs at: ' + k);
    }
  }
}
process.exit(failures ? 1 : 0);
