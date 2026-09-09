# Repository guidance — wpfda-frontend

This file is the single source of conventions for this repository. It is written for
both human contributors and coding assistants. `CLAUDE.md` and other assistant files
only import it. Product scope and data model live in the WPFDA product specification
(`docs/product-spec.md` in the parent `wpfda/` folder).

## What this repo is

The React single-page app for the Western Province Flying Disc Association: the public
site (news, calendar, fixtures, standings, club directory), the club portal and the admin
portal. It talks to the `wpfda-backend` REST API and is served as static files by nginx.

## Layout

- `src/routes/` — TanStack Router file-based routes. `src/routeTree.gen.ts` is generated
  by the Vite plugin; never edit it by hand and never lint or format it.
- `src/main.tsx` — app entry; creates the router.
- `src/styles.css` — Tailwind 4 entry and design tokens (`@theme`).
- `public/` — static assets copied verbatim.
- `nginx.conf` — production serving config (SPA fallback to `index.html`).

Put shared UI in `src/components/`, API access in `src/api/`, and hooks in `src/hooks/`
as they come into existence. Keep route files thin: data loading and layout, not
business logic.

## Conventions

- TypeScript strict. No `any` without a comment explaining why.
- Function components only. `PascalCase` components, `camelCase` everything else,
  `kebab-case` file names for routes (the router requires it) and `PascalCase` for
  component files.
- Styling is Tailwind utility classes. Use the brand tokens defined in `src/styles.css`
  (`brand` purple #6610F2, `brand-blue` #3F8EFC, `green` #4CB944, `orange` #F18F01,
  `grey` #8B94A3, plus their `-dark` variants) rather than raw hex colours. The palette
  is fixed; do not introduce new hues.
- Prettier formats, ESLint lints. Do not fight either; fix the config if a rule is wrong.
- Prefer built-in browser and React features and the dependencies already present.
  A new dependency needs a clear reason in the PR description.
- All user-facing dates and times are South African (SAST). Member data shown to club
  users is limited to name, member number and standing (POPIA); never widen that in
  the UI without a spec change.
- Never commit secrets. Runtime configuration comes from `VITE_*` environment variables
  at build time.

## Tests and pull requests

- There is no test runner yet. When one is added it will be Vitest with React Testing
  Library; until then, verify changes in the browser and describe how in the PR.
- Before opening a PR run, in order: `npm run lint`, `npm run format:check`,
  `npm run build`, `npm audit --audit-level=high`. All must pass. CI runs the same.
- Commits: imperative subject ≤ 72 characters, body explains why. Small, cohesive
  changes targeting `main`.
- PRs: describe the problem, the resulting behaviour and how you validated it. Include
  screenshots for UI changes. Link the issue. See `CONTRIBUTING.md`.

## Do not

- Do not edit `src/routeTree.gen.ts`, `package-lock.json` by hand, or the Dockerfile
  base images without discussion.
- Do not add a second styling system, state library or router.
- Do not start long-running servers or install global tools as part of a change.
