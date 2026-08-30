import { CTACard } from "@/components/ui/cta-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "CTACard — LXRJ-UI" };

export default function CTACardPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Layout</Badge>
        <CopyPageButton text="CTACard — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>CTACard</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Self-contained invitation card. card bg + border, rounded-xl, centered vertical stack.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
        <CTACard
          heading="Ready to get started?"
          description="Create an account and start building today."
          action={<Button>Get API Key</Button>}
          secondaryAction={<Button variant="outline">Learn more</Button>}
        />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { CTACard } from "@/components/ui/cta-card"

<CTACard
  heading="Ready to get started?"
  description="Create an account."
  action={<Button>Get API Key</Button>}
/>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/layout/chip", label: "Chip" }} next={{ href: "/docs/components/layout/full-page-state", label: "FullPageState" }} />
    </div>
  );
}
