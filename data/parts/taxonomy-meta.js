/* HAO Navigator data part — taxonomy-meta
   Root: taxonomy   Mount: meta
   Schema: schemas/parts/taxonomy-meta.schema.json
   Taxonomy identity, structure rationale and scope exclusion.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "taxonomy-meta",
  "root": "taxonomy",
  "mount": "meta",
  "schema": "schemas/parts/taxonomy-meta.schema.json",
  "payload": {
    "taxonomyId": "HAO-TAX",
    "title": "Basic taxonomy for Higher Airspace Operations",
    "version": "0.9.0",
    "structure": "Faceted. Any real HAO activity is described by selecting one or more terms from each facet. A faceted structure is used in preference to a single tree because HAO activities vary independently along vehicle, altitude, mission, phase, regime and duration, and a single hierarchy would force arbitrary precedence between them.",
    "scopeExclusion": "Space vehicles - orbital, suborbital, launch and re-entry - are out of scope throughout. They are addressed by the Space Transport Operations Task Force as a separate work stream."
  }
});
