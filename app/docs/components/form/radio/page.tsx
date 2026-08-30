"use client";

import { Radio } from "@/components/ui/radio";
import { Label } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export default function RadioPage() {
  const [selected, setSelected] = useState("comfortable");
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Radio — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Radio</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Single-select from options. Unchecked: muted fill. Checked: border-primary with dot.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="flex items-center gap-6 mb-10">
        {[{ value: "default", label: "Default" }, { value: "comfortable", label: "Comfortable" }, { value: "compact", label: "Compact" }].map((opt) => (
          <div key={opt.value} className="flex items-center gap-2">
            <Radio checked={selected === opt.value} onClick={() => setSelected(opt.value)} id={opt.value} />
            <Label htmlFor={opt.value}>{opt.label}</Label>
          </div>
        ))}
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Radio } from "@/components/ui/radio"

<Radio checked={selected === "option"} onClick={() => setSelected("option")} />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/checkbox", label: "Checkbox" }} next={{ href: "/docs/components/form/switch", label: "Switch" }} />
    </div>
  );
}
