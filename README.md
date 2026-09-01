# wpfda-frontend

Public site, club portal and admin portal for the Western Province Flying Disc Association
(WPFDA). See `../docs/product-spec.md` for the full product specification.

## Stack

- React 19 + TypeScript, built with Vite
- TanStack Router (file-based routes in `src/routes/`; `src/routeTree.gen.ts` is generated)
- Tailwind CSS 4
- ESLint (flat config) + Prettier
- Multi-stage Dockerfile: node build → static files served by nginx

## Commands

```sh
npm run dev      # dev server
npm run build    # production build + typecheck
npm run lint     # eslint
npm run format   # prettier --write
npm run preview  # serve the production build locally
```

## Docker

```sh
docker build -t wpfda-frontend .
docker run -p 8080:80 wpfda-frontend
```
