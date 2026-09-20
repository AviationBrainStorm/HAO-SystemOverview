/* HAO Navigator data part — taxonomy-facets
   Root: taxonomy   Mount: facets
   Schema: schemas/parts/taxonomy-facets.schema.json
   The orthogonal facets. Add a facet here without touching any other file.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "taxonomy-facets",
  "root": "taxonomy",
  "mount": "facets",
  "schema": "schemas/parts/taxonomy-facets.schema.json",
  "payload": [
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
  ]
});
