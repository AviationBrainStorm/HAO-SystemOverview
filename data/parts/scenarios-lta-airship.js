/* HAO Navigator data part — scenarios-lta-airship
   Root: dataset   Mount: scenarios
   Schema: schemas/parts/scenarios.schema.json
   Powered stratospheric airship scenarios.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "scenarios-lta-airship",
  "root": "dataset",
  "mount": "scenarios",
  "schema": "schemas/parts/scenarios.schema.json",
  "payload": [
    {
      "id": "SC-LTAA-01",
      "vehicleClassId": "VC-LTA-AIRSHIP",
      "phaseId": "PH-LAUNCH",
      "name": "Powered stratospheric airship ascent and station acquisition",
      "useCases": [
        "UC-CONNECT",
        "UC-EO",
        "UC-MDA"
      ],
      "narrative": "A powered LTA platform ascends under partial control and acquires a designated station. Unlike a free balloon it can be given a deterministic, if slow, 4D intent, which changes the deconfliction problem materially.",
      "altitudeBandFt": [
        0,
        68000
      ],
      "trajectory": [
        {
          "t": 0.03,
          "altFt": 0,
          "label": "Launch",
          "note": "Launch from a prepared site with protected surfaces and coordinated windows."
        },
        {
          "t": 0.16,
          "altFt": 20000,
          "label": "Powered climb",
          "note": "Some lateral control available, unlike a free balloon."
        },
        {
          "t": 0.34,
          "altFt": 35000,
          "label": "Crossing jet band",
          "note": "ATC separation with a genuinely negotiable trajectory."
        },
        {
          "t": 0.56,
          "altFt": 48000,
          "label": "Above conventional flows",
          "note": "Performance margin thins rapidly with altitude."
        },
        {
          "t": 0.78,
          "altFt": 60000,
          "label": "HAO floor",
          "note": "Transition from ATC-managed to cooperative regime."
        },
        {
          "t": 1.0,
          "altFt": 66000,
          "label": "Station acquired",
          "note": "Powered station-keeping against stratospheric winds."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 18000,
          "label": "Terminal traffic",
          "density": "high"
        },
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "RVSM flows",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.36,
          "altFt": 36000,
          "label": "Airliner crossing",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.84,
          "altFt": 62000,
          "label": "Other HAO traffic",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "ATC-managed climb transitioning to cooperative",
        "description": "Because the airship can accept and fly a clearance, conventional ATC integration is more tractable than for a balloon, but its very low airspeed means clearances must account for extremely long compliance times.",
        "responsibilities": [
          "ANSP: clearance-based separation with realistic compliance expectations for a low-performance vehicle.",
          "Operator: publish achievable rates of climb and turn; declare performance limits as a function of altitude and battery state."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-COOP-SEP",
        "SVC-AIRSPACE-RES",
        "SVC-MET",
        "SVC-AERODROME"
      ],
      "cns": {
        "communication": "Mission control mediated with data link; capable of acknowledging and executing clearances, but with long latency between instruction and effect.",
        "navigation": "GNSS-based with powered course-keeping; station-keeping performance is the meaningful navigation specification.",
        "surveillance": "ADS-B Out plus operator position feed."
      },
      "equipage": [
        "ADS-B Out and SSR transponder",
        "GNSS with redundancy and altimetry suite",
        "C2 link with declared performance and redundancy",
        "Controlled descent capability"
      ],
      "informationRequirements": [
        "Performance envelope as a function of altitude and energy state",
        "Achievable rate of climb and turn radius for clearance design",
        "Station geometry and expected duration",
        "Authorization evidence for every overflown State"
      ],
      "provisionGaps": [
        "GAP-AIRWORTHINESS",
        "GAP-HAO-FLOOR",
        "GAP-FPL-CODES",
        "GAP-COMMS",
        "GAP-LAUNCH-SITE"
      ],
      "mapping": {
        "gatmocComponents": [
          "AOM",
          "TS",
          "CM",
          "AO",
          "AUO"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-EFFICIENCY",
          "KPA-ACCESS",
          "KPA-PREDICTABILITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-ACCESS",
          "GP-COLLAB"
        ],
        "ganpLayers": [
          "GANP-L2",
          "GANP-L4"
        ],
        "asbuThreads": [
          "ASBU-FICE",
          "ASBU-NAVS",
          "ASBU-COMI"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-CNS",
          "BBB-AOP"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 4,
        "ATMOPSP": 4,
        "RPASP": 5,
        "FLTOPSP": 3,
        "AAMSG": 2,
        "ADOP": 4,
        "SMP": 3,
        "IMP": 3,
        "CNSP": 4,
        "METP": 3,
        "SARP_SAR": 2,
        "AVSECP": 3,
        "AIRP": 5,
        "GANPSG": 2,
        "GASPSG": 2,
        "TFP": 3,
        "LEGAL": 3
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 43.6,
            "lon": 1.4,
            "label": "Launch",
            "altFt": 0
          },
          {
            "lat": 43.0,
            "lon": 2.6,
            "label": "Powered climb",
            "altFt": 20000
          },
          {
            "lat": 42.2,
            "lon": 4.2,
            "label": "Crossing jet band",
            "altFt": 35000
          },
          {
            "lat": 41.2,
            "lon": 6.4,
            "label": "Above conventional flows",
            "altFt": 48000
          },
          {
            "lat": 40.0,
            "lon": 9.0,
            "label": "HAO floor",
            "altFt": 60000
          },
          {
            "lat": 38.8,
            "lon": 11.8,
            "label": "Station acquired",
            "altFt": 66000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 3,
            "from": "FIR-EUR",
            "to": "FIR-EUR",
            "type": "internal",
            "note": "Multiple European FIRs with differing upper limits, from FL660 to unlimited."
          }
        ],
        "note": "A powered platform can accept and fly a clearance, so its ground track is genuinely negotiable - unlike a free balloon."
      }
    },
    {
      "id": "SC-LTAA-02",
      "vehicleClassId": "VC-LTA-AIRSHIP",
      "phaseId": "PH-ONSTATION",
      "name": "Rapid redeployment of a powered LTA platform for disaster response",
      "useCases": [
        "UC-DISASTER",
        "UC-CONNECT",
        "UC-MDA"
      ],
      "narrative": "An event occurs and the platform is retasked in flight to a new area to restore cellular coverage and provide multispectral and infrared observation. Airspace access must be granted at short notice, potentially by a State that did not originally authorise the operation.",
      "altitudeBandFt": [
        50000,
        68000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 64000,
          "label": "On original station",
          "note": "Routine mission."
        },
        {
          "t": 0.14,
          "altFt": 63000,
          "label": "Retasking",
          "note": "Mission assigned while airborne; no pre-filed plan for the new area."
        },
        {
          "t": 0.34,
          "altFt": 60000,
          "label": "Transit at HAO levels",
          "note": "Cooperative deconfliction with other operators en route."
        },
        {
          "t": 0.56,
          "altFt": 58000,
          "label": "Boundary crossing",
          "note": "Short-notice authorization required from the receiving State."
        },
        {
          "t": 0.78,
          "altFt": 61000,
          "label": "Arriving over incident",
          "note": "Coordination with emergency services and possibly with firefighting aircraft far below."
        },
        {
          "t": 1.0,
          "altFt": 62000,
          "label": "On new station",
          "note": "Comms relay plus infrared fire progression monitoring with real-time downlink."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 55000,
          "toFt": 68000,
          "label": "Other HAO traffic",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 15000,
          "label": "Firefighting and emergency aircraft below",
          "density": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.4,
          "altFt": 59000,
          "label": "Third-party HAPS",
          "conflictRisk": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.86,
          "altFt": 61500,
          "label": "Second responder platform",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Cooperative, with expedited State authorization",
        "description": "Disaster response exposes the weakest link in the current arrangement: authorization is a slow, bilateral, paper process, while the operational need is measured in hours.",
        "responsibilities": [
          "State: expedited authorization pathway and priority handling.",
          "Operator: declare revised intent immediately; deconflict with other responders.",
          "Service provider: extend deconfliction service into the new sovereign region only if authorised there."
        ]
      },
      "services": [
        "SVC-AUTH",
        "SVC-STRAT-DECONF",
        "SVC-COOP-SEP",
        "SVC-AIRSPACE-RES",
        "SVC-AIM",
        "SVC-ALERT"
      ],
      "cns": {
        "communication": "Payload provides VHF/UHF relay and cellular extension for responders; the platform's own C2 remains mission-control mediated.",
        "navigation": "Powered repositioning with declared arrival time bounds.",
        "surveillance": "Intent republication on retasking; State needs immediate visibility of an operation it may not have pre-approved."
      },
      "equipage": [
        "Multispectral and infrared sensor suite",
        "Wideband satellite downlink",
        "VHF/UHF repeater and cellular payload",
        "In-flight replanning capability"
      ],
      "informationRequirements": [
        "Revised operational intent published immediately on retasking",
        "Expedited authorization request and response",
        "Deconfliction with other responding HAO platforms",
        "Coordination data for emergency services and for aircraft operating below"
      ],
      "provisionGaps": [
        "GAP-AUTH-CROSSBORDER",
        "GAP-INTENT-EXCHANGE",
        "GAP-COOP-SEP",
        "GAP-LIABILITY",
        "GAP-MET"
      ],
      "mapping": {
        "gatmocComponents": [
          "AOM",
          "DCB",
          "ATM_SDM",
          "CM",
          "AIM"
        ],
        "kpas": [
          "KPA-FLEXIBILITY",
          "KPA-ACCESS",
          "KPA-SAFETY",
          "KPA-PARTICIPATION"
        ],
        "guidingPrinciples": [
          "GP-ACCESS",
          "GP-COLLAB",
          "GP-SOVEREIGNTY",
          "GP-CONTINUITY"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L3",
          "GANP-L4"
        ],
        "asbuThreads": [
          "ASBU-NOPS",
          "ASBU-SWIM",
          "ASBU-DAIM"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AIM",
          "BBB-SAR"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 3,
        "ATMOPSP": 3,
        "RPASP": 3,
        "FLTOPSP": 2,
        "AAMSG": 2,
        "ADOP": 1,
        "SMP": 3,
        "IMP": 4,
        "CNSP": 3,
        "METP": 4,
        "SARP_SAR": 4,
        "AVSECP": 3,
        "AIRP": 2,
        "GANPSG": 3,
        "GASPSG": 2,
        "TFP": 5,
        "LEGAL": 5
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 38.8,
            "lon": 11.8,
            "label": "Original station",
            "altFt": 64000
          },
          {
            "lat": 37.6,
            "lon": 13.4,
            "label": "Retasking",
            "altFt": 63000
          },
          {
            "lat": 36.2,
            "lon": 16.0,
            "label": "Transit at HAO levels",
            "altFt": 60000
          },
          {
            "lat": 34.6,
            "lon": 19.4,
            "label": "Boundary crossing",
            "altFt": 58000
          },
          {
            "lat": 32.8,
            "lon": 22.6,
            "label": "Arriving over incident",
            "altFt": 61000
          },
          {
            "lat": 31.8,
            "lon": 24.4,
            "label": "On new station",
            "altFt": 62000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 3,
            "from": "FIR-EUR",
            "to": "FIR-NAF",
            "type": "sovereign",
            "note": "Short-notice authorization required from a State that did not originally approve the operation."
          }
        ],
        "stationArea": {
          "lat": 31.8,
          "lon": 24.4,
          "radiusKm": 300
        },
        "note": "Disaster response exposes the weakest link: authorization is a slow bilateral process, while the operational need is measured in hours."
      }
    }
  ]
});
