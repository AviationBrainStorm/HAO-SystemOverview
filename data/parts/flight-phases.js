/* HAO Navigator data part — flight-phases
   Root: dataset   Mount: flightPhases
   Schema: schemas/parts/flight-phases.schema.json
   Ordered design phases.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "flight-phases",
  "root": "dataset",
  "mount": "flightPhases",
  "schema": "schemas/parts/flight-phases.schema.json",
  "payload": [
    {
      "id": "PH-LAUNCH",
      "name": "Launch / ascent",
      "order": 1
    },
    {
      "id": "PH-TRANSIT",
      "name": "Transit through conventional traffic",
      "order": 2
    },
    {
      "id": "PH-ONSTATION",
      "name": "Established / on station in higher airspace",
      "order": 3
    },
    {
      "id": "PH-FLEET",
      "name": "Fleet station-keeping over an area",
      "order": 4
    },
    {
      "id": "PH-CRUISE",
      "name": "Higher airspace cruise (point to point)",
      "order": 5
    },
    {
      "id": "PH-DESCENT",
      "name": "Descent / recovery",
      "order": 6
    },
    {
      "id": "PH-CONTINGENCY",
      "name": "Contingency / uncontrolled descent",
      "order": 7
    }
  ]
});
