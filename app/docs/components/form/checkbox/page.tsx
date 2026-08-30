"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Checkbox — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Checkbox</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Binary toggle. Unchecked: muted fill + input stroke. Checked: accent fill + check icon.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="flex items-center gap-3 mb-10">
        <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)} id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <h2 className="text-base font-semibold mb-3">States</h2>
      <div className="flex items-center gap-6 mb-10">
        <div className="flex items-center gap-2"><Checkbox /><Label>Unchecked</Label></div>
        <div className="flex items-center gap-2"><Checkbox checked /><Label>Checked</Label></div>
        <div className="flex items-center gap-2"><Checkbox disabled /><Label>Disabled</Label></div>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)} />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/select", label: "Select" }} next={{ href: "/docs/components/form/radio", label: "Radio" }} />
    </div>
  );
}
