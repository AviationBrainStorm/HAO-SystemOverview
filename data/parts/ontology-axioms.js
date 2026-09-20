/* HAO Navigator data part — ontology-axioms
   Root: ontology   Mount: axioms
   Schema: schemas/parts/ontology-axioms.schema.json
   Subject / relation / object assertions.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "ontology-axioms",
  "root": "ontology",
  "mount": "axioms",
  "schema": "schemas/parts/ontology-axioms.schema.json",
  "payload": [
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
  ]
});
