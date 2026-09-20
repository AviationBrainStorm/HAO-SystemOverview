/* HAO Navigator data part — ontology-meta
   Root: ontology   Mount: meta
   Schema: schemas/parts/ontology-meta.schema.json
   Ontology identity and upper-ontology declaration.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ontology-meta",
  "root": "ontology",
  "mount": "meta",
  "schema": "schemas/parts/ontology-meta.schema.json",
  "payload": {
    "ontologyId": "HAO-ONT",
    "title": "Higher Airspace Operations Ontology (BFO-conformant)",
    "version": "0.9.0",
    "upperOntology": "Basic Formal Ontology (BFO 2.0 / ISO/IEC 21838-2)",
    "midLevel": [
      "Information Artifact Ontology (IAO) for information content entities",
      "Common Core Ontologies patterns for agents, artefacts and events"
    ],
    "namespace": "https://icao.int/hao/ont#",
    "designNote": "Every HAO class is asserted as a subclass of exactly one BFO class. The most common modelling error in aviation ontologies is to conflate a vehicle (independent continuant), the role it plays (specifically dependent continuant), the mission it participates in (occurrent), and the plan describing it (generically dependent continuant). Those four are kept strictly separate here."
  }
});
