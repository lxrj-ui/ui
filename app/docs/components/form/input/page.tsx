import { Input, Label, HelperText } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Input — LXRJ-UI" };

export default function InputPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Input — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Input</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Text input field. border-input (14 opacity), neutral focus ring, error state with negative glow.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="max-w-sm mb-10 space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="you@example.com" />
        <HelperText>We'll never share your email.</HelperText>
      </div>

      <h2 className="text-base font-semibold mb-3">Error</h2>
      <div className="max-w-sm mb-10 space-y-2">
        <Label>Password</Label>
        <Input type="password" placeholder="Enter password" className="!border-[var(--color-negative)]" />
        <HelperText error>Password must be at least 8 characters.</HelperText>
      </div>

      <h2 className="text-base font-semibold mb-3">Disabled</h2>
      <div className="max-w-sm mb-10">
        <Input disabled placeholder="Disabled" />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Input, Label, HelperText } from "@/components/ui/input"

<Label>Email</Label>
<Input type="email" placeholder="you@example.com" />
<HelperText>We'll never share your email.</HelperText>
<HelperText error>Invalid email address.</HelperText>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/base/icon", label: "Icon" }} next={{ href: "/docs/components/form/textarea", label: "Textarea" }} />
    </div>
  );
}
