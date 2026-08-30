import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Skeleton — LXRJ-UI" };

export default function SkeletonPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Data</Badge>
        <CopyPageButton text="Skeleton — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Skeleton</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Shape-preserving loading placeholders. Muted fill, animate-pulse, matches real layout shape.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="flex items-center gap-4 mb-10">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <h2 className="text-base font-semibold mb-3">Card skeleton</h2>
      <div className="max-w-sm mb-10 rounded-lg border p-4 space-y-3" style={{ borderColor: "var(--color-border)" }}>
        <Skeleton className="h-4 w-[140px]" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[80%]" />
        <Skeleton className="h-8 w-[120px] mt-4" />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-12 w-12 rounded-full" />
<Skeleton className="h-4 w-[250px]" />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/data/table", label: "Table" }} next={{ href: "/docs/components/data/calendar", label: "Calendar" }} />
    </div>
  );
}
