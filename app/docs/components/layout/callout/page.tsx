import { Callout } from "@/components/callout";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Callout — LXRJ-UI" };

export default function CalloutPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Layout</Badge>
        <CopyPageButton text="Callout — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Callout</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Inline alert with icon. Note, tip, warning, info, success variants. Status-colored icon + label.</p>

      <h2 className="text-base font-semibold mb-3">Variants</h2>
      <div className="space-y-4 mb-10">
        <Callout variant="note">This is a note callout with additional information.</Callout>
        <Callout variant="tip">Here's a helpful tip for your workflow.</Callout>
        <Callout variant="warning">Warning: this action is irreversible.</Callout>
        <Callout variant="info">Important information about your account.</Callout>
        <Callout variant="success">Your changes have been saved successfully.</Callout>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Callout } from "@/components/callout"

<Callout variant="note">This is a note.</Callout>
<Callout variant="tip">A helpful tip.</Callout>
<Callout variant="warning">Warning message.</Callout>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/layout/full-page-state", label: "FullPageState" }} next={{ href: "/docs/components", label: "All Components" }} />
    </div>
  );
}
