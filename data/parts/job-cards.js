/* HAO Navigator data part — job-cards
   Root: dataset   Mount: jobCards
   Schema: schemas/parts/job-cards.schema.json
   ICAO work programme job cards and the gaps they address.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "job-cards",
  "root": "dataset",
  "mount": "jobCards",
  "schema": "schemas/parts/job-cards.schema.json",
  "payload": [
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
  ]
});
