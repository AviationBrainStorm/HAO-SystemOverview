/* HAO Navigator data part — ganp-layers
   Root: dataset   Mount: ganp.layers
   Schema: schemas/parts/ganp-layers.schema.json
   The four GANP layers.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ganp-layers",
  "root": "dataset",
  "mount": "ganp.layers",
  "schema": "schemas/parts/ganp-layers.schema.json",
  "payload": [
    {
      "id": "GANP-L1",
      "name": "Level 1 - Global Strategic",
      "note": "Vision, KPAs, performance ambitions, conceptual roadmap (Chapter 6 evolutionary steps)."
    },
    {
      "id": "GANP-L2",
      "name": "Level 2 - Global Technical",
      "note": "Basic Building Blocks (BBB) and Aviation System Block Upgrades (ASBU) threads."
    },
    {
      "id": "GANP-L3",
      "name": "Level 3 - Regional",
      "note": "Regional and sub-regional eANP alignment (PIRGs)."
    },
    {
      "id": "GANP-L4",
      "name": "Level 4 - National",
      "note": "State air navigation plans; HAO authorization pathways."
    }
  ]
});
