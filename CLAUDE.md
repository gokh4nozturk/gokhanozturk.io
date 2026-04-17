# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website for Gökhan Öztürk — Next.js 13 App Router, deployed on Vercel. Written primarily in **JSX** (not TypeScript, despite TS being installed for types). Node `>=22` (see `.nvmrc`). Package manager is `pnpm` (lockfile is `pnpm-lock.yaml`).

## Commands

```bash
pnpm dev          # next dev
pnpm build        # next build
pnpm start        # next start (production)
pnpm lint         # biome lint .
pnpm lint:fix     # biome check --write .  (lint + format + apply safe fixes)
pnpm format:check # biome format .
pnpm format:fix   # biome format --write .
pnpm rimraf       # rm -rf .next
```

There is no test runner configured — the testing section in `.cursor/rules/rules.mdc` is aspirational; do not assume Jest/RTL are set up.

## Tooling conventions

- **Biome** (not ESLint/Prettier) is the single source of truth for lint + format. Config: `biome.json`. Scope is limited to `./app/**`, `./components/**`, `./lib/**`, `./db/**` — other dirs (e.g. `hooks/`, `pages/`) are intentionally excluded.
- Biome enforces **sorted Tailwind classes** via `useSortedClasses` (level `error`, safe autofix). It is configured to sort classes inside `className` attributes **and** inside calls to the `cn(...)` helper. Run `pnpm lint:fix` after editing class lists.
- Biome `assist` also enforces sorted imports, sorted JSX attributes, sorted object keys, and sorted CSS properties. Don't fight the sorter — run `lint:fix`.
- Formatter: 2-space indent, line width 100.
- Editor configs in `.vscode/settings.json` and `.zed/settings.json` run Biome fix-all + organize-imports on save.

## Path aliases

Defined in `jsconfig.json`:

- `@components/*` → `components/*`
- `@lib/*` → `lib/*`
- `@hooks/*` → `hooks/*`
- `@styles/*` → `styles/*`
- `@public/*` → `public/*`
- `@utils/*` → `utils/*` (directory does not currently exist)

Note: imports are inconsistent across the codebase — some files use `@components/Foo`, others `components/Foo` (bare, resolved via `baseUrl: "."`). Prefer the `@`-prefixed alias for new code.

## Architecture

### Routing: App Router + a legacy Pages stub

- Primary routing lives under `app/` (App Router): `page.jsx`, `layout.jsx`, route segments like `app/blog/[slug]/page.jsx`, `app/works/`, `app/bookmarks/`, `app/photos/`, `app/resume/`.
- API routes live in `app/api/*/route.js[x]` (e.g. `app/api/feedback/route.js`, `app/api/og/route.jsx` for OG image generation via `@vercel/og`).
- `pages/api/hello.js` is a leftover Pages-Router stub; all real API work should go in `app/api/`.
- `next.config.js` sets `pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']` and enables `experimental.mdxRs`, plus a custom webpack rule loading `.mdx` via `@mdx-js/loader` with `@mdx-js/react` provider.

### Root layout

`app/layout.jsx` owns global metadata (SEO, OpenGraph, Twitter, robots, icons, OG image via `/api/og`), wraps children in `ThemeProvider` (next-themes, class-based dark mode), and renders `<Header />`, `<Navigation />`, Vercel `<Analytics />` + `<SpeedInsights />`, and a `sonner` `<Toaster />`.

### Content / data sources

- **Blog posts**: MDX files in `posts/*.mdx`. `lib/mdx.js` exposes `getAllPosts()` / `getPostData(id)` which read the directory at request time using `fs` + `gray-matter` for frontmatter. Rendering uses `next-mdx-remote` with custom components declared in `mdx-components.jsx` (`useMDXComponents` hook).
- **External integrations** (classes in `lib/`):
  - `lib/github.js` — `Github` class, uses `NEXT_PUBLIC_GITHUB_ACCESS_TOKEN`.
  - `lib/unsplash.js` — `Unsplash` class, uses `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`.
  - `lib/raindrop.js` — `Raindrop` class (bookmarks), uses `NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN`, recursive paginated fetch with `next: { revalidate: 3600 }`.
- **Feedback**: `app/api/feedback/route.js` POSTs to a Supabase `feedback` table with IP-less per-email rate limiting (10/hour). Requires `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` — the module throws at import time if they're missing.
- **Resume data**: `lib/resume-data.js` feeds `components/resume/*` used by `app/resume/`.

Env vars consumed (see `.env.example` for the subset that is documented): `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`, `NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN`, `NEXT_PUBLIC_GITHUB_ACCESS_TOKEN`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

### Styling

- Tailwind CSS with a custom `p3-*` color palette driven by CSS custom properties (`--p3-*`) defined in `styles/globals.css`. Always prefer these semantic tokens (`bg-p3-background`, `text-p3-text`, `dark:*` variants) over raw Tailwind colors so dark mode + theme coherence stay intact.
- Dark mode is `class`-based (toggled by `next-themes` in `components/ThemeProvider.jsx`).
- `cn(...inputs)` from `lib/utils.js` (= `twMerge(clsx(...))`) is the canonical way to compose class lists and is wired into Biome's class sorter — use it instead of ad-hoc template strings.
- PostCSS: `tailwindcss` + `autoprefixer` + `tailwindcss/nesting` (postcss-nested) + `cssnano` in production.
- Typography plugin (`@tailwindcss/typography`) and `@midudev/tailwind-animations` are both registered.

### Animations

Per `.cursor/rules/rules.mdc`, use **`motion`** (the new standalone package, imported from `"motion/react"`) for animations. `react-spring` is still a dependency for a few legacy components but is not the preferred choice for new work.

### Components

- `components/ui/*` — base primitives.
- `components/icons/*` — tech/brand SVG icon components, re-exported from `components/icons/index.js`.
- `components/resume/*` — resume page sections, re-exported from `components/resume/index.js`.
- Vendored UI collections (kept as-is, do not "clean up" naming): `components/luxe/`, `components/magicui/`, `components/reactbits/`, `components/hextaui/`, `components/hover/`, `components/ground/`.

## Project rules (from `.cursor/rules/rules.mdc`)

- Next.js 13 App Router; JSX (not TSX) for new components.
- Default to **Server Components**; opt into `"use client"` only when needed (state, effects, browser APIs, motion hooks).
- English-only in code and comments.
- Use `next/image` for images; `next.config.js` already whitelists several remote hosts and uses a wildcard — still prefer the Image component over raw `<img>`.
