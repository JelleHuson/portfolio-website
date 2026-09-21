# ScentMatch

ScentMatch is a privacy-first fragrance discovery platform for beginners and enthusiasts. This repository currently contains the Phase 1 foundation: design system, shared layout, early utilities, and the core static pages needed to run locally.

## Project status

- Phase 1: foundation and shared UI shell
- Remaining phases to be added in order as requested

## Local development

From the repository root, run:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000/
- http://localhost:8000/about.html

## Deployment to GitHub Pages

1. Push the repository to GitHub.
2. Open the repository in GitHub.
3. Go to Settings -> Pages.
4. Set the source to GitHub Actions or the static branch if applicable.
5. Because the app is designed to work from a subpath such as /repo-name/, all links and asset paths must stay relative.

## Notes

This project deliberately avoids third-party dependencies and tracking. It is built as a static website using vanilla HTML, CSS, and JavaScript.
