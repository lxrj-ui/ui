import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { BaseUiGallery } from "@/components/base-ui-gallery";

export const metadata = {
  title: "Components — LXRJ-UI",
  description: "All components in the LXRJ-UI design system.",
};

const components = [
  { category: "Base", items: [
    { name: "Button", href: "/docs/components/base/button", description: "Trigger actions — 5 variants, 4 sizes" },
    { name: "Badge", href: "/docs/components/base/badge", description: "Labels & status indicators" },
    { name: "Avatar", href: "/docs/components/base/avatar", description: "User images with fallback — 5 sizes, group stack" },
    { name: "Icon", href: "/docs/components/base/icon", description: "Icon wrapper with consistent sizing" },
  ]},
  { category: "Form", items: [
    { name: "Input", href: "/docs/components/form/input", description: "Text input — default, search, password" },
    { name: "Textarea", href: "/docs/components/form/textarea", description: "Multi-line text input" },
    { name: "Select", href: "/docs/components/form/select", description: "Dropdown select with chevron" },
    { name: "Checkbox", href: "/docs/components/form/checkbox", description: "Binary toggle — check/uncheck" },
    { name: "Radio", href: "/docs/components/form/radio", description: "Single-select from options" },
    { name: "Switch", href: "/docs/components/form/switch", description: "Toggle on/off with thumb" },
    { name: "Label", href: "/docs/components/form/label", description: "Form field labels" },
    { name: "HelperText", href: "/docs/components/form/helper-text", description: "Input descriptions & error messages" },
  ]},
  { category: "Data Display", items: [
    { name: "Table", href: "/docs/components/data/table", description: "Data tables — row states, numeric alignment, truncation" },
    { name: "Skeleton", href: "/docs/components/data/skeleton", description: "Shape-preserving loading placeholders" },
    { name: "Calendar", href: "/docs/components/data/calendar", description: "Month grid with navigation" },
  ]},
  { category: "Overlay", items: [
    { name: "Dialog", href: "/docs/components/overlay/dialog", description: "Modal dialog — destructive confirmation pattern" },
    { name: "Toast", href: "/docs/components/overlay/toast", description: "Transient notifications — auto-dismiss, stacking" },
    { name: "Accordion", href: "/docs/components/overlay/accordion", description: "Collapsible disclosure sections" },
  ]},
  { category: "Navigation", items: [
    { name: "Pagination", href: "/docs/components/navigation/pagination", description: "Prev/next page navigation" },
    { name: "SegmentedControl", href: "/docs/components/navigation/segmented-control", description: "Value picker — track + active segment" },
  ]},
  { category: "Layout", items: [
    { name: "ButtonGroup", href: "/docs/components/layout/button-group", description: "Fused button row — shared variant" },
    { name: "Chip", href: "/docs/components/layout/chip", description: "Removable/interactive badge — filters, tags" },
    { name: "CTACard", href: "/docs/components/layout/cta-card", description: "Invitation card — one action" },
    { name: "FullPageState", href: "/docs/components/layout/full-page-state", description: "404 / error / empty states" },
    { name: "Callout", href: "/docs/components/layout/callout", description: "Inline alert — note, tip, warning, info, success" },
  ]},
];

export default function Page() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge>Reference</Badge>
        <CopyPageButton text="Components — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Components</h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-muted-foreground)" }}>
        All components in the LXRJ-UI Bauhaus design system. Each component follows
        DESIGN.md — neutral focus ring, status colors, CVA variants, CSS variable tokens.
      </p>
      {components.map((group) => (
        <div key={group.category} className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--color-text-faint)" }}>{group.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {group.items.map((item) => (
              <Link key={item.name} href={item.href} className="group flex flex-col gap-1 rounded-lg border p-4 transition-colors hover:bg-[var(--color-card-hover)]" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{item.name}</span>
                  <span className="text-xs opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "var(--color-primary)" }}>→</span>
                </div>
                <span className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{item.description}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <hr className="my-12" style={{ borderColor: "var(--color-border)" }} />
      <BaseUiGallery />
    </div>
  );
}
