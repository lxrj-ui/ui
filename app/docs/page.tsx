import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Introduction — LXRJ-UI" };

export default function DocsPage() {
  return (
    <div>
      <Badge className="mb-3">Getting Started</Badge>
      <h1 className="text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>
        Introduction
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--color-muted-foreground)" }}>
        LXRJ-UI is a Bauhaus-inspired design system — 6-color palette (Ink / Cloud / Grape / Volt / Coral / Royal),
        CSS-variable tokens, and CVA-based components. Built with Next.js 16, Tailwind v4, and Base UI.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-10">
        <Link href="/docs/components" className="rounded-lg border p-4 hover:bg-[var(--color-card-hover)]" style={{ borderColor: "var(--color-border)" }}>
          <div className="font-medium text-sm">Components →</div>
          <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>22 components across 6 categories</div>
        </Link>
        <a href="/DESIGN.md" className="rounded-lg border p-4 hover:bg-[var(--color-card-hover)]" style={{ borderColor: "var(--color-border)" }}>
          <div className="font-medium text-sm">DESIGN.md →</div>
          <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>Full design specification</div>
        </a>
      </div>

      <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--color-foreground)" }}>Quick start</h2>
      <pre className="rounded-md border p-4 text-xs font-mono leading-6 mb-6" style={{ background: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`git clone https://github.com/lxrj-ui/ui lxrj-ui
cd lxrj-ui
bun install
bun run dev`}
      </pre>

      <Link href="/docs/components"><Button>Browse components</Button></Link>
    </div>
  );
}
