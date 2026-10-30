import { Sidebar } from "@/components/ui/sidebar";
import { MainTopbar } from "@/components/main-topbar";
import { DocsMobileNav } from "@/components/docs-mobile-nav";
import { docsNavGroups } from "@/components/docs-nav-data";

/**
 * Docs shell — โครงเดียวจอเดียว แต่ IA ต่างกันตาม breakpoint (lg = 1024px)
 *
 * ≥1024: topbar + sidebar ถาวร + เนื้อหา
 * <1024: topbar + เนื้อหา + **bottom tab bar** (4 tab + More sheet)
 *        → เนื้อหาเว้น padding ล่างเท่าความสูง tab bar + safe area ไม่งั้น
 *          บรรทัดสุดท้ายของหน้าจะถูกแถบทับ
 * รายการเมนูมาจาก docsNavGroups ที่เดียว (sidebar กับ More ใช้ร่วมกัน)
 */
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen transition-colors" style={{ background: "var(--color-background)" }}>
      <MainTopbar />

      <div className="flex max-w-[1280px] mx-auto">
        <div className="hidden lg:block">
          <Sidebar groups={docsNavGroups} />
        </div>
        {/* pb-24 บน phone = 96px: tab bar 56px + safe area + ระยะหายใจ */}
        <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-6 lg:py-10 pb-24 lg:pb-10">{children}</div>
      </div>

      <DocsMobileNav groups={docsNavGroups} />
    </div>
  );
}
