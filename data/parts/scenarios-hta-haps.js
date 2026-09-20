/* HAO Navigator data part — scenarios-hta-haps
   Root: dataset   Mount: scenarios
   Schema: schemas/parts/scenarios.schema.json
   Solar fixed-wing HAPS scenarios.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "scenarios-hta-haps",
  "root": "dataset",
  "mount": "scenarios",
  "schema": "schemas/parts/scenarios.schema.json",
  "payload": [
    {
      "id": "SC-HTA-01",
      "vehicleClassId": "VC-HTA-HAPS",
      "phaseId": "PH-LAUNCH",
      "name": "Solar fixed-wing HAPS launch from a dedicated HAPS facility and climb",
      "useCases": [
        "UC-EO",
        "UC-CONNECT",
        "UC-MDA"
      ],
      "narrative": "Launch is from a purpose-built HAPS facility such as an AALTOPORT, established in Kenya after roughly eighteen months of regulatory engagement and technical studies. The vehicle climbs slowly through all conventional traffic layers on solar-electric power.",
      "altitudeBandFt": [
        0,
        62000
      ],
      "trajectory": [
        {
          "t": 0.03,
          "altFt": 0,
          "label": "Launch",
          "note": "Dedicated HAPS facility; not an Annex 14 aerodrome but requiring protected surfaces and coordinated windows."
        },
        {
          "t": 0.18,
          "altFt": 12000,
          "label": "Slow climb",
          "note": "Very low airspeed; long exposure inside busy low-level airspace."
        },
        {
          "t": 0.38,
          "altFt": 28000,
          "label": "Approaching RVSM",
          "note": "Extended transit through the commercial band."
        },
        {
          "t": 0.58,
          "altFt": 41000,
          "label": "Top of RVSM",
          "note": "Vertical separation increases to 2000 ft above FL410."
        },
        {
          "t": 0.8,
          "altFt": 55000,
          "label": "Transition layer",
          "note": "Above current civil ceiling; regime depends on the State's upper airspace classification."
        },
        {
          "t": 1.0,
          "altFt": 61000,
          "label": "Reaching operating altitude",
          "note": "Flies above weather and above conventional air traffic."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 0,
          "toFt": 18000,
          "label": "Terminal and GA traffic",
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
          "atT": 0.22,
          "altFt": 14000,
          "label": "Departure stream",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.48,
          "altFt": 35000,
          "label": "En-route jet",
          "conflictRisk": "high"
        }
      ],
      "atsInteraction": {
        "mode": "Fully ATC-managed, RPAS integration rules apply",
        "description": "As a remotely piloted aircraft the vehicle is subject to RPAS integration expectations, including detect and avoid, but its performance is so far outside conventional assumptions that standard DAA compatibility with high-performance traffic cannot be assumed.",
        "responsibilities": [
          "ANSP: separation throughout the climb; realistic sequencing given a climb measured in hours.",
          "Operator: State authorization, safety case, flight plan filing, remote crew qualification, DAA capability declaration."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-AERODROME",
        "SVC-AIRSPACE-RES",
        "SVC-MET",
        "SVC-AIM"
      ],
      "cns": {
        "communication": "C2 link with declared performance; remote crew at a control station, potentially in another State.",
        "navigation": "GNSS-based area navigation with limited manoeuvre margin; performance varies through the day with solar input and battery state.",
        "surveillance": "ADS-B Out, SSR transponder, plus ground-based surveillance while within coverage."
      },
      "equipage": [
        "ADS-B Out and SSR transponder",
        "GNSS and altimetry suite",
        "C2 link with redundancy",
        "Detect and avoid capability appropriate to the airspace",
        "Lighting and conspicuity provisions"
      ],
      "informationRequirements": [
        "Filed flight plan with projected trajectory and estimates at reporting points and FIR boundaries",
        "Aircraft type designator - currently ZZZZ in item 9 with the type described in item 18",
        "Declared climb performance profile and energy-state dependency",
        "Remote crew and control station details",
        "Contingency procedures noted in the flight plan remarks"
      ],
      "provisionGaps": [
        "GAP-FPL-CODES",
        "GAP-AIRWORTHINESS",
        "GAP-LAUNCH-SITE",
        "GAP-C2LINK",
        "GAP-COMMS",
        "GAP-AIRSPACE-CLASS"
      ],
      "mapping": {
        "gatmocComponents": [
          "AO",
          "AOM",
          "TS",
          "CM",
          "AUO"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-ACCESS",
          "KPA-EFFICIENCY",
          "KPA-CAPACITY"
        ],
        "guidingPrinciples": [
          "GP-SAFETY",
          "GP-ACCESS",
          "GP-HUMAN"
        ],
        "ganpLayers": [
          "GANP-L2",
          "GANP-L4"
        ],
        "asbuThreads": [
          "ASBU-FICE",
          "ASBU-COMI",
          "ASBU-NAVS",
          "ASBU-ASUR"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AOP",
          "BBB-CNS"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 3,
        "SASP": 4,
        "ATMOPSP": 4,
        "RPASP": 5,
        "FLTOPSP": 3,
        "AAMSG": 2,
        "ADOP": 5,
        "SMP": 3,
        "IMP": 3,
        "CNSP": 5,
        "METP": 3,
        "SARP_SAR": 2,
        "AVSECP": 3,
        "AIRP": 5,
        "GANPSG": 2,
        "GASPSG": 2,
        "TFP": 2,
        "LEGAL": 3
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": 0.2,
            "lon": 36.9,
            "label": "AALTOPORT launch",
            "altFt": 0,
            "note": "Dedicated HAPS facility, Laikipia County, Kenya."
          },
          {
            "lat": 0.0,
            "lon": 37.4,
            "label": "Slow climb",
            "altFt": 12000
          },
          {
            "lat": -0.3,
            "lon": 38.2,
            "label": "Approaching RVSM",
            "altFt": 28000
          },
          {
            "lat": -0.7,
            "lon": 39.2,
            "label": "Top of RVSM",
            "altFt": 41000
          },
          {
            "lat": -1.2,
            "lon": 40.6,
            "label": "Transition layer",
            "altFt": 55000
          },
          {
            "lat": -1.8,
            "lon": 42.2,
            "label": "Operating altitude",
            "altFt": 61000
          }
        ],
        "firCrossings": [],
        "note": "A climb measured in hours, spent almost entirely inside airspace used by conventional traffic."
      }
    },
    {
      "id": "SC-HTA-02",
      "vehicleClassId": "VC-HTA-HAPS",
      "phaseId": "PH-ONSTATION",
      "name": "Solar fixed-wing HAPS on station for Earth observation above FL600",
      "useCases": [
        "UC-EO",
        "UC-MDA",
        "UC-SCI"
      ],
      "narrative": "The platform orbits above 60,000 ft with a steerable high-resolution optical payload, covering a large area per day from a small instantaneous footprint. It is above weather and above conventional traffic, and its neighbours are other HAO users.",
      "altitudeBandFt": [
        55000,
        72000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 62000,
          "label": "Established",
          "note": "Above conventional traffic and above weather."
        },
        {
          "t": 0.2,
          "altFt": 65000,
          "label": "Day climb",
          "note": "Climbs during the solar day, banking potential energy."
        },
        {
          "t": 0.42,
          "altFt": 68000,
          "label": "Peak altitude",
          "note": "Energy-optimal profile; performance is explicitly time-dependent."
        },
        {
          "t": 0.62,
          "altFt": 63000,
          "label": "Night descent",
          "note": "Descends overnight on battery, a predictable but large diurnal vertical excursion."
        },
        {
          "t": 0.82,
          "altFt": 59000,
          "label": "Pre-dawn low point",
          "note": "May approach or re-enter classified airspace in some States."
        },
        {
          "t": 1.0,
          "altFt": 64000,
          "label": "Recovering altitude",
          "note": "Diurnal cycle repeats for the duration of the mission."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 55000,
          "toFt": 70000,
          "label": "Other HAO users",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 45000,
          "label": "Conventional traffic far below",
          "density": "high"
        },
        {
          "type": "crossing",
          "atT": 0.3,
          "altFt": 66000,
          "label": "LTA platform, different operator",
          "conflictRisk": "medium"
        },
        {
          "type": "crossing",
          "atT": 0.86,
          "altFt": 59500,
          "label": "Transition-layer traffic",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Cooperative, with periodic re-entry into classified airspace",
        "description": "The diurnal altitude cycle means the vehicle may repeatedly cross the boundary between cooperative and ATC-managed regimes without any operational event occurring, purely because the sun set. Provisions must handle regime changes that are driven by physics rather than by intent.",
        "responsibilities": [
          "Operator: publish the predicted diurnal profile as part of intent so the regime change is anticipated, not discovered.",
          "State/ANSP: define whether a predictable, recurring boundary crossing needs individual coordination or a standing arrangement."
        ]
      },
      "services": [
        "SVC-COOP-SEP",
        "SVC-STRAT-DECONF",
        "SVC-SURV-DATA",
        "SVC-AIRSPACE-RES",
        "SVC-MET",
        "SVC-AUTH"
      ],
      "cns": {
        "communication": "C2 via satellite; exception-centric supervision from a distributed operations team.",
        "navigation": "Precise orbit-keeping over a designated area; steerable payload compensates for platform position.",
        "surveillance": "Cooperative intent and position exchange; ground surveillance generally unavailable at these levels."
      },
      "equipage": [
        "Steerable high-resolution optical and video payload",
        "Satellite C2 and payload downlink",
        "Intent publication with diurnal profile",
        "Energy management and health monitoring"
      ],
      "informationRequirements": [
        "Predicted diurnal altitude profile as part of published intent",
        "Orbit geometry and area of operation",
        "Payload downlink spectrum coordination",
        "Data protection controls, since imagery and position are commercially and politically sensitive"
      ],
      "provisionGaps": [
        "GAP-HAO-FLOOR",
        "GAP-AIRSPACE-CLASS",
        "GAP-COOP-SEP",
        "GAP-VERT-SEP",
        "GAP-INTENT-EXCHANGE",
        "GAP-SURV"
      ],
      "mapping": {
        "gatmocComponents": [
          "AOM",
          "CM",
          "AUO",
          "ATM_SDM",
          "DCB"
        ],
        "kpas": [
          "KPA-SAFETY",
          "KPA-FLEXIBILITY",
          "KPA-INTEROP",
          "KPA-SECURITY",
          "KPA-EFFICIENCY"
        ],
        "guidingPrinciples": [
          "GP-COLLAB",
          "GP-GLOBAL",
          "GP-SOVEREIGNTY"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2"
        ],
        "asbuThreads": [
          "ASBU-TBO",
          "ASBU-SWIM",
          "ASBU-ASUR",
          "ASBU-AMET"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-CNS",
          "BBB-MET"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 5,
        "SASP": 4,
        "ATMOPSP": 3,
        "RPASP": 4,
        "FLTOPSP": 2,
        "AAMSG": 2,
        "ADOP": 0,
        "SMP": 3,
        "IMP": 5,
        "CNSP": 5,
        "METP": 4,
        "SARP_SAR": 1,
        "AVSECP": 4,
        "AIRP": 3,
        "GANPSG": 3,
        "GASPSG": 2,
        "TFP": 4,
        "LEGAL": 3
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -2.0,
            "lon": 42.5,
            "label": "Established",
            "altFt": 62000
          },
          {
            "lat": -1.2,
            "lon": 43.4,
            "label": "Day climb",
            "altFt": 65000
          },
          {
            "lat": -1.6,
            "lon": 44.4,
            "label": "Peak altitude",
            "altFt": 68000
          },
          {
            "lat": -2.6,
            "lon": 44.0,
            "label": "Night descent",
            "altFt": 63000
          },
          {
            "lat": -3.0,
            "lon": 42.8,
            "label": "Pre-dawn low point",
            "altFt": 59000
          },
          {
            "lat": -2.2,
            "lon": 42.4,
            "label": "Recovering altitude",
            "altFt": 64000
          }
        ],
        "firCrossings": [],
        "stationArea": {
          "lat": -2.1,
          "lon": 43.4,
          "radiusKm": 260
        },
        "note": "The orbit is tight; the interesting variation is vertical and diurnal, driven by the sun rather than by intent."
      }
    },
    {
      "id": "SC-HTA-03",
      "vehicleClassId": "VC-HTA-HAPS",
      "phaseId": "PH-TRANSIT",
      "name": "Cross-border HAO transit between operating areas",
      "useCases": [
        "UC-EO",
        "UC-CONNECT",
        "UC-MDA"
      ],
      "narrative": "The vehicle transits between operating areas across multiple FIRs, including oceanic and high seas airspace, where no State has sovereignty but coordination is still required. Fleet management may be conducted from one State for an operation in another.",
      "altitudeBandFt": [
        55000,
        70000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 64000,
          "label": "Departing area A",
          "note": "Intent published for the whole transit as a rolling window."
        },
        {
          "t": 0.22,
          "altFt": 65000,
          "label": "Sovereign FIR boundary",
          "note": "Authorization required from the receiving State for both operator and service provider."
        },
        {
          "t": 0.45,
          "altFt": 66000,
          "label": "High seas airspace",
          "note": "No sovereign authority; global coverage of the deconfliction service is required, including over international waters."
        },
        {
          "t": 0.68,
          "altFt": 63000,
          "label": "Second FIR boundary",
          "note": "Different upper airspace classification applies."
        },
        {
          "t": 0.88,
          "altFt": 62000,
          "label": "Entering area B",
          "note": "Service provider may have to be swapped for one authorised in that State."
        },
        {
          "t": 1.0,
          "altFt": 63000,
          "label": "Established area B",
          "note": "Continuous service without a break in deconfliction coverage."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 55000,
          "toFt": 70000,
          "label": "Cooperative HAO traffic",
          "density": "medium"
        },
        {
          "type": "band",
          "fromFt": 51000,
          "toFt": 60000,
          "label": "Supersonic oceanic tracks",
          "density": "low"
        },
        {
          "type": "crossing",
          "atT": 0.5,
          "altFt": 58000,
          "label": "Supersonic aircraft climbing",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.74,
          "altFt": 64000,
          "label": "State aircraft in due regard",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Cooperative across jurisdictions",
        "description": "This is the case that most directly tests the harmonized, cross-border, seamless ambition in the HAO holistic vision. Loon and CNES deconflicted worldwide under a bilateral agreement, and Airbus and Loon deconflicted Zephyr and Loon operations in Australian airspace under another bilateral agreement. Bilateral agreements do not scale.",
        "responsibilities": [
          "Operator: hold authorization in each sovereign region, or none where over the high seas.",
          "Service provider: be authorised in each sovereign region it serves; hand over cleanly at boundaries.",
          "States: mutually recognise identity and authorization credentials."
        ]
      },
      "services": [
        "SVC-COOP-SEP",
        "SVC-AUTH",
        "SVC-STRAT-DECONF",
        "SVC-SURV-DATA",
        "SVC-AIM",
        "SVC-MET"
      ],
      "cns": {
        "communication": "Satellite C2 with global coverage; machine-to-machine protocol stack for identity, mutual proof of authorization, discovery and synchronisation, conflict identification and conflict resolution.",
        "navigation": "GNSS with performance-based navigation specification appropriate to HAO.",
        "surveillance": "Peer-to-peer and space-based; no assumption of ground infrastructure over oceans."
      },
      "equipage": [
        "Global satellite C2 and data services",
        "Digital identity credential per sovereign region",
        "DSS client supporting cell-based airspace region mapping",
        "Conflict identification and negotiation protocol support"
      ],
      "informationRequirements": [
        "Region-mapped authorization evidence for operator and for each service provider",
        "Intent shared on a need-to-know basis so that an operator learns only about operations affecting it",
        "State-level access to the full picture over its own airspace",
        "Due-regard accommodation: State aircraft able to consume data without disclosing identity, position or intent"
      ],
      "provisionGaps": [
        "GAP-AUTH-CROSSBORDER",
        "GAP-COOP-SEP",
        "GAP-INTENT-EXCHANGE",
        "GAP-AIRSPACE-CLASS",
        "GAP-SURV",
        "GAP-LIABILITY",
        "GAP-VERT-SEP"
      ],
      "mapping": {
        "gatmocComponents": [
          "AOM",
          "CM",
          "ATM_SDM",
          "AIM",
          "DCB"
        ],
        "kpas": [
          "KPA-INTEROP",
          "KPA-ACCESS",
          "KPA-SECURITY",
          "KPA-SAFETY",
          "KPA-PARTICIPATION"
        ],
        "guidingPrinciples": [
          "GP-GLOBAL",
          "GP-SOVEREIGNTY",
          "GP-COLLAB",
          "GP-ACCESS"
        ],
        "ganpLayers": [
          "GANP-L1",
          "GANP-L2",
          "GANP-L3"
        ],
        "asbuThreads": [
          "ASBU-SWIM",
          "ASBU-FICE",
          "ASBU-TBO",
          "ASBU-ASUR",
          "ASBU-NOPS"
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
        "RPASP": 3,
        "FLTOPSP": 2,
        "AAMSG": 3,
        "ADOP": 0,
        "SMP": 3,
        "IMP": 5,
        "CNSP": 5,
        "METP": 2,
        "SARP_SAR": 2,
        "AVSECP": 5,
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
            "lon": 43.0,
            "label": "Departing area A",
            "altFt": 64000
          },
          {
            "lat": -6.0,
            "lon": 52.0,
            "label": "Sovereign FIR boundary",
            "altFt": 65000
          },
          {
            "lat": -10.0,
            "lon": 64.0,
            "label": "High seas airspace",
            "altFt": 66000
          },
          {
            "lat": -13.0,
            "lon": 78.0,
            "label": "Second FIR boundary",
            "altFt": 63000
          },
          {
            "lat": -16.0,
            "lon": 92.0,
            "label": "Entering area B",
            "altFt": 62000
          },
          {
            "lat": -18.0,
            "lon": 104.0,
            "label": "Established area B",
            "altFt": 63000
          }
        ],
        "firCrossings": [
          {
            "atIndex": 1,
            "from": "FIR-NBO",
            "to": "FIR-IOC",
            "type": "toHighSeas",
            "note": "No sovereign authority, but global deconfliction coverage is still required."
          },
          {
            "atIndex": 3,
            "from": "FIR-IOC",
            "to": "FIR-IND",
            "type": "sovereign",
            "note": "Service provider may have to be swapped for one authorised in that State."
          }
        ],
        "note": "The case that most directly tests the harmonized, cross-border, seamless ambition. Loon/CNES and Airbus/Loon each solved it bilaterally. Bilateral agreements do not scale."
      }
    },
    {
      "id": "SC-HTA-04",
      "vehicleClassId": "VC-HTA-HAPS",
      "phaseId": "PH-DESCENT",
      "name": "Solar fixed-wing HAPS descent and recovery",
      "useCases": [
        "UC-EO",
        "UC-CONNECT"
      ],
      "narrative": "The vehicle descends to a recovery site, crossing all conventional traffic layers under control but at very low airspeed, with limited ability to expedite or to hold.",
      "altitudeBandFt": [
        0,
        64000
      ],
      "trajectory": [
        {
          "t": 0.0,
          "altFt": 62000,
          "label": "Descent planned",
          "note": "Recovery window coordinated well in advance."
        },
        {
          "t": 0.2,
          "altFt": 52000,
          "label": "Leaving HAO",
          "note": "Re-entering ATC-managed regime; clearance required."
        },
        {
          "t": 0.44,
          "altFt": 41000,
          "label": "RVSM entry",
          "note": "Slow descent through the busiest levels."
        },
        {
          "t": 0.66,
          "altFt": 28000,
          "label": "Crossing arrival flows",
          "note": "Sequencing challenge: it cannot be expedited."
        },
        {
          "t": 0.86,
          "altFt": 10000,
          "label": "Approach to recovery site",
          "note": "Wind limits are extremely restrictive for a very light airframe."
        },
        {
          "t": 1.0,
          "altFt": 0,
          "label": "Recovery",
          "note": "Recovery at a dedicated HAPS facility with launch and recovery equipment."
        }
      ],
      "otherTraffic": [
        {
          "type": "band",
          "fromFt": 29000,
          "toFt": 41000,
          "label": "RVSM flows",
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
          "atT": 0.6,
          "altFt": 32000,
          "label": "Arrival stream",
          "conflictRisk": "high"
        },
        {
          "type": "crossing",
          "atT": 0.9,
          "altFt": 6000,
          "label": "Circuit traffic",
          "conflictRisk": "medium"
        }
      ],
      "atsInteraction": {
        "mode": "Fully ATC-managed",
        "description": "The controlling constraint is that a HAPS descent cannot be compressed. ATC tactical tools such as expedite, hold, or vector for spacing are largely unavailable, so the workload moves upstream into planning.",
        "responsibilities": [
          "ANSP: pre-planned descent corridor and time window rather than tactical intervention.",
          "Operator: accurate descent profile prediction and firm commitment to the agreed window."
        ]
      },
      "services": [
        "SVC-ATC-SEP",
        "SVC-TFC-INFO",
        "SVC-AERODROME",
        "SVC-AIRSPACE-RES",
        "SVC-MET"
      ],
      "cns": {
        "communication": "C2 link plus mission control to ATS coordination.",
        "navigation": "Area navigation with tightly bounded performance; wind-limited final phase.",
        "surveillance": "ADS-B and SSR within ground coverage."
      },
      "equipage": [
        "ADS-B Out and transponder",
        "Launch and Recovery Equipment (LRE) at the site, which may be shared across multiple HAPS",
        "Precision approach guidance appropriate to a very light airframe"
      ],
      "informationRequirements": [
        "Agreed descent corridor and time window",
        "Descent profile prediction with tolerance",
        "Surface wind and turbulence limits for the recovery site",
        "NOTAM coverage for the recovery operation"
      ],
      "provisionGaps": [
        "GAP-LAUNCH-SITE",
        "GAP-SST-ACCEL",
        "GAP-AIRSPACE-CLASS",
        "GAP-MET",
        "GAP-FPL-CODES"
      ],
      "mapping": {
        "gatmocComponents": [
          "TS",
          "AO",
          "CM",
          "DCB",
          "AOM"
        ],
        "kpas": [
          "KPA-EFFICIENCY",
          "KPA-PREDICTABILITY",
          "KPA-SAFETY",
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
          "ASBU-FRTO",
          "ASBU-NOPS",
          "ASBU-AMET"
        ],
        "bbb": [
          "BBB-ATM",
          "BBB-AOP",
          "BBB-MET"
        ]
      },
      "expertGroupDependency": {
        "ATMRPP": 3,
        "SASP": 4,
        "ATMOPSP": 5,
        "RPASP": 4,
        "FLTOPSP": 3,
        "AAMSG": 2,
        "ADOP": 5,
        "SMP": 3,
        "IMP": 3,
        "CNSP": 3,
        "METP": 4,
        "SARP_SAR": 2,
        "AVSECP": 2,
        "AIRP": 4,
        "GANPSG": 2,
        "GASPSG": 2,
        "TFP": 2,
        "LEGAL": 2
      },
      "groundTrack": {
        "waypoints": [
          {
            "lat": -18.0,
            "lon": 104.0,
            "label": "Descent planned",
            "altFt": 62000
          },
          {
            "lat": -18.8,
            "lon": 107.0,
            "label": "Leaving HAO",
            "altFt": 52000
          },
          {
            "lat": -19.6,
            "lon": 110.4,
            "label": "RVSM entry",
            "altFt": 41000
          },
          {
            "lat": -20.4,
            "lon": 113.6,
            "label": "Crossing arrival flows",
            "altFt": 28000
          },
          {
            "lat": -21.0,
            "lon": 115.4,
            "label": "Approach to recovery",
            "altFt": 10000
          },
          {
            "lat": -21.3,
            "lon": 116.2,
            "label": "Recovery",
            "altFt": 0
          }
        ],
        "firCrossings": [
          {
            "atIndex": 2,
            "from": "FIR-IOC",
            "to": "FIR-MEL",
            "type": "sovereign"
          }
        ],
        "note": "A HAPS descent cannot be compressed. Expedite, hold and vector-for-spacing are largely unavailable, so workload moves upstream into planning."
      }
    }
  ]
});
