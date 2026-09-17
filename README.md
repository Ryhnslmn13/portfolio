# Portfolio React Migration

This is a first-pass migration of the original single-file portfolio into React + TypeScript + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/components` — visual sections and reusable UI
- `src/data` — project/patent content separated from presentation
- `src/hooks` — scroll/reveal behavior
- `src/styles/global.css` — original CSS preserved for visual parity

## Important

The content is intentionally preserved from the original HTML, including placeholder identity/project details. Replace those with your real portfolio data after confirming the migrated design matches the original.

The original image references are also preserved. Place these files in `public/` if you want the project cards to render exactly as before:

- `project_ai_platform.jpg`
- `project_code_tool.jpg`
- `project_ml_app.jpg`
- `project_data_viz.jpg`

## Suggested next migration step

1. Replace placeholder identity/content with Reyhan's actual content.
2. Add React Router for `/projects` and `/projects/:slug`.
3. Create a reusable project-detail data model.
4. Move the Black Deck / White Deck concept into dedicated routes.
5. Split `global.css` only where component-level styling becomes difficult to maintain.

## Routing and case studies (v3)

This version adds `react-router-dom` and these routes:

- `/` — homepage
- `/projects` — all engineering projects
- `/projects/:slug` — project detail route
- `/projects/signora` — completed Signora case study

After replacing your local files with this version, run `npm install` once so the new router dependency is installed.
