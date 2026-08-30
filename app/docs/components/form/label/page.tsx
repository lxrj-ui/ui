import { Label } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Label — LXRJ-UI" };

export default function LabelPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Label — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Label</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Form field labels. 13px font-medium, pairs with Input/Select/Textarea.</p>

      <h2 className="text-base font-semibold mb-3">Example</h2>
      <div className="max-w-sm mb-10 space-y-2">
        <Label>Username</Label>
        <Label className="text-[var(--color-muted-foreground)]">Email address</Label>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Label } from "@/components/ui/input"

<Label>Username</Label>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/switch", label: "Switch" }} next={{ href: "/docs/components/form/helper-text", label: "HelperText" }} />
    </div>
  );
}
