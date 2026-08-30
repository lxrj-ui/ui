import { Pagination } from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";

export const metadata = { title: "Pagination — LXRJ-UI" };

export default function PaginationPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Navigation</Badge>
        <CopyPageButton text="Pagination — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Pagination</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Prev/next page navigation. Arrow icons with labels.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
        <Pagination prev={{ href: "#", label: "Getting Started" }} next={{ href: "#", label: "Components" }} />
      </div>

      <h2 className="text-base font-semibold mb-3">One side only</h2>
      <div className="mb-10">
        <Pagination next={{ href: "#", label: "Next page" }} />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Pagination } from "@/components/pagination"

<Pagination
  prev={{ href: "/prev", label: "Previous" }}
  next={{ href: "/next", label: "Next" }}
/>`}
      </pre>
    </div>
  );
}
