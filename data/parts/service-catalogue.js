/* HAO Navigator data part — service-catalogue
   Root: dataset   Mount: serviceCatalogue
   Schema: schemas/parts/service-catalogue.schema.json
   Services a scenario may consume, each mapped to a GATMOC component.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "service-catalogue",
  "root": "dataset",
  "mount": "serviceCatalogue",
  "schema": "schemas/parts/service-catalogue.schema.json",
  "payload": [
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
  ]
});
