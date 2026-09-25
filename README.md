# projects-story-book

Design-system component library for the store-online project: React + TypeScript components, documented and previewed in Storybook, built as a publishable package.

## Setup

```
npm install
```

## Scripts

- `npm run storybook` — start Storybook dev server on http://localhost:6006
- `npm run build-storybook` — build a static Storybook site to `storybook-static/`
- `npm run build` — type-check and build the library to `dist/` (JS + `.d.ts`)
- `npm run dev` — run the Vite dev harness (`src/App.tsx`)

## Structure

- `src/components/` — library components, one folder per component (e.g. `Button/Button.tsx` + `Button.stories.tsx`)
- `src/index.ts` — the package's public API (barrel export)
- `.storybook/` — Storybook configuration
