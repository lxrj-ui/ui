import { ButtonGroup, ButtonGroupLabel } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "ButtonGroup — LXRJ-UI" };

export default function ButtonGroupPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Layout</Badge>
        <CopyPageButton text="ButtonGroup — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>ButtonGroup</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Fused button row. Shared variant, inner corners squared, inner borders collapsed.</p>

      <h2 className="text-base font-semibold mb-3">Outline</h2>
      <div className="mb-10">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>

      <h2 className="text-base font-semibold mb-3">With label</h2>
      <div className="mb-10">
        <div className="inline-flex">
          <ButtonGroupLabel>Actions</ButtonGroupLabel>
          <ButtonGroup>
            <Button>Edit</Button>
            <Button>Duplicate</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { ButtonGroup, ButtonGroupLabel } from "@/components/ui/button-group"

<ButtonGroup>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/navigation/segmented-control", label: "SegmentedControl" }} next={{ href: "/docs/components/layout/chip", label: "Chip" }} />
    </div>
  );
}
