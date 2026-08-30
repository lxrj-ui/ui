import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Separator — LXRJ-UI" };

export default function SeparatorPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Layout</Badge>
        <CopyPageButton text="Separator — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Separator</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Visual divider — horizontal or vertical, decorative or semantic.</p>

      <h2 className="text-base font-semibold mb-3">Horizontal</h2>
      <div className="mb-10 space-y-4 max-w-sm">
        <div className="text-sm">Above</div>
        <Separator />
        <div className="text-sm">Below</div>
      </div>

      <h2 className="text-base font-semibold mb-3">Vertical</h2>
      <div className="mb-10 flex h-10 items-center gap-4">
        <div className="text-sm">Left</div>
        <Separator orientation="vertical" />
        <div className="text-sm">Right</div>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/layout/card", label: "Card" }} next={{ href: "/docs/components", label: "All Components" }} />
    </div>
  );
}
