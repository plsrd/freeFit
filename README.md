# Free Fit Studio

Sanity Studio (v6, TypeScript) for building workouts from a library of exercises, target muscles and equipment.

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev     # http://localhost:3333
npm run build
npm run deploy
npm run typecheck
```

## Layout

- `sanity.config.ts` / `sanity.cli.ts` – Studio and CLI config (project `krm54zrd`, dataset `development`)
- `schemas/` – document and object types
- `src/structure.tsx` – custom Structure tool navigation
- `src/initialValueTemplates.ts` – the "Dumbbell Workout" starter template
- `src/inputs/` – custom field inputs (workout length calculator)
- `src/components/` – shared React components (preview `Tile`)
- `src/utils/` – pure helpers (filters, validation, formatting)
- `src/types/` – shared TypeScript types for workout document values
- `static/` – icon images, served at `/static/*`
