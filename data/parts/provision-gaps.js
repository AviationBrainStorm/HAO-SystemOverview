/* HAO Navigator data part — provision-gaps
   Root: dataset   Mount: provisionGaps
   Schema: schemas/parts/provision-gaps.schema.json
   The gap register.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "provision-gaps",
  "root": "dataset",
  "mount": "provisionGaps",
  "schema": "schemas/parts/provision-gaps.schema.json",
  "payload": [
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
  ]
});
