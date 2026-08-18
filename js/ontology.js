/* ============================================================
   ontology.js — renders the BFO-grounded HAO ontology.

   Classes are grouped by the BFO branch they specialise, which
   is the view that matters: it makes it immediately visible
   whether a term has been modelled as a thing, a role, a
   process or a piece of information.
   ============================================================ */

const BFO_BRANCHES = [
  { key: 'bfo:Object',                            label: 'Material entity — Object' },
  { key: 'bfo:ObjectAggregate',                   label: 'Material entity — Object aggregate' },
  { key: 'bfo:SiteBFO',                           label: 'Immaterial entity — Site' },
  { key: 'bfo:Role',                              label: 'Realizable — Role' },
  { key: 'bfo:Disposition',                       label: 'Realizable — Disposition' },
  { key: 'bfo:Function',                          label: 'Realizable — Function' },
  { key: 'bfo:Quality',                           label: 'Specifically dependent — Quality' },
  { key: 'bfo:GenericallyDependentContinuant',    label: 'Generically dependent continuant — Information' },
  { key: 'bfo:Process',                           label: 'Occurrent — Process' },
  { key: 'bfo:ProcessBoundary',                   label: 'Occurrent — Process boundary' }
];

function renderOntTree(host, ont, state, onSelect) {
  host.innerHTML = '';
  const q = (state.search || '').toLowerCase().trim();

  BFO_BRANCHES.forEach(branch => {
    if (state.filter && state.filter !== branch.key) return;

    let members = ont.classes.filter(c => c.bfo === branch.key);
    if (q) {
      members = members.filter(c =>
        c.label.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        (c.definition || '').toLowerCase().includes(q));
    }
    if (!members.length) return;

    const wrap = document.createElement('div');
    wrap.className = 'ont-branch';
    const h = document.createElement('h4');
    h.textContent = `${branch.label} · ${members.length}`;
    wrap.appendChild(h);

    members.forEach(c => {
      const b = document.createElement('button');
      b.className = 'ont-node' + (state.selected === c.id ? ' on' : '');
      b.innerHTML = `${c.label} <span class="oid">${c.id}</span>`;
      b.addEventListener('click', () => onSelect(c.id));
      wrap.appendChild(b);
    });
    host.appendChild(wrap);
  });

  if (!host.children.length) {
    host.innerHTML = '<p class="empty-note">No classes match that search.</p>';
  }
}

function labelFor(ont, id) {
  const c = ont.classes.find(x => x.id === id);
  if (c) return c.label;
  const b = ont.bfoBackbone.find(x => x.id === id);
  if (b) return b.label;
  return id;
}

function renderOntDetail(host, ont, id) {
  const c = ont.classes.find(x => x.id === id);
  if (!c) {
    host.innerHTML = '<p class="muted">Select a class to see its BFO grounding, definition and axioms.</p>';
    return;
  }

  const outgoing = ont.axioms.filter(a => a.subject === id);
  const incoming = ont.axioms.filter(a => a.object === id);
  const relLabel = rid => (ont.relations.find(r => r.id === rid) || {}).label || rid;

  const parent = c.parent ? ont.classes.find(x => x.id === c.parent) : null;

  host.innerHTML = `
    <span class="bfo-tag">${c.bfo}</span>
    <h3>${c.label}</h3>
    <p class="muted" style="font-family:var(--mono);font-size:.72rem">${c.id}</p>
    ${parent ? `<p class="muted">Domain superclass: <strong>${parent.label}</strong></p>` : ''}
    ${c.definition ? `<p style="font-size:.85rem">${c.definition}</p>` : ''}
    ${c.examples?.length ? `<p class="muted"><em>Examples:</em> ${c.examples.join('; ')}</p>` : ''}

    ${outgoing.length ? `<h4 style="margin-top:.9rem;font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3)">Asserted relations</h4>
      ${outgoing.map(a => `<div class="axiom">${c.label} <em>${relLabel(a.relation)}</em> ${labelFor(ont, a.object)}${a.note ? `<br><span style="color:var(--warn);font-size:.68rem">${a.note}</span>` : ''}</div>`).join('')}` : ''}

    ${incoming.length ? `<h4 style="margin-top:.9rem;font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3)">Referenced by</h4>
      ${incoming.map(a => `<div class="axiom">${labelFor(ont, a.subject)} <em>${relLabel(a.relation)}</em> ${c.label}</div>`).join('')}` : ''}
  `;
}

function renderOntFilterOptions(sel, ont) {
  sel.innerHTML = '<option value="">All BFO branches</option>';
  BFO_BRANCHES.forEach(b => {
    const n = ont.classes.filter(c => c.bfo === b.key).length;
    if (!n) return;
    const o = document.createElement('option');
    o.value = b.key;
    o.textContent = `${b.label} (${n})`;
    sel.appendChild(o);
  });
}

/* ---------------- taxonomy ---------------- */

function termHTML(t) {
  return `<li>${t.label}${t.note ? ` <span class="muted">— ${t.note}</span>` : ''}
    ${t.children?.length ? `<ul>${t.children.map(termHTML).join('')}</ul>` : ''}</li>`;
}

function renderTaxonomy(host, tax) {
  host.innerHTML = tax.facets.map(f => `
    <div class="tax-card">
      <span class="facet-id">${f.id}</span>
      <h3>${f.name}</h3>
      ${f.note ? `<p class="muted">${f.note}</p>` : ''}
      <ul class="tax-list">${f.terms.map(termHTML).join('')}</ul>
    </div>`).join('');
}

function renderTaxExamples(host, tax) {
  const termIndex = {};
  const walk = (t, fid) => {
    termIndex[t.id] = { label: t.label, facet: fid };
    (t.children || []).forEach(c => walk(c, fid));
  };
  tax.facets.forEach(f => f.terms.forEach(t => walk(t, f.id)));
  const facetName = fid => (tax.facets.find(f => f.id === fid) || {}).name || fid;

  host.innerHTML = (tax.workedExamples || []).map(ex => `
    <div class="tax-card">
      <h3 style="font-size:.85rem">${ex.label}</h3>
      ${Object.entries(ex.coding).map(([fid, val]) => {
        const ids = Array.isArray(val) ? val : [val];
        return `<div class="kv">
          <span class="k">${facetName(fid)}</span>
          <span class="v">${ids.map(i => `<span class="pill accent">${termIndex[i]?.label || i}</span>`).join('')}</span>
        </div>`;
      }).join('')}
    </div>`).join('');
}

window.HAOOnt = {
  renderOntTree, renderOntDetail, renderOntFilterOptions,
  renderTaxonomy, renderTaxExamples, BFO_BRANCHES
};
