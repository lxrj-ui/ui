"use client";

import { TopbarDemo } from "@/components/ui/topbar";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

function AnatomyChip({ n, className }: { n: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={
        "absolute z-10 grid size-5 place-items-center rounded-full text-[11px] font-semibold text-white " + (className ?? "")
      }
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {n}
    </span>
  );
}

export default function TopbarPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Navigation</Badge>
        <CopyPageButton text="Topbar — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Topbar</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>App top bar with links and a right-aligned account menu.</p>

      <h2 className="text-base font-semibold mb-3">Anatomy</h2>
      <div className="relative mb-6 px-4 pt-9 pb-9">
        <TopbarDemo />
        <AnatomyChip n={1} className="left-1/2 -translate-x-1/2 top-0" />
        <AnatomyChip n={2} className="left-7 bottom-0" />
        <AnatomyChip n={3} className="left-[132px] bottom-0" />
        <AnatomyChip n={4} className="right-20 bottom-0" />
      </div>
      <ol className="mb-10 space-y-1.5 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>1 — Topbar</span> · แถบคอนเทนเนอร์หลัก (sticky top-0, z-50 เหนือเนื้อหา)</li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>2 — TopbarBrand</span> · โลโก้ + ชื่อแบรนด์ มุมซ้าย</li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>3 — TopbarLink (active)</span> · ลิงก์นำทาง สถานะ active ผ่าน <code className="font-mono text-xs">data-active</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>4 — AccountMenu (trigger)</span> · เมนูบัญชีผู้ใช้ขวาบน — hover intent (<code className="font-mono text-xs">delay</code>/<code className="font-mono text-xs">closeDelay</code>) content ชิดขวาใต้ trigger สถานะเปิด <code className="font-mono text-xs">data-popup-open</code></li>
      </ol>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
        <TopbarDemo />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Topbar, TopbarSection, TopbarBrand, TopbarLink, AccountMenu } from "@/components/ui/topbar"

<Topbar>
  <TopbarSection>
    <TopbarBrand href="/">LXRJ</TopbarBrand>
    <TopbarLink href="/docs" active>Docs</TopbarLink>
  </TopbarSection>
  <TopbarSection>
    <AccountMenu user={{ name: "Somchai Jaidee", email: "somchai@bcc.glass" }} />
  </TopbarSection>
</Topbar>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/navigation/segmented-control", label: "Segmented Control" }} next={{ href: "/docs/components/navigation/tablist", label: "Tablist" }} />
    </div>
  );
}
