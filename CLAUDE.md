# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build (output: dist/)
npm run preview    # Preview production build
npm run lint       # Type-check only (tsc --noEmit) — no dedicated linter
npm run clean      # Remove dist/ and server.js
```

There are no automated tests. Type checking via `npm run lint` is the primary correctness gate.

## Environment

Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` for Google Generative AI features.

## Architecture

Single-page React 19 portfolio rendered by Vite. All sections live in one scroll (`App.tsx`), rendered in order: `Navbar → Hero → Projects → Metrics → Experience → Contact → Footer`, with `MobileNav` overlaid for small viewports.

**State**: Redux Toolkit manages a single `theme` slice (dark/light). `ThemeManager` in `App.tsx` syncs the Redux `mode` to `document.documentElement.classList` so Tailwind's dark-mode variant works. The store defaults to dark mode regardless of system preference (intentional — see `store.ts:7`).

**Styling**: Tailwind CSS v4 (Vite plugin, no `tailwind.config.js`). Custom design tokens are declared in `src/index.css` under `@theme` and `@layer`. Use the custom utility classes defined there rather than ad-hoc Tailwind values:

- Layout borders → `.brutalist-border`, `.brutalist-border-{t,b,l,r}`
- Typography scale → `.font-display-lg`, `.font-headline-lg`, `.font-headline-md`, `.font-body-lg`, `.font-body-md`, `.font-label-caps`, `.font-code-sm`
- CSS variables for theming → `--bg-color`, `--text-color`, `--border-color`, `--grid-color`

**Typography**: JetBrains Mono throughout (loaded via Google Fonts). The entire site uses `--font-mono`.

**Path alias**: `@` resolves to the repo root (configured in `vite.config.ts`).

**AI**: `@google/genai` is available for Gemini integration. The API key is injected at build time via `process.env.GEMINI_API_KEY` in `vite.config.ts`.
