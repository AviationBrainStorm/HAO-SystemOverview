/* HAO Navigator data part — scenarios-mixed-regime
   Root: dataset   Mount: scenarios
   Schema: schemas/parts/scenarios.schema.json
   Mixed-regime and due-regard scenarios that span two traffic management philosophies.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "scenarios-mixed-regime",
  "root": "dataset",
  "mount": "scenarios",
  "schema": "schemas/parts/scenarios.schema.json",
  "payload": [
    {
      "id": "SC-MIX-01",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-ONSTATION",
      "name": "Mixed-regime encounter: cooperative HAPS versus ATC-controlled aircraft",
      "useCases": [
        "UC-CONNECT",
        "UC-TRANSPORT",
        "UC-STATE"
      ],
      "narrative": "A cooperative HAO operator and an ATC-controlled aircraft are in conflict in the transition layer. The ANSP acts as a special type of service provider, bridging into the cooperative environment by converting flight plans into 4D intents. This idea was researched between Loon and Airservices Australia for deconfliction between high altitude jets and Loon balloons at FL500.",
      "altitudeBandFt": [
        45000,
        66000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 62000,
          "label": "HAPS above ATC airspace",
          "note": "No conflict; cooperative regime."
        },
        {
          "t": 0.24,
          "altFt": 59500,
          "label": "Descending toward FIR upper limit",
          "note": "Airservices FIRs extend to FL600 in this reference case."
        },
        {
          "t": 0.46,
          "altFt": 58000,
          "label": "Enters ATC-managed airspace",
          "note": "ANSP converts the flight plan of the controlled aircraft into a 4D intent shared with the cooperative environment."
        },
        {
          "t": 0.62,
          "altFt": 57500,
          "label": "Conflict identified",
          "note": "Conflicts with ATC-controlled aircraft use a separate resolution scheme and priority rules from conflicts between cooperative players."
        },
        {
          "t": 0.8,
          "altFt": 61000,
          "label": "Resolution executed",
          "note": "The HAPS manoeuvres vertically; the controlled aircraft is not impacted."
        },
        {
          "t": 1.0,
          "altFt": 63000,
          "label": "Clear",
          "note": "Cooperative operators may deconflict among themselves even inside ATC-controlled airspace, provided ATC-managed traffic is not impacted."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 45000,
          "toFt": 60000,
          "label": "ATC-managed airspace (to FL600)",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 60000,
          "toFt": 66000,
          "label": "Cooperative HAO airspace",
          "density": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.62,
          "altFt": 57500,
          "label": "ATC-controlled high performance jet",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.34,
          "altFt": 61000,
          "label": "Second cooperative operator",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Hybrid: ANSP as a bridging service provider",
        "description": "The bridging model is the most concrete answer available today to the question of how the two regimes meet. It requires the ANSP to publish and consume operational intent, which is a genuinely new ATS function, and it requires agreed priority rules across the regime boundary.",
        "responsibilities": [
          "ANSP: convert flight plans to 4D intent, publish into the cooperative environment, retain separation responsibility for its controlled traffic.",
          "Cooperative operator: consume ANSP intent, accept priority rules favouring controlled traffic, execute the resolution.",
          "State: authorise the arrangement and define the priority rules."
        ]
      },
      "services": [
        "SVC-COOP-SEP",
        "SVC-ATC-SEP",
        "SVC-SURV-DATA",
        "SVC-STRAT-DECONF",
        "SVC-AUTH",
        "SVC-TFC-INFO"
      ],
      "cns": {
        "communication": "ANSP system to cooperative environment machine interface, plus conventional ATC communication with the controlled aircraft.",
        "navigation": "Vertical manoeuvre by the HAPS is the practical resolution manoeuvre.",
        "surveillance": "ANSP receives situational awareness data for HAO operations inside its controlled airspace, but not necessarily for operations above it."
      },
      "equipage": [
        "ANSP-side intent publication and consumption capability",
        "Operator-side DSS client and negotiation protocol",
        "Transponder for the HAPS while in ATC-managed airspace"
      ],
      "informationRequirements": [
        "Priority rules for cooperative versus controlled conflicts",
        "Agreed conversion of flight plan to 4D operational intent",
        "Data scope: the ANSP gets operations data inside the airspace it controls, and not above it",
        "Accountability record of who resolved which conflict, for occurrence investigation"
      ],
      "provisionGaps": [
        "GAP-COOP-SEP",
        "GAP-INTENT-EXCHANGE",
        "GAP-LIABILITY",
        "GAP-HAO-FLOOR",
        "GAP-AIRSPACE-CLASS",
        "GAP-SURV"
      ],
      "mapping": {
        "gatmocComponents": [
          "CM",
          "ATM_SDM",
          "AOM",
          "AIM",
          "TS"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-INTEROP",
          "KPA-PARTICIPATION",
          "KPA-CAPACITY",
          "KPA-ACCESS"
        ],
        "guidingPrinciples": [
          "GP-COLLAB",
          "GP-SAFETY",
          "GP-GLOBAL",
          "GP-HUMAN"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2"
        ],
        "asbuThreads": [
          "ASBU-FICE",
          "ASBU-SWIM",
          "ASBU-TBO",
          "ASBU-ASUR"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AIM",
          "BBB-CNS"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 5,
        "SASP": 5,
        "ATMOPSP": 5,
        "RPASP": 3,
        "FLTOPSP": 3,
        "AAMSG": 2,
        "ADOP": 0,
        "SMP": 4,
        "IMP": 5,
        "CNSP": 4,
        "METP": 2,
        "SARP_SAR": 1,
        "AVSECP": 3,
        "AIRP": 2,
        "GANPSG": 4,
        "GASPSG": 3,
        "TFP": 4,
        "LEGAL": 5
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -24.0,
            "lon": 132.0,
            "label": "HAPS above ATC airspace",
            "altFt": 62000
          },
          {
            "lat": -25.2,
            "lon": 134.4,
            "label": "Descending to FIR limit",
            "altFt": 59500
          },
          {
            "lat": -26.4,
            "lon": 136.8,
            "label": "Enters ATC airspace",
            "altFt": 58000
          },
          {
            "lat": -27.2,
            "lon": 138.6,
            "label": "Conflict identified",
            "altFt": 57500
          },
          {
            "lat": -27.8,
            "lon": 140.4,
            "label": "Resolution executed",
            "altFt": 61000
          },
          {
            "lat": -28.2,
            "lon": 142.0,
            "label": "Clear",
            "altFt": 63000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 2,
            "from": "FIR-MEL",
            "to": "FIR-MEL",
            "type": "regimeChange",
            "note": "Airservices FIRs extend to FL600. Crossing the level, not the boundary, changes the regime."
          }
        ],
        "note": "Researched between Loon and Airservices Australia for deconfliction between high altitude jets and Loon balloons at FL500."
      }
    },
    {
      "id": "SC-STATE-01",
      "vehicleClassId": "VC-HTA-HAPS",
      "phaseId": "PH-ONSTATION",
      "name": "Due-regard State operation alongside cooperative civil HAO traffic",
      "useCases": [
        "UC-STATE",
        "UC-MDA"
      ],
      "narrative": "A State aircraft operates in due regard, withholding identity, position and intent, while consuming cooperative data supplied by civil operators. Loon shared intent and position data with US surveillance operations under exactly this pattern.",
      "altitudeBandFt": [
        50000,
        68000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 60000,
          "label": "State aircraft on task",
          "note": "Operating in due regard; identity, position and intent not disclosed."
        },
        {
          "t": 0.24,
          "altFt": 62000,
          "label": "Consuming cooperative data",
          "note": "Receives data from operators whose State mandates or permits sharing with that State entity."
        },
        {
          "t": 0.48,
          "altFt": 61000,
          "label": "Civil platform nearby",
          "note": "The civil operator is unaware of the State aircraft's position and intent."
        },
        {
          "t": 0.7,
          "altFt": 63000,
          "label": "Selective cooperation",
          "note": "Multiple State entities may choose to deconflict cooperatively with each other while remaining in due regard toward all others."
        },
        {
          "t": 0.9,
          "altFt": 59000,
          "label": "Repositioning",
          "note": "Mutual proof of authorization governs who may see what, region by region."
        },
        {
          "t": 1.0,
          "altFt": 60000,
          "label": "Continuing",
          "note": "Sovereignty and national security preserved without losing safety benefit."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 50000,
          "toFt": 68000,
          "label": "Cooperative civil HAO traffic",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 55000,
          "toFt": 62000,
          "label": "Other State operations",
          "density": "low"
        },
        {
          "type": "crossing",
          "atT": 0.48,
          "altFt": 61000,
          "label": "Civil HAPS - one-way awareness",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.72,
          "altFt": 63000,
          "label": "Allied State aircraft - selective cooperation",
          "conflictRisk": "low"
        }
      ],
      "atsInteraction": {
        "mode": "Due regard, asymmetric information",
        "description": "The safety asymmetry is deliberate and legitimate, but it must be bounded. A framework of digital identity, mutual proof of authorization and a discovery and synchronisation service is what makes selective cooperation possible without compelling disclosure.",
        "responsibilities": [
          "State entity: operate in due regard; consume only data it is authorised to receive.",
          "Civil operator: share on a need-to-know basis, per the mandate of the sovereign authority.",
          "Sovereign authority: decide what must be shared with which State entities in its airspace."
        ]
      },
      "services": [
        "SVC-AUTH",
        "SVC-SURV-DATA",
        "SVC-COOP-SEP",
        "SVC-AIRSPACE-RES"
      ],
      "cns": {
        "communication": "Secure military systems; interface to the civil cooperative environment is read-mostly.",
        "navigation": "Undisclosed.",
        "surveillance": "One-way: the State entity sees civil traffic; civil traffic does not see the State entity."
      },
      "equipage": [
        "Credential set proving entitlement to receive data in a given sovereign region",
        "Interface to the discovery and synchronisation service",
        "Selective disclosure controls for allied cooperation"
      ],
      "informationRequirements": [
        "Region-by-region mapping of sovereign authority and public keys",
        "Rules on what civil operators must share, and with whom",
        "Bounded safety argument acknowledging the asymmetry",
        "Audit trail for authorised data access"
      ],
      "provisionGaps": [
        "GAP-AUTH-CROSSBORDER",
        "GAP-COOP-SEP",
        "GAP-LIABILITY",
        "GAP-SURV",
        "GAP-SMS"
      ],
      "mapping": {
        "gatmocComponents": [
          "ATM_SDM",
          "AOM",
          "CM",
          "AIM"
        ],
        "kpas": [
          "KPA-SECURITY",
          "KPA-SAFETY",
          "KPA-ACCESS",
          "KPA-PARTICIPATION"
        ],
        "guidingPrinciples": [
          "GP-SOVEREIGNTY",
          "GP-SAFETY",
          "GP-COLLAB"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2"
        ],
        "asbuThreads": [
          "ASBU-SWIM",
          "ASBU-ASUR"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-CNS"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 3,
        "ATMOPSP": 2,
        "RPASP": 2,
        "FLTOPSP": 1,
        "AAMSG": 1,
        "ADOP": 0,
        "SMP": 3,
        "IMP": 4,
        "CNSP": 4,
        "METP": 1,
        "SARP_SAR": 1,
        "AVSECP": 5,
        "AIRP": 1,
        "GANPSG": 2,
        "GASPSG": 2,
        "TFP": 5,
        "LEGAL": 5
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -8.0,
            "lon": 68.0,
            "label": "State aircraft on task",
            "altFt": 60000
          },
          {
            "lat": -9.2,
            "lon": 71.0,
            "label": "Consuming cooperative data",
            "altFt": 62000
          },
          {
            "lat": -10.8,
            "lon": 74.5,
            "label": "Civil platform nearby",
            "altFt": 61000
          },
          {
            "lat": -12.0,
            "lon": 78.0,
            "label": "Selective cooperation",
            "altFt": 63000
          },
          {
            "lat": -11.0,
            "lon": 81.0,
            "label": "Repositioning",
            "altFt": 59000
          },
          {
            "lat": -9.5,
            "lon": 83.5,
            "label": "Continuing",
            "altFt": 60000
          }
        ],
        "firCrossings": [],
        "dueRegard": true,
        "note": "Operating in due regard over the Indian Ocean. Loon shared intent and position data with US surveillance operations under exactly this pattern."
      }
    }
  ]
});
