/* HAO Navigator data part — ontology-relations
   Root: ontology   Mount: relations
   Schema: schemas/parts/ontology-relations.schema.json
   Relations with domain, range and inverse.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ontology-relations",
  "root": "ontology",
  "mount": "relations",
  "schema": "schemas/parts/ontology-relations.schema.json",
  "payload": [
    {
      "id": "rel:part_of",
      "label": "part of",
      "domain": "bfo:Entity",
      "range": "bfo:Entity",
      "inverse": "rel:has_part"
    },
    {
      "id": "rel:has_part",
      "label": "has part",
      "domain": "bfo:Entity",
      "range": "bfo:Entity",
      "inverse": "rel:part_of"
    },
    {
      "id": "rel:participates_in",
      "label": "participates in",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:Process",
      "inverse": "rel:has_participant"
    },
    {
      "id": "rel:has_participant",
      "label": "has participant",
      "domain": "bfo:Process",
      "range": "bfo:IndependentContinuant",
      "inverse": "rel:participates_in"
    },
    {
      "id": "rel:bearer_of",
      "label": "bearer of",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:SpecificallyDependentContinuant",
      "inverse": "rel:inheres_in"
    },
    {
      "id": "rel:inheres_in",
      "label": "inheres in",
      "domain": "bfo:SpecificallyDependentContinuant",
      "range": "bfo:IndependentContinuant",
      "inverse": "rel:bearer_of"
    },
    {
      "id": "rel:realizes",
      "label": "realizes",
      "domain": "bfo:Process",
      "range": "bfo:RealizableEntity",
      "inverse": "rel:realized_in"
    },
    {
      "id": "rel:realized_in",
      "label": "realized in",
      "domain": "bfo:RealizableEntity",
      "range": "bfo:Process",
      "inverse": "rel:realizes"
    },
    {
      "id": "rel:occurs_in",
      "label": "occurs in",
      "domain": "bfo:Process",
      "range": "bfo:SiteBFO"
    },
    {
      "id": "rel:located_in",
      "label": "located in",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:SiteBFO"
    },
    {
      "id": "rel:concretizes",
      "label": "concretizes",
      "domain": "bfo:SpecificallyDependentContinuant",
      "range": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "rel:is_about",
      "label": "is about",
      "domain": "bfo:GenericallyDependentContinuant",
      "range": "bfo:Entity"
    },
    {
      "id": "rel:prescribes",
      "label": "prescribes",
      "domain": "bfo:GenericallyDependentContinuant",
      "range": "bfo:Process"
    },
    {
      "id": "rel:preceded_by",
      "label": "preceded by",
      "domain": "bfo:Occurrent",
      "range": "bfo:Occurrent"
    },
    {
      "id": "rel:has_quality",
      "label": "has quality",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:Quality"
    },
    {
      "id": "rel:regulates",
      "label": "regulates",
      "domain": "bfo:GenericallyDependentContinuant",
      "range": "bfo:Entity",
      "note": "Non-BFO convenience relation used for ICAO provisions."
    },
    {
      "id": "rel:mitigated_by",
      "label": "mitigated by",
      "domain": "bfo:Entity",
      "range": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "rel:owned_by",
      "label": "owned by",
      "domain": "bfo:Entity",
      "range": "bfo:Object",
      "note": "Work item to expert group assignment."
    }
  ]
});
