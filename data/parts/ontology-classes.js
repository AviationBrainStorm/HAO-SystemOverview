/* HAO Navigator data part — ontology-classes
   Root: ontology   Mount: classes
   Schema: schemas/parts/ontology-classes.schema.json
   Domain classes; each declares exactly one BFO class.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ontology-classes",
  "root": "ontology",
  "mount": "classes",
  "schema": "schemas/parts/ontology-classes.schema.json",
  "payload": [
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
  ]
});
