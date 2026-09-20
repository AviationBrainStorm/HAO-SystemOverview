/* HAO Navigator data part — scenarios-lta-balloon
   Root: dataset   Mount: scenarios
   Schema: schemas/parts/scenarios.schema.json
   LTA balloon scenarios.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "scenarios-lta-balloon",
  "root": "dataset",
  "mount": "scenarios",
  "schema": "schemas/parts/scenarios.schema.json",
  "payload": [
    {
      "id": "SC-LTAB-01",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-LAUNCH",
      "name": "LTA balloon launch and free ascent through conventional traffic",
      "useCases": [
        "UC-CONNECT",
        "UC-DISASTER"
      ],
      "narrative": "The balloon is released from a launch site selected to minimise interaction with commercial traffic. Ascent is free, with no lateral control, taking roughly one to two hours to reach float. ATC provides separation during the climb and the operator reports at agreed altitudes, typically FL180, FL300 and float.",
      "altitudeBandFt": [
        0,
        60000
      ],
      "trajectory": [
        {
          "t": 0.02,
          "altFt": 0,
          "label": "Release",
          "note": "Launch approval obtained from the ANSP; discrete SSR code assigned no later than pre-launch approval."
        },
        {
          "t": 0.1,
          "altFt": 18000,
          "label": "FL180 report",
          "note": "First agreed reporting altitude. Transponder and ADS-B active."
        },
        {
          "t": 0.22,
          "altFt": 30000,
          "label": "FL300 report",
          "note": "Transiting the core commercial jet band; ATC applies prescribed separation."
        },
        {
          "t": 0.4,
          "altFt": 41000,
          "label": "Above RVSM",
          "note": "Leaves the RVSM band; 2000 ft vertical separation applies above FL410."
        },
        {
          "t": 0.62,
          "altFt": 51000,
          "label": "Above civil ceiling",
          "note": "Above the certified ceiling of current civil transport aircraft."
        },
        {
          "t": 0.85,
          "altFt": 60000,
          "label": "Enters higher airspace",
          "note": "Crosses the notional HAO floor; ATS service model changes."
        },
        {
          "t": 1.0,
          "altFt": 62000,
          "label": "Approaching float",
          "note": "Estimated elapsed time to pass 60,000 ft is a required notification element."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 18000,
          "label": "Terminal and low en-route traffic",
          "density": "high"
        },
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "RVSM commercial flows",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.24,
          "altFt": 35000,
          "label": "Crossing jet flow",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.45,
          "altFt": 45000,
          "label": "Business jet",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Fully ATC-managed",
        "description": "Conventional ATC separation applies throughout the climb. The operator is a participant in a controlled environment, communicating through a continuously staffed mission control rather than a flight deck.",
        "responsibilities": [
          "ANSP: assign discrete SSR code, grant launch approval, apply separation during ascent, coordinate with adjacent units.",
          "Operator: pre-launch notification typically not less than seven days ahead (some States accept six hours), NOTAM filing, launch-minus notification, immediate post-launch position report."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-AIRSPACE-RES",
        "SVC-AIM",
        "SVC-MET",
        "SVC-AERODROME"
      ],
      "cns": {
        "communication": "Telephone and electronic messaging between mission control and the ATS unit, available 24/7, with a declared primary and alternate means and an agreed failure procedure. No air-ground voice from the vehicle.",
        "navigation": "None in the lateral sense during free ascent. Vertical profile is a function of buoyancy and atmospheric conditions; trajectory prediction is meteorologically driven and probabilistic.",
        "surveillance": "Mode A/C or ADS-B transponder squawking the assigned code, radar-reflective material, omnidirectional flashing white LED. Operator provides a secured real-time tracking website for ANSP access."
      },
      "equipage": [
        "Mode A/C or ADS-B Out transponder, continuously on with assigned code",
        "GNSS positioning",
        "At least two independent redundant flight termination systems (envelope cutters)",
        "Parachute and safety tether keeping envelope and flight system as one during descent",
        "Radar-reflective material and high-visibility construction",
        "Omnidirectional flashing white LED, specified cycles per minute and NM visibility"
      ],
      "informationRequirements": [
        "Flight identification or project code name; classification and description",
        "SSR code / ADS-B identifier; operator name and contact details",
        "Launch site, estimated time of launch, number of launches and interval",
        "Expected direction of ascent and ascent rate; cruising (float) level(s) as pressure-altitude",
        "Estimated elapsed time to pass 60,000 ft or to reach float",
        "Estimated date and time of flight termination; planned impact/recovery area",
        "Updated launch information at approximately launch minus six hours"
      ],
      "provisionGaps": [
        "GAP-A2-APP5",
        "GAP-FPL-CODES",
        "GAP-LAUNCH-SITE",
        "GAP-MET",
        "GAP-AUTH-CROSSBORDER"
      ],
      "mapping": {
        "gatmocComponents": [
          "AOM",
          "AO",
          "CM",
          "TS",
          "AIM"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-PREDICTABILITY",
          "KPA-ACCESS",
          "KPA-CAPACITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-COLLAB",
          "GP-ACCESS"
        ],
        "ganpLayers": [
          "GANP-L2",
          "GANP-L4"
        ],
        "asbuThreads": [
          "ASBU-FICE",
          "ASBU-AMET",
          "ASBU-DAIM"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AIM",
          "BBB-MET",
          "BBB-AOP"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 4,
        "ATMOPSP": 5,
        "RPASP": 3,
        "FLTOPSP": 2,
        "AAMSG": 1,
        "ADOP": 4,
        "SMP": 3,
        "IMP": 3,
        "CNSP": 3,
        "METP": 4,
        "SARP_SAR": 2,
        "AVSECP": 1,
        "AIRP": 3,
        "GANPSG": 2,
        "GASPSG": 2,
        "TFP": 2,
        "LEGAL": 2
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -1.0,
            "lon": 36.9,
            "label": "Launch site",
            "altFt": 0,
            "note": "Launch site selected to minimise interaction with commercial traffic."
          },
          {
            "lat": -0.4,
            "lon": 37.6,
            "label": "FL180",
            "altFt": 18000
          },
          {
            "lat": 0.5,
            "lon": 38.8,
            "label": "FL300",
            "altFt": 30000
          },
          {
            "lat": 1.6,
            "lon": 40.4,
            "label": "Above RVSM",
            "altFt": 41000
          },
          {
            "lat": 2.8,
            "lon": 42.6,
            "label": "Above civil ceiling",
            "altFt": 51000
          },
          {
            "lat": 4.2,
            "lon": 45.5,
            "label": "Enters higher airspace",
            "altFt": 60000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 5,
            "from": "FIR-NBO",
            "to": "FIR-IOC",
            "type": "toHighSeas",
            "note": "Leaves sovereign airspace; authorization framework changes."
          }
        ],
        "note": "Free ascent from an equatorial launch site. Lateral drift is a consequence of wind, not of navigation."
      }
    },
    {
      "id": "SC-LTAB-02",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-TRANSIT",
      "name": "LTA balloon transit across FIR boundaries below and above the HAO floor",
      "useCases": [
        "UC-CONNECT",
        "UC-EO"
      ],
      "narrative": "The platform drifts across sovereign and oceanic FIRs, moving between altitudes to select wind layers. It may spend part of the transit below FL600 inside ATC-managed airspace and part above it. Position reporting is every two hours at or below FL600 and every 24 hours above FL600 unless otherwise agreed.",
      "altitudeBandFt": [
        45000,
        68000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 62000,
          "label": "Above HAO floor",
          "note": "Outside ATC-managed airspace in some FIRs, inside Class C in others."
        },
        {
          "t": 0.2,
          "altFt": 57000,
          "label": "Wind layer change",
          "note": "Descends into a favourable wind layer, re-entering ATC-managed airspace in some States."
        },
        {
          "t": 0.38,
          "altFt": 55000,
          "label": "FIR boundary",
          "note": "FIR boundary crossing notification to the receiving ATS unit; authorization must already be held for the overflown State."
        },
        {
          "t": 0.58,
          "altFt": 59500,
          "label": "Below FL600 floor coordination",
          "note": "Operator has coordinated an altitude floor (e.g. FL500) above which level changes need no further ATC coordination."
        },
        {
          "t": 0.78,
          "altFt": 65000,
          "label": "Climb above HAO floor",
          "note": "Reverts to 24-hourly position reporting."
        },
        {
          "t": 1.0,
          "altFt": 64000,
          "label": "Continuing transit",
          "note": "Rolling re-planning; the destination and termination point may still be undetermined."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 45000,
          "toFt": 51000,
          "label": "Upper business jet traffic",
          "density": "low"
        },
        {
          "type": "band",
          "fromFt": 55000,
          "toFt": 60000,
          "label": "Other HAO traffic in the transition layer",
          "density": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.3,
          "altFt": 56000,
          "label": "Second HAPS operator (cooperative)",
          "conflictRisk": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.66,
          "altFt": 59000,
          "label": "State aircraft in due regard",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Mixed: ATC-managed below the floor, cooperative above",
        "description": "The same flight alternates between an ATC-managed regime and a cooperative regime as it changes level and crosses States that classify upper airspace differently. This alternation within a single flight is the defining integration problem for LTA-HAPS.",
        "responsibilities": [
          "ANSP: provide separation or traffic information according to the applicable airspace class; act as a bridge into the cooperative environment by converting flight plans into 4D intents.",
          "Operator: hold authorization from every overflown State; provide FIR boundary crossing notifications; maintain rolling intent and position feeds."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-COOP-SEP",
        "SVC-STRAT-DECONF",
        "SVC-TFC-INFO",
        "SVC-SURV-DATA",
        "SVC-AUTH",
        "SVC-MET"
      ],
      "cns": {
        "communication": "Mission-control-mediated. Primary and alternate means declared per ANSP. No continuous air-ground voice; response is exception-driven.",
        "navigation": "Wind-layer selection using stratospheric wind forecasts. Predicted trajectory supplied with deviation ranges reflecting forecast uncertainty.",
        "surveillance": "Transponder/ADS-B where fitted and useful; operator-provided position service is in practice the primary surveillance source above ground coverage. Need-to-know data sharing so competitors and the public do not obtain position and intent."
      },
      "equipage": [
        "ADS-B Out and/or SSR transponder",
        "GNSS with redundancy",
        "Fleet management automation with multi-vehicle deconfliction",
        "Secure operational intent publication interface (discovery and synchronisation service)",
        "Digital identity credentials for mutual proof of authorization"
      ],
      "informationRequirements": [
        "Rolling 4D operational intent with containment confidence level",
        "Vehicle performance and manoeuvrability descriptors sufficient to set a deconfliction timeline",
        "Position reports every 2 hours at or below FL600, every 24 hours above FL600 unless otherwise specified",
        "Projected path for a defined forward window (e.g. 6 hours) and updates on significant deviation",
        "Proof of operator authorization and of service provider authorization, per sovereign region",
        "FIR boundary crossing estimates"
      ],
      "provisionGaps": [
        "GAP-HAO-FLOOR",
        "GAP-AIRSPACE-CLASS",
        "GAP-COOP-SEP",
        "GAP-INTENT-EXCHANGE",
        "GAP-SURV",
        "GAP-AUTH-CROSSBORDER",
        "GAP-COMMS",
        "GAP-VERT-SEP"
      ],
      "mapping": {
        "gatmocComponents": [
          "AOM",
          "CM",
          "DCB",
          "ATM_SDM",
          "AIM",
          "AUO"
        ],
        "kpas": [
          "KPA-INTEROP",
          "KPA-SAFETY",
          "KPA-FLEXIBILITY",
          "KPA-ACCESS",
          "KPA-SECURITY"
        ],
        "guidingPrinciples": [
          "GP-GLOBAL",
          "GP-COLLAB",
          "GP-SOVEREIGNTY",
          "GP-ACCESS"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2",
          "GANP-L3"
        ],
        "asbuThreads": [
          "ASBU-FICE",
          "ASBU-SWIM",
          "ASBU-TBO",
          "ASBU-ASUR",
          "ASBU-NOPS"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AIM",
          "BBB-CNS",
          "BBB-MET"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 5,
        "SASP": 5,
        "ATMOPSP": 4,
        "RPASP": 3,
        "FLTOPSP": 2,
        "AAMSG": 2,
        "ADOP": 1,
        "SMP": 3,
        "IMP": 5,
        "CNSP": 5,
        "METP": 4,
        "SARP_SAR": 2,
        "AVSECP": 4,
        "AIRP": 2,
        "GANPSG": 4,
        "GASPSG": 2,
        "TFP": 5,
        "LEGAL": 4
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 5.0,
            "lon": 50.0,
            "label": "Above HAO floor",
            "altFt": 62000
          },
          {
            "lat": 2.0,
            "lon": 58.0,
            "label": "Wind layer change",
            "altFt": 57000
          },
          {
            "lat": -2.0,
            "lon": 68.0,
            "label": "FIR boundary",
            "altFt": 55000
          },
          {
            "lat": -7.0,
            "lon": 80.0,
            "label": "Below FL600 coordination",
            "altFt": 59500
          },
          {
            "lat": -12.0,
            "lon": 95.0,
            "label": "Climb above HAO floor",
            "altFt": 65000
          },
          {
            "lat": -18.0,
            "lon": 112.0,
            "label": "Continuing transit",
            "altFt": 64000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 2,
            "from": "FIR-IOC",
            "to": "FIR-IND",
            "type": "sovereign",
            "note": "Authorization required from the receiving State for operator and service provider."
          },
          {
            "atIndex": 4,
            "from": "FIR-IOC",
            "to": "FIR-MEL",
            "type": "sovereign",
            "note": "Airservices FIRs extend to FL600; regime changes on crossing."
          }
        ],
        "note": "The defining LTA-HAPS problem: one flight alternating between ATC-managed and cooperative regimes as it changes level and crosses States that classify upper airspace differently."
      }
    },
    {
      "id": "SC-LTAB-03",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-ONSTATION",
      "name": "LTA balloon established at float in a higher airspace zone",
      "useCases": [
        "UC-CONNECT",
        "UC-EO",
        "UC-SCI"
      ],
      "narrative": "The platform is established well above traditional civil traffic, typically between FL500 and FL680, holding over a service area by continuously trading altitude for wind direction. Interaction with conventional traffic is minimal; interaction with other HAO users is the dominant safety consideration.",
      "altitudeBandFt": [
        50000,
        68000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 63000,
          "label": "On station",
          "note": "Above conventional traffic; ATC separation service is neither available nor required in most FIRs."
        },
        {
          "t": 0.18,
          "altFt": 66000,
          "label": "Climb for wind",
          "note": "Altitude changes above the coordinated floor need no further ATC coordination."
        },
        {
          "t": 0.4,
          "altFt": 58000,
          "label": "Descend for wind",
          "note": "Approaching the coordinated floor; re-coordination required if the floor is breached."
        },
        {
          "t": 0.62,
          "altFt": 67000,
          "label": "Loiter high",
          "note": "Vertical excursions are the primary means of horizontal control."
        },
        {
          "t": 0.84,
          "altFt": 61000,
          "label": "Reposition",
          "note": "Repositioning within the service area."
        },
        {
          "t": 1.0,
          "altFt": 64000,
          "label": "Continuing station-keeping",
          "note": "Missions often planned and assigned while already airborne."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 50000,
          "toFt": 68000,
          "label": "Other HAO users - cooperative",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 45000,
          "label": "Conventional traffic well below",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.35,
          "altFt": 60000,
          "label": "Fixed-wing HAPS, different operator",
          "conflictRisk": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.72,
          "altFt": 65000,
          "label": "Same-fleet vehicle",
          "conflictRisk": "low"
        }
      ],
      "atsInteraction": {
        "mode": "Cooperative / operator-managed",
        "description": "The State retains authority and responsibility over the airspace, but separation is achieved by operators coordinating and executing their own operations against community rules of the road, as in the FAA/NASA ETM cooperative area and the ECHO 4D zone constructs. Deconfliction is just-in-time on rolling time windows, since deconflicting an entire flight is meaningless for an ultra-long mission.",
        "responsibilities": [
          "State: authorise operators and service providers, define restricted volumes, retain visibility of who is operating.",
          "Operators: identify and resolve conflicts among themselves through self-provided or third-party services using common information exchange standards.",
          "ANSP: no separation service above the floor, but may act as a bridge for conflicts involving ATC-controlled traffic."
        ]
      },
      "services": [
        "SVC-COOP-SEP",
        "SVC-STRAT-DECONF",
        "SVC-AIRSPACE-RES",
        "SVC-SURV-DATA",
        "SVC-AUTH",
        "SVC-MET"
      ],
      "cns": {
        "communication": "Machine-to-machine intent and position exchange between operators and service providers, on a need-to-know basis. Human communication is exception-centric via mission control.",
        "navigation": "Station-keeping performance metrics rather than route conformance. Trajectory expressed as a distribution with a containment confidence level.",
        "surveillance": "Peer-to-peer sharing of position and intent through a discovery and synchronisation service, with mutual proof of authorization. Ground-based surveillance is generally unavailable at these levels."
      },
      "equipage": [
        "Discovery and synchronisation service client (ASTM-derived DSS pattern)",
        "Digital identity and authentication credentials",
        "Conflict identification and conflict resolution protocol support",
        "Performance and confidence-level publication capability",
        "Fleet management automation with system health monitoring (battery state, temperatures, equipment status)"
      ],
      "informationRequirements": [
        "Operational intent on a rolling window, with permitted intent intersection far enough in the future",
        "Containment confidence level and risk tolerance to accommodate probabilistic operations",
        "Performance envelope, since intent alone is insufficient to establish a deconfliction timeline",
        "Selective disclosure: an operator should learn only about operations that affect it",
        "State access to the full picture over its sovereign airspace"
      ],
      "provisionGaps": [
        "GAP-COOP-SEP",
        "GAP-INTENT-EXCHANGE",
        "GAP-SURV",
        "GAP-AUTH-CROSSBORDER",
        "GAP-HAO-FLOOR",
        "GAP-LIABILITY",
        "GAP-SMS"
      ],
      "mapping": {
        "gatmocComponents": [
          "CM",
          "AOM",
          "DCB",
          "ATM_SDM",
          "AUO"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-CAPACITY",
          "KPA-FLEXIBILITY",
          "KPA-SECURITY",
          "KPA-COSTEFF"
        ],
        "guidingPrinciples": [
          "GP-COLLAB",
          "GP-SAFETY",
          "GP-SOVEREIGNTY",
          "GP-HUMAN"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2"
        ],
        "asbuThreads": [
          "ASBU-TBO",
          "ASBU-SWIM",
          "ASBU-NOPS",
          "ASBU-ASUR"
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
        "ATMOPSP": 3,
        "RPASP": 3,
        "FLTOPSP": 1,
        "AAMSG": 2,
        "ADOP": 0,
        "SMP": 4,
        "IMP": 5,
        "CNSP": 4,
        "METP": 3,
        "SARP_SAR": 1,
        "AVSECP": 4,
        "AIRP": 2,
        "GANPSG": 3,
        "GASPSG": 2,
        "TFP": 5,
        "LEGAL": 4
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -20.0,
            "lon": 118.0,
            "label": "On station",
            "altFt": 63000
          },
          {
            "lat": -20.6,
            "lon": 119.4,
            "label": "Climb for wind",
            "altFt": 66000
          },
          {
            "lat": -21.4,
            "lon": 118.2,
            "label": "Descend for wind",
            "altFt": 58000
          },
          {
            "lat": -20.2,
            "lon": 117.0,
            "label": "Loiter high",
            "altFt": 67000
          },
          {
            "lat": -19.4,
            "lon": 118.6,
            "label": "Reposition",
            "altFt": 61000
          },
          {
            "lat": -20.0,
            "lon": 119.0,
            "label": "Station-keeping",
            "altFt": 64000
          }
        ],
        "firCrossings": [],
        "stationArea": {
          "lat": -20.3,
          "lon": 118.3,
          "radiusKm": 420
        },
        "note": "Station-keeping traces a closed, irregular figure because horizontal position is controlled only by choosing a wind layer."
      }
    },
    {
      "id": "SC-LTAB-04",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-FLEET",
      "name": "Fleet of LTA balloons keeping station over a geographic area for cellular connectivity",
      "useCases": [
        "UC-CONNECT",
        "UC-DISASTER"
      ],
      "narrative": "A constellation of platforms is managed as a single system to hold continuous coverage over a service area, with vehicles rotating out for recovery and spares staged for continuity. This is the archetypal HAO capacity problem: demand and capacity balancing in a volume, not along a route.",
      "altitudeBandFt": [
        50000,
        68000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 62000,
          "label": "Vehicle 1 on station",
          "note": "Coverage footprint of the order of thousands of square kilometres per platform."
        },
        {
          "t": 0.16,
          "altFt": 65000,
          "label": "Vehicle 2 arriving",
          "note": "Intra-fleet deconfliction handled by fleet management automation."
        },
        {
          "t": 0.34,
          "altFt": 59000,
          "label": "Vehicle 3 loitering low",
          "note": "Vertical stacking within the service volume."
        },
        {
          "t": 0.52,
          "altFt": 66500,
          "label": "Vehicle 4 repositioning",
          "note": "Dynamic allocation of vehicles to service areas by mission requirement."
        },
        {
          "t": 0.72,
          "altFt": 57000,
          "label": "Vehicle 5 descending out",
          "note": "Rotation for recovery; spare staged to preserve service continuity."
        },
        {
          "t": 1.0,
          "altFt": 63000,
          "label": "Steady-state coverage",
          "note": "Continuous service maintained by fleet replacement strategy."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 50000,
          "toFt": 68000,
          "label": "Own fleet - intra-fleet deconfliction",
          "density": "high"
        },
        {
          "type": "band",
          "fromFt": 55000,
          "toFt": 65000,
          "label": "Third-party HAO operators",
          "density": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.44,
          "altFt": 61000,
          "label": "Competing operator platform",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.8,
          "altFt": 58000,
          "label": "Descending vehicle crossing station levels",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Cooperative with State oversight of the volume",
        "description": "The unit of management is the fleet, not the flight. States need visibility of who is in their airspace and the ability to restrict volumes; operators need a capacity-sharing arrangement inside a finite service volume that may be commercially contested by more than one provider.",
        "responsibilities": [
          "State: authorise the fleet operation over its territory; retain real-time and historical identity, position and intent visibility.",
          "Operator: intra-fleet deconfliction; inter-operator deconfliction; declare aggregate demand on the volume.",
          "Service provider: strategic deconfliction and equitable allocation within the volume."
        ]
      },
      "services": [
        "SVC-STRAT-DECONF",
        "SVC-COOP-SEP",
        "SVC-AIRSPACE-RES",
        "SVC-AUTH",
        "SVC-SURV-DATA",
        "SVC-MET"
      ],
      "cns": {
        "communication": "Cloud-based automation with fleet management teams distributed across multiple countries; operations may be attended from a State other than the State of operation.",
        "navigation": "System-wide optimisation across the fleet; individual vehicle navigation subordinated to fleet coverage objectives.",
        "surveillance": "Fleet-level position and intent publication; State-level airspace picture assembled from all authorised operators plus the ANSP feed."
      },
      "equipage": [
        "Fleet management automation service with system-wide optimisation",
        "Per-vehicle DSS client and identity credentials",
        "Health monitoring and predictive replacement logic",
        "Telecommunication payload operating under ITU HAPS/HIBS spectrum designations"
      ],
      "informationRequirements": [
        "Fleet-level demand declaration on a service volume over time",
        "Per-vehicle intent with confidence bounds",
        "Coverage continuity plan including spare staging and rotation",
        "Cross-border authorization status for every vehicle and every service provider",
        "Aggregated State airspace picture, restricted to authorised recipients"
      ],
      "provisionGaps": [
        "GAP-COOP-SEP",
        "GAP-INTENT-EXCHANGE",
        "GAP-AUTH-CROSSBORDER",
        "GAP-A2-APP5",
        "GAP-LIABILITY",
        "GAP-SMS",
        "GAP-COMMS"
      ],
      "mapping": {
        "gatmocComponents": [
          "DCB",
          "AOM",
          "CM",
          "ATM_SDM",
          "AUO"
        ],
        "kpas": [
          "KPA-CAPACITY",
          "KPA-ACCESS",
          "KPA-EFFICIENCY",
          "KPA-SECURITY",
          "KPA-PARTICIPATION"
        ],
        "guidingPrinciples": [
          "GP-ACCESS",
          "GP-COLLAB",
          "GP-SOVEREIGNTY",
          "GP-GLOBAL"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2",
          "GANP-L4"
        ],
        "asbuThreads": [
          "ASBU-NOPS",
          "ASBU-SWIM",
          "ASBU-TBO",
          "ASBU-FICE"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AIM",
          "BBB-CNS"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 5,
        "SASP": 4,
        "ATMOPSP": 3,
        "RPASP": 4,
        "FLTOPSP": 2,
        "AAMSG": 2,
        "ADOP": 1,
        "SMP": 4,
        "IMP": 5,
        "CNSP": 4,
        "METP": 3,
        "SARP_SAR": 1,
        "AVSECP": 4,
        "AIRP": 2,
        "GANPSG": 4,
        "GASPSG": 2,
        "TFP": 5,
        "LEGAL": 5
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -2.0,
            "lon": 31.0,
            "label": "Vehicle 1 on station",
            "altFt": 62000
          },
          {
            "lat": -0.5,
            "lon": 33.5,
            "label": "Vehicle 2 arriving",
            "altFt": 65000
          },
          {
            "lat": -3.5,
            "lon": 34.5,
            "label": "Vehicle 3 low",
            "altFt": 59000
          },
          {
            "lat": -1.0,
            "lon": 36.5,
            "label": "Vehicle 4 repositioning",
            "altFt": 66500
          },
          {
            "lat": -4.0,
            "lon": 31.5,
            "label": "Vehicle 5 descending out",
            "altFt": 57000
          },
          {
            "lat": -2.2,
            "lon": 33.8,
            "label": "Steady-state coverage",
            "altFt": 63000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 3,
            "from": "FIR-NBO",
            "to": "FIR-NBO",
            "type": "internal",
            "note": "Fleet coverage footprint may span several States even when no single vehicle leaves one."
          }
        ],
        "stationArea": {
          "lat": -2.0,
          "lon": 33.5,
          "radiusKm": 700
        },
        "note": "The unit of management is the fleet, not the flight. The track shown is the fleet envelope, not one vehicle."
      }
    },
    {
      "id": "SC-LTAB-05",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-DESCENT",
      "name": "Planned flight termination and controlled descent to a recovery area",
      "useCases": [
        "UC-CONNECT",
        "UC-EO"
      ],
      "narrative": "Routine termination is notified about one hour in advance with current location, altitude and predicted ground impact location and time. Descent takes roughly an hour and the platform crosses every conventional traffic layer on the way down.",
      "altitudeBandFt": [
        0,
        65000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 63000,
          "label": "Termination notified",
          "note": "One hour advance notice with predicted impact point and time; recovery area selected to minimise interaction with commercial traffic."
        },
        {
          "t": 0.18,
          "altFt": 55000,
          "label": "Descent initiated",
          "note": "Controlled gas release or envelope cutter; ANSP may approve, delay, or propose modifications."
        },
        {
          "t": 0.4,
          "altFt": 41000,
          "label": "Entering RVSM band",
          "note": "No operations permitted below the platform during termination; enhanced vertical buffer above."
        },
        {
          "t": 0.62,
          "altFt": 30000,
          "label": "Crossing jet flows",
          "note": "ATC applies termination separation standards and issues traffic information."
        },
        {
          "t": 0.82,
          "altFt": 15000,
          "label": "Parachute phase",
          "note": "Parachute deployed; envelope and flight system remain tethered as one."
        },
        {
          "t": 1.0,
          "altFt": 0,
          "label": "Ground contact",
          "note": "Final notification when the vehicle reaches the ground; recovery team dispatched."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "RVSM commercial flows",
          "density": "high"
        },
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 18000,
          "label": "Terminal traffic",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.58,
          "altFt": 33000,
          "label": "Jet flow crossing descent path",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.88,
          "altFt": 9000,
          "label": "Low-level traffic near recovery area",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Fully ATC-managed with dedicated termination separation",
        "description": "Termination is the phase where a higher airspace vehicle imposes the greatest direct load on conventional ATC, because a slow, weakly controlled object crosses every busy layer in about an hour on a trajectory that is only forecast, not commanded.",
        "responsibilities": [
          "Operator: notify in advance, update descent forecast, confirm initiation, provide regular position updates, report ground contact.",
          "ANSP: evaluate the termination request against traffic, apply termination separation, coordinate with adjacent units, issue traffic information."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-CONTINGENCY",
        "SVC-AIRSPACE-RES",
        "SVC-ALERT",
        "SVC-AIM"
      ],
      "cns": {
        "communication": "Mission control to ATS unit, with escalation protocol; regular position updates throughout the descent.",
        "navigation": "No lateral control. Descent trajectory, speed and landing location are forecast products updated as the descent progresses.",
        "surveillance": "Transponder where still operating; otherwise ANSP applies non-surveillance separation standards using operator-supplied position information."
      },
      "equipage": [
        "Redundant flight termination systems",
        "Controlled gas release mechanism for a predictable descent profile",
        "Parachute and safety tether",
        "Position reporting that survives the descent phase"
      ],
      "informationRequirements": [
        "Advance termination notice with current position, altitude, predicted impact point and time",
        "Updated descent trajectory, speed and landing location at approximately one hour before initiation",
        "Confirmation of termination initiation and regular position updates",
        "Final ground contact notification",
        "Ground risk assessment for the recovery area"
      ],
      "provisionGaps": [
        "GAP-UNCONTROLLED-DESCENT",
        "GAP-A2-APP5",
        "GAP-SAR",
        "GAP-LIABILITY",
        "GAP-SURV"
      ],
      "mapping": {
        "gatmocComponents": [
          "CM",
          "AOM",
          "TS",
          "ATM_SDM",
          "AO"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-PREDICTABILITY",
          "KPA-CAPACITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-CONTINUITY",
          "GP-COLLAB"
        ],
        "ganpLayers": [
          "GANP-L2",
          "GANP-L3"
        ],
        "asbuThreads": [
          "ASBU-FRTO",
          "ASBU-ASUR",
          "ASBU-DAIM"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-SAR",
          "BBB-AIM"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 3,
        "SASP": 5,
        "ATMOPSP": 5,
        "RPASP": 3,
        "FLTOPSP": 2,
        "AAMSG": 1,
        "ADOP": 2,
        "SMP": 4,
        "IMP": 2,
        "CNSP": 3,
        "METP": 3,
        "SARP_SAR": 4,
        "AVSECP": 1,
        "AIRP": 3,
        "GANPSG": 2,
        "GASPSG": 3,
        "TFP": 1,
        "LEGAL": 4
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -20.0,
            "lon": 119.0,
            "label": "Termination notified",
            "altFt": 63000
          },
          {
            "lat": -21.5,
            "lon": 121.0,
            "label": "Descent initiated",
            "altFt": 55000
          },
          {
            "lat": -23.0,
            "lon": 123.5,
            "label": "Entering RVSM band",
            "altFt": 41000
          },
          {
            "lat": -24.2,
            "lon": 125.5,
            "label": "Crossing jet flows",
            "altFt": 30000
          },
          {
            "lat": -25.0,
            "lon": 127.0,
            "label": "Parachute phase",
            "altFt": 15000
          },
          {
            "lat": -25.4,
            "lon": 127.8,
            "label": "Ground contact",
            "altFt": 0
          }
        ],
        "firCrossings": [],
        "note": "Recovery area selected inland and sparsely populated. The lateral extent of the descent is a forecast, not a plan."
      }
    },
    {
      "id": "SC-LTAB-06",
      "vehicleClassId": "VC-LTA-BALLOON",
      "phaseId": "PH-CONTINGENCY",
      "name": "Contingency: loss of telemetry ('dark' platform) and uncontrolled descent",
      "useCases": [
        "UC-CONNECT",
        "UC-EO",
        "UC-DISASTER"
      ],
      "narrative": "Telemetry is lost. The known position is replaced by a growing uncertainty volume that must be protected, propagated across FIR boundaries and, if descent is occurring, resolved against conventional traffic and third parties on the ground. AN-Conf/14 specifically identified uncontrolled descent of HAO vehicles as requiring provisions.",
      "altitudeBandFt": [
        0,
        65000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 63000,
          "label": "Last known position",
          "note": "Operator notifies the ANSP immediately and supplies last known and forecast positions."
        },
        {
          "t": 0.16,
          "altFt": 60000,
          "label": "Uncertainty volume created",
          "note": "ANSP creates a reservation area around last known and forecast positions and issues traffic information."
        },
        {
          "t": 0.36,
          "altFt": 50000,
          "label": "Uncontrolled descent detected",
          "note": "Non-surveillance and contingency separation standards applied."
        },
        {
          "t": 0.55,
          "altFt": 38000,
          "label": "Entering dense traffic",
          "note": "Emergency separation procedures; traffic information to all affected aircraft."
        },
        {
          "t": 0.76,
          "altFt": 20000,
          "label": "Cross-FIR propagation",
          "note": "Uncertainty volume must be handed to adjacent FIRs, potentially across sovereign boundaries."
        },
        {
          "t": 1.0,
          "altFt": 0,
          "label": "Ground impact zone",
          "note": "Third-party ground risk; coordination with emergency services; asset and debris recovery rather than classic SAR."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "RVSM commercial flows",
          "density": "high"
        },
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 18000,
          "label": "Terminal traffic and population below",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.5,
          "altFt": 39000,
          "label": "Airliner in the uncertainty volume",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.68,
          "altFt": 27000,
          "label": "Descending arrival stream",
          "conflictRisk": "high"
        }
      ],
      "atsInteraction": {
        "mode": "Emergency / contingency management",
        "description": "The controlling problem is that there is no aircraft to control: there is a probability cloud. Provisions must define how large the protected volume is, how fast it grows, who owns it as it crosses boundaries, and when it can be collapsed.",
        "responsibilities": [
          "Operator: immediate notification, last known and forecast position, notification when telemetry is restored.",
          "ANSP: create and maintain the reservation area, apply contingency separation, issue traffic information, coordinate with adjacent units and emergency services.",
          "State: third-party ground risk management and occurrence reporting."
        ]
      },
      "services": [
        "SVC-CONTINGENCY",
        "SVC-ALERT",
        "SVC-AIRSPACE-RES",
        "SVC-TFC-INFO",
        "SVC-SURV-DATA"
      ],
      "cns": {
        "communication": "Escalation protocol between mission control and ATS; alternative contact means when the primary fails; predetermined contingency procedures on both sides.",
        "navigation": "None available. Forecast propagation only, with widening bounds.",
        "surveillance": "Degraded or absent. If the transponder has failed, non-surveillance separation standards apply and the ANSP relies on the operator's last reported position and the forecast model."
      },
      "equipage": [
        "Independent redundant flight termination systems that remain commandable in degraded states",
        "Backup telemetry path",
        "Radar-reflective material and lighting as passive detection aids",
        "Recorded trajectory and health data for post-event analysis"
      ],
      "informationRequirements": [
        "Immediate notification of loss of telemetry or unplanned descent",
        "Last known position, time, altitude and vertical rate",
        "Forecast position envelope with growth rate and confidence",
        "Notification when communications are re-established",
        "Ground impact prediction for emergency services"
      ],
      "provisionGaps": [
        "GAP-UNCONTROLLED-DESCENT",
        "GAP-SURV",
        "GAP-COMMS",
        "GAP-SAR",
        "GAP-LIABILITY",
        "GAP-SMS",
        "GAP-C2LINK"
      ],
      "mapping": {
        "gatmocComponents": [
          "CM",
          "AOM",
          "ATM_SDM",
          "TS"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-PREDICTABILITY",
          "KPA-SECURITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-CONTINUITY",
          "GP-HUMAN"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2"
        ],
        "asbuThreads": [
          "ASBU-ASUR",
          "ASBU-NOPS",
          "ASBU-COMI"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-SAR",
          "BBB-CNS"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 4,
        "SASP": 5,
        "ATMOPSP": 5,
        "RPASP": 4,
        "FLTOPSP": 2,
        "AAMSG": 1,
        "ADOP": 1,
        "SMP": 5,
        "IMP": 3,
        "CNSP": 4,
        "METP": 3,
        "SARP_SAR": 5,
        "AVSECP": 3,
        "AIRP": 4,
        "GANPSG": 2,
        "GASPSG": 4,
        "TFP": 2,
        "LEGAL": 5
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -18.0,
            "lon": 115.0,
            "label": "Last known position",
            "altFt": 63000
          },
          {
            "lat": -18.8,
            "lon": 117.2,
            "label": "Uncertainty volume",
            "altFt": 60000
          },
          {
            "lat": -19.8,
            "lon": 120.0,
            "label": "Uncontrolled descent",
            "altFt": 50000
          },
          {
            "lat": -21.0,
            "lon": 123.2,
            "label": "Entering dense traffic",
            "altFt": 38000
          },
          {
            "lat": -22.4,
            "lon": 127.0,
            "label": "Cross-FIR propagation",
            "altFt": 20000
          },
          {
            "lat": -23.5,
            "lon": 130.5,
            "label": "Ground impact zone",
            "altFt": 0
          }
        ],
        "firCrossings": [
          {
            "atIndex": 4,
            "from": "FIR-MEL",
            "to": "FIR-BNE",
            "type": "sovereign",
            "note": "The uncertainty volume must be handed to the adjacent FIR while still growing."
          }
        ],
        "uncertaintyGrowth": true,
        "note": "There is no aircraft to control, only a probability cloud that widens with elapsed time and must be handed across boundaries."
      }
    }
  ]
});
