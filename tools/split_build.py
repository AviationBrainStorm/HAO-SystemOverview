#!/usr/bin/env python3
"""Split the monolithic HAO_SEED into one JS data part per collection."""
import json, pathlib, re, sys

ROOT = pathlib.Path('/home/claude/build/hao-navigator-modular')
WORK = pathlib.Path('/home/claude/work')

dataset  = json.loads((WORK/'dataset.json').read_text())
ontology = json.loads((WORK/'ontology.json').read_text())
taxonomy = json.loads((WORK/'taxonomy.json').read_text())
dataset.pop('$schema', None); ontology.pop('$schema', None); taxonomy.pop('$schema', None)

PARTS = []   # (filename, part id, root, mount, schema, note, payload)

def add(fn, part, root, mount, schema, note, payload):
    PARTS.append(dict(file=fn, part=part, root=root, mount=mount,
                      schema=schema, note=note, payload=payload))

# ---- dataset ----------------------------------------------------------
add('meta.js','meta','dataset','meta','schemas/parts/meta.schema.json',
    'Dataset identity, scope note, holistic vision and provenance.', dataset['meta'])
add('reference-airspace.js','reference-airspace','dataset','referenceAirspace',
    'schemas/parts/reference-airspace.schema.json',
    'Altitude bands used as the vertical backdrop, plus the altimetry constraint note.',
    dataset['referenceAirspace'])
add('vehicle-classes.js','vehicle-classes','dataset','vehicleClasses',
    'schemas/parts/vehicle-classes.schema.json',
    'One record per vehicle class. Add a class here and it appears in every view.',
    dataset['vehicleClasses'])
add('flight-phases.js','flight-phases','dataset','flightPhases',
    'schemas/parts/flight-phases.schema.json','Ordered design phases.', dataset['flightPhases'])
add('use-cases.js','use-cases','dataset','useCases','schemas/parts/use-cases.schema.json',
    'Socio-economic purposes an operation can serve.', dataset['useCases'])
add('service-catalogue.js','service-catalogue','dataset','serviceCatalogue',
    'schemas/parts/service-catalogue.schema.json',
    'Services a scenario may consume, each mapped to a GATMOC component.', dataset['serviceCatalogue'])
add('gatmoc-components.js','gatmoc-components','dataset','gatmoc.components',
    'schemas/parts/gatmoc-components.schema.json','Doc 9854 concept components.',
    dataset['gatmoc']['components'])
add('guiding-principles.js','guiding-principles','dataset','gatmoc.guidingPrinciples',
    'schemas/parts/guiding-principles.schema.json','GATMOC guiding principles.',
    dataset['gatmoc']['guidingPrinciples'])
add('kpas.js','kpas','dataset','gatmoc.kpas','schemas/parts/kpas.schema.json',
    'Key performance areas inherited from the GANP.', dataset['gatmoc']['kpas'])
add('atm-community.js','atm-community','dataset','gatmoc.atmCommunity',
    'schemas/parts/atm-community.schema.json',
    'GATMOC ATM community categories. HAO stakeholders map into these rather than adding new ones.',
    dataset['gatmoc']['atmCommunity'])
add('ganp-layers.js','ganp-layers','dataset','ganp.layers','schemas/parts/ganp-layers.schema.json',
    'The four GANP layers.', dataset['ganp']['layers'])
add('ganp-bbb.js','ganp-bbb','dataset','ganp.bbb','schemas/parts/ganp-bbb.schema.json',
    'Basic Building Blocks.', dataset['ganp']['bbb'])
add('ganp-asbu-threads.js','ganp-asbu-threads','dataset','ganp.asbuThreads',
    'schemas/parts/ganp-asbu-threads.schema.json','ASBU threads.', dataset['ganp']['asbuThreads'])
add('expert-groups.js','expert-groups','dataset','expertGroups',
    'schemas/parts/expert-groups.schema.json',
    'ICAO expert groups. Ids here are the keys used by scenario expertGroupDependency maps.',
    dataset['expertGroups'])
add('provision-gaps.js','provision-gaps','dataset','provisionGaps',
    'schemas/parts/provision-gaps.schema.json','The gap register.', dataset['provisionGaps'])
add('job-cards.js','job-cards','dataset','jobCards','schemas/parts/job-cards.schema.json',
    'ICAO work programme job cards and the gaps they address.', dataset['jobCards'])
add('fir-regions.js','fir-regions','dataset','firRegions','schemas/parts/fir-regions.schema.json',
    'Schematic FIR / sovereign region boxes for the plan view. Not for navigation.',
    dataset['firRegions'])

# scenarios: one file per vehicle family, concatenated by the registry
FAMILY = [
  ('scenarios-lta-balloon.js','scenarios-lta-balloon','LTA balloon scenarios.',  lambda s: s['vehicleClassId']=='VC-LTA-BALLOON' and not s['id'].startswith('SC-MIX')),
  ('scenarios-lta-airship.js','scenarios-lta-airship','Powered stratospheric airship scenarios.', lambda s: s['vehicleClassId']=='VC-LTA-AIRSHIP'),
  ('scenarios-hta-haps.js','scenarios-hta-haps','Solar fixed-wing HAPS scenarios.', lambda s: s['vehicleClassId']=='VC-HTA-HAPS' and not s['id'].startswith('SC-STATE')),
  ('scenarios-supersonic.js','scenarios-supersonic','Supersonic transport scenarios.', lambda s: s['vehicleClassId']=='VC-SST'),
  ('scenarios-mixed-regime.js','scenarios-mixed-regime','Mixed-regime and due-regard scenarios that span two traffic management philosophies.', lambda s: s['id'].startswith('SC-MIX') or s['id'].startswith('SC-STATE')),
]
claimed = set()
for fn, pid, note, pred in FAMILY:
    items = [s for s in dataset['scenarios'] if pred(s) and s['id'] not in claimed]
    claimed.update(s['id'] for s in items)
    add(fn, pid, 'dataset', 'scenarios', 'schemas/parts/scenarios.schema.json', note, items)
missing = [s['id'] for s in dataset['scenarios'] if s['id'] not in claimed]
if missing:
    sys.exit('Unassigned scenarios: %s' % missing)

# ---- ontology ---------------------------------------------------------
add('ontology-meta.js','ontology-meta','ontology','meta','schemas/parts/ontology-meta.schema.json',
    'Ontology identity and upper-ontology declaration.', ontology['meta'])
add('ontology-bfo-backbone.js','ontology-bfo-backbone','ontology','bfoBackbone',
    'schemas/parts/ontology-bfo-backbone.schema.json','The BFO classes the domain specialises.', ontology['bfoBackbone'])
add('ontology-relations.js','ontology-relations','ontology','relations',
    'schemas/parts/ontology-relations.schema.json','Relations with domain, range and inverse.', ontology['relations'])
add('ontology-classes.js','ontology-classes','ontology','classes',
    'schemas/parts/ontology-classes.schema.json','Domain classes; each declares exactly one BFO class.', ontology['classes'])
add('ontology-axioms.js','ontology-axioms','ontology','axioms',
    'schemas/parts/ontology-axioms.schema.json','Subject / relation / object assertions.', ontology['axioms'])
add('ontology-notes.js','ontology-notes','ontology','modellingNotes',
    'schemas/parts/ontology-notes.schema.json','Modelling decisions worth stating explicitly.', ontology.get('modellingNotes', []))

# ---- taxonomy ---------------------------------------------------------
add('taxonomy-meta.js','taxonomy-meta','taxonomy','meta','schemas/parts/taxonomy-meta.schema.json',
    'Taxonomy identity, structure rationale and scope exclusion.', taxonomy['meta'])
add('taxonomy-facets.js','taxonomy-facets','taxonomy','facets','schemas/parts/taxonomy-facets.schema.json',
    'The orthogonal facets. Add a facet here without touching any other file.', taxonomy['facets'])
add('taxonomy-examples.js','taxonomy-examples','taxonomy','workedExamples',
    'schemas/parts/taxonomy-examples.schema.json','Worked codings of real operations.',
    taxonomy.get('workedExamples', []))

# ---- emit -------------------------------------------------------------
out = ROOT/'data'/'parts'
out.mkdir(parents=True, exist_ok=True)
HEADER = ('/* HAO Navigator data part — {part}\n'
          '   Root: {root}   Mount: {mount}\n'
          '   Schema: {schema}\n'
          '   {note}\n'
          '   Registered with window.HAO_DATA; see js/data-registry.js. Edit this\n'
          '   file alone to change this collection - nothing else needs rebuilding. */\n')
manifest = []
for p in PARTS:
    env = {'part': p['part'], 'root': p['root'], 'mount': p['mount'],
           'schema': p['schema'], 'payload': p['payload']}
    js = HEADER.format(**p) + 'HAO_DATA.register(' + json.dumps(env, indent=2, ensure_ascii=False) + ');\n'
    (out/p['file']).write_text(js, encoding='utf-8')
    n = len(p['payload']) if isinstance(p['payload'], list) else None
    manifest.append({'file': 'data/parts/' + p['file'], 'part': p['part'], 'root': p['root'],
                     'mount': p['mount'], 'schema': p['schema'], 'items': n,
                     'bytes': len(js), 'note': p['note']})
(ROOT/'data'/'parts-manifest.json').write_text(
    json.dumps({'generated': 'tools/split_build.py', 'parts': manifest}, indent=2, ensure_ascii=False))
print('\n'.join('%-34s %-22s %-24s %s' % (m['file'].split('/')[-1], m['root'], m['mount'],
      (str(m['items'])+' items') if m['items'] is not None else 'object') for m in manifest))
print('total parts:', len(manifest))
