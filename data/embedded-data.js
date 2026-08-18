/* AUTO-GENERATED from data/*.json by tools/build-embedded.py
   Embedded so the prototype runs from file:// without a server.
   Do not edit by hand: edit the JSON files and rebuild. */
window.HAO_SEED = {
  dataset: {
  "$schema": "../schemas/hao-dataset.schema.json",
  "meta": {
    "datasetId": "HAO-NAV-SEED-001",
    "title": "HAO Navigator seed dataset (HAPS + Supersonic)",
    "version": "1.0.0",
    "issued": "2026-08-02",
    "scopeNote": "Space vehicles (orbital, suborbital, launch and re-entry) are explicitly OUT OF SCOPE. A42 and AN-Conf/14 treat Higher Airspace Operations (HAO) and Space Transport Operations (STO) as two separate work streams; STO is handled by the Space Transport Operations Task Force (STO TF).",
    "provenance": [
      "ICAO AN-Conf/14 Recommendation 3.1/7 - Higher airspace operations (AN-MIN 227-6; C-DEC 233/6)",
      "ICAO Assembly Resolution A41-9 - New Entrants",
      "ATMRPP-WG/46-WP/1062 and Appendix E - Draft job card for a holistic vision and global concept for HAO",
      "ATMRPP-WG/47-WP/1087 - HAO Holistic Vision V0.2 and CONOPS structure",
      "SASP/5 Report, Appendix B to the Report on Agenda Item 7 - Proposed new job card SASP.019.01 on HAO using HAPS",
      "ICAO AN Work Programme job card database (ANWP)",
      "ICAO Draft Guidance Material for LTA-HAPS (October 2025 draft)",
      "FAA/NASA Upper Class E Traffic Management (ETM) ConOps",
      "SESAR ECHO D4.3 European ConOps for Higher Airspace Operations",
      "EASA HAO regulatory framework research project (2024-2027)",
      "HAPS Alliance - Global Cross-Border Collaborative Traffic Management for HAO",
      "Loon Library (2021) and Loon/Airservices/CNES/USAF deconfliction experience",
      "JARUS CS-HAPS Rev 1.0 airworthiness recommendations",
      "AALTO Zephyr AALTOPORT operations, Laikipia County, Kenya"
    ],
    "holisticVision": "To ensure SAFE and EFFICIENT Higher Airspace Operations that are consistent with the vision and principles of the GATMOC, it is essential to establish a HARMONIZED, CROSSBORDER, and SEAMLESS environment that accommodates AIRSPACE USERS using DIVERSE VEHICLES. By leveraging EMERGING TECHNOLOGIES and introducing new capabilities, it is possible to support a PERFORMANCE DRIVEN and SCALABLE Airspace."
  },
  "referenceAirspace": {
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
  },
  "vehicleClasses": [
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
  ],
  "flightPhases": [
    {
      "id": "PH-LAUNCH",
      "name": "Launch / ascent",
      "order": 1
    },
    {
      "id": "PH-TRANSIT",
      "name": "Transit through conventional traffic",
      "order": 2
    },
    {
      "id": "PH-ONSTATION",
      "name": "Established / on station in higher airspace",
      "order": 3
    },
    {
      "id": "PH-FLEET",
      "name": "Fleet station-keeping over an area",
      "order": 4
    },
    {
      "id": "PH-CRUISE",
      "name": "Higher airspace cruise (point to point)",
      "order": 5
    },
    {
      "id": "PH-DESCENT",
      "name": "Descent / recovery",
      "order": 6
    },
    {
      "id": "PH-CONTINGENCY",
      "name": "Contingency / uncontrolled descent",
      "order": 7
    }
  ],
  "useCases": [
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
  ],
  "serviceCatalogue": [
    {
      "id": "SVC-ATC-SEP",
      "name": "ATC separation service",
      "gatmoc": "CM"
    },
    {
      "id": "SVC-TFC-INFO",
      "name": "Traffic information / flight information service",
      "gatmoc": "CM"
    },
    {
      "id": "SVC-COOP-SEP",
      "name": "Cooperative separation (operator-to-operator deconfliction)",
      "gatmoc": "CM"
    },
    {
      "id": "SVC-STRAT-DECONF",
      "name": "Strategic deconfliction / operational intent management",
      "gatmoc": "DCB"
    },
    {
      "id": "SVC-AIRSPACE-RES",
      "name": "Airspace reservation / cooperative area management",
      "gatmoc": "AOM"
    },
    {
      "id": "SVC-ALERT",
      "name": "Alerting and SAR coordination",
      "gatmoc": "ATM_SDM"
    },
    {
      "id": "SVC-MET",
      "name": "MET and space weather service (stratospheric winds, radiation)",
      "gatmoc": "AIM/MET"
    },
    {
      "id": "SVC-AIM",
      "name": "Aeronautical information / digital NOTAM and AIP",
      "gatmoc": "AIM"
    },
    {
      "id": "SVC-SURV-DATA",
      "name": "Surveillance data / situational awareness sharing",
      "gatmoc": "ATM_SDM"
    },
    {
      "id": "SVC-AUTH",
      "name": "Authorization, identification and mutual proof of authorization",
      "gatmoc": "ATM_SDM"
    },
    {
      "id": "SVC-CONTINGENCY",
      "name": "Contingency and uncontrolled descent management",
      "gatmoc": "CM"
    },
    {
      "id": "SVC-AERODROME",
      "name": "Aerodrome / launch and recovery site services",
      "gatmoc": "AO"
    }
  ],
  "gatmoc": {
    "components": [
      {
        "id": "AOM",
        "name": "Airspace organization and management"
      },
      {
        "id": "AO",
        "name": "Aerodrome operations"
      },
      {
        "id": "DCB",
        "name": "Demand and capacity balancing"
      },
      {
        "id": "TS",
        "name": "Traffic synchronization"
      },
      {
        "id": "AUO",
        "name": "Airspace user operations"
      },
      {
        "id": "CM",
        "name": "Conflict management"
      },
      {
        "id": "ATM_SDM",
        "name": "ATM service delivery management"
      },
      {
        "id": "AIM",
        "name": "Aeronautical / ATM information management"
      }
    ],
    "guidingPrinciples": [
      {
        "id": "GP-SAFETY",
        "name": "Safety is the highest priority"
      },
      {
        "id": "GP-HUMAN",
        "name": "The human is central to the system"
      },
      {
        "id": "GP-COLLAB",
        "name": "Collaboration and teamwork"
      },
      {
        "id": "GP-ACCESS",
        "name": "Equitable access and accommodation of all airspace users"
      },
      {
        "id": "GP-GLOBAL",
        "name": "Global interoperability and harmonization"
      },
      {
        "id": "GP-CONTINUITY",
        "name": "Continuity and resilience of service"
      },
      {
        "id": "GP-SOVEREIGNTY",
        "name": "Respect for State sovereignty and security"
      }
    ],
    "kpas": [
      {
        "id": "KPA-SAFETY",
        "name": "Safety"
      },
      {
        "id": "KPA-SECURITY",
        "name": "Security"
      },
      {
        "id": "KPA-CAPACITY",
        "name": "Capacity"
      },
      {
        "id": "KPA-EFFICIENCY",
        "name": "Efficiency"
      },
      {
        "id": "KPA-FLEXIBILITY",
        "name": "Flexibility"
      },
      {
        "id": "KPA-PREDICTABILITY",
        "name": "Predictability"
      },
      {
        "id": "KPA-ACCESS",
        "name": "Access and equity"
      },
      {
        "id": "KPA-INTEROP",
        "name": "Interoperability"
      },
      {
        "id": "KPA-ENV",
        "name": "Environment"
      },
      {
        "id": "KPA-PARTICIPATION",
        "name": "Participation and collaboration"
      },
      {
        "id": "KPA-COSTEFF",
        "name": "Cost effectiveness"
      }
    ],
    "atmCommunity": [
      "Airspace users",
      "ATM service providers",
      "Aerodrome operators",
      "States and regulatory authorities",
      "ATM support industry",
      "International Civil Aviation Organization",
      "Military authorities"
    ]
  },
  "ganp": {
    "layers": [
      {
        "id": "GANP-L1",
        "name": "Level 1 - Global Strategic",
        "note": "Vision, KPAs, performance ambitions, conceptual roadmap (Chapter 6 evolutionary steps)."
      },
      {
        "id": "GANP-L2",
        "name": "Level 2 - Global Technical",
        "note": "Basic Building Blocks (BBB) and Aviation System Block Upgrades (ASBU) threads."
      },
      {
        "id": "GANP-L3",
        "name": "Level 3 - Regional",
        "note": "Regional and sub-regional eANP alignment (PIRGs)."
      },
      {
        "id": "GANP-L4",
        "name": "Level 4 - National",
        "note": "State air navigation plans; HAO authorization pathways."
      }
    ],
    "bbb": [
      {
        "id": "BBB-ATM",
        "name": "ATM services"
      },
      {
        "id": "BBB-AIM",
        "name": "Aeronautical information services"
      },
      {
        "id": "BBB-MET",
        "name": "Meteorological services"
      },
      {
        "id": "BBB-SAR",
        "name": "Search and rescue services"
      },
      {
        "id": "BBB-AOP",
        "name": "Aerodrome operation services"
      },
      {
        "id": "BBB-CNS",
        "name": "CNS infrastructure assets"
      }
    ],
    "asbuThreads": [
      {
        "id": "ASBU-FICE",
        "name": "FF-ICE - Flight and flow information for a collaborative environment"
      },
      {
        "id": "ASBU-SWIM",
        "name": "SWIM - System wide information management"
      },
      {
        "id": "ASBU-TBO",
        "name": "TBO - Trajectory based operations"
      },
      {
        "id": "ASBU-ASUR",
        "name": "ASUR - Advanced surveillance"
      },
      {
        "id": "ASBU-COMI",
        "name": "COMI / COMS - Communication infrastructure and services"
      },
      {
        "id": "ASBU-NAVS",
        "name": "NAVS - Navigation systems"
      },
      {
        "id": "ASBU-FRTO",
        "name": "FRTO - Improved operations through enhanced en-route trajectories"
      },
      {
        "id": "ASBU-NOPS",
        "name": "NOPS - Network operations"
      },
      {
        "id": "ASBU-AMET",
        "name": "AMET - Meteorological information supporting enhanced decision making"
      },
      {
        "id": "ASBU-DAIM",
        "name": "DAIM - Digital aeronautical information management"
      }
    ]
  },
  "expertGroups": [
    {
      "id": "ATMRPP",
      "name": "ATMRPP",
      "fullName": "Air Traffic Management Requirements and Performance Panel",
      "role": "Primary expert group. Hosts the HAO Working Group developing the HAO holistic vision and global CONOPS (WPE HAO-01, delivery Q2 2028) and the consequential set of draft job cards (WPE HAO-02, delivery Q2 2028). Also owns the GATMOC update job card ATMRPP.013.01."
    },
    {
      "id": "SASP",
      "name": "SASP",
      "fullName": "Separation and Airspace Safety Panel",
      "role": "Owns AN-Conf/14 Rec 3.1/7 b): provisions for safe transit and separation management in higher airspace, contingency planning, risk assessment and monitoring methodologies including uncontrolled descent."
    },
    {
      "id": "ATMOPSP",
      "name": "ATMOPSP",
      "fullName": "Air Traffic Management Operations Panel",
      "role": "PANS-ATM (Doc 4444) procedures, phraseology, coordination and contingency procedures."
    },
    {
      "id": "RPASP",
      "name": "RPASP",
      "fullName": "Remotely Piloted Aircraft Systems Panel",
      "role": "RPAS certification, C2 link performance, detect and avoid, remote crew licensing - directly applicable to HAPS."
    },
    {
      "id": "FLTOPSP",
      "name": "FLTOPSP",
      "fullName": "Flight Operations Panel",
      "role": "Annex 6 operating rules, operator responsibilities, operations manuals, supersonic flight operations."
    },
    {
      "id": "AAMSG",
      "name": "AAM SG",
      "fullName": "Advanced Air Mobility Study Group",
      "role": "Holistic AAM vision; terminology and concept alignment with HAO to avoid divergent vocabularies for new entrants."
    },
    {
      "id": "ADOP",
      "name": "ADOP",
      "fullName": "Aerodromes Design and Operations Panel",
      "role": "Launch and recovery site (e.g. AALTOPORT-type facility) design, marking, and operational requirements."
    },
    {
      "id": "SMP",
      "name": "SMP",
      "fullName": "Safety Management Panel",
      "role": "Annex 19 alignment: hazard identification, SPIs/SPTs, State safety programme treatment of HAO."
    },
    {
      "id": "IMP",
      "name": "IMP",
      "fullName": "Information Management Panel",
      "role": "SWIM, FF-ICE and digital information exchange models needed to carry HAO operational intent."
    },
    {
      "id": "CNSP",
      "name": "CNS / ICNSS",
      "fullName": "Communications, Navigation and Surveillance expert work and ICNSS framework",
      "role": "Integrated CNS strategy, spectrum, performance-based communication and surveillance (PBCS) above conventional coverage."
    },
    {
      "id": "METP",
      "name": "METP",
      "fullName": "Meteorology Panel",
      "role": "Stratospheric wind, temperature, space weather and radiation information services for HAO."
    },
    {
      "id": "SARP_SAR",
      "name": "SAR",
      "fullName": "Search and Rescue expert work (Annex 12 / IAMSAR)",
      "role": "Alerting and recovery arrangements for HAO vehicles and for uncontrolled descent debris."
    },
    {
      "id": "AVSECP",
      "name": "AVSECP",
      "fullName": "Aviation Security Panel",
      "role": "Cyber resilience of fleet management systems, protection of C2 and of shared operational intent data."
    },
    {
      "id": "AIRP",
      "name": "AIRP",
      "fullName": "Airworthiness Panel",
      "role": "Annex 8 airworthiness for HAPS and supersonic types; interfaces with JARUS CS-HAPS."
    },
    {
      "id": "GANPSG",
      "name": "GANP SG",
      "fullName": "GANP Study Group",
      "role": "Insertion of HAO into GANP levels 1 and 2, ASBU threads and BBB verification."
    },
    {
      "id": "GASPSG",
      "name": "GASP SG",
      "fullName": "GASP Study Group",
      "role": "Global Aviation Safety Plan alignment of HAO safety performance ambitions."
    },
    {
      "id": "TFP",
      "name": "TFP",
      "fullName": "Trust Framework work",
      "role": "Digital identity, authentication and mutual proof of authorization underpinning cross-border data exchange."
    },
    {
      "id": "LEGAL",
      "name": "LC / Legal",
      "fullName": "Legal Committee and legal work programme",
      "role": "Regulatory approval, coordination responsibilities and liability as called for by AN-Conf/14 Rec 3.1/7 a)."
    }
  ],
  "provisionGaps": [
    {
      "id": "GAP-A2-APP5",
      "title": "Annex 2 Appendix 5 does not scale to fleet, long-duration and steerable LTA operations",
      "instrument": "Annex 2 - Rules of the Air",
      "reference": "Appendix 5 - Unmanned free balloons",
      "gapType": "Amendment",
      "severity": 5,
      "description": "Appendix 5 assumes a single, short-duration, non-steerable free balloon with a determinable termination point. Modern LTA-HAPS fly for months, change altitude continuously to select wind layers, are fleet-managed, and cannot determine a termination location at planning time.",
      "proposedAction": "New classification and notification regime for LTA-HAPS distinct from unmanned free balloons; fleet-level rather than flight-level notification; rolling intent updates in place of a fixed termination declaration.",
      "owningGroups": [
        "ATMOPSP",
        "ATMRPP",
        "SASP"
      ]
    },
    {
      "id": "GAP-VERT-SEP",
      "title": "No vertical separation minima above FL410 fit for higher airspace",
      "instrument": "PANS-ATM (Doc 4444) / Doc 9574",
      "reference": "Chapter 5 separation minima; RVSM provisions",
      "gapType": "New provision",
      "severity": 5,
      "description": "Vertical separation increases to 2000 ft above FL410 but no minima are defined for FL510 and above. Pressure altimeter sensitivity degrades so severely with altitude that preserving RVSM-equivalent worst-case separation yields only about 17 usable levels between FL530 and FL1000 and becomes unusable above FL1000.",
      "proposedAction": "Define an absolute altitude limit for pressure altitude as sole vertical reference; establish a flight level and separation scheme between FL510 and that limit; assess hybrid pressure/GNSS/inertial altimetry and its assurance implications for surveillance and ACAS.",
      "owningGroups": [
        "SASP",
        "CNSP",
        "AIRP"
      ]
    },
    {
      "id": "GAP-HAO-FLOOR",
      "title": "No agreed definition or geometry of the HAO airspace floor",
      "instrument": "Annex 11 / Doc 4444 / Doc 7030",
      "reference": "Airspace classification and designation",
      "gapType": "New provision",
      "severity": 4,
      "description": "There is no globally set bottom flight level for higher airspace. Current work by the US, Europe and CANSO points towards no single global floor: it will depend on local airspace structure and the specific use case, and the geometry may itself be dynamic as the traffic below changes.",
      "proposedAction": "Provide a performance-based method for States to designate an HAO volume, including dynamic and time-varying geometries, rather than a fixed global flight level.",
      "owningGroups": [
        "ATMRPP",
        "SASP",
        "ATMOPSP"
      ]
    },
    {
      "id": "GAP-AIRSPACE-CLASS",
      "title": "Airspace classification above FL500 is inconsistent between States",
      "instrument": "Annex 11 - Air Traffic Services",
      "reference": "Appendix 4 - ATS airspace classes",
      "gapType": "Amendment",
      "severity": 4,
      "description": "Above FL500 States variously apply Upper Class E (US, from FL600), Class C to FL660 or unlimited (much of Europe), Class G, or leave the airspace unclassified. A single HAPS mission routinely crosses several of these regimes in one flight.",
      "proposedAction": "Either a new HAO airspace class or an agreed mapping of existing classes with harmonized service expectations and entry conditions.",
      "owningGroups": [
        "ATMRPP",
        "ATMOPSP",
        "SASP"
      ]
    },
    {
      "id": "GAP-COOP-SEP",
      "title": "Cooperative separation is not recognised in ICAO provisions",
      "instrument": "Annex 11 / PANS-ATM",
      "reference": "Provision of separation; responsibility for separation",
      "gapType": "New provision",
      "severity": 5,
      "description": "FAA/NASA ETM and SESAR ECHO both rest on operators being responsible for coordinating and executing separation among themselves in cooperative areas, with ATC retaining authority over the airspace. ICAO provisions currently assume separation is provided by an ATS unit or by the pilot under VFR.",
      "proposedAction": "Introduce a recognised cooperative separation construct, with community rules of the road, State approval of operators and of service providers, and defined interfaces to ATC-provided separation.",
      "owningGroups": [
        "SASP",
        "ATMRPP",
        "ATMOPSP",
        "LEGAL"
      ]
    },
    {
      "id": "GAP-INTENT-EXCHANGE",
      "title": "No standard for exchange of probabilistic and rolling operational intent",
      "instrument": "FF-ICE / SWIM / Doc 4444",
      "reference": "Flight plan and flight information exchange",
      "gapType": "New provision",
      "severity": 5,
      "description": "FF-ICE assumes a bounded flight with a departure and destination. HAPS plan and re-plan continuously while airborne, may never have a determinable end point, and some vehicles have trajectories expressed as probability distributions with confidence levels rather than deterministic 4D paths.",
      "proposedAction": "Extend FF-ICE and the ATM information reference model to carry rolling-window intent, containment confidence level, and performance/manoeuvrability descriptors needed to set deconfliction timelines.",
      "owningGroups": [
        "IMP",
        "ATMRPP",
        "ATMOPSP"
      ]
    },
    {
      "id": "GAP-FPL-CODES",
      "title": "No aircraft type designators or flight plan encoding for HAPS",
      "instrument": "Doc 8643 / PANS-ATM Appendix 2",
      "reference": "Aircraft type designators; flight plan items 9 and 18",
      "gapType": "Amendment",
      "severity": 3,
      "description": "Operators currently file 'ZZZZ' in item 9 and describe the LTA-HAPS type in item 18 because no designators exist. Equipment and capability codes do not describe HAPS CNS fits.",
      "proposedAction": "Create HAPS type designators, wake/performance categories and capability codes; align surveillance equipage codes with actual HAPS fits.",
      "owningGroups": [
        "ATMOPSP",
        "IMP"
      ]
    },
    {
      "id": "GAP-SURV",
      "title": "Surveillance coverage and performance are undefined above conventional airspace",
      "instrument": "Annex 10 Volume IV / PBCS",
      "reference": "Surveillance systems; ADS-B and SSR performance",
      "gapType": "New provision",
      "severity": 4,
      "description": "Ground SSR and ADS-B coverage is not engineered for FL600+ and is absent over oceans and remote areas. Transponder use above the HAO floor is variously required, optional or unhelpful, and ACAS logic is not validated for the closure geometries and vertical separations involved.",
      "proposedAction": "Define required surveillance performance (RSP) for HAO, including space-based ADS-B, operator-provided position feeds and secure web-based position services as recognised surveillance sources; assess ACAS applicability.",
      "owningGroups": [
        "CNSP",
        "SASP",
        "ATMRPP"
      ]
    },
    {
      "id": "GAP-COMMS",
      "title": "No performance-based communication framework for exception-centric operations",
      "instrument": "Annex 10 / Doc 9869 PBCS manual",
      "reference": "Required communication performance",
      "gapType": "Amendment",
      "severity": 4,
      "description": "HAO communication is often not real-time voice: it is telephone to a mission control centre, data link, email or a secure website. At altitude no pilot is assigned to an individual vehicle; humans are assigned to handle exceptions. Existing RCP constructs assume a continuously available flight crew.",
      "proposedAction": "Extend PBCS to cover mission-control-mediated communication, define response time expectations for attended autonomous fleets, and codify primary and alternate means with agreed failure procedures.",
      "owningGroups": [
        "CNSP",
        "RPASP",
        "ATMOPSP"
      ]
    },
    {
      "id": "GAP-C2LINK",
      "title": "C2 link and spectrum provisions do not cover stratospheric fleet management",
      "instrument": "Annex 10 / ITU-R",
      "reference": "Command and control link requirements",
      "gapType": "New provision",
      "severity": 4,
      "description": "Fleet management systems supervise many craft from geographically distributed centres in States other than the State of operation. Link performance, handover, and spectrum protection for C2 in the stratosphere are not standardised, and HAPS also carry telecom payloads whose spectrum is governed under ITU HAPS/HIBS designations.",
      "proposedAction": "Establish C2 link performance requirements for many-to-one fleet supervision and coordinate aviation and telecommunication spectrum treatment.",
      "owningGroups": [
        "CNSP",
        "RPASP",
        "AVSECP"
      ]
    },
    {
      "id": "GAP-UNCONTROLLED-DESCENT",
      "title": "No provisions for uncontrolled descent of HAO vehicles",
      "instrument": "PANS-ATM / Annex 11 / Annex 12",
      "reference": "Contingency procedures; alerting service",
      "gapType": "New provision",
      "severity": 5,
      "description": "AN-Conf/14 explicitly called for provisions covering uncontrolled descent of HAO vehicles. A 'dark' platform that has lost telemetry generates a growing uncertainty volume that must be protected across FIRs and potentially across sovereign boundaries, with third-party ground risk.",
      "proposedAction": "Standard contingency construct: last known position plus forecast uncertainty volume, cross-FIR propagation, traffic information duty, SAR activation criteria and ground risk assessment methodology.",
      "owningGroups": [
        "SASP",
        "ATMOPSP",
        "SARP_SAR",
        "SMP"
      ]
    },
    {
      "id": "GAP-AUTH-CROSSBORDER",
      "title": "No mechanism for cross-border authorization and mutual proof of authorization",
      "instrument": "Chicago Convention Article 8 / Annex 2 / State practice",
      "reference": "Authorization of pilotless aircraft over the territory of a State",
      "gapType": "New provision",
      "severity": 5,
      "description": "A single HAPS mission may overfly many States. Both operators and HAO service providers need authorization from each sovereign authority, and entities exchanging data need to prove to one another that such authorization exists, on a need-to-know basis, while preserving State security and due-regard needs.",
      "proposedAction": "A digital trust framework covering identity, authentication, mutual proof of authorization and discovery/synchronisation, mapped to sovereign airspace regions.",
      "owningGroups": [
        "TFP",
        "LEGAL",
        "ATMRPP",
        "AVSECP"
      ]
    },
    {
      "id": "GAP-LIABILITY",
      "title": "Regulatory approval, coordination responsibility and liability are unresolved",
      "instrument": "Legal instruments / Annex 13",
      "reference": "AN-Conf/14 Recommendation 3.1/7 a)",
      "gapType": "New provision",
      "severity": 4,
      "description": "AN-Conf/14 expressly asked ICAO to address regulatory approval, coordination responsibilities and liability for HAO. Cooperative separation raises the question of who is accountable when deconfliction is performed by operators or by third-party service providers rather than an ATS unit.",
      "proposedAction": "Legal analysis of accountability allocation in cooperative environments, third-party ground risk, and occurrence investigation for HAO.",
      "owningGroups": [
        "LEGAL",
        "SMP",
        "ATMRPP"
      ]
    },
    {
      "id": "GAP-MET",
      "title": "No MET or space weather service specification for higher airspace",
      "instrument": "Annex 3 - Meteorological Service",
      "reference": "Flight documentation and forecasts",
      "gapType": "Amendment",
      "severity": 3,
      "description": "HAPS navigate by selecting stratospheric wind layers, so wind forecast quality is directly a safety and trajectory-accuracy parameter. Radiation and space weather exposure is material at HAO altitudes for both crewed supersonic and electronics-bearing HAPS. EASA's HAO research project has produced a dedicated report on MET and space weather risks to HAO.",
      "proposedAction": "Extend Annex 3 to specify stratospheric wind, temperature and space weather products for HAO, with accuracy and update-rate requirements.",
      "owningGroups": [
        "METP",
        "ATMRPP"
      ]
    },
    {
      "id": "GAP-LAUNCH-SITE",
      "title": "Launch and recovery facilities for HAPS are not covered by aerodrome provisions",
      "instrument": "Annex 14 - Aerodromes",
      "reference": "Aerodrome design and operations",
      "gapType": "New provision",
      "severity": 3,
      "description": "Facilities such as AALTOPORT, and balloon launch sites generally, are not aerodromes in the Annex 14 sense but require protected surfaces, coordinated launch windows and ATS interfaces. Kenya established its pathway through an 18-month bespoke regulatory engagement rather than by applying existing ICAO provisions.",
      "proposedAction": "Guidance for HAO launch and recovery sites: siting criteria relative to populated areas and congested airspace, protected volumes, and standard ATS coordination.",
      "owningGroups": [
        "ADOP",
        "ATMOPSP"
      ]
    },
    {
      "id": "GAP-SST-ACCEL",
      "title": "No procedures for supersonic acceleration and deceleration segments",
      "instrument": "PANS-ATM / Doc 7030",
      "reference": "En-route procedures; regional supplementary procedures",
      "gapType": "New provision",
      "severity": 4,
      "description": "Supersonic aircraft cannot readily be held at intermediate levels during acceleration and have very high closure rates and long turn radii. Existing en-route procedures, longitudinal separation minima and conflict resolution techniques assume subsonic performance.",
      "proposedAction": "Dedicated climb/acceleration and deceleration/descent procedures, revised longitudinal separation minima, and regional supplementary procedures for oceanic supersonic tracks.",
      "owningGroups": [
        "ATMOPSP",
        "SASP",
        "FLTOPSP"
      ]
    },
    {
      "id": "GAP-SST-ENV",
      "title": "Sonic boom and high-altitude emissions provisions are incomplete for routine operations",
      "instrument": "Annex 16 - Environmental Protection",
      "reference": "Noise and emissions certification",
      "gapType": "Amendment",
      "severity": 3,
      "description": "Routine supersonic operations require agreed treatment of en-route sonic boom over land and of emissions injected at higher altitudes, which interacts directly with which flight levels and routings can be made available.",
      "proposedAction": "Complete supersonic noise and emissions standards and link the resulting operating constraints to airspace design for HAO.",
      "owningGroups": [
        "FLTOPSP",
        "ATMRPP"
      ]
    },
    {
      "id": "GAP-SMS",
      "title": "Safety management provisions do not address attended autonomous fleets",
      "instrument": "Annex 19 - Safety Management",
      "reference": "SMS and State safety programme",
      "gapType": "Amendment",
      "severity": 3,
      "description": "Annex 19 assumes conventional operator structures. HAO introduces exception-centric supervision, a Fleet and Systems Supervisory Network acting as a virtual team, and an Operations Director accountable for many simultaneous craft. Terms used in industry drafts such as target level of safety, ALARP and just culture are not ICAO safety management terminology.",
      "proposedAction": "Guidance on SMS for attended autonomous fleets, with SPIs and SPTs suited to fleet operations, and alignment of terminology with Annex 19, the GATMOC and the GANP.",
      "owningGroups": [
        "SMP",
        "ATMRPP",
        "GASPSG"
      ]
    },
    {
      "id": "GAP-AIRWORTHINESS",
      "title": "No ICAO airworthiness framework for HAPS types",
      "instrument": "Annex 8 - Airworthiness of Aircraft",
      "reference": "Applicable certification categories",
      "gapType": "New provision",
      "severity": 4,
      "description": "HAPS fall outside existing Annex 8 categories. JARUS has published CS-HAPS Rev 1.0 as type certification recommendations covering all HAPS, HTA fixed-wing structures and LTA airship structures, with LTA balloon structures deferred to a later issue. The UK CAA is running an actual HAPS RPAS certification project.",
      "proposedAction": "Establish an ICAO airworthiness basis for HAPS drawing on JARUS CS-HAPS and on early State certification experience.",
      "owningGroups": [
        "AIRP",
        "RPASP"
      ]
    },
    {
      "id": "GAP-SAR",
      "title": "SAR and alerting arrangements do not cover uncrewed HAO vehicles",
      "instrument": "Annex 12 - Search and Rescue",
      "reference": "Alerting and SAR responsibility",
      "gapType": "Amendment",
      "severity": 2,
      "description": "There are no persons on board a HAPS, so classic SAR is not triggered, yet recovery, debris location and third-party protection still require coordinated action, sometimes in a different State from the one that authorised the flight.",
      "proposedAction": "Clarify alerting duties and recovery coordination for uncrewed HAO vehicles, distinguishing life-saving SAR from asset and debris recovery.",
      "owningGroups": [
        "SARP_SAR",
        "ATMOPSP"
      ]
    }
  ],
  "scenarios": [
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
    },
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
    },
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
    },
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
    },
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
  ],
  "jobCards": [
    {
      "id": "ATMRPP.0XX.XX",
      "idProvisional": true,
      "title": "Higher Airspace Operations (HAO)",
      "primaryGroup": "ATMRPP",
      "supportingGroups": [
        "ATMOPSP",
        "FLTOPSP",
        "SASP",
        "RPASP",
        "AAMSG",
        "ADOP",
        "TFP",
        "SMP",
        "GANPSG",
        "GASPSG"
      ],
      "status": "Draft",
      "priority": "High",
      "source": "14th Air Navigation Conference; AN-MIN 227-6; C-DEC 233/6",
      "problemStatement": "The absence of a holistic vision and global concept will result in fragmented approaches for higher airspace operations, thus leading to inefficiencies, interoperability issues, and safety risks.",
      "ganpGaspLink": "TBD",
      "proposedMetric": "% increase of HAO operations accommodated",
      "interdependencies": [
        "ATMRPP.013.01",
        "TFP.002.03",
        "ICNSS Framework",
        "AAM Vision Document"
      ],
      "expectedBenefits": [
        "Safe and efficient HAO",
        "Enabling the harmonized application of HAO",
        "Predictability and stability in the growth of HAO",
        "Accessibility of HAO by all States",
        "Minimum disruption for other airspace users"
      ],
      "references": [
        "A41-9: New Entrants",
        "AN-Conf/14 Recommendation 3.1/7",
        "GATMOC (Doc 9854)"
      ],
      "secretariatCoordinator": "ATMRPP Secretary",
      "notes": "Presented as ATMRPP-WG/46 Appendix E. A dedicated HAO Working Group was established, kicked off 26 June 2025, with membership expanded to 22 including individuals from other expert groups. The job card reference number is not yet assigned.",
      "workProgrammeElements": [
        {
          "wpe": "HAO-01",
          "documentAffected": "New document",
          "description": "HAO Global Vision and Concept of Operations - a new document to provide a global holistic vision and concept of operations for HAO covering all ICAO domains.",
          "supportingGroups": [
            "ATMOPSP",
            "FLTOPSP",
            "SASP",
            "RPASP",
            "AAMSG",
            "ADOP",
            "TFP",
            "SMP",
            "GANPSG",
            "GASPSG"
          ],
          "status": "On-schedule",
          "delivery": "Q2 2028",
          "effective": "",
          "applicability": ""
        },
        {
          "wpe": "HAO-02",
          "documentAffected": "Actions",
          "description": "Draft job cards - a set of draft job cards to develop provisions as necessary to implement the Global Concept of Operations for HAO.",
          "supportingGroups": [
            "ATMOPSP",
            "FLTOPSP",
            "SASP",
            "RPASP",
            "AAMSG",
            "ADOP",
            "TFP",
            "SMP",
            "GANPSG",
            "GASPSG"
          ],
          "status": "On-schedule",
          "delivery": "Q2 2028",
          "effective": "",
          "applicability": ""
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-HAO-FLOOR",
          "coverage": "framing"
        },
        {
          "gapId": "GAP-COOP-SEP",
          "coverage": "framing"
        },
        {
          "gapId": "GAP-AIRSPACE-CLASS",
          "coverage": "framing"
        },
        {
          "gapId": "GAP-LIABILITY",
          "coverage": "framing"
        },
        {
          "gapId": "GAP-AUTH-CROSSBORDER",
          "coverage": "framing"
        },
        {
          "gapId": "GAP-INTENT-EXCHANGE",
          "coverage": "framing"
        }
      ]
    },
    {
      "id": "SASP.019.01",
      "idProvisional": false,
      "title": "Higher Airspace Operations (HAO) using High Altitude Platform Systems (HAPS)",
      "primaryGroup": "SASP",
      "supportingGroups": [
        "ATMRPP",
        "ATMOPSP",
        "RPASP"
      ],
      "status": "Draft",
      "priority": "High",
      "source": "SASP Fourth Panel Meeting (SASP/4); 14th Air Navigation Conference; AN-MIN 227-6; C-DEC 233/6",
      "problemStatement": "The lack of harmonization in the management and integration of HAPS operations results in potential safety risks and inefficient use of airspace.",
      "ganpGaspLink": "GANP-ASBU Threads: CSEP-B3/4; NOPS-B4/2; FICE-B4/3; DAIM-B4/1; ASUR-B3/3. GASP: Goal 1.",
      "proposedMetric": "",
      "interdependencies": [
        "ATMRPP.0XX.XX (HAO global concept)"
      ],
      "expectedBenefits": [
        "Improved predictability of HAPS operations through consistent application of provisions and guidance material",
        "Improved and harmonized HAPS safety metrics, safety risk analysis and monitoring practices across international boundaries related to ATM",
        "Improved access to airspace for HAPS operators",
        "Improved levels of efficiency for aircraft operations near HAPS, and associated reduction in fuel burn and emissions"
      ],
      "references": [
        "Annex 2 - Rules of the Air",
        "Annex 11 - Air Traffic Services",
        "Annex 19 - Safety Management",
        "PANS-ATM (Doc 4444)",
        "Doc 9689 - Airspace Planning Methodology",
        "Doc 9859 - Safety Management Manual",
        "A41-9: New Entrants",
        "AN-Conf/14 Recommendation 3.1/7 b)"
      ],
      "secretariatCoordinator": "SASP Secretary",
      "notes": "Proposed as a new job card at SASP/5, Appendix B to the Report on Agenda Item 7. Current mitigation in the absence of provisions is to segregate large volumes of airspace to accommodate HAPS, which is precisely what the job card exists to remove. The ATMRPP is tasked with the overarching global concept; depending on the outcome this may result in further work for SASP beyond the scope of this job card.",
      "workProgrammeElements": [
        {
          "wpe": "SASP-HAPS-01",
          "documentAffected": "PANS-ATM (Doc 4444); Annex 11",
          "description": "Horizontal and vertical separation minima applicable to HAPS operations, having regard to surveillance and communication capabilities, HAPS performance and reliability characteristics, and airspace traffic densities.",
          "supportingGroups": [
            "ATMRPP",
            "ATMOPSP"
          ],
          "status": "Proposed",
          "delivery": "Q4 2029",
          "effective": "",
          "applicability": "Nov 2031"
        },
        {
          "wpe": "SASP-HAPS-02",
          "documentAffected": "Doc 9689; Doc 9859",
          "description": "Risk assessment and monitoring methodology for HAPS operations, including a methodology for assessing and mitigating the risk of abnormal operations (failure modes) that pose hazards to other airspace users and to persons and property on the ground.",
          "supportingGroups": [
            "SMP",
            "ATMRPP"
          ],
          "status": "Proposed",
          "delivery": "Q2 2030",
          "effective": "",
          "applicability": ""
        },
        {
          "wpe": "SASP-HAPS-03",
          "documentAffected": "PANS-ATM (Doc 4444)",
          "description": "Provisions for contingency planning and for uncontrolled descent of HAO vehicles, including protection of the resulting uncertainty volume across FIR boundaries.",
          "supportingGroups": [
            "ATMOPSP",
            "SARP_SAR"
          ],
          "status": "Proposed",
          "delivery": "Q4 2029",
          "effective": "",
          "applicability": "Nov 2031"
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-VERT-SEP",
          "coverage": "partial"
        },
        {
          "gapId": "GAP-UNCONTROLLED-DESCENT",
          "coverage": "resolving"
        },
        {
          "gapId": "GAP-A2-APP5",
          "coverage": "partial"
        },
        {
          "gapId": "GAP-SURV",
          "coverage": "partial"
        }
      ]
    },
    {
      "id": "SASP.018.02",
      "idProvisional": false,
      "title": "Expansion of upper limit of the Reduced Vertical Separation Minima (RVSM) band of flight levels",
      "primaryGroup": "SASP",
      "supportingGroups": [
        "ATMOPSP",
        "CNSP"
      ],
      "status": "Approved",
      "priority": "Medium",
      "source": "Separation and Airspace Safety Panel (SASP)",
      "problemStatement": "The RVSM band currently terminates at FL410, above which 2000 ft vertical separation applies. Expanding the upper limit would recover usable flight levels in the band immediately below higher airspace.",
      "ganpGaspLink": "GASP: Goal 1",
      "proposedMetric": "",
      "interdependencies": [
        "SASP.019.01",
        "ATMRPP.0XX.XX"
      ],
      "expectedBenefits": [
        "Additional usable flight levels below the HAO transition layer",
        "Improved efficiency for high-performance and supersonic operations"
      ],
      "references": [
        "PANS-ATM (Doc 4444)",
        "Annex 11",
        "Doc 9574"
      ],
      "secretariatCoordinator": "SASP Secretary",
      "notes": "SASP/5 considered WP/04 on operational impacts in the US, IP/17 on fast-time simulation of aircraft operating above the upper RVSM limit, and IP/19 on within-aircraft assessment of altimetry system error performance above FL410 using ADS-B surveillance data. Action SASP/5:2 tasks a summary working paper for SASP WG/43. This job card is the nearest existing work to the vertical reference problem but stops well below the HAO core.",
      "workProgrammeElements": [
        {
          "wpe": "SASP-RVSM-01",
          "documentAffected": "PANS-ATM (Doc 4444)",
          "description": "Proposal for amendment expanding the upper limit of the RVSM band of flight levels.",
          "supportingGroups": [
            "ATMOPSP"
          ],
          "status": "On-schedule",
          "delivery": "Q1 2028",
          "effective": "",
          "applicability": "Nov 2028"
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-VERT-SEP",
          "coverage": "partial"
        }
      ]
    },
    {
      "id": "ATMRPP.013.01",
      "idProvisional": false,
      "title": "Update to the Global ATM Operational Concept (Doc 9854)",
      "primaryGroup": "ATMRPP",
      "supportingGroups": [
        "FLTOPSP",
        "ATMOPSP",
        "SASP",
        "RPASP",
        "IMP",
        "METP",
        "GANPSG"
      ],
      "status": "Approved",
      "priority": "Medium",
      "source": "ATMRPP/4 Meeting",
      "problemStatement": "The Global ATM Operational Concept requires updating to reflect new entrants, automation and information-centric operations.",
      "ganpGaspLink": "GANP Doc 9750",
      "proposedMetric": "",
      "interdependencies": [
        "ATMRPP.0XX.XX"
      ],
      "expectedBenefits": [
        "A current overarching concept of operations against which all ATM work, including HAO, can be aligned"
      ],
      "references": [
        "Doc 9854 - Global Air Traffic Management Operational Concept"
      ],
      "secretariatCoordinator": "ATMRPP Secretary",
      "notes": "ATMRPP-WG/45 agreed that the HAO vision and concept, while consistent with the GATMOC, should not be included in the GATMOC - hence a separate HAO job card. HAO is nonetheless expected to be an early adopter of some of the more advanced GATMOC concepts.",
      "workProgrammeElements": [
        {
          "wpe": "10317",
          "documentAffected": "Doc 9854",
          "description": "Develop a proposal for amendment to Doc 9854.",
          "supportingGroups": [
            "FLTOPSP",
            "ATMOPSP",
            "SASP",
            "RPASP",
            "IMP",
            "METP",
            "GANPSG"
          ],
          "status": "On-schedule",
          "delivery": "Q2 2025",
          "effective": "Dec 2025",
          "applicability": "Dec 2025"
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-COOP-SEP",
          "coverage": "framing"
        }
      ]
    },
    {
      "id": "ATMRPP.001.05",
      "idProvisional": false,
      "title": "Implementation of Flight and Flow Information for a Collaborative Environment (FF-ICE)",
      "primaryGroup": "ATMRPP",
      "supportingGroups": [
        "ATMOPSP",
        "IMP"
      ],
      "status": "Approved",
      "priority": "High",
      "source": "ATMRPP",
      "problemStatement": "Legacy flight planning mechanisms cannot carry the information required for a collaborative, trajectory-based environment.",
      "ganpGaspLink": "GANP ASBU thread FICE",
      "proposedMetric": "",
      "interdependencies": [
        "ATMRPP.012.02",
        "ATMRPP.011.02"
      ],
      "expectedBenefits": [
        "A common information exchange for flight and flow information"
      ],
      "references": [
        "Doc 9965 - Manual on FF-ICE"
      ],
      "secretariatCoordinator": "ATMRPP Secretary",
      "notes": "FF-ICE assumes a bounded flight with a departure and a destination. Carrying rolling-window, probabilistic HAO intent is not currently in scope of this job card and would require either an extension here or a new element under the HAO job card.",
      "workProgrammeElements": [
        {
          "wpe": "10322",
          "documentAffected": "Doc 9965; PANS-ATM",
          "description": "FF-ICE implementation provisions and guidance.",
          "supportingGroups": [
            "ATMOPSP",
            "IMP"
          ],
          "status": "On-schedule",
          "delivery": "Q4 2026",
          "effective": "",
          "applicability": ""
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-INTENT-EXCHANGE",
          "coverage": "partial"
        }
      ]
    },
    {
      "id": "TFP.002.03",
      "idProvisional": false,
      "title": "Considerations for an International Aviation Trust Framework",
      "primaryGroup": "TFP",
      "supportingGroups": [
        "IMP",
        "AVSECP",
        "ATMRPP"
      ],
      "status": "Approved",
      "priority": "High",
      "source": "Trust Framework work programme",
      "problemStatement": "Digital information exchange across sovereign boundaries requires a means of establishing identity, authenticity and authorization between parties that have no prior relationship.",
      "ganpGaspLink": "GANP ASBU threads SWIM, DAIM",
      "proposedMetric": "",
      "interdependencies": [
        "TFP.003.03",
        "ATMRPP.0XX.XX"
      ],
      "expectedBenefits": [
        "Trusted cross-border digital exchange between aviation entities"
      ],
      "references": [
        "Doc 10143 - Manual on the ICAO Trust Framework"
      ],
      "secretariatCoordinator": "TFP Secretary",
      "notes": "Explicitly listed as an interdependency of the HAO job card. This is the nearest existing work to the mutual proof of authorization problem, but it is not scoped to HAO operator and service provider authorization region by region.",
      "workProgrammeElements": [
        {
          "wpe": "TFP-01",
          "documentAffected": "Doc 10143",
          "description": "Trust framework provisions covering digital identity and authentication.",
          "supportingGroups": [
            "IMP",
            "AVSECP"
          ],
          "status": "On-schedule",
          "delivery": "Q4 2027",
          "effective": "",
          "applicability": ""
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-AUTH-CROSSBORDER",
          "coverage": "partial"
        }
      ]
    },
    {
      "id": "RPASP.003.10",
      "idProvisional": false,
      "title": "RPAS Detect and Avoid (DAA)",
      "primaryGroup": "RPASP",
      "supportingGroups": [
        "SASP",
        "CNSP"
      ],
      "status": "Approved",
      "priority": "High",
      "source": "RPASP",
      "problemStatement": "Remotely piloted aircraft require a means of detecting and avoiding other traffic equivalent to the see-and-avoid capability of an on-board pilot.",
      "ganpGaspLink": "GANP ASBU thread ASUR",
      "proposedMetric": "",
      "interdependencies": [
        "SASP.019.01"
      ],
      "expectedBenefits": [
        "Safe integration of RPAS into non-segregated airspace"
      ],
      "references": [
        "Annex 2",
        "Annex 6 Part IV",
        "Doc 10019 - RPAS Manual"
      ],
      "secretariatCoordinator": "RPASP Secretary",
      "notes": "DAA effectiveness cannot be assumed between vehicle pairs at the extreme opposite ends of the performance spectrum, such as a supersonic aircraft and a station-keeping HAPS. A vehicle-pair compatibility matrix is not currently in scope.",
      "workProgrammeElements": [
        {
          "wpe": "RPASP-DAA-01",
          "documentAffected": "Doc 10019; Annex 2",
          "description": "Detect and avoid provisions and guidance for RPAS.",
          "supportingGroups": [
            "SASP"
          ],
          "status": "On-schedule",
          "delivery": "Q4 2027",
          "effective": "",
          "applicability": "Nov 2029"
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-SURV",
          "coverage": "partial"
        }
      ]
    },
    {
      "id": "METP.014.01",
      "idProvisional": false,
      "title": "Further development of space weather information service",
      "primaryGroup": "METP",
      "supportingGroups": [
        "CNSP",
        "FLTOPSP"
      ],
      "status": "Approved",
      "priority": "Medium",
      "source": "METP",
      "problemStatement": "Space weather effects on communication, navigation and radiation exposure require a defined information service.",
      "ganpGaspLink": "GANP ASBU thread AMET",
      "proposedMetric": "",
      "interdependencies": [
        "NSP.007.04 Mitigation of Space Weather Effects (Navigation Systems Panel)"
      ],
      "expectedBenefits": [
        "Operationally usable space weather advisories"
      ],
      "references": [
        "Annex 3 - Meteorological Service for International Air Navigation"
      ],
      "secretariatCoordinator": "METP Secretary",
      "notes": "Radiation and space weather exposure is material at HAO altitudes for both crewed supersonic operations and for the electronics carried by HAPS. Stratospheric wind forecast quality, which is a direct trajectory-accuracy parameter for LTA-HAPS, is not covered by this job card.",
      "workProgrammeElements": [
        {
          "wpe": "METP-SWX-01",
          "documentAffected": "Annex 3; PANS-MET",
          "description": "Space weather information service provisions.",
          "supportingGroups": [
            "CNSP"
          ],
          "status": "On-schedule",
          "delivery": "Q2 2027",
          "effective": "",
          "applicability": "Nov 2028"
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-MET",
          "coverage": "partial"
        }
      ]
    },
    {
      "id": "SEC-HAPS-GM",
      "idProvisional": true,
      "title": "HAPS early adopter guidance material (Secretariat activity)",
      "primaryGroup": "ATMRPP",
      "supportingGroups": [
        "SASP",
        "ATMOPSP"
      ],
      "status": "Delivered",
      "priority": "High",
      "source": "Secretariat early adopter work, reported to ATMRPP-WG/45",
      "problemStatement": "States and ANSPs face HAPS operations now, ahead of any ICAO provisions being available.",
      "ganpGaspLink": "",
      "proposedMetric": "",
      "interdependencies": [
        "SASP.019.01",
        "ATMRPP.0XX.XX"
      ],
      "expectedBenefits": [
        "Immediate practical guidance for States and ANSPs encountering HAPS operations"
      ],
      "references": [
        "Annex 2 Appendix 5",
        "PANS-ATM"
      ],
      "secretariatCoordinator": "ATMRPP Secretary",
      "notes": "Guidance material developed by the Secretariat based on the current operating environment, with expected completion December 2025. This is guidance, not provisions: it documents good practice and supplies a Letter of Agreement template rather than amending any Annex.",
      "workProgrammeElements": [
        {
          "wpe": "SEC-01",
          "documentAffected": "New guidance material",
          "description": "Guidance material for the integration of LTA-HAPS operations into ATM, including a sample ANSP/operator Letter of Agreement.",
          "supportingGroups": [
            "SASP",
            "ATMOPSP"
          ],
          "status": "Delivered",
          "delivery": "Q4 2025",
          "effective": "",
          "applicability": ""
        }
      ],
      "addressesGaps": [
        {
          "gapId": "GAP-A2-APP5",
          "coverage": "partial"
        },
        {
          "gapId": "GAP-COMMS",
          "coverage": "partial"
        }
      ]
    }
  ],
  "firRegions": [
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
},
  ontology: {
  "$schema": "../schemas/hao-ontology.schema.json",
  "meta": {
    "ontologyId": "HAO-ONT",
    "title": "Higher Airspace Operations Ontology (BFO-conformant)",
    "version": "0.9.0",
    "upperOntology": "Basic Formal Ontology (BFO 2.0 / ISO/IEC 21838-2)",
    "midLevel": [
      "Information Artifact Ontology (IAO) for information content entities",
      "Common Core Ontologies patterns for agents, artefacts and events"
    ],
    "namespace": "https://icao.int/hao/ont#",
    "designNote": "Every HAO class is asserted as a subclass of exactly one BFO class. The most common modelling error in aviation ontologies is to conflate a vehicle (independent continuant), the role it plays (specifically dependent continuant), the mission it participates in (occurrent), and the plan describing it (generically dependent continuant). Those four are kept strictly separate here."
  },
  "bfoBackbone": [
    {
      "id": "bfo:Entity",
      "label": "Entity",
      "parent": null
    },
    {
      "id": "bfo:Continuant",
      "label": "Continuant",
      "parent": "bfo:Entity",
      "note": "Persists through time, retaining identity."
    },
    {
      "id": "bfo:Occurrent",
      "label": "Occurrent",
      "parent": "bfo:Entity",
      "note": "Unfolds in time; has temporal parts."
    },
    {
      "id": "bfo:IndependentContinuant",
      "label": "Independent continuant",
      "parent": "bfo:Continuant"
    },
    {
      "id": "bfo:MaterialEntity",
      "label": "Material entity",
      "parent": "bfo:IndependentContinuant"
    },
    {
      "id": "bfo:Object",
      "label": "Object",
      "parent": "bfo:MaterialEntity"
    },
    {
      "id": "bfo:ObjectAggregate",
      "label": "Object aggregate",
      "parent": "bfo:MaterialEntity"
    },
    {
      "id": "bfo:ImmaterialEntity",
      "label": "Immaterial entity",
      "parent": "bfo:IndependentContinuant"
    },
    {
      "id": "bfo:SiteBFO",
      "label": "Site",
      "parent": "bfo:ImmaterialEntity"
    },
    {
      "id": "bfo:SpatialRegion",
      "label": "Spatial region",
      "parent": "bfo:ImmaterialEntity"
    },
    {
      "id": "bfo:SpecificallyDependentContinuant",
      "label": "Specifically dependent continuant",
      "parent": "bfo:Continuant"
    },
    {
      "id": "bfo:Quality",
      "label": "Quality",
      "parent": "bfo:SpecificallyDependentContinuant"
    },
    {
      "id": "bfo:RealizableEntity",
      "label": "Realizable entity",
      "parent": "bfo:SpecificallyDependentContinuant"
    },
    {
      "id": "bfo:Role",
      "label": "Role",
      "parent": "bfo:RealizableEntity"
    },
    {
      "id": "bfo:Disposition",
      "label": "Disposition",
      "parent": "bfo:RealizableEntity"
    },
    {
      "id": "bfo:Function",
      "label": "Function",
      "parent": "bfo:Disposition"
    },
    {
      "id": "bfo:GenericallyDependentContinuant",
      "label": "Generically dependent continuant",
      "parent": "bfo:Continuant"
    },
    {
      "id": "bfo:Process",
      "label": "Process",
      "parent": "bfo:Occurrent"
    },
    {
      "id": "bfo:ProcessBoundary",
      "label": "Process boundary",
      "parent": "bfo:Occurrent"
    },
    {
      "id": "bfo:TemporalRegion",
      "label": "Temporal region",
      "parent": "bfo:Occurrent"
    },
    {
      "id": "bfo:SpatiotemporalRegion",
      "label": "Spatiotemporal region",
      "parent": "bfo:Occurrent"
    }
  ],
  "relations": [
    {
      "id": "rel:part_of",
      "label": "part of",
      "domain": "bfo:Entity",
      "range": "bfo:Entity",
      "inverse": "rel:has_part"
    },
    {
      "id": "rel:has_part",
      "label": "has part",
      "domain": "bfo:Entity",
      "range": "bfo:Entity",
      "inverse": "rel:part_of"
    },
    {
      "id": "rel:participates_in",
      "label": "participates in",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:Process",
      "inverse": "rel:has_participant"
    },
    {
      "id": "rel:has_participant",
      "label": "has participant",
      "domain": "bfo:Process",
      "range": "bfo:IndependentContinuant",
      "inverse": "rel:participates_in"
    },
    {
      "id": "rel:bearer_of",
      "label": "bearer of",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:SpecificallyDependentContinuant",
      "inverse": "rel:inheres_in"
    },
    {
      "id": "rel:inheres_in",
      "label": "inheres in",
      "domain": "bfo:SpecificallyDependentContinuant",
      "range": "bfo:IndependentContinuant",
      "inverse": "rel:bearer_of"
    },
    {
      "id": "rel:realizes",
      "label": "realizes",
      "domain": "bfo:Process",
      "range": "bfo:RealizableEntity",
      "inverse": "rel:realized_in"
    },
    {
      "id": "rel:realized_in",
      "label": "realized in",
      "domain": "bfo:RealizableEntity",
      "range": "bfo:Process",
      "inverse": "rel:realizes"
    },
    {
      "id": "rel:occurs_in",
      "label": "occurs in",
      "domain": "bfo:Process",
      "range": "bfo:SiteBFO"
    },
    {
      "id": "rel:located_in",
      "label": "located in",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:SiteBFO"
    },
    {
      "id": "rel:concretizes",
      "label": "concretizes",
      "domain": "bfo:SpecificallyDependentContinuant",
      "range": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "rel:is_about",
      "label": "is about",
      "domain": "bfo:GenericallyDependentContinuant",
      "range": "bfo:Entity"
    },
    {
      "id": "rel:prescribes",
      "label": "prescribes",
      "domain": "bfo:GenericallyDependentContinuant",
      "range": "bfo:Process"
    },
    {
      "id": "rel:preceded_by",
      "label": "preceded by",
      "domain": "bfo:Occurrent",
      "range": "bfo:Occurrent"
    },
    {
      "id": "rel:has_quality",
      "label": "has quality",
      "domain": "bfo:IndependentContinuant",
      "range": "bfo:Quality"
    },
    {
      "id": "rel:regulates",
      "label": "regulates",
      "domain": "bfo:GenericallyDependentContinuant",
      "range": "bfo:Entity",
      "note": "Non-BFO convenience relation used for ICAO provisions."
    },
    {
      "id": "rel:mitigated_by",
      "label": "mitigated by",
      "domain": "bfo:Entity",
      "range": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "rel:owned_by",
      "label": "owned by",
      "domain": "bfo:Entity",
      "range": "bfo:Object",
      "note": "Work item to expert group assignment."
    }
  ],
  "classes": [
    {
      "id": "hao:HAOVehicle",
      "label": "HAO vehicle",
      "bfo": "bfo:Object",
      "definition": "A material object designed to derive lift from its interaction with the atmosphere and to operate in, or transit through, higher airspace. Excludes space vehicles, which do not derive lift from the atmosphere and therefore fall outside most of the Chicago Convention except as regards safe integration into airspace.",
      "examples": [
        "Zephyr airframe",
        "a specific stratospheric balloon envelope and flight system",
        "an Overture airframe"
      ]
    },
    {
      "id": "hao:LighterThanAirVehicle",
      "label": "Lighter-than-air vehicle",
      "bfo": "bfo:Object",
      "parent": "hao:HAOVehicle"
    },
    {
      "id": "hao:StratosphericBalloon",
      "label": "Stratospheric balloon",
      "bfo": "bfo:Object",
      "parent": "hao:LighterThanAirVehicle"
    },
    {
      "id": "hao:StratosphericAirship",
      "label": "Stratospheric airship",
      "bfo": "bfo:Object",
      "parent": "hao:LighterThanAirVehicle"
    },
    {
      "id": "hao:HeavierThanAirVehicle",
      "label": "Heavier-than-air vehicle",
      "bfo": "bfo:Object",
      "parent": "hao:HAOVehicle"
    },
    {
      "id": "hao:SolarFixedWingHAPS",
      "label": "Solar-electric fixed-wing HAPS",
      "bfo": "bfo:Object",
      "parent": "hao:HeavierThanAirVehicle"
    },
    {
      "id": "hao:SupersonicAircraft",
      "label": "Supersonic aircraft",
      "bfo": "bfo:Object",
      "parent": "hao:HeavierThanAirVehicle"
    },
    {
      "id": "hao:Payload",
      "label": "Payload",
      "bfo": "bfo:Object",
      "definition": "A material object carried by an HAO vehicle to fulfil a mission, and which is part_of the vehicle for the duration of the flight."
    },
    {
      "id": "hao:Fleet",
      "label": "HAO fleet",
      "bfo": "bfo:ObjectAggregate",
      "definition": "An aggregate of HAO vehicles managed as a single operational system by one operator. The fleet, not the individual vehicle, is frequently the correct unit of regulation and of demand and capacity balancing."
    },
    {
      "id": "hao:GroundSegment",
      "label": "Ground segment",
      "bfo": "bfo:ObjectAggregate",
      "definition": "The aggregate of mission control facilities, launch and recovery equipment, and communication infrastructure supporting a fleet."
    },
    {
      "id": "hao:MissionControlCentre",
      "label": "Mission control centre",
      "bfo": "bfo:Object",
      "definition": "A unit at which human intervention is exercised by setting goals for the system, with humans on the loop rather than in the loop. A single centre may manage a large number of craft."
    },
    {
      "id": "hao:LaunchRecoverySite",
      "label": "Launch and recovery site",
      "bfo": "bfo:SiteBFO",
      "definition": "An immaterial bounded site at which HAO vehicles are launched and recovered. Not an aerodrome in the Annex 14 sense.",
      "examples": [
        "AALTOPORT, Laikipia County, Kenya"
      ]
    },
    {
      "id": "hao:AirspaceVolume",
      "label": "Airspace volume",
      "bfo": "bfo:SiteBFO",
      "definition": "A three-dimensional immaterial region of airspace with a defined boundary, potentially time-varying."
    },
    {
      "id": "hao:HigherAirspaceVolume",
      "label": "Higher airspace volume",
      "bfo": "bfo:SiteBFO",
      "parent": "hao:AirspaceVolume",
      "definition": "An airspace volume above conventional controlled airspace and below outer space. Deliberately defined without a fixed global floor: the floor depends on local airspace structure and on the use case, and its geometry may be dynamic."
    },
    {
      "id": "hao:CooperativeZone",
      "label": "Cooperative zone",
      "bfo": "bfo:SiteBFO",
      "parent": "hao:AirspaceVolume",
      "definition": "An airspace volume in which separation is achieved by operators coordinating among themselves under community rules approved by the State. Unifies the FAA cooperative area and the EUROCONTROL 4D zone."
    },
    {
      "id": "hao:TransitionLayer",
      "label": "HAO transition layer",
      "bfo": "bfo:SiteBFO",
      "parent": "hao:AirspaceVolume",
      "definition": "The contested band between the top of conventional operations and the base of the HAO core, in which clearance-based and cooperative regimes must interoperate."
    },
    {
      "id": "hao:UncertaintyVolume",
      "label": "Uncertainty volume",
      "bfo": "bfo:SiteBFO",
      "parent": "hao:AirspaceVolume",
      "definition": "A protected volume constructed around the last known and forecast position of a vehicle whose telemetry has been lost, growing with elapsed time."
    },
    {
      "id": "hao:SovereignAirspaceRegion",
      "label": "Sovereign airspace region",
      "bfo": "bfo:SiteBFO",
      "parent": "hao:AirspaceVolume",
      "definition": "A region of airspace mapped to a sovereign authority, used as the unit against which authorization and mutual proof of authorization are evaluated."
    },
    {
      "id": "hao:Agent",
      "label": "Agent",
      "bfo": "bfo:Object",
      "definition": "An organisation or person capable of bearing a role in the HAO system."
    },
    {
      "id": "hao:State",
      "label": "State",
      "bfo": "bfo:Object",
      "parent": "hao:Agent"
    },
    {
      "id": "hao:Operator",
      "label": "HAO operator",
      "bfo": "bfo:Object",
      "parent": "hao:Agent"
    },
    {
      "id": "hao:ANSP",
      "label": "Air navigation service provider",
      "bfo": "bfo:Object",
      "parent": "hao:Agent"
    },
    {
      "id": "hao:HAOServiceProvider",
      "label": "HAO service provider",
      "bfo": "bfo:Object",
      "parent": "hao:Agent",
      "definition": "An entity providing deconfliction, discovery, synchronisation or information services for HAO. Note: mapped as a subset of the GATMOC ATM service provider or ATM support industry categories rather than introduced as a new stakeholder class."
    },
    {
      "id": "hao:ExpertGroup",
      "label": "ICAO expert group",
      "bfo": "bfo:Object",
      "parent": "hao:Agent"
    },
    {
      "id": "hao:FleetSupervisor",
      "label": "Fleet and systems supervisory network",
      "bfo": "bfo:ObjectAggregate",
      "parent": "hao:Agent",
      "definition": "The collective, not necessarily collocated, set of people, teams and associated systems responsible for supervising a fleet, executing their functions as a virtual team."
    },
    {
      "id": "hao:OperatorRole",
      "label": "Operator role",
      "bfo": "bfo:Role",
      "definition": "A role borne by an agent, realized in the process of conducting an HAO operation."
    },
    {
      "id": "hao:SeparationProviderRole",
      "label": "Separation provider role",
      "bfo": "bfo:Role",
      "definition": "A role realized in the provision of separation. Critically, in HAO this role may be borne by an ANSP, by an operator, or by a third-party service provider, which is precisely why liability allocation is an open question."
    },
    {
      "id": "hao:AuthorisingAuthorityRole",
      "label": "Authorising authority role",
      "bfo": "bfo:Role"
    },
    {
      "id": "hao:DueRegardRole",
      "label": "Due regard operator role",
      "bfo": "bfo:Role",
      "definition": "A role borne by a State operator entitled to withhold identity, position and intent while consuming cooperative data."
    },
    {
      "id": "hao:OperationsDirectorRole",
      "label": "Operations director role",
      "bfo": "bfo:Role",
      "definition": "A first-person supervisory role determining procedures and protocols for response to events, especially off-nominal situations."
    },
    {
      "id": "hao:StationKeepingDisposition",
      "label": "Station-keeping disposition",
      "bfo": "bfo:Disposition",
      "definition": "The disposition of a vehicle to remain over a designated geographic area, realized in a station-keeping process."
    },
    {
      "id": "hao:PersistenceDisposition",
      "label": "Persistence disposition",
      "bfo": "bfo:Disposition",
      "definition": "The disposition to remain airborne for extended periods, realized in a long-endurance flight process."
    },
    {
      "id": "hao:FlightTerminationFunction",
      "label": "Flight termination function",
      "bfo": "bfo:Function",
      "definition": "The function of a flight termination system, realized in a controlled descent process."
    },
    {
      "id": "hao:DetectAndAvoidFunction",
      "label": "Detect and avoid function",
      "bfo": "bfo:Function"
    },
    {
      "id": "hao:ConnectivityFunction",
      "label": "Connectivity provision function",
      "bfo": "bfo:Function",
      "definition": "The function of a telecommunication payload, realized in a connectivity service delivery process."
    },
    {
      "id": "hao:ObservationFunction",
      "label": "Earth observation function",
      "bfo": "bfo:Function"
    },
    {
      "id": "hao:AltitudeQuality",
      "label": "Altitude",
      "bfo": "bfo:Quality"
    },
    {
      "id": "hao:AirspeedQuality",
      "label": "Airspeed",
      "bfo": "bfo:Quality"
    },
    {
      "id": "hao:EnergyStateQuality",
      "label": "Energy state",
      "bfo": "bfo:Quality",
      "definition": "Battery state of charge or fuel state; for solar HAPS this quality varies diurnally and directly bounds performance."
    },
    {
      "id": "hao:ContainmentConfidenceQuality",
      "label": "Containment confidence level",
      "bfo": "bfo:Quality",
      "definition": "The confidence with which a vehicle is expected to remain within a declared volume, necessary because some HAO trajectories are probability distributions rather than deterministic paths."
    },
    {
      "id": "hao:CNSPerformanceQuality",
      "label": "CNS performance",
      "bfo": "bfo:Quality"
    },
    {
      "id": "hao:HAOOperation",
      "label": "HAO operation",
      "bfo": "bfo:Process",
      "definition": "The whole process of conducting a higher airspace operation, from authorization through recovery."
    },
    {
      "id": "hao:LaunchProcess",
      "label": "Launch and ascent process",
      "bfo": "bfo:Process",
      "parent": "hao:HAOOperation"
    },
    {
      "id": "hao:TransitProcess",
      "label": "Transit process",
      "bfo": "bfo:Process",
      "parent": "hao:HAOOperation"
    },
    {
      "id": "hao:StationKeepingProcess",
      "label": "Station-keeping process",
      "bfo": "bfo:Process",
      "parent": "hao:HAOOperation"
    },
    {
      "id": "hao:CruiseProcess",
      "label": "Higher airspace cruise process",
      "bfo": "bfo:Process",
      "parent": "hao:HAOOperation"
    },
    {
      "id": "hao:DescentRecoveryProcess",
      "label": "Descent and recovery process",
      "bfo": "bfo:Process",
      "parent": "hao:HAOOperation"
    },
    {
      "id": "hao:ContingencyProcess",
      "label": "Contingency process",
      "bfo": "bfo:Process",
      "parent": "hao:HAOOperation"
    },
    {
      "id": "hao:UncontrolledDescentProcess",
      "label": "Uncontrolled descent process",
      "bfo": "bfo:Process",
      "parent": "hao:ContingencyProcess"
    },
    {
      "id": "hao:ConflictManagementProcess",
      "label": "Conflict management process",
      "bfo": "bfo:Process"
    },
    {
      "id": "hao:StrategicDeconflictionProcess",
      "label": "Strategic deconfliction process",
      "bfo": "bfo:Process",
      "parent": "hao:ConflictManagementProcess"
    },
    {
      "id": "hao:CooperativeSeparationProcess",
      "label": "Cooperative separation process",
      "bfo": "bfo:Process",
      "parent": "hao:ConflictManagementProcess",
      "definition": "A process in which operators, rather than an ATS unit, identify and resolve conflicts under community rules approved by the State."
    },
    {
      "id": "hao:ATCSeparationProcess",
      "label": "ATC separation process",
      "bfo": "bfo:Process",
      "parent": "hao:ConflictManagementProcess"
    },
    {
      "id": "hao:AuthorizationProcess",
      "label": "Authorization process",
      "bfo": "bfo:Process"
    },
    {
      "id": "hao:MutualProofOfAuthorizationProcess",
      "label": "Mutual proof of authorization process",
      "bfo": "bfo:Process",
      "parent": "hao:AuthorizationProcess"
    },
    {
      "id": "hao:ServiceDeliveryProcess",
      "label": "Service delivery process",
      "bfo": "bfo:Process",
      "definition": "The mission-level process the operation exists to enable, e.g. delivering connectivity or imagery."
    },
    {
      "id": "hao:RegimeTransitionBoundary",
      "label": "Regime transition boundary",
      "bfo": "bfo:ProcessBoundary",
      "definition": "The instantaneous boundary at which an operation passes between an ATC-managed and a cooperative regime. Marking this as a process boundary rather than a process is what allows the tool to reason about who is responsible at the instant of transition."
    },
    {
      "id": "hao:OperationalIntent",
      "label": "Operational intent",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "An information content entity that is about a planned or ongoing HAO operation, expressed over a rolling time window and carrying a containment confidence level and performance descriptors."
    },
    {
      "id": "hao:FlightPlan",
      "label": "Flight plan",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:PositionReport",
      "label": "Position report",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:Authorization",
      "label": "Authorization",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "An information content entity issued by a sovereign authority permitting an operator or a service provider to act within a sovereign airspace region."
    },
    {
      "id": "hao:DigitalIdentityCredential",
      "label": "Digital identity credential",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:SafetyCase",
      "label": "Safety case",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:LetterOfAgreement",
      "label": "Letter of agreement",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "The bilateral instrument between an operator and an ANSP that currently carries most of the operational detail, in the absence of ICAO provisions."
    },
    {
      "id": "hao:ICAOProvision",
      "label": "ICAO provision",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "A Standard, Recommended Practice, procedure or guidance material published by ICAO."
    },
    {
      "id": "hao:ProvisionGap",
      "label": "Provision gap",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "An information content entity asserting that an HAO requirement is not met by any existing ICAO provision."
    },
    {
      "id": "hao:ConceptOfOperations",
      "label": "Concept of operations",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:GATMOCComponent",
      "label": "GATMOC concept component",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:GANPElement",
      "label": "GANP element",
      "bfo": "bfo:GenericallyDependentContinuant"
    },
    {
      "id": "hao:UseCase",
      "label": "HAO use case",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "An information content entity describing a purpose for which higher airspace is used, such as disaster response or internet connectivity. Modelled as information, not as a process, because the same process type can serve several use cases and a use case can be declared before any process occurs."
    },
    {
      "id": "hao:JobCard",
      "label": "Job card",
      "bfo": "bfo:GenericallyDependentContinuant",
      "definition": "The ICAO work programme instrument assigning a deliverable to an expert group."
    }
  ],
  "axioms": [
    {
      "subject": "hao:HAOVehicle",
      "relation": "rel:participates_in",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:HAOVehicle",
      "relation": "rel:bearer_of",
      "object": "hao:StationKeepingDisposition"
    },
    {
      "subject": "hao:HAOVehicle",
      "relation": "rel:has_quality",
      "object": "hao:AltitudeQuality"
    },
    {
      "subject": "hao:HAOVehicle",
      "relation": "rel:has_part",
      "object": "hao:Payload"
    },
    {
      "subject": "hao:Fleet",
      "relation": "rel:has_part",
      "object": "hao:HAOVehicle"
    },
    {
      "subject": "hao:Operator",
      "relation": "rel:bearer_of",
      "object": "hao:OperatorRole"
    },
    {
      "subject": "hao:OperatorRole",
      "relation": "rel:realized_in",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:SeparationProviderRole",
      "relation": "rel:realized_in",
      "object": "hao:ConflictManagementProcess"
    },
    {
      "subject": "hao:ANSP",
      "relation": "rel:bearer_of",
      "object": "hao:SeparationProviderRole"
    },
    {
      "subject": "hao:Operator",
      "relation": "rel:bearer_of",
      "object": "hao:SeparationProviderRole",
      "note": "This is the assertion that current ICAO provisions do not support, and it is the root of gap GAP-COOP-SEP."
    },
    {
      "subject": "hao:HAOServiceProvider",
      "relation": "rel:bearer_of",
      "object": "hao:SeparationProviderRole"
    },
    {
      "subject": "hao:HAOOperation",
      "relation": "rel:occurs_in",
      "object": "hao:AirspaceVolume"
    },
    {
      "subject": "hao:StationKeepingProcess",
      "relation": "rel:occurs_in",
      "object": "hao:HigherAirspaceVolume"
    },
    {
      "subject": "hao:CooperativeSeparationProcess",
      "relation": "rel:occurs_in",
      "object": "hao:CooperativeZone"
    },
    {
      "subject": "hao:TransitProcess",
      "relation": "rel:occurs_in",
      "object": "hao:TransitionLayer"
    },
    {
      "subject": "hao:OperationalIntent",
      "relation": "rel:is_about",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:OperationalIntent",
      "relation": "rel:has_quality",
      "object": "hao:ContainmentConfidenceQuality"
    },
    {
      "subject": "hao:Authorization",
      "relation": "rel:is_about",
      "object": "hao:SovereignAirspaceRegion"
    },
    {
      "subject": "hao:MutualProofOfAuthorizationProcess",
      "relation": "rel:has_participant",
      "object": "hao:HAOServiceProvider"
    },
    {
      "subject": "hao:ICAOProvision",
      "relation": "rel:regulates",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:ProvisionGap",
      "relation": "rel:is_about",
      "object": "hao:ICAOProvision"
    },
    {
      "subject": "hao:ProvisionGap",
      "relation": "rel:mitigated_by",
      "object": "hao:JobCard"
    },
    {
      "subject": "hao:JobCard",
      "relation": "rel:owned_by",
      "object": "hao:ExpertGroup"
    },
    {
      "subject": "hao:UseCase",
      "relation": "rel:is_about",
      "object": "hao:ServiceDeliveryProcess"
    },
    {
      "subject": "hao:ServiceDeliveryProcess",
      "relation": "rel:part_of",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:ConnectivityFunction",
      "relation": "rel:realized_in",
      "object": "hao:ServiceDeliveryProcess"
    },
    {
      "subject": "hao:FlightTerminationFunction",
      "relation": "rel:realized_in",
      "object": "hao:DescentRecoveryProcess"
    },
    {
      "subject": "hao:UncontrolledDescentProcess",
      "relation": "rel:occurs_in",
      "object": "hao:UncertaintyVolume"
    },
    {
      "subject": "hao:RegimeTransitionBoundary",
      "relation": "rel:part_of",
      "object": "hao:TransitProcess"
    },
    {
      "subject": "hao:LaunchProcess",
      "relation": "rel:occurs_in",
      "object": "hao:LaunchRecoverySite"
    },
    {
      "subject": "hao:DescentRecoveryProcess",
      "relation": "rel:preceded_by",
      "object": "hao:StationKeepingProcess"
    },
    {
      "subject": "hao:GATMOCComponent",
      "relation": "rel:is_about",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:ConceptOfOperations",
      "relation": "rel:prescribes",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:DueRegardRole",
      "relation": "rel:realized_in",
      "object": "hao:HAOOperation"
    },
    {
      "subject": "hao:State",
      "relation": "rel:bearer_of",
      "object": "hao:AuthorisingAuthorityRole"
    }
  ],
  "modellingNotes": [
    "Use case is a generically dependent continuant, not a process. Disaster response is a purpose that is declared, recorded and reasoned about independently of whether any flight has occurred.",
    "Cooperative separation is a process; the entitlement to perform it is a role; the rules that govern it are a generically dependent continuant. Keeping these apart is what lets the tool answer 'who is accountable' separately from 'what happened'.",
    "The HAO floor is not a quality of the airspace but a boundary of an airspace volume, and that volume may be time-indexed. This is deliberate: no globally set bottom flight level is expected, and the geometry may be dynamic.",
    "A fleet is an object aggregate, not an object. Regulating the fleet rather than the flight is the single largest structural departure from conventional aviation regulation that HAO forces.",
    "Space vehicles are excluded by definition at hao:HAOVehicle, because they do not derive lift from interaction with the atmosphere and therefore fall outside most of the Convention except as regards safe integration into airspace."
  ]
},
  taxonomy: {
  "$schema": "../schemas/hao-taxonomy.schema.json",
  "meta": {
    "taxonomyId": "HAO-TAX",
    "title": "Basic taxonomy for Higher Airspace Operations",
    "version": "0.9.0",
    "structure": "Faceted. Any real HAO activity is described by selecting one or more terms from each facet. A faceted structure is used in preference to a single tree because HAO activities vary independently along vehicle, altitude, mission, phase, regime and duration, and a single hierarchy would force arbitrary precedence between them.",
    "scopeExclusion": "Space vehicles - orbital, suborbital, launch and re-entry - are out of scope throughout. They are addressed by the Space Transport Operations Task Force as a separate work stream."
  },
  "facets": [
    {
      "id": "F1",
      "name": "Vehicle class",
      "note": "The primary facet. Derived from the physical principle of lift, which is also the criterion that separates HAO from space transport.",
      "terms": [
        {
          "id": "F1.1",
          "label": "Lighter-than-air (LTA)",
          "children": [
            {
              "id": "F1.1.1",
              "label": "Unpowered stratospheric balloon"
            },
            {
              "id": "F1.1.2",
              "label": "Powered stratospheric airship"
            },
            {
              "id": "F1.1.3",
              "label": "Hybrid buoyant-aerodynamic platform"
            }
          ]
        },
        {
          "id": "F1.2",
          "label": "Heavier-than-air (HTA)",
          "children": [
            {
              "id": "F1.2.1",
              "label": "Solar-electric fixed-wing HAPS"
            },
            {
              "id": "F1.2.2",
              "label": "Fuelled high-altitude long-endurance aircraft"
            },
            {
              "id": "F1.2.3",
              "label": "Supersonic transport aircraft"
            },
            {
              "id": "F1.2.4",
              "label": "Hypersonic aircraft (atmospheric)"
            }
          ]
        }
      ]
    },
    {
      "id": "F2",
      "name": "Crewing and control",
      "terms": [
        {
          "id": "F2.1",
          "label": "Crewed (flight crew on board)"
        },
        {
          "id": "F2.2",
          "label": "Remotely piloted (one crew, one vehicle)"
        },
        {
          "id": "F2.3",
          "label": "Attended autonomous fleet (exception-centric supervision)"
        },
        {
          "id": "F2.4",
          "label": "Uncontrolled free flight (drift only)"
        }
      ]
    },
    {
      "id": "F3",
      "name": "Altitude regime",
      "note": "Boundaries are indicative. No globally agreed HAO floor exists; the values below reflect current State practice rather than an ICAO position.",
      "terms": [
        {
          "id": "F3.1",
          "label": "Conventional controlled airspace (surface to FL410)"
        },
        {
          "id": "F3.2",
          "label": "Upper conventional (FL410 to FL510)"
        },
        {
          "id": "F3.3",
          "label": "HAO transition layer (FL510 to FL600)"
        },
        {
          "id": "F3.4",
          "label": "HAO core (FL600 and above)"
        },
        {
          "id": "F3.5",
          "label": "Cross-regime (a single operation spanning two or more of the above)"
        }
      ]
    },
    {
      "id": "F4",
      "name": "Mission / use case",
      "note": "This facet carries the socio-economic purpose of the operation and is the entry point most non-technical stakeholders will use.",
      "terms": [
        {
          "id": "F4.1",
          "label": "Connectivity",
          "children": [
            {
              "id": "F4.1.1",
              "label": "Direct-to-device cellular (4G/5G/6G)"
            },
            {
              "id": "F4.1.2",
              "label": "Backhaul and network extension"
            },
            {
              "id": "F4.1.3",
              "label": "Maritime and aeronautical connectivity"
            }
          ]
        },
        {
          "id": "F4.2",
          "label": "Disaster response and humanitarian",
          "children": [
            {
              "id": "F4.2.1",
              "label": "Emergency communications restoration"
            },
            {
              "id": "F4.2.2",
              "label": "Wildfire detection and progression monitoring"
            },
            {
              "id": "F4.2.3",
              "label": "Flood, storm and earthquake damage assessment"
            },
            {
              "id": "F4.2.4",
              "label": "Airborne repeater for ground responders"
            }
          ]
        },
        {
          "id": "F4.3",
          "label": "Earth observation and monitoring",
          "children": [
            {
              "id": "F4.3.1",
              "label": "Very high resolution imagery and live video"
            },
            {
              "id": "F4.3.2",
              "label": "Environmental and climate monitoring"
            },
            {
              "id": "F4.3.3",
              "label": "Agricultural and infrastructure monitoring"
            }
          ]
        },
        {
          "id": "F4.4",
          "label": "Security and domain awareness",
          "children": [
            {
              "id": "F4.4.1",
              "label": "Maritime domain awareness"
            },
            {
              "id": "F4.4.2",
              "label": "Border monitoring"
            },
            {
              "id": "F4.4.3",
              "label": "Search and rescue support"
            }
          ]
        },
        {
          "id": "F4.5",
          "label": "Scientific research",
          "children": [
            {
              "id": "F4.5.1",
              "label": "Atmospheric and stratospheric science"
            },
            {
              "id": "F4.5.2",
              "label": "Space weather and radiation measurement"
            }
          ]
        },
        {
          "id": "F4.6",
          "label": "Transport",
          "children": [
            {
              "id": "F4.6.1",
              "label": "Supersonic passenger transport"
            },
            {
              "id": "F4.6.2",
              "label": "High-speed cargo"
            }
          ]
        },
        {
          "id": "F4.7",
          "label": "State and defence operations",
          "children": [
            {
              "id": "F4.7.1",
              "label": "Due-regard surveillance operations"
            },
            {
              "id": "F4.7.2",
              "label": "State scientific and test operations"
            }
          ]
        }
      ]
    },
    {
      "id": "F5",
      "name": "Flight phase",
      "terms": [
        {
          "id": "F5.1",
          "label": "Launch and ascent"
        },
        {
          "id": "F5.2",
          "label": "Transit through conventional traffic"
        },
        {
          "id": "F5.3",
          "label": "Established on station"
        },
        {
          "id": "F5.4",
          "label": "Fleet station-keeping over an area"
        },
        {
          "id": "F5.5",
          "label": "Higher airspace cruise (point to point)"
        },
        {
          "id": "F5.6",
          "label": "Descent and recovery"
        },
        {
          "id": "F5.7",
          "label": "Contingency and uncontrolled descent"
        }
      ]
    },
    {
      "id": "F6",
      "name": "Traffic management regime",
      "note": "The single most consequential facet for regulatory gap analysis, because ICAO provisions currently recognise only F6.1 and F6.2.",
      "terms": [
        {
          "id": "F6.1",
          "label": "ATC-provided separation (clearance-based)"
        },
        {
          "id": "F6.2",
          "label": "Flight information and traffic information only"
        },
        {
          "id": "F6.3",
          "label": "Cooperative separation (operator-managed under State-approved rules)"
        },
        {
          "id": "F6.4",
          "label": "Bridged / hybrid (ANSP acts as a service provider into the cooperative environment)"
        },
        {
          "id": "F6.5",
          "label": "Segregated (reserved volume)"
        },
        {
          "id": "F6.6",
          "label": "Due regard (State operations, asymmetric information)"
        }
      ]
    },
    {
      "id": "F7",
      "name": "Operation duration",
      "note": "Duration is not merely descriptive: it determines whether whole-flight deconfliction is even meaningful.",
      "terms": [
        {
          "id": "F7.1",
          "label": "Sortie (hours) - whole-flight deconfliction feasible"
        },
        {
          "id": "F7.2",
          "label": "Short persistent (days to weeks) - rolling window deconfliction"
        },
        {
          "id": "F7.3",
          "label": "Long persistent (months to a year) - continuous replanning; termination point may be undeterminable at planning time"
        }
      ]
    },
    {
      "id": "F8",
      "name": "Jurisdictional footprint",
      "terms": [
        {
          "id": "F8.1",
          "label": "Single State, domestic"
        },
        {
          "id": "F8.2",
          "label": "Multi-State, contiguous"
        },
        {
          "id": "F8.3",
          "label": "High seas / international airspace"
        },
        {
          "id": "F8.4",
          "label": "Global (routinely crossing many FIRs and sovereign regions)"
        }
      ]
    },
    {
      "id": "F9",
      "name": "Trajectory determinism",
      "note": "Introduced because HAO breaks the assumption, implicit throughout PANS-ATM and FF-ICE, that a trajectory is a deterministic 4D path.",
      "terms": [
        {
          "id": "F9.1",
          "label": "Deterministic 4D trajectory"
        },
        {
          "id": "F9.2",
          "label": "Deterministic with wide performance tolerance"
        },
        {
          "id": "F9.3",
          "label": "Probabilistic (trajectory expressed as a distribution with a containment confidence level)"
        },
        {
          "id": "F9.4",
          "label": "Energy-state dependent (performance varies diurnally or with battery state)"
        }
      ]
    }
  ],
  "workedExamples": [
    {
      "label": "AALTO Zephyr Earth observation mission from a Kenyan AALTOPORT",
      "coding": {
        "F1": "F1.2.1",
        "F2": "F2.3",
        "F3": "F3.5",
        "F4": [
          "F4.3.1",
          "F4.4.1"
        ],
        "F5": [
          "F5.1",
          "F5.3",
          "F5.6"
        ],
        "F6": [
          "F6.1",
          "F6.3"
        ],
        "F7": "F7.2",
        "F8": "F8.1",
        "F9": "F9.4"
      }
    },
    {
      "label": "Fleet of LTA balloons providing cellular connectivity over a region",
      "coding": {
        "F1": "F1.1.1",
        "F2": "F2.3",
        "F3": "F3.4",
        "F4": [
          "F4.1.1",
          "F4.2.1"
        ],
        "F5": "F5.4",
        "F6": "F6.3",
        "F7": "F7.3",
        "F8": "F8.4",
        "F9": "F9.3"
      }
    },
    {
      "label": "Supersonic transatlantic passenger sector",
      "coding": {
        "F1": "F1.2.3",
        "F2": "F2.1",
        "F3": "F3.5",
        "F4": "F4.6.1",
        "F5": [
          "F5.1",
          "F5.5",
          "F5.6"
        ],
        "F6": [
          "F6.1",
          "F6.4"
        ],
        "F7": "F7.1",
        "F8": [
          "F8.3",
          "F8.2"
        ],
        "F9": "F9.1"
      }
    },
    {
      "label": "Powered airship retasked for wildfire monitoring across a border",
      "coding": {
        "F1": "F1.1.2",
        "F2": "F2.3",
        "F3": "F3.4",
        "F4": [
          "F4.2.2",
          "F4.2.4"
        ],
        "F5": "F5.3",
        "F6": "F6.3",
        "F7": "F7.2",
        "F8": "F8.2",
        "F9": "F9.2"
      }
    }
  ]
}
};
