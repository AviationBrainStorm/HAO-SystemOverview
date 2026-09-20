/* HAO Navigator data part — meta
   Root: dataset   Mount: meta
   Schema: schemas/parts/meta.schema.json
   Dataset identity, scope note, holistic vision and provenance.
   Registered with window.HAO_DATA; see js/data-registry.js. Edit this
   file alone to change this collection - nothing else needs rebuilding. */
HAO_DATA.register({
  "part": "meta",
  "root": "dataset",
  "mount": "meta",
  "schema": "schemas/parts/meta.schema.json",
  "payload": {
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
  }
});
