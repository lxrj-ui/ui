"use client";

import { TablistDemo } from "@/components/ui/tablist";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export default function TablistPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Navigation</Badge>
        <CopyPageButton text="Tablist — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Tablist</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Summary tab row with counts — filter models/items by category (WAI-ARIA tabs, no visible scrollbar).</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
        <TablistDemo />
      </div>

      <h2 className="text-base font-semibold mb-3">Anatomy</h2>
      <ul className="mb-10 space-y-1.5 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>Tablist</span> ? แถวแท็บ <code className="font-mono text-xs">role=tablist</code> เลื่อนแนวนอนได้ + <code className="font-mono text-xs">scrollbar-hide</code> + <code className="font-mono text-xs">-mb-px</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>Tab (active)</span> ? <code className="font-mono text-xs">border-b-2 border-primary text-primary</code> + <code className="font-mono text-xs">aria-selected=true</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>Tab (inactive)</span> ? <code className="font-mono text-xs">border-transparent text-muted-foreground group hover:text-foreground</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>Count</span> ? เลขนับท้ายแท็บ <code className="font-mono text-xs">tabular-nums</code> (icon lucide size-4 + hover tint ต่อหมวด)</li>
      </ul>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Tablist, type TablistItem } from "@/components/ui/tablist"

const items: TablistItem[] = [
  { id: "all", label: "All" },
  { id: "text", label: "Text", count: 395, icon: Type, hoverTint: "group-hover:text-modality-text" },
  { id: "image", label: "Image", count: 48, icon: Image },
  // ...
]

const [value, setValue] = useState("all")
<Tablist items={items} value={value} onValueChange={setValue} ariaLabel="Filter models by output modality" />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/navigation/topbar", label: "Topbar" }} next={{ href: "/docs/components/overlay/accordion", label: "Accordion" }} />
    </div>
  );
}
