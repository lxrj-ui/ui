import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/callout";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = {
  title: "Button — LXRJ-UI",
  description: "Trigger actions throughout your UI.",
};

export default function ButtonPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Base</Badge>
        <CopyPageButton text="Button — LXRJ-UI" />
      </div>

      <h1
        className="text-4xl font-bold tracking-tight mb-2"
        style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
      >
        Button
      </h1>
      <p className="text-[15px] mb-8" style={{ color: "var(--color-muted-foreground)" }}>
        Trigger actions. Five variants, four sizes, and full className pass-through. Follows
        DESIGN.md §Buttons — radius-md (6px), 14px w500, neutral focus ring.
      </p>

      <h2
        className="text-2xl font-semibold mb-3"
        style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
      >
        Variants
      </h2>
      <div className="flex flex-wrap gap-2 mb-10">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <h2
        className="text-2xl font-semibold mb-3"
        style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
      >
        Sizes
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <Button size="sm">Small · h-8</Button>
        <Button size="default">Default · h-10</Button>
        <Button size="lg">Large · h-11</Button>
        <Button size="icon" aria-label="Settings">⚙</Button>
      </div>

      <Callout variant="note">
        Buttons use <code className="px-1.5 py-0.5 rounded text-[12px] font-mono" style={{ backgroundColor: "var(--color-card-hover)" }}>asChild</code> with Radix Slot, so you can compose them with{" "}
        <code className="px-1.5 py-0.5 rounded text-[12px] font-mono" style={{ backgroundColor: "var(--color-card-hover)" }}>Link</code> from next/link without losing button styles.
      </Callout>

      <h2
        className="text-2xl font-semibold mb-3"
        style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
      >
        Code
      </h2>
      <pre
        className="rounded-md border p-4 text-[12px] overflow-x-auto font-mono leading-6"
        style={{
          backgroundColor: "var(--color-card)",
          borderColor: "var(--color-border)",
          borderRadius: "8px",
          fontFamily: "var(--font-mono)",
        }}
      >
{`import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">⚙</Button>`}
      </pre>

      <Pagination next={{ href: "/", label: "Back to home" }} />
    </div>
  );
}
