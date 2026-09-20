# HAO Navigator — modular data build

A tool for navigating the Higher Airspace Operations (HAO) data set: vehicle classes, design flight paths and their intersection with other traffic, cross-FIR ground tracks, ATS interactions, services, CNS and equipage requirements, gaps in existing ICAO provisions, the job cards behind them, alignment with the GANP and GATMOC, and the dependency of that work on ICAO expert groups.

**This is the read-only distribution build, with the data split one file per collection.** Dataset upload is disabled so that everyone viewing it sees the same data.

The single 228 kB `data/embedded-data.js` is gone. Each collection that used to be a key of the `dataset` object — `vehicleClasses`, `scenarios`, `provisionGaps`, `jobCards`, `kpas` and the rest — now lives in its own file under `data/parts/`, and the three documents are reassembled in the browser by `js/data-registry.js`. Nothing else changed: the renderers still read `window.HAO_SEED` and the nine views are identical.

---

## Deploying it

Static files, no build step, no server-side anything. Copy the folder to any web host or SharePoint document library and open `index.html`.

```
hao-navigator-modular/
├── index.html
├── css/styles.css
├── js/           9 files, no dependencies
│                 (data-registry.js assembles the data; sanitize.js is the HTML sink)
├── data/
│   ├── parts/    31 files, one collection each — this is where you edit data
│   ├── parts-manifest.json   generated index of the parts
│   └── worldmap.js           Natural Earth coastlines, static geometry
├── schemas/
│   ├── hao-dataset.schema.json / hao-ontology / hao-taxonomy   assembled documents
│   ├── hao-part.schema.json    the registration envelope
│   ├── hao-common.schema.json  shared $defs
│   └── parts/    27 schemas, one per data part
├── tools/
│   ├── validate-parts.mjs      integrity checker, no dependencies
│   └── split_build.py          regenerates the parts from a monolithic seed
└── tests/        round-trip test + fixture
```

It also runs straight from `file://` — double-clicking `index.html` works, because the data parts are plain `<script>` files rather than something fetched. (This is exactly why the parts are `.js` files calling a register function rather than `.json` files: `fetch()` of a local `.json` is blocked under the `file://` origin, and the double-click / zip-and-send workflow matters more here than file purity.) That matters if you send the folder to someone as a zip.

Nothing calls out to the network. No analytics, no CDN, no fonts loaded remotely.

## Working with the data parts

Every file in `data/parts/` does one thing: it calls `HAO_DATA.register()` with a small envelope.

```js
HAO_DATA.register({
  part:   'vehicle-classes',                        // unique id, used in diagnostics
  root:   'dataset',                                // dataset | ontology | taxonomy
  mount:  'vehicleClasses',                         // dot path, e.g. 'gatmoc.kpas'
  schema: 'schemas/parts/vehicle-classes.schema.json',
  payload: [ /* the collection */ ]
});
```

Merge rules, and there are only three:

- **Array payloads mounted at the same path are concatenated in script order.** That is what lets the 17 scenarios live in five files, split by vehicle family. Add a sixth file and list it in `index.html`; nothing else changes.
- **Object payloads are shallow-merged.** `gatmoc` and `ganp` have no file of their own — they are assembled from their constituent parts (`gatmoc.components`, `gatmoc.kpas`, …), which is why those now appear as separate files even though the assembled shape is unchanged.
- Anything else replaces, and the registry reports it as a clash.

`window.HAO_SEED` is defined as a lazy getter over the assembled result, so the renderers were not touched. Assembly happens once, on first access, after every part script has run.

### The dataset parts

| File | Mounts at | Size | What it holds |
|---|---|---|---|
| `meta.js` | `meta` | object | Dataset identity, scope note, holistic vision and provenance. |
| `reference-airspace.js` | `referenceAirspace` | object | Altitude bands used as the vertical backdrop, plus the altimetry constraint note. |
| `vehicle-classes.js` | `vehicleClasses` | 4 items | One record per vehicle class. Add a class here and it appears in every view. |
| `flight-phases.js` | `flightPhases` | 7 items | Ordered design phases. |
| `use-cases.js` | `useCases` | 7 items | Socio-economic purposes an operation can serve. |
| `service-catalogue.js` | `serviceCatalogue` | 12 items | Services a scenario may consume, each mapped to a GATMOC component. |
| `gatmoc-components.js` | `gatmoc.components` | 8 items | Doc 9854 concept components. |
| `guiding-principles.js` | `gatmoc.guidingPrinciples` | 7 items | GATMOC guiding principles. |
| `kpas.js` | `gatmoc.kpas` | 11 items | Key performance areas inherited from the GANP. |
| `atm-community.js` | `gatmoc.atmCommunity` | 7 items | GATMOC ATM community categories. HAO stakeholders map into these rather than adding new ones. |
| `ganp-layers.js` | `ganp.layers` | 4 items | The four GANP layers. |
| `ganp-bbb.js` | `ganp.bbb` | 6 items | Basic Building Blocks. |
| `ganp-asbu-threads.js` | `ganp.asbuThreads` | 10 items | ASBU threads. |
| `expert-groups.js` | `expertGroups` | 18 items | ICAO expert groups. Ids here are the keys used by scenario expertGroupDependency maps. |
| `provision-gaps.js` | `provisionGaps` | 20 items | The gap register. |
| `job-cards.js` | `jobCards` | 9 items | ICAO work programme job cards and the gaps they address. |
| `fir-regions.js` | `firRegions` | 18 items | Schematic FIR / sovereign region boxes for the plan view. Not for navigation. |
| `scenarios-lta-balloon.js` | `scenarios` | 6 items | LTA balloon scenarios. |
| `scenarios-lta-airship.js` | `scenarios` | 2 items | Powered stratospheric airship scenarios. |
| `scenarios-hta-haps.js` | `scenarios` | 4 items | Solar fixed-wing HAPS scenarios. |
| `scenarios-supersonic.js` | `scenarios` | 3 items | Supersonic transport scenarios. |
| `scenarios-mixed-regime.js` | `scenarios` | 2 items | Mixed-regime and due-regard scenarios that span two traffic management philosophies. |

### Ontology and taxonomy parts

| File | Mounts at | Size |
|---|---|---|
| `ontology-meta.js` | `ontology.meta` | object |
| `ontology-bfo-backbone.js` | `ontology.bfoBackbone` | 21 items |
| `ontology-relations.js` | `ontology.relations` | 18 items |
| `ontology-classes.js` | `ontology.classes` | 71 items |
| `ontology-axioms.js` | `ontology.axioms` | 35 items |
| `ontology-notes.js` | `ontology.modellingNotes` | 5 items |
| `taxonomy-meta.js` | `taxonomy.meta` | object |
| `taxonomy-facets.js` | `taxonomy.facets` | 9 items |
| `taxonomy-examples.js` | `taxonomy.workedExamples` | 4 items |

### Adding a collection

1. Write `data/parts/my-thing.js` with the envelope above.
2. Write `schemas/parts/my-thing.schema.json` and name it in the envelope.
3. Add one `<script>` tag to `index.html`, in the numbered data block.
4. Run `npm test`.

### Checking your work

```
npm run check        # syntax-check the application scripts
npm run check:data   # syntax-check all 31 data parts
npm run validate     # envelope, id uniqueness and cross-part references
npm run test:roundtrip
npm test             # all of the above
```

`npm run validate` is the one that earns its keep. Splitting files introduces exactly one new failure mode — a part that silently never loaded, or a reference that points into a file someone deleted — and JSON Schema cannot see across file boundaries. The validator executes the parts, assembles them, and checks that every scenario resolves its vehicle class, phase, use cases, services, gaps and expert groups; that every job card resolves its gaps and groups; that every ontology class grounds in a backbone class and every axiom resolves its relation and terms; and that every taxonomy worked example resolves its facet terms. The same integrity checks run in the browser, and `HAO_DATA.report()` in the console prints the part table and anything that looks wrong.

`npm run test:roundtrip` compares the assembled documents against `tests/fixtures/expected-seed.json`, which is the content of the old monolithic file. Pass it a path to an `embedded-data.js` to compare against that instead. Array order is compared strictly; object key order is not, because it is not significant and it legitimately changed when the scenarios moved to the end of the load order.

### Regenerating the parts

`tools/split_build.py` is the script that produced this layout from the old single file. It is kept because the reverse operation — folding everything back into one file for a quick email — is occasionally wanted, and because it documents exactly how the split was made. It is not part of the runtime and the application never needs it.

---

## The nine views

| View | What it answers |
|---|---|
| **Scenario explorer** | Pick a vehicle class and a design phase; see the altitude profile, the traffic it crosses, and everything required to fly it. |
| **Plan view & cross-FIR** | Where the track goes geographically, whose airspace it enters, and where authorization has to change hands. |
| **ICAO provisions & gaps** | Where HAO requires changes to existing provisions, by instrument, severity and number of affected scenarios. |
| **Job cards & delivery** | Which job cards exist, when their work programme elements land, and which gaps have no job card at all. |
| **Expert group heat map** | Which ICAO expert groups the HAO work programme depends on, and how hard. |
| **GANP / GATMOC alignment** | How HAO maps onto concept components, KPAs, guiding principles, GANP layers, ASBU threads and Basic Building Blocks. |
| **Ontology (BFO)** | Every domain class with its BFO grounding, definition and asserted relations. |
| **Taxonomy** | Nine orthogonal facets, with worked codings of real operations. |
| **About & schemas** | Scope, provenance, and how to build your own dataset. |

Dark and light modes via the toggle at top right; the preference is remembered per browser.

---

## Reading the two charts

**Altitude profile** (scenario explorer). The vertical scale is deliberately piecewise: altitudes below 45 000 ft get 55% of the canvas, because that is where the integration problem with conventional traffic actually lives. Hatched layers are volumes occupied by other users. Dashed vectors with a marker are point encounters, coloured by conflict risk. Numbered waypoints carry the design notes — hover them.

**Plan view.** The ground track is coloured **by altitude, not by operator**. This is the important bit: a plan view of HAO without altitude is misleading, because whether a ground position is a regulatory problem depends almost entirely on flight level. The same point over Australia sits inside controlled airspace at FL550 and outside it at FL620. Cross markers are boundary crossings — red for FIR/sovereign, violet for entering the high seas, amber for a *regime change without a boundary crossing* (climbing through the top of a FIR).

Coastlines are Natural Earth 1:110m, simplified. Schematic orientation only, not for navigation.

---

## Scope

**In scope:** High Altitude Platform Systems — lighter-than-air balloons and airships, heavier-than-air solar fixed-wing — and supersonic aircraft.

**Out of scope:** all space vehicles. No suborbital, no launch, no re-entry. A42 and AN-Conf/14 identified Higher Airspace Operations and Space Transport Operations as two separate work streams, and STO is handled by the Space Transport Operations Task Force. The exclusion is enforced in the ontology at the definition of an HAO vehicle: it derives lift from its interaction with the atmosphere. Space vehicles do not, which is why they fall outside most of the Convention except as regards safe integration into airspace.

---

## Please read this before quoting any number

Two fields in this tool are **analytical judgements recorded in the dataset, not ICAO positions**:

- **Gap severity** (0–5) — how far a requirement is from being met by an existing provision.
- **Expert group dependency** (0–5) — how heavily a scenario depends on a group's output.

They exist so the tool can rank, aggregate and colour. They have not been agreed by any panel. They should be reviewed by the HAO Working Group of the ATMRPP before anyone relies on them.

The **gap coverage grading** on the job cards view is likewise a judgement, and the grades are meant precisely:

| Grade | Meaning |
|---|---|
| Resolving | A job card exists whose output would change the provision. |
| Partial | Work exists but does not span the gap. |
| Framing | The gap is scoped conceptually, but no provision changes as a result. |
| Uncovered | No job card addresses it. |

The distinction matters. The HAO master job card delivers a vision and ConOps and a *set of draft job cards* — it does not itself amend anything, so it grades as framing. Counting it as closing the gaps it discusses would flatter the work programme considerably.

---

## Taking the data away

**Export** in the header downloads the current dataset as JSON. The three schemas in `schemas/` document its shape:

- `hao-dataset.schema.json` — the assembled dataset. It no longer restates every definition: it composes the per-collection schemas in `schemas/parts/` by `$ref`, so a single collection can be validated on its own
- `hao-part.schema.json` — the registration envelope every part file must satisfy
- `hao-common.schema.json` — shared `$defs` (`idNameList`, `severity`, `icaoDate`, id references)
- `hao-ontology.schema.json` — BFO-conformant ontology; every class declares exactly one BFO class
- `hao-taxonomy.schema.json` — faceted taxonomy

A conforming dataset can be loaded into a working copy of the tool, which has the upload control enabled. Cross-part referential integrity is deliberately **not** expressed in the schemas — JSON Schema cannot reach across documents — and is enforced instead by `tools/validate-parts.mjs` and by the registry at load time.

---

## Sources drawn on for the data

The dataset is a synthesis, not a transcription.

- ICAO AN-Conf/14 Recommendation 3.1/7 — Higher airspace operations (AN-MIN 227-6; C-DEC 233/6)
- ICAO Assembly Resolution A41-9 — New Entrants
- ATMRPP-WG/46 Appendix E — draft job card for a holistic vision and global concept for HAO
- ATMRPP-WG/47 — HAO Holistic Vision V0.2 and CONOPS structure
- SASP/5 Report, Appendix B to Agenda Item 7 — proposed job card SASP.019.01 on HAO using HAPS
- ICAO AN Work Programme job card database
- ICAO draft guidance material for LTA-HAPS
- FAA / NASA Upper Class E Traffic Management (ETM) Concept of Operations
- SESAR ECHO — European Concept of Operations for Higher Airspace Operations
- EASA HAO regulatory framework research project (2024–2027)
- HAPS Alliance — Global Cross-Border Collaborative Traffic Management for HAO
- Loon Library (2021); Loon deconfliction experience with CNES, Airservices Australia and the USAF 12th Reconnaissance Squadron
- JARUS CS-HAPS Rev 1.0
- AALTO Zephyr operations from AALTOPORT, Laikipia County, Kenya
- UK CAA analysis of pressure altimetry limits for vertical separation in higher airspace
- Natural Earth 1:110m admin-0 (public domain) for the plan view coastlines

---

## Security

All dynamic markup is rendered through a single sanitising sink,
`js/sanitize.js` (`window.HAOSafe`). Dataset values are never written to
`innerHTML`; instead they are parsed in an inert `DOMParser` document,
stripped of scripts, event-handler attributes and scriptable URLs, and
inserted with `replaceChildren()`. This removes the cross-site-scripting
(XSS) risk that comes with building HTML from data. See `SECURITY.md` for
detail, and `tests/xss-selftest.html` (open in a browser) to verify.

## Accessibility

Partial. Tabs carry `role="tab"`, the charts carry `aria-label`, and colour is never the sole carrier of meaning in the heat map — every cell also shows its numeral. Not yet done: keyboard navigation of the charts, `aria-selected` state on tabs, and a screen-reader alternative to the SVG figures. Worth closing before this goes to a wide audience.

Browsers: current Chromium, Firefox and Safari.

---

*Prototype for discussion. Not an ICAO position. Judgement values require review by the HAO Working Group of the ATMRPP.*
