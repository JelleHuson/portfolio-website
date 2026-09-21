# Decision Log

## 2026-09-21

- Chose a static, single-page-ready architecture built with vanilla HTML, CSS, and ES modules.
- Kept all internal asset URLs relative so the site can be hosted under a repository subpath like /repo-name/.
- Used a shared layout injection pattern so every page has the same header, footer, and accessibility scaffolding.
- Set the default theme to dark, with a light override stored in localStorage and a theme-init script that runs before first paint.
- Built the first pass of the design system around a luxury-but-modern scent aesthetic: warm neutrals, amber accents, serif display type, and deep-brown surfaces.
- Decided to keep the foundation intentionally simple and reusable so future phases can add the quiz, engine, and data model without reworking the shell.
