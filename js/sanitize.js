/* ============================================================
   sanitize.js — the single, centralised HTML sink for the app.

   WHY THIS EXISTS
   ---------------
   The renderers in this app build small HTML fragments from
   dataset values (scenario names, gap descriptions, ontology
   definitions, job-card notes, FIR notes, tooltip text, ...).
   Assigning such strings straight to element.innerHTML is a
   cross-site-scripting (XSS) sink: a value containing
   <script>, an onerror= handler, or a javascript: URL would be
   executed in the page.

   Rather than scatter escaping across dozens of call sites, all
   dynamic rendering goes through HAOSafe.setHTML(). It parses
   the string in an inert document (DOMParser never executes
   scripts or fires load/error handlers), strips dangerous
   elements and attributes, and then inserts real nodes with
   replaceChildren(). No dynamic value is ever written to
   innerHTML, so the whole class of bug is removed structurally.

   For plain text, prefer element.textContent directly.
   HAOSafe.escapeHtml() is provided for the rare case where a
   value must be embedded inside a string that is built by hand.

   Dependency-free and runs from file:// like the rest of the app.
   ============================================================ */
(function () {
  'use strict';

  // Elements that must never appear in generated fragments.
  var BLOCKED_TAGS = [
    'SCRIPT', 'STYLE', 'IFRAME', 'FRAME', 'FRAMESET', 'OBJECT',
    'EMBED', 'LINK', 'META', 'BASE', 'FORM', 'INPUT', 'BUTTON',
    'TEXTAREA', 'SELECT', 'OPTION', 'TEMPLATE', 'NOSCRIPT'
  ];

  // Attributes whose values are treated as URLs and must be vetted.
  var URL_ATTRS = [
    'href', 'src', 'xlink:href', 'action', 'formaction',
    'background', 'poster', 'srcset', 'data'
  ];

  /* Escape the five HTML-significant characters. Use for values
     that are interpolated into a hand-built string. */
  function escapeHtml(value) {
    if (value == null) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* Neutralise dangerous URL schemes. Returns '#' for anything
     that could execute script or smuggle active content. */
  function sanitizeUrl(value) {
    var v = String(value == null ? '' : value);
    // Strip control chars that are used to hide "javascript:" etc.
    var probe = v.replace(/[\u0000-\u001F\u007F\s]/g, '').toLowerCase();
    if (probe.indexOf('javascript:') === 0 ||
        probe.indexOf('vbscript:') === 0 ||
        probe.indexOf('data:') === 0) {
      return '#';
    }
    return v;
  }

  /* Recursively strip blocked elements and dangerous attributes
     from an already-parsed (inert) subtree. */
  function sanitizeSubtree(root) {
    var children = Array.prototype.slice.call(root.childNodes);
    for (var i = 0; i < children.length; i++) {
      var node = children[i];

      // Only element nodes carry executable risk. Text, comments
      // and everything else are left as-is (comments are dropped
      // below for tidiness).
      if (node.nodeType === 8 /* comment */) {
        node.parentNode && node.parentNode.removeChild(node);
        continue;
      }
      if (node.nodeType !== 1 /* element */) continue;

      var tag = (node.tagName || '').toUpperCase();
      if (BLOCKED_TAGS.indexOf(tag) !== -1) {
        node.parentNode && node.parentNode.removeChild(node);
        continue;
      }

      // Scrub attributes: drop every event handler and any
      // scriptable URL, keep benign presentational attributes.
      var attrs = Array.prototype.slice.call(node.attributes || []);
      for (var a = 0; a < attrs.length; a++) {
        var name = attrs[a].name;
        var lower = name.toLowerCase();
        if (lower.indexOf('on') === 0) {              // onclick, onerror, ...
          node.removeAttribute(name);
          continue;
        }
        if (lower === 'srcdoc') {                     // iframe srcdoc smuggling
          node.removeAttribute(name);
          continue;
        }
        if (URL_ATTRS.indexOf(lower) !== -1) {
          node.setAttribute(name, sanitizeUrl(attrs[a].value));
        }
      }

      sanitizeSubtree(node);
    }
    return root;
  }

  /* Safely replace the contents of `el` with the HTML in `html`.
     This is the ONLY place dynamic markup is turned into DOM,
     and it never touches innerHTML on a live element. */
  function setHTML(el, html) {
    if (!el) return el;
    var str = html == null ? '' : String(html);

    // DOMParser produces an inert document: scripts do not run and
    // resource-loading attributes do not fire.
    var parsed = new DOMParser().parseFromString(str, 'text/html');
    sanitizeSubtree(parsed.body);

    var frag = document.createDocumentFragment();
    var nodes = Array.prototype.slice.call(parsed.body.childNodes);
    for (var i = 0; i < nodes.length; i++) {
      frag.appendChild(document.importNode(nodes[i], true));
    }

    if (typeof el.replaceChildren === 'function') {
      el.replaceChildren(frag);
    } else {
      while (el.firstChild) el.removeChild(el.firstChild);
      el.appendChild(frag);
    }
    return el;
  }

  /* Empty an element without going through innerHTML = ''. */
  function clear(el) {
    if (!el) return el;
    if (typeof el.replaceChildren === 'function') el.replaceChildren();
    else while (el.firstChild) el.removeChild(el.firstChild);
    return el;
  }

  window.HAOSafe = {
    setHTML: setHTML,
    clear: clear,
    escapeHtml: escapeHtml,
    sanitizeUrl: sanitizeUrl
  };
})();
