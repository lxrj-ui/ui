import { FullPageState, NotFoundPage, ErrorPage, EmptyPage } from "@/components/ui/full-page-states";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "FullPageState — LXRJ-UI" };

export default function FullPageStatePage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Layout</Badge>
        <CopyPageButton text="FullPageState — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>FullPageState</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>404 / error / empty states. Centered in min-h-dvh, max-w-md, medallion icon → title → description → action.</p>

      <h2 className="text-base font-semibold mb-3">404</h2>
      <div className="mb-10 rounded-lg border h-[400px] overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
        <NotFoundPage action={<Button>Go home</Button>} />
      </div>

      <h2 className="text-base font-semibold mb-3">Error</h2>
      <div className="mb-10 rounded-lg border h-[400px] overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
        <ErrorPage action={<Button>Try again</Button>} />
      </div>

      <h2 className="text-base font-semibold mb-3">Empty</h2>
      <div className="mb-10 rounded-lg border h-[400px] overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
        <EmptyPage action={<Button>Create first item</Button>} />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { NotFoundPage, ErrorPage, EmptyPage } from "@/components/ui/full-page-states"

<NotFoundPage action={<Button>Go home</Button>} />
<ErrorPage action={<Button>Try again</Button>} />
<EmptyPage action={<Button>Create</Button>} />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/layout/cta-card", label: "CTACard" }} next={{ href: "/docs/components/layout/callout", label: "Callout" }} />
    </div>
  );
}
