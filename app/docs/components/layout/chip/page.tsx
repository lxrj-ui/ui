"use client";

import { Chip } from "@/components/ui/chip";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export default function ChipPage() {
  const [chips, setChips] = useState(["React", "TypeScript", "Tailwind", "Next.js"]);
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Layout</Badge>
        <CopyPageButton text="Chip — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Chip</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Removable/interactive badge. Neutral muted fill, rounded-md, optional trailing × on hover.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="flex flex-wrap gap-2 mb-10">
        <Chip>Filter</Chip>
        <Chip selected>Active</Chip>
        <Chip removable onRemove={() => {}}>Removable</Chip>
      </div>

      <h2 className="text-base font-semibold mb-3">Removable list</h2>
      <div className="flex flex-wrap gap-2 mb-10">
        {chips.map((chip) => (
          <Chip key={chip} removable onRemove={() => setChips((c) => c.filter((x) => x !== chip))}>
            {chip}
          </Chip>
        ))}
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Chip } from "@/components/ui/chip"

<Chip>Label</Chip>
<Chip selected>Active</Chip>
<Chip removable onRemove={() => remove()}>Removable</Chip>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/layout/button-group", label: "ButtonGroup" }} next={{ href: "/docs/components/layout/cta-card", label: "CTACard" }} />
    </div>
  );
}
