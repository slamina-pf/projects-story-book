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

## Consuming this package

Published to GitHub Packages as `@slamina-pf/projects-story-book`. Consumers need a `.npmrc` with:

```
@slamina-pf:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

(`NODE_AUTH_TOKEN` is a GitHub PAT with `read:packages`.) Then:

```
npm install @slamina-pf/projects-story-book
```

```ts
import { Button } from '@slamina-pf/projects-story-book';
import '@slamina-pf/projects-story-book/styles.css';
```

## Releasing a new version

Publishing is what makes changes visible to consumers — installing a package always pins to whatever was last published, never local uncommitted work. To release:

```
npm version patch   # or minor / major
git push --follow-tags
```

Pushing a `v*` tag triggers `.github/workflows/publish.yml`, which builds and publishes automatically. To publish without waiting on CI: `npm run build && npm publish` locally (requires `NODE_AUTH_TOKEN` with `write:packages` set in your environment).
