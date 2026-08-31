# HAO Navigator — shared build

A tool for navigating the Higher Airspace Operations (HAO) data set: vehicle classes, design flight paths and their intersection with other traffic, cross-FIR ground tracks, ATS interactions, services, CNS and equipage requirements, gaps in existing ICAO provisions, the job cards behind them, alignment with the GANP and GATMOC, and the dependency of that work on ICAO expert groups.

**This is the read-only distribution build.** Dataset upload is disabled so that everyone viewing it sees the same data.

---

## Deploying it

Static files, no build step, no server-side anything. Copy the folder to any web host or SharePoint document library and open `index.html`.

```
hao-navigator-shared/
├── index.html
├── css/styles.css
├── js/          8 files, no dependencies (includes sanitize.js — the HTML sink)
├── data/        embedded-data.js, worldmap.js
├── schemas/     3 JSON Schemas (documentation)
└── tests/       helper unit test + browser XSS self-test
```

It also runs straight from `file://` — double-clicking `index.html` works, because the dataset is embedded in `data/embedded-data.js` rather than fetched. That matters if you send the folder to someone as a zip.

Nothing calls out to the network. No analytics, no CDN, no fonts loaded remotely.

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

- `hao-dataset.schema.json` — scenarios, trajectories, ground tracks, gaps, job cards, FIR regions, expert group dependency
- `hao-ontology.schema.json` — BFO-conformant ontology; every class declares exactly one BFO class
- `hao-taxonomy.schema.json` — faceted taxonomy

A conforming dataset can be loaded into a working copy of the tool, which has the upload control enabled.

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
