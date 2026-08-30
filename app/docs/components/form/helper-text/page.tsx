import { HelperText } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "HelperText — LXRJ-UI" };

export default function HelperTextPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="HelperText — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>HelperText</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Input descriptions & error messages. 12px, muted or negative color.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="max-w-sm mb-10 space-y-2">
        <HelperText>Your email address will be used for notifications.</HelperText>
        <HelperText error>This field is required.</HelperText>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { HelperText } from "@/components/ui/input"

<HelperText>Optional description.</HelperText>
<HelperText error>Required field.</HelperText>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/label", label: "Label" }} next={{ href: "/docs/components/data/table", label: "Table" }} />
    </div>
  );
}
