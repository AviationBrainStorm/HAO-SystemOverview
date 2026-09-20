/* HAO Navigator data part — fir-regions
   Root: dataset   Mount: firRegions
   Schema: schemas/parts/fir-regions.schema.json
   Schematic FIR / sovereign region boxes for the plan view. Not for navigation.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "fir-regions",
  "root": "dataset",
  "mount": "firRegions",
  "schema": "schemas/parts/fir-regions.schema.json",
  "payload": [
    {
      "id": "FIR-OAK",
      "name": "Oakland Oceanic",
      "type": "oceanic",
      "bbox": [
        -180,
        -5,
        -125,
        60
      ],
      "note": "Very large oceanic FIR; no ground surveillance across most of it."
    },
    {
      "id": "FIR-NYO",
      "name": "New York Oceanic",
      "type": "oceanic",
      "bbox": [
        -72,
        15,
        -40,
        45
      ]
    },
    {
      "id": "FIR-SHW",
      "name": "Shanwick Oceanic",
      "type": "oceanic",
      "bbox": [
        -30,
        45,
        -10,
        61
      ]
    },
    {
      "id": "FIR-GDR",
      "name": "Gander Oceanic",
      "type": "oceanic",
      "bbox": [
        -51,
        45,
        -30,
        64
      ]
    },
    {
      "id": "FIR-SMA",
      "name": "Santa Maria Oceanic",
      "type": "oceanic",
      "bbox": [
        -40,
        25,
        -15,
        45
      ]
    },
    {
      "id": "FIR-DKR",
      "name": "Dakar Oceanic",
      "type": "oceanic",
      "bbox": [
        -30,
        -5,
        -15,
        20
      ]
    },
    {
      "id": "FIR-USA",
      "name": "United States (continental)",
      "type": "sovereign",
      "bbox": [
        -125,
        25,
        -67,
        49
      ],
      "note": "Upper Class E begins at FL600; ETM cooperative area concept applies above."
    },
    {
      "id": "FIR-CAN",
      "name": "Canada",
      "type": "sovereign",
      "bbox": [
        -141,
        49,
        -52,
        70
      ]
    },
    {
      "id": "FIR-EUR",
      "name": "Europe (composite)",
      "type": "sovereign",
      "bbox": [
        -10,
        36,
        30,
        60
      ],
      "note": "Class C typically above FL195; upper limits vary from FL660 to unlimited between States."
    },
    {
      "id": "FIR-NAF",
      "name": "North Africa (composite)",
      "type": "sovereign",
      "bbox": [
        -15,
        15,
        35,
        36
      ]
    },
    {
      "id": "FIR-NBO",
      "name": "Nairobi",
      "type": "sovereign",
      "bbox": [
        33,
        -5,
        42,
        5
      ],
      "note": "AALTOPORT, Laikipia County. Pathway agreed with the Kenya Civil Aviation Authority and Kenya Space Agency."
    },
    {
      "id": "FIR-JNB",
      "name": "Johannesburg",
      "type": "sovereign",
      "bbox": [
        16,
        -35,
        33,
        -22
      ]
    },
    {
      "id": "FIR-IND",
      "name": "India / Mumbai",
      "type": "sovereign",
      "bbox": [
        68,
        8,
        89,
        35
      ]
    },
    {
      "id": "FIR-IOC",
      "name": "Indian Ocean (high seas)",
      "type": "highSeas",
      "bbox": [
        45,
        -35,
        95,
        5
      ],
      "note": "No sovereign authority. Cooperative deconfliction must still function here."
    },
    {
      "id": "FIR-MEL",
      "name": "Melbourne",
      "type": "sovereign",
      "bbox": [
        112,
        -44,
        155,
        -26
      ],
      "note": "Airservices Australia FIRs extend to FL600."
    },
    {
      "id": "FIR-BNE",
      "name": "Brisbane",
      "type": "sovereign",
      "bbox": [
        136,
        -26,
        160,
        -9
      ]
    },
    {
      "id": "FIR-TYO",
      "name": "Tokyo",
      "type": "sovereign",
      "bbox": [
        128,
        25,
        148,
        46
      ]
    },
    {
      "id": "FIR-AKL",
      "name": "Auckland Oceanic",
      "type": "oceanic",
      "bbox": [
        157,
        -50,
        -170,
        -5
      ]
    }
  ]
});
