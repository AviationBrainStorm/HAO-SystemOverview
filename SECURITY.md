# Security notes — HAO Navigator

This is a static, dependency-free, client-side application. It performs no
network requests, has no backend, no cookies, no authentication and no
storage of user data beyond a single theme preference in `localStorage`.
That removes most of the usual web attack surface. The one class of risk
that remained was **cross-site scripting (XSS)** through the way the app
turns dataset values into on-screen markup.

## The issue that was fixed

The renderers build small HTML fragments from dataset values — scenario
names, gap descriptions, ontology class definitions, job-card notes, FIR
notes and hover-tooltip text — and previously assigned those strings
directly to `element.innerHTML`. If any dataset value (or a loaded custom
dataset in a working build) contained `<script>…</script>`, an `onerror=`
handler or a `javascript:` URL, it would execute in the page.

A static scanner flagged this as:

> Setting `innerHTML` / `outerHTML` with dynamic content enables cross-site
> scripting (XSS).

## The control

All dynamic rendering now goes through a single, centralised sink:
**`js/sanitize.js`**, exposed as `window.HAOSafe`.

- **`HAOSafe.setHTML(el, html)`** is the only place dynamic markup is turned
  into DOM. It:
  1. parses the string with `DOMParser` into an **inert** document —
     `DOMParser` never runs scripts and never fires `load`/`error`
     handlers, so nothing executes during parsing;
  2. walks the parsed tree and removes dangerous elements
     (`script`, `style`, `iframe`, `object`, `embed`, `form`, `input`,
     `link`, `meta`, `base`, …), strips every `on*` event-handler
     attribute and `srcdoc`, and rewrites URL-bearing attributes
     (`href`, `src`, `xlink:href`, …) that use `javascript:`, `vbscript:`
     or `data:` schemes;
  3. inserts the surviving nodes with `replaceChildren()`.
- **`HAOSafe.clear(el)`** empties an element without using `innerHTML`.
- **`HAOSafe.escapeHtml(v)`** / **`HAOSafe.sanitizeUrl(v)`** are helpers for
  the rare hand-built string.

As a result, **no dynamic value is ever assigned to `innerHTML` or
`outerHTML` anywhere in the application code.** The entire class of bug is
removed structurally rather than patched case by case. A grep for
`innerHTML`/`outerHTML` across `js/` returns only comments in
`sanitize.js`.

## Verifying

- `npm run check` — syntax-checks every script.
- `npm run test:helpers` — unit-tests the pure helpers (`escapeHtml`,
  `sanitizeUrl`) in Node.
- `tests/xss-selftest.html` — open in a browser; it feeds several XSS
  payloads through `HAOSafe.setHTML()` and confirms that no script runs and
  that handlers/URLs are neutralised.

## Optional further hardening

The application does not require inline scripts, so a Content-Security-Policy
can be added when it is served over HTTP(S), for example:

```
Content-Security-Policy: default-src 'self'; script-src 'self';
  style-src 'self' 'unsafe-inline'; img-src 'self' data:;
  object-src 'none'; base-uri 'none'; frame-ancestors 'none'
```

`'unsafe-inline'` is kept for `style-src` only because the visualisations set
inline `style` attributes. A CSP `<meta>` tag is intentionally **not**
baked into `index.html`, because a strict `'self'` policy behaves
inconsistently under the `file://` origin and would break the
double-click / zip-and-send workflow this build is designed for. Apply the
header at the web server or SharePoint layer instead.

## Reporting

This is a prototype for discussion, not an ICAO position. Please report any
suspected security issue to the maintainer rather than opening a public
issue.
