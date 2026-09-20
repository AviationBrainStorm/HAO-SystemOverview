/* HAO Navigator data part — ontology-notes
   Root: ontology   Mount: modellingNotes
   Schema: schemas/parts/ontology-notes.schema.json
   Modelling decisions worth stating explicitly.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ontology-notes",
  "root": "ontology",
  "mount": "modellingNotes",
  "schema": "schemas/parts/ontology-notes.schema.json",
  "payload": [
    "Use case is a generically dependent continuant, not a process. Disaster response is a purpose that is declared, recorded and reasoned about independently of whether any flight has occurred.",
    "Cooperative separation is a process; the entitlement to perform it is a role; the rules that govern it are a generically dependent continuant. Keeping these apart is what lets the tool answer 'who is accountable' separately from 'what happened'.",
    "The HAO floor is not a quality of the airspace but a boundary of an airspace volume, and that volume may be time-indexed. This is deliberate: no globally set bottom flight level is expected, and the geometry may be dynamic.",
    "A fleet is an object aggregate, not an object. Regulating the fleet rather than the flight is the single largest structural departure from conventional aviation regulation that HAO forces.",
    "Space vehicles are excluded by definition at hao:HAOVehicle, because they do not derive lift from interaction with the atmosphere and therefore fall outside most of the Convention except as regards safe integration into airspace."
  ]
});
