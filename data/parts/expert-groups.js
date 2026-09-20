/* HAO Navigator data part — expert-groups
   Root: dataset   Mount: expertGroups
   Schema: schemas/parts/expert-groups.schema.json
   ICAO expert groups. Ids here are the keys used by scenario expertGroupDependency maps.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "expert-groups",
  "root": "dataset",
  "mount": "expertGroups",
  "schema": "schemas/parts/expert-groups.schema.json",
  "payload": [
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
  ]
});
