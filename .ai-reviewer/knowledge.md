# hii reviewer notes

## Architecture

This is a small Vite-powered React 18 dashboard application. `src/main.jsx` mounts the app in `React.StrictMode`, while `src/Dashboard.jsx` contains the complete dashboard UI, including navigation, summary cards, a CSS-driven sales chart, and an orders table. Styling is imported globally from `src/styles.css`; there is no visible backend, routing, state-management, or component-library layer in the sampled files.

## Conventions

- Use functional React components with ES module imports/exports; the entry point imports `Dashboard` and renders it from `src/main.jsx`.
- Keep display data as module-level arrays when it is static: `stats`, `monthly`, and `orders` are defined above `Dashboard` in `src/Dashboard.jsx`.
- Render repeated UI with `.map()` and stable domain keys:
  - `key={s.label}` for statistic cards
  - `key={m.month}` for chart bars
  - `key={o.id}` for order rows
- Derive presentation values inline from data rather than duplicating them. Examples include `Math.max(...monthly.map(...))` for chart scaling and `s.change.startsWith('-')` to choose the `down`/`up` class.
- Use semantic structural elements for major regions and data: `<aside>`, `<nav>`, `<main>`, `<section>`, `<table>`, `<thead>`, and `<tbody>` in `src/Dashboard.jsx`.
- CSS classes are concise, lowercase identifiers such as `layout`, `sidebar`, `stats`, `card`, `bar-col`, and `badge`; status styling is generated from normalized status text via `o.status.toLowerCase()`.
- The project uses Vite scripts (`dev`, `build`, `preview`) and React’s Vite plugin, as configured in `package.json` and `vite.config.js`.

## Watch out for

- Preserve stable keys based on domain identifiers; do not replace the existing `label`, `month`, or order `id` keys with array indexes.
- Keep chart calculations safe when changing `monthly`: `max` is used as a divisor in the inline bar height calculation, so empty data or a zero maximum needs explicit handling.
- Order status values are coupled to CSS class names through `toLowerCase()`; changing status strings may silently break styling.
- The navigation currently uses bare `<a>` elements without `href` values in `src/Dashboard.jsx`. Flag changes that add navigation behavior without also providing valid links or an appropriate button/router pattern.
- Avoid moving static arrays inside the component without a reason, since they currently do not depend on render state and are intentionally defined at module scope.