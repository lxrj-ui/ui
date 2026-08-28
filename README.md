# LXRJ-UI — Next.js template with Base UI (shadcn/ui style)

ก็อปโครง `shadcn-ui/ui/templates/next-app` มาเป็นต้นแบบ แล้วทำเป็นของเรา

```
lxrj-ui/
├─ app/
│  ├─ page.tsx       # Models table (8 cols)
│  ├─ home/page.tsx  # Hero The Unified Interface...
│  └─ examples/page.tsx # ตัวอย่าง Button/Card/Badge
├─ components/ui/
│  ├─ button.tsx
│  ├─ card.tsx
│  └─ badge.tsx
├─ hooks/use-mobile.ts
├─ lib/utils.ts      # cn()
├─ public/
└─ tailwind.config.js # tokens: bg #fcfcfe / violet #7624f4 / border 0.08
```

## Adding components

แบบ shadcn:

```bash
# ใน lxrj-ui เรา copy-paste เอง (ไม่ต้อง npx shadcn)
# สร้างใน components/ui/ ได้เลย เช่น button.tsx, card.tsx
```

## Using components

```tsx
import { Button } from "@/components/ui/button";
<Button>Get API Key</Button>
<Button variant="outline">Discover Models</Button>
```

## Run

```bash
cd workspace/BCC/Apps-Dev/lxrj-ui
bun install
bun run dev -- --port 3001 --hostname 0.0.0.0
# http://127.0.0.1:3001        -> Models table
# http://127.0.0.1:3001/home   -> Hero
# http://127.0.0.1:3001/examples -> ตัวอย่าง shadcn style
```

**Stack:** Next.js 15 + Base UI (@base-ui/react 1.7.0) + Tailwind + TypeScript
**Tokens:** bg #fcfcfe / border rgba(3,8,10,0.08) / violet #7624f4 / font jakarta/gordita
