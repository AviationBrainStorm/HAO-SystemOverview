/* HAO Navigator data part — vehicle-classes
   Root: dataset   Mount: vehicleClasses
   Schema: schemas/parts/vehicle-classes.schema.json
   One record per vehicle class. Add a class here and it appears in every view.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "vehicle-classes",
  "root": "dataset",
  "mount": "vehicleClasses",
  "schema": "schemas/parts/vehicle-classes.schema.json",
  "payload": [
    {
      "id": "VC-LTA-BALLOON",
      "name": "LTA-HAPS - Stratospheric balloon",
      "shortName": "LTA (balloon)",
      "liftPrinciple": "Aerostatic (buoyant)",
      "crewing": "Uncrewed, attended autonomous fleet",
      "typicalFloatFt": [
        50000,
        68000
      ],
      "controlAuthority": "Altitude-only; lateral navigation by selecting wind layers. Trajectory is a probability distribution rather than a deterministic 4D path.",
      "enduranceTypical": "Weeks to ~1 year",
      "exemplars": [
        "Loon (Alphabet)",
        "Aerostar Thunderhead",
        "World View Stratollite"
      ],
      "regulatoryAnchor": "Annex 2, Appendix 5 (unmanned free balloons); Annex 7; JARUS CS-HAPS Section 3 (LTA airship) / future LTA balloon issue",
      "colour": "#f2a541",
      "notes": "Free ascent with no lateral control during initial climb. Fleet-managed, exception-centric operations; one mission control may manage many craft."
    },
    {
      "id": "VC-LTA-AIRSHIP",
      "name": "LTA-HAPS - Powered stratospheric airship",
      "shortName": "LTA (airship)",
      "liftPrinciple": "Aerostatic with propulsion",
      "crewing": "Uncrewed, remotely supervised",
      "typicalFloatFt": [
        55000,
        70000
      ],
      "controlAuthority": "Powered station-keeping with limited airspeed margin against stratospheric winds; deterministic but low-performance 4D intent.",
      "enduranceTypical": "Weeks to months",
      "exemplars": [
        "Sceye",
        "Thales Stratobus (concept)",
        "LTA airship class per JARUS CS-HAPS Section 3"
      ],
      "regulatoryAnchor": "Annex 2; Annex 7; JARUS CS-HAPS Section 3; EASA CS-31GB Subpart C references",
      "colour": "#e0654f",
      "notes": "Better redeployment agility than balloons; suited to rapid disaster-response repositioning."
    },
    {
      "id": "VC-HTA-HAPS",
      "name": "HTA-HAPS - Solar-electric fixed-wing",
      "shortName": "HTA-HAPS (fixed wing)",
      "liftPrinciple": "Aerodynamic (solar-electric propulsion)",
      "crewing": "Uncrewed (RPAS), remotely piloted / highly automated",
      "typicalFloatFt": [
        55000,
        70000
      ],
      "controlAuthority": "Full 3D control authority but very low true airspeed and thin performance margins; time-dependent performance driven by battery state of charge and solar cycle.",
      "enduranceTypical": "Days to months (67-day record demonstrated)",
      "exemplars": [
        "AALTO Zephyr (Airbus)",
        "BAE Systems / Prismatic PHASA-35",
        "Airbus Strat-Observer payload host"
      ],
      "regulatoryAnchor": "Annex 2; Annex 6 Part IV / RPAS provisions; Annex 8; JARUS CS-HAPS Sections 1-2 (HTA fixed wing)",
      "colour": "#4fa3e0",
      "notes": "AALTO conducted 13+ day stratospheric operations above 60,000 ft from AALTOPORT, Laikipia County, Kenya, under a bespoke regulatory pathway agreed with the Kenya Civil Aviation Authority and Kenya Space Agency."
    },
    {
      "id": "VC-SST",
      "name": "Supersonic transport aircraft",
      "shortName": "Supersonic",
      "liftPrinciple": "Aerodynamic (high thrust, high speed)",
      "crewing": "Crewed (flight crew on board)",
      "typicalFloatFt": [
        51000,
        60000
      ],
      "controlAuthority": "Full 4D control authority; very high closure rates and long turn radii; limited ability to level off or hold at intermediate levels during acceleration.",
      "enduranceTypical": "Hours (point-to-point sectors)",
      "exemplars": [
        "Boom Overture (in development)",
        "Historic Concorde operations FL500-FL600"
      ],
      "regulatoryAnchor": "Annex 2; Annex 6 Part I; Annex 8; Annex 16 (noise/sonic boom); PANS-ATM Doc 4444; Doc 7030 regional supplementary procedures",
      "colour": "#8f7fe8",
      "notes": "Supersonic operations are the principal crewed HAO use case. They interact with conventional traffic far more intensively than HAPS because they climb through, cruise adjacent to, and descend back into dense flows within a single sector."
    }
  ]
});
