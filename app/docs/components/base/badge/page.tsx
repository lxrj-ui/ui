import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Badge — LXRJ-UI" };

export default function BadgePage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Base</Badge>
        <CopyPageButton text="Badge — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Badge</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Labels & status indicators. 12px overline, rounded-full, font-medium.</p>

      <h2 className="text-base font-semibold mb-3">Variants</h2>
      <div className="flex flex-wrap gap-2 mb-10">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="positive">Positive</Badge>
        <Badge variant="negative">Negative</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="promo">Promo</Badge>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="positive">Positive</Badge>
<Badge variant="warning">Warning</Badge>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/base/button", label: "Button" }} next={{ href: "/docs/components/base/avatar", label: "Avatar" }} />
    </div>
  );
}
