/* HAO Navigator data part — scenarios-supersonic
   Root: dataset   Mount: scenarios
   Schema: schemas/parts/scenarios.schema.json
   Supersonic transport scenarios.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "scenarios-supersonic",
  "root": "dataset",
  "mount": "scenarios",
  "schema": "schemas/parts/scenarios.schema.json",
  "payload": [
    {
      "id": "SC-SST-01",
      "vehicleClassId": "VC-SST",
      "phaseId": "PH-LAUNCH",
      "name": "Supersonic aircraft climb and transonic acceleration",
      "useCases": [
        "UC-TRANSPORT"
      ],
      "narrative": "A crewed supersonic transport climbs through conventional flows and accelerates through the transonic region. It cannot readily be held at intermediate levels during acceleration and its closure rates against subsonic traffic are unlike anything current separation minima were designed for.",
      "altitudeBandFt": [
        0,
        55000
      ],
      "trajectory": [
        {
          "t": 0.04,
          "altFt": 0,
          "label": "Departure",
          "note": "Conventional aerodrome operation."
        },
        {
          "t": 0.2,
          "altFt": 20000,
          "label": "Subsonic climb",
          "note": "Integrated into normal departure flows."
        },
        {
          "t": 0.4,
          "altFt": 33000,
          "label": "Crossing RVSM flows",
          "note": "Climb through the densest levels with high vertical rate."
        },
        {
          "t": 0.6,
          "altFt": 41000,
          "label": "Acceleration point",
          "note": "Acceleration typically commenced offshore for sonic boom reasons; cannot easily be interrupted."
        },
        {
          "t": 0.82,
          "altFt": 49000,
          "label": "Transonic transition",
          "note": "High closure rates; long turn radii reduce tactical options."
        },
        {
          "t": 1.0,
          "altFt": 54000,
          "label": "Approaching cruise",
          "note": "Entering the HAO transition layer above the current civil ceiling."
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
          "atT": 0.44,
          "altFt": 36000,
          "label": "Opposite-direction jet",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.72,
          "altFt": 45000,
          "label": "Business jet at FL450",
          "conflictRisk": "high"
        }
      ],
      "atsInteraction": {
        "mode": "Fully ATC-managed with dedicated supersonic procedures",
        "description": "Supersonic operations are the crewed HAO case, and they are the one that loads conventional ATC most heavily, because the whole interaction with dense traffic happens inside a single sector's timescale rather than over hours.",
        "responsibilities": [
          "ANSP: protected climb and acceleration profiles; revised longitudinal minima; boom-aware routing.",
          "Operator: declare acceleration point and profile; comply with environmental constraints on overland boom."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-AIRSPACE-RES",
        "SVC-STRAT-DECONF",
        "SVC-MET",
        "SVC-AERODROME"
      ],
      "cns": {
        "communication": "Conventional VHF and CPDLC with a flight crew on board - the only HAO class where this holds.",
        "navigation": "PBN with high-speed performance; route design constrained by sonic boom footprint.",
        "surveillance": "SSR/ADS-B; update rates and tracker tuning must cope with high ground speeds."
      },
      "equipage": [
        "Conventional certified transport avionics suite",
        "ACAS, with validity to be re-examined at HAO closure rates and separations",
        "ADS-B Out with high-speed performance",
        "Boom-management flight management functionality"
      ],
      "informationRequirements": [
        "Declared acceleration and deceleration points and profiles",
        "Boom footprint prediction as a planning input",
        "Speed schedule as part of the trajectory, not just lateral and vertical profile",
        "Regional supplementary procedures applicable to the route"
      ],
      "provisionGaps": [
        "GAP-SST-ACCEL",
        "GAP-SST-ENV",
        "GAP-VERT-SEP",
        "GAP-AIRSPACE-CLASS"
      ],
      "mapping": {
        "gatmocComponents": [
          "TS",
          "CM",
          "AOM",
          "DCB",
          "AO"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-EFFICIENCY",
          "KPA-ENV",
          "KPA-CAPACITY",
          "KPA-PREDICTABILITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-ACCESS",
          "GP-HUMAN"
        ],
        "ganpLayers": [
          "GANP-L2",
          "GANP-L3"
        ],
        "asbuThreads": [
          "ASBU-FRTO",
          "ASBU-TBO",
          "ASBU-ASUR",
          "ASBU-NOPS"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-CNS",
          "BBB-AOP"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 5,
        "ATMOPSP": 5,
        "RPASP": 0,
        "FLTOPSP": 5,
        "AAMSG": 1,
        "ADOP": 3,
        "SMP": 3,
        "IMP": 3,
        "CNSP": 4,
        "METP": 3,
        "SARP_SAR": 2,
        "AVSECP": 2,
        "AIRP": 4,
        "GANPSG": 3,
        "GASPSG": 3,
        "TFP": 1,
        "LEGAL": 2
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 40.6,
            "lon": -73.8,
            "label": "Departure",
            "altFt": 0
          },
          {
            "lat": 41.4,
            "lon": -71.0,
            "label": "Subsonic climb",
            "altFt": 20000
          },
          {
            "lat": 42.4,
            "lon": -67.0,
            "label": "Crossing RVSM flows",
            "altFt": 33000
          },
          {
            "lat": 43.6,
            "lon": -61.0,
            "label": "Acceleration point",
            "altFt": 41000,
            "note": "Acceleration commenced offshore for sonic boom reasons."
          },
          {
            "lat": 45.0,
            "lon": -53.0,
            "label": "Transonic transition",
            "altFt": 49000
          },
          {
            "lat": 46.6,
            "lon": -44.0,
            "label": "Approaching cruise",
            "altFt": 54000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 3,
            "from": "FIR-USA",
            "to": "FIR-GDR",
            "type": "oceanic",
            "note": "Acceleration point placed beyond the coast; the boom footprint constrains where this can occur."
          }
        ],
        "note": "The whole interaction with dense traffic happens inside a single sector's timescale, not over hours."
      }
    },
    {
      "id": "SC-SST-02",
      "vehicleClassId": "VC-SST",
      "phaseId": "PH-CRUISE",
      "name": "Supersonic oceanic cruise in the HAO transition layer",
      "useCases": [
        "UC-TRANSPORT"
      ],
      "narrative": "Cruise between roughly FL510 and FL600 over ocean, above conventional traffic but inside the layer where HAPS also operate and where no vertical separation scheme currently exists.",
      "altitudeBandFt": [
        45000,
        62000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 54000,
          "label": "Cruise entry",
          "note": "Above the certified ceiling of current civil transports."
        },
        {
          "t": 0.25,
          "altFt": 56000,
          "label": "Cruise-climb",
          "note": "Supersonic aircraft cruise-climb as fuel burns off, which existing level-based structures do not accommodate."
        },
        {
          "t": 0.5,
          "altFt": 58000,
          "label": "Mid-ocean",
          "note": "No ground surveillance or VHF; space-based ADS-B and satellite communication only."
        },
        {
          "t": 0.72,
          "altFt": 59500,
          "label": "Passing HAPS levels",
          "note": "Shares the layer with slow HAPS traffic - the extreme opposite of the performance spectrum."
        },
        {
          "t": 0.9,
          "altFt": 60000,
          "label": "Top of cruise",
          "note": "Vertical separation from HAPS is undefined at these levels."
        },
        {
          "t": 1.0,
          "altFt": 59000,
          "label": "Cruise exit",
          "note": "Preparing deceleration and descent."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 50000,
          "toFt": 62000,
          "label": "HAPS traffic in the same layer",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "Oceanic track system below",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.58,
          "altFt": 57000,
          "label": "LTA-HAPS at float",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.8,
          "altFt": 60500,
          "label": "Fixed-wing HAPS",
          "conflictRisk": "high"
        }
      ],
      "atsInteraction": {
        "mode": "Procedural / oceanic, with cooperative interface to HAO users",
        "description": "This is the sharpest interoperability problem in HAO. A vehicle moving at over 1000 kt and a vehicle moving at tens of knots must be separated in a layer with no ground surveillance, no agreed vertical separation minima, and two different traffic management philosophies - clearance-based on one side, cooperative on the other. Detect and avoid effectiveness cannot be assumed between aircraft at the extreme opposite ends of the performance spectrum, so a compatibility matrix between vehicle pairs will be needed and it will evolve as new types appear.",
        "responsibilities": [
          "ANSP: procedural separation and a defined bridge into the cooperative environment, converting flight plans into 4D intents.",
          "HAO operators: publish intent in a form the ANSP can consume and act on.",
          "Standards work: define priority rules where an ATC-controlled aircraft conflicts with a cooperative operator."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-COOP-SEP",
        "SVC-STRAT-DECONF",
        "SVC-SURV-DATA",
        "SVC-MET",
        "SVC-AUTH"
      ],
      "cns": {
        "communication": "Satellite voice and CPDLC; no VHF. Interface required to mission-control-mediated HAPS operators who have no flight deck.",
        "navigation": "PBN with cruise-climb profiles; oceanic track structures not designed for this altitude band.",
        "surveillance": "Space-based ADS-B; HAPS position may arrive as an operator data feed rather than a surveillance track."
      },
      "equipage": [
        "Satellite communication and CPDLC",
        "Space-based ADS-B compatible transponder",
        "Hybrid altimetry if pressure altitude alone proves insufficient at these levels",
        "Interface to consume cooperative HAO traffic information"
      ],
      "informationRequirements": [
        "Vertical separation scheme and usable flight levels above FL510",
        "Mutual intent visibility between clearance-based and cooperative users",
        "Vehicle-pair DAA compatibility matrix",
        "Space weather and radiation exposure data for a crewed high-altitude operation"
      ],
      "provisionGaps": [
        "GAP-VERT-SEP",
        "GAP-COOP-SEP",
        "GAP-SURV",
        "GAP-INTENT-EXCHANGE",
        "GAP-HAO-FLOOR",
        "GAP-SST-ACCEL",
        "GAP-MET",
        "GAP-COMMS"
      ],
      "mapping": {
        "gatmocComponents": [
          "CM",
          "AOM",
          "TS",
          "ATM_SDM",
          "AUO",
          "AIM"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-INTEROP",
          "KPA-EFFICIENCY",
          "KPA-CAPACITY",
          "KPA-ENV"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-GLOBAL",
          "GP-COLLAB",
          "GP-ACCESS"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2",
          "GANP-L3"
        ],
        "asbuThreads": [
          "ASBU-ASUR",
          "ASBU-COMI",
          "ASBU-TBO",
          "ASBU-SWIM",
          "ASBU-FRTO"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-CNS",
          "BBB-MET"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 5,
        "SASP": 5,
        "ATMOPSP": 4,
        "RPASP": 2,
        "FLTOPSP": 4,
        "AAMSG": 1,
        "ADOP": 0,
        "SMP": 4,
        "IMP": 4,
        "CNSP": 5,
        "METP": 4,
        "SARP_SAR": 2,
        "AVSECP": 3,
        "AIRP": 4,
        "GANPSG": 4,
        "GASPSG": 3,
        "TFP": 3,
        "LEGAL": 3
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 46.6,
            "lon": -44.0,
            "label": "Cruise entry",
            "altFt": 54000
          },
          {
            "lat": 48.4,
            "lon": -36.0,
            "label": "Cruise-climb",
            "altFt": 56000
          },
          {
            "lat": 50.0,
            "lon": -27.0,
            "label": "Mid-ocean",
            "altFt": 58000
          },
          {
            "lat": 51.2,
            "lon": -19.0,
            "label": "Passing HAPS levels",
            "altFt": 59500
          },
          {
            "lat": 51.8,
            "lon": -12.0,
            "label": "Top of cruise",
            "altFt": 60000
          },
          {
            "lat": 51.6,
            "lon": -7.0,
            "label": "Cruise exit",
            "altFt": 59000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 1,
            "from": "FIR-GDR",
            "to": "FIR-SHW",
            "type": "oceanic",
            "note": "No ground surveillance or VHF; space-based ADS-B and satellite communication only."
          },
          {
            "atIndex": 4,
            "from": "FIR-SHW",
            "to": "FIR-EUR",
            "type": "sovereign"
          }
        ],
        "note": "A vehicle at over 1000 kt and a vehicle at tens of knots must be separated in a layer with no agreed vertical separation minima and two different traffic management philosophies."
      }
    },
    {
      "id": "SC-SST-03",
      "vehicleClassId": "VC-SST",
      "phaseId": "PH-DESCENT",
      "name": "Supersonic deceleration and descent into conventional traffic",
      "useCases": [
        "UC-TRANSPORT"
      ],
      "narrative": "Deceleration from supersonic cruise and descent back into dense arrival flows, with a long, largely non-negotiable deceleration segment that must be planned rather than tactically managed.",
      "altitudeBandFt": [
        0,
        60000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 59000,
          "label": "Top of descent",
          "note": "Deceleration point fixed by boom constraints and by aircraft performance."
        },
        {
          "t": 0.2,
          "altFt": 51000,
          "label": "Deceleration",
          "note": "Long segment with limited ability to level off or hold."
        },
        {
          "t": 0.42,
          "altFt": 41000,
          "label": "Subsonic, entering RVSM",
          "note": "Rejoining conventional flows from above."
        },
        {
          "t": 0.62,
          "altFt": 30000,
          "label": "Crossing arrival flows",
          "note": "High energy state relative to surrounding traffic."
        },
        {
          "t": 0.84,
          "altFt": 12000,
          "label": "Terminal integration",
          "note": "Conventional arrival sequencing."
        },
        {
          "t": 1.0,
          "altFt": 0,
          "label": "Landing",
          "note": "Conventional aerodrome operation; noise constraints apply."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "RVSM arrival and en-route flows",
          "density": "high"
        },
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 18000,
          "label": "Terminal arrival streams",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.5,
          "altFt": 36000,
          "label": "Crossing en-route traffic",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.76,
          "altFt": 18000,
          "label": "Arrival stream merge",
          "conflictRisk": "high"
        }
      ],
      "atsInteraction": {
        "mode": "Fully ATC-managed",
        "description": "The deceleration segment behaves like a constrained, non-interruptible arrival that begins hundreds of miles out, which pushes coordination into the strategic and pre-tactical horizon and into the network planning layer.",
        "responsibilities": [
          "ANSP: pre-tactical slot and profile agreement; downstream sequencing that respects the deceleration constraint.",
          "Operator: firm top-of-descent and deceleration commitment; early notification of deviation."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-STRAT-DECONF",
        "SVC-AIRSPACE-RES",
        "SVC-MET"
      ],
      "cns": {
        "communication": "Transition from satellite to VHF and conventional ATC contact.",
        "navigation": "PBN arrival with speed schedule constraints.",
        "surveillance": "Re-acquisition by ground surveillance on entering coverage."
      },
      "equipage": [
        "Conventional arrival avionics and PBN capability",
        "ACAS",
        "Datalink for pre-tactical coordination"
      ],
      "informationRequirements": [
        "Agreed top-of-descent and deceleration profile",
        "Speed schedule in the shared trajectory",
        "Arrival slot coordinated well before the deceleration point",
        "Boom footprint compliance evidence for overland segments"
      ],
      "provisionGaps": [
        "GAP-SST-ACCEL",
        "GAP-SST-ENV",
        "GAP-VERT-SEP"
      ],
      "mapping": {
        "gatmocComponents": [
          "TS",
          "DCB",
          "CM",
          "AO",
          "AUO"
        ],
        "kpas": [
          "KPA-EFFICIENCY",
          "KPA-PREDICTABILITY",
          "KPA-SAFETY",
          "KPA-ENV",
          "KPA-CAPACITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-COLLAB",
          "GP-CONTINUITY"
        ],
        "ganpLayers": [
          "GANP-L2",
          "GANP-L3"
        ],
        "asbuThreads": [
          "ASBU-TBO",
          "ASBU-FRTO",
          "ASBU-NOPS"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AOP",
          "BBB-CNS"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 4,
        "ATMOPSP": 5,
        "RPASP": 0,
        "FLTOPSP": 5,
        "AAMSG": 1,
        "ADOP": 3,
        "SMP": 3,
        "IMP": 4,
        "CNSP": 3,
        "METP": 3,
        "SARP_SAR": 1,
        "AVSECP": 2,
        "AIRP": 3,
        "GANPSG": 3,
        "GASPSG": 3,
        "TFP": 1,
        "LEGAL": 2
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 51.6,
            "lon": -7.0,
            "label": "Top of descent",
            "altFt": 59000
          },
          {
            "lat": 51.4,
            "lon": -3.0,
            "label": "Deceleration",
            "altFt": 51000
          },
          {
            "lat": 51.3,
            "lon": 0.4,
            "label": "Subsonic, entering RVSM",
            "altFt": 41000
          },
          {
            "lat": 51.2,
            "lon": 1.6,
            "label": "Crossing arrival flows",
            "altFt": 30000
          },
          {
            "lat": 51.4,
            "lon": 0.8,
            "label": "Terminal integration",
            "altFt": 12000
          },
          {
            "lat": 51.47,
            "lon": -0.45,
            "label": "Landing",
            "altFt": 0
          }
        ],
        "firCrossings": [
          {
            "atIndex": 2,
            "from": "FIR-SHW",
            "to": "FIR-EUR",
            "type": "sovereign",
            "note": "Deceleration must complete before the overland segment for boom reasons."
          }
        ],
        "note": "The deceleration segment behaves like a constrained, non-interruptible arrival beginning hundreds of miles out."
      }
    }
  ]
});
