"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export default function SwitchPage() {
  const [on, setOn] = useState(true);
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Switch — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Switch</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Toggle on/off. Unchecked: foreground/30 track. Checked: accent track, foreground thumb.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="flex items-center gap-3 mb-10">
        <Switch checked={on} onCheckedChange={() => setOn(!on)} id="airplane" />
        <Label htmlFor="airplane">Airplane Mode</Label>
      </div>

      <h2 className="text-base font-semibold mb-3">States</h2>
      <div className="flex items-center gap-6 mb-10">
        <div className="flex items-center gap-2"><Switch /><Label>Off</Label></div>
        <div className="flex items-center gap-2"><Switch checked /><Label>On</Label></div>
        <div className="flex items-center gap-2"><Switch disabled /><Label>Disabled</Label></div>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Switch } from "@/components/ui/switch"

<Switch checked={on} onCheckedChange={() => setOn(!on)} />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/radio", label: "Radio" }} next={{ href: "/docs/components/data/table", label: "Table" }} />
    </div>
  );
}
