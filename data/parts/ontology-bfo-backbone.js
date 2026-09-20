/* HAO Navigator data part — ontology-bfo-backbone
   Root: ontology   Mount: bfoBackbone
   Schema: schemas/parts/ontology-bfo-backbone.schema.json
   The BFO classes the domain specialises.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ontology-bfo-backbone",
  "root": "ontology",
  "mount": "bfoBackbone",
  "schema": "schemas/parts/ontology-bfo-backbone.schema.json",
  "payload": [
    {
      "id": "bfo:Entity",
      "label": "Entity",
      "parent": null
    },
    {
      "id": "bfo:Continuant",
      "label": "Continuant",
      "parent": "bfo:Entity",
      "note": "Persists through time, retaining identity."
    },
    {
      "id": "bfo:Occurrent",
      "label": "Occurrent",
      "parent": "bfo:Entity",
      "note": "Unfolds in time; has temporal parts."
    },
    {
      "id": "bfo:IndependentContinuant",
      "label": "Independent continuant",
      "parent": "bfo:Continuant"
    },
    {
      "id": "bfo:MaterialEntity",
      "label": "Material entity",
      "parent": "bfo:IndependentContinuant"
    },
    {
      "id": "bfo:Object",
      "label": "Object",
      "parent": "bfo:MaterialEntity"
    },
    {
      "id": "bfo:ObjectAggregate",
      "label": "Object aggregate",
      "parent": "bfo:MaterialEntity"
    },
    {
      "id": "bfo:ImmaterialEntity",
      "label": "Immaterial entity",
      "parent": "bfo:IndependentContinuant"
    },
    {
      "id": "bfo:SiteBFO",
      "label": "Site",
      "parent": "bfo:ImmaterialEntity"
    },
    {
      "id": "bfo:SpatialRegion",
      "label": "Spatial region",
      "parent": "bfo:ImmaterialEntity"
    },
    {
      "id": "bfo:SpecificallyDependentContinuant",
      "label": "Specifically dependent continuant",
      "parent": "bfo:Continuant"
    },
    {
      "id": "bfo:Quality",
      "label": "Quality",
      "parent": "bfo:SpecificallyDependentContinuant"
    },
    {
      "id": "bfo:RealizableEntity",
      "label": "Realizable entity",
      "parent": "bfo:SpecificallyDependentContinuant"
    },
    {
      "id": "bfo:Role",
      "label": "Role",
      "parent": "bfo:RealizableEntity"
    },
    {
      "id": "bfo:Disposition",
      "label": "Disposition",
      "parent": "bfo:RealizableEntity"
    },
    {
      "id": "bfo:Function",
      "label": "Function",
      "parent": "bfo:Disposition"
    },
    {
      "id": "bfo:GenericallyDependentContinuant",
      "label": "Generically dependent continuant",
      "parent": "bfo:Continuant"
    },
    {
      "id": "bfo:Process",
      "label": "Process",
      "parent": "bfo:Occurrent"
    },
    {
      "id": "bfo:ProcessBoundary",
      "label": "Process boundary",
      "parent": "bfo:Occurrent"
    },
    {
      "id": "bfo:TemporalRegion",
      "label": "Temporal region",
      "parent": "bfo:Occurrent"
    },
    {
      "id": "bfo:SpatiotemporalRegion",
      "label": "Spatiotemporal region",
      "parent": "bfo:Occurrent"
    }
  ]
});
