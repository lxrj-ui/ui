import { Textarea, Label, HelperText } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Textarea — LXRJ-UI" };

export default function TextareaPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Textarea — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Textarea</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Multi-line text input. Same border/focus treatment as Input.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="max-w-sm mb-10 space-y-2">
        <Label>Message</Label>
        <Textarea placeholder="Type your message..." />
        <HelperText>Max 500 characters.</HelperText>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Textarea, Label } from "@/components/ui/input"

<Label>Message</Label>
<Textarea placeholder="Type your message..." />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/input", label: "Input" }} next={{ href: "/docs/components/form/select", label: "Select" }} />
    </div>
  );
}
