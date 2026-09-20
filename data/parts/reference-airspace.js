/* HAO Navigator data part — reference-airspace
   Root: dataset   Mount: referenceAirspace
   Schema: schemas/parts/reference-airspace.schema.json
   Altitude bands used as the vertical backdrop, plus the altimetry constraint note.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "reference-airspace",
  "root": "dataset",
  "mount": "referenceAirspace",
  "schema": "schemas/parts/reference-airspace.schema.json",
  "payload": {
    "bands": [
      {
        "id": "BAND-LOW",
        "label": "Lower / terminal airspace",
        "fromFt": 0,
        "toFt": 18000,
        "note": "Class B/C/D/E terminal and low en-route. Dense conventional traffic; launch and recovery interface."
      },
      {
        "id": "BAND-CLASSA",
        "label": "Conventional en-route (Class A / upper controlled)",
        "fromFt": 18000,
        "toFt": 41000,
        "note": "RVSM band FL290-FL410, 1000 ft vertical separation. Core commercial jet traffic."
      },
      {
        "id": "BAND-UPPER",
        "label": "Upper conventional (above RVSM)",
        "fromFt": 41000,
        "toFt": 51000,
        "note": "2000 ft vertical separation above FL410. Business jets, current civil ceiling ~FL510."
      },
      {
        "id": "BAND-TRANSITION",
        "label": "HAO transition layer",
        "fromFt": 51000,
        "toFt": 60000,
        "note": "Contested layer. No globally agreed HAO floor; likely State- and use-case dependent and possibly dynamic. Some States place HAO floor at FL550, some at FL600."
      },
      {
        "id": "BAND-HAO",
        "label": "Higher airspace (HAO core)",
        "fromFt": 60000,
        "toFt": 100000,
        "note": "Above conventional controlled airspace and below outer space. US Upper Class E begins FL600. Typical HAPS float band FL500-FL680."
      }
    ],
    "altimetryNote": "Pressure altimeter sensitivity degrades sharply with altitude (approx. 27.3 ft/hPa at sea level, 116.7 ft/hPa at FL410, 496.7 ft/hPa at FL710, 2006 ft/hPa at FL1000). Preserving RVSM-equivalent worst-case separation implies increasing vertical separation minima with altitude and yields only about 17 usable flight levels between FL530 and FL1000 on pressure altimetry alone. A hybrid pressure/GNSS/inertial vertical reference is likely required, with significant system safety assurance consequences for separation, altitude reporting, surveillance and ACAS."
  }
});
