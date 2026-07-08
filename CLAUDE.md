# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — ESLint (flat config, `eslint-config-next`)

No test runner is configured.

## Stack & non-obvious conventions

This is Next.js **16.2.10** (App Router) + React **19** + Tailwind **v4** + shadcn/ui on **Base UI** (not Radix). The version gap from training data matters — per `AGENTS.md`, read `node_modules/next/dist/docs/` before writing framework code.

- **Middleware is `proxy.ts`, not `middleware.ts`.** Root-level `proxy.ts` exports `default function proxy(request)` + a `config.matcher`. This is the Next 16 rename; don't create `middleware.ts`.
- **React Compiler is on** (`next.config.ts` → `reactCompiler: true`). Skip manual `useMemo`/`useCallback`/`memo` — the compiler handles memoization.
- **Dynamic route `params` is a Promise.** `await params` before use (see `src/app/users/[id]/page.tsx`).
- **Tailwind v4 has no `tailwind.config`.** Config lives in `src/app/globals.css`; PostCSS via `@tailwindcss/postcss`.
- **shadcn is `base-nova` style on Base UI.** `components.json` drives it; add components with the shadcn CLI. Icons: `lucide-react`.
- `@/*` maps to `src/*`. Use `cn()` from `@/lib/utils` for class merging.

## Layout

`src/app/` routes · `src/components/ui/` shadcn primitives · `src/shared/` shared app pieces (e.g. `layout/header.tsx`) · `src/lib/` utilities.
