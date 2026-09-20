/* HAO Navigator data part — use-cases
   Root: dataset   Mount: useCases
   Schema: schemas/parts/use-cases.schema.json
   Socio-economic purposes an operation can serve.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "use-cases",
  "root": "dataset",
  "mount": "useCases",
  "schema": "schemas/parts/use-cases.schema.json",
  "payload": [
    {
      "id": "UC-CONNECT",
      "name": "Broadband and direct-to-device connectivity",
      "description": "Stratospheric cellular base stations ('cell towers in the sky') delivering 4G/5G/6G to underserved, rural, remote and maritime areas. Demonstrated by Loon in Kenya and by AALTO's UK-built D2D payload."
    },
    {
      "id": "UC-DISASTER",
      "name": "Disaster response and emergency communications",
      "description": "Rapid restoration of cellular coverage after infrastructure damage; airborne VHF/UHF repeater for ground crews; multispectral and infrared wildfire detection and progression monitoring with real-time downlink."
    },
    {
      "id": "UC-EO",
      "name": "Earth observation and environmental monitoring",
      "description": "Very high resolution imagery and live video from the stratosphere, atmospheric and climate research, agricultural monitoring, infrastructure inspection."
    },
    {
      "id": "UC-MDA",
      "name": "Maritime domain awareness and border monitoring",
      "description": "Persistent wide-area surveillance over sea and land borders, search and rescue support."
    },
    {
      "id": "UC-SCI",
      "name": "Scientific and atmospheric research",
      "description": "Stratospheric science campaigns, space weather and MET data collection relevant to HAO safety."
    },
    {
      "id": "UC-TRANSPORT",
      "name": "High-speed passenger and cargo transport",
      "description": "Supersonic point-to-point transport of people and goods using higher airspace flight levels."
    },
    {
      "id": "UC-STATE",
      "name": "State / due-regard operations",
      "description": "State aircraft operating in due regard, requiring the ability to withhold identity, position and intent while still consuming cooperative data."
    }
  ]
});
