# LXRJ-UI

OpenRouter Bauhaus-styled component library + docs site.

## Stack
- **Next.js 16** (App Router, Turbopack default)
- **React 19**
- **Tailwind v4** (`@theme` in `app/globals.css`)
- **Radix UI** (Slot)
- **lucide-react** (icons)
- **cva** + **clsx** + **tailwind-merge**

## Design
See [DESIGN.md](./DESIGN.md) — 6-color brand palette (Ink, Cloud, Grape, Volt, Coral, Royal), opacity scale, dark-mode accent swap (Grape → Volt).

## Run
```bash
bun install
bun run dev -- --port 3001 --hostname 0.0.0.0
```
Open http://localhost:3001

## Routes
- `/` — homepage (Bauhaus design, dark mode toggle 🌙/☀️)
- `/docs/components/base/button` — Button demo (5 variants, 4 sizes, copy + pagination)

## Tokens (`app/globals.css`)
- **Brand**: `--color-ink`, `--color-cloud`, `--color-grape`, `--color-volt`, `--color-coral`, `--color-royal`
- **Semantic**: `--color-background`, `--color-foreground`, `--color-card`, `--color-popover`, `--color-surface`, `--color-doc-surface`
- **Accent**: `--color-primary` (Grape/Volt), `--color-secondary`, `--color-accent`, `--color-accent-foreground`, `--color-accent-subtle`, `--color-accent-border`, `--color-accent-hover`, `--color-ring`
- **Text**: `--color-muted`, `--color-muted-foreground`, `--color-text-faint`, `--color-text-prose-body`
- **Status**: `--color-positive` / `--color-negative` / `--color-warning` / `--color-info` / `--color-promo` (each with `-text` and `-bg`)
- **Focus**: `--focus-border` (foreground/30), `--focus-shadow` (3px glow) — neutral, not accent
- **Chart**: `--color-chart-1..5`
- **Radius**: `--radius-sm/md/lg/xl/full`
- **Typography**: `--font-sans` (Plus Jakarta Sans), `--font-brand` (Plus Jakarta Sans), `--font-mono` (Geist Mono)

## Files
```
app/
├── globals.css          # tokens
├── layout.tsx           # root layout
├── page.tsx             # homepage
└── docs/
    ├── layout.tsx
    └── components/base/button/page.tsx

components/
├── ui/
│   ├── button.tsx
│   └── badge.tsx
├── callout.tsx
├── copy-page-button.tsx
└── pagination.tsx

lib/utils.ts             # cn()
DESIGN.md
README.md
```
