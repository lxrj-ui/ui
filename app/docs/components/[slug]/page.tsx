import { notFound } from "next/navigation";
import { Tooltip, Toast } from "@base-ui/react";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { demoRegistry } from "@/components/demo-registry";

const slugs = Object.keys(demoRegistry);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = demoRegistry[slug];
  if (!entry) return { title: "Component — LXRJ-UI" };
  return {
    title: `${entry.title} — LXRJ-UI`,
    description: entry.description,
  };
}

export default async function ComponentDemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = demoRegistry[slug];
  if (!entry) notFound();

  const Demo = entry.Demo;

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">{entry.category}</Badge>
        <CopyPageButton text={`${entry.title} — LXRJ-UI`} />
      </div>

      <h1
        className="text-4xl font-bold tracking-tight mb-2"
        style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
      >
        {entry.title}
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>
        {entry.description}
      </p>

      <div
        className="rounded-lg border p-6 mb-8"
        style={{ borderColor: "var(--color-border)", background: "var(--color-card)", borderRadius: "8px" }}
      >
        <Tooltip.Provider>
          <Toast.Provider>
            <Demo />
          </Toast.Provider>
        </Tooltip.Provider>
      </div>

      <Pagination next={{ href: "/docs/components", label: "All components" }} />
    </div>
  );
}
