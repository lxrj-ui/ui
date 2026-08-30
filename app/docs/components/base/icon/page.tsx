import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Icon — LXRJ-UI" };

export default function IconPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Base</Badge>
        <CopyPageButton text="Icon — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Icon</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Icon sizing conventions. Uses lucide-react icons with consistent size tokens.</p>

      <h2 className="text-base font-semibold mb-3">Sizes</h2>
      <div className="flex items-center gap-4 mb-10">
        <div className="flex flex-col items-center gap-1"><span className="h-3 w-3" style={{ color: "var(--color-foreground)" }}>●</span><span className="text-xs" style={{ color: "var(--color-text-faint)" }}>icon-sm 12px</span></div>
        <div className="flex flex-col items-center gap-1"><span className="h-4 w-4" style={{ color: "var(--color-foreground)" }}>●</span><span className="text-xs" style={{ color: "var(--color-text-faint)" }}>icon 16px</span></div>
        <div className="flex flex-col items-center gap-1"><span className="h-5 w-5" style={{ color: "var(--color-foreground)" }}>●</span><span className="text-xs" style={{ color: "var(--color-text-faint)" }}>icon-md 20px</span></div>
        <div className="flex flex-col items-center gap-1"><span className="h-8 w-8" style={{ color: "var(--color-foreground)" }}>●</span><span className="text-xs" style={{ color: "var(--color-text-faint)" }}>icon-lg 32px</span></div>
      </div>

      <h2 className="text-base font-semibold mb-3">Usage</h2>
      <p className="text-sm mb-4" style={{ color: "var(--color-muted-foreground)" }}>
        Icons use <code className="px-1.5 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: "var(--color-card-hover)" }}>size</code> prop from lucide-react.
        Pair with adjacent text tier — icons in body text use icon-sm, buttons use default (16px).
      </p>

      <Pagination prev={{ href: "/docs/components/base/avatar", label: "Avatar" }} next={{ href: "/docs/components/form/input", label: "Input" }} />
    </div>
  );
}
