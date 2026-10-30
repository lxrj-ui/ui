"use client";

import { BottomTabsDemo } from "@/components/ui/bottom-tabs";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

const mono = "font-mono text-xs";

export default function BottomTabsPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Navigation</Badge>
        <CopyPageButton text="Bottom Tabs — LXRJ-UI" />
      </div>
      <h1
        className="text-4xl font-bold tracking-tight mb-2"
        style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
      >
        Bottom Tabs
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>
        แถบนำทางล่างจอสำหรับ phone (&lt; 1024px) — แทน sidebar แล้วพาเข้าหน้าที่เหลือผ่าน More sheet.
      </p>

      <h2 className="text-base font-semibold mb-3">ทำไมต้องมี</h2>
      <p className="text-sm mb-4" style={{ color: "var(--color-muted-foreground)" }}>
        ระบบนี้ไม่ได้ทำ UI มือถือแยกชุด แต่เปลี่ยน <strong>โครงนำทาง</strong> ที่ breakpoint เดียว
        (<code className={mono}>lg</code> = 1024px): desktop ใช้ <code className={mono}>Sidebar</code> เห็นทุกหน้า,
        phone ใช้ 3–4 tab + More. หน้าที่ข้อมูลหนัก (table) จึงไม่ถูกบีบลงจอแคบ.
      </p>
      <ul className="mb-8 space-y-1.5 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
        <li>· แสดงเฉพาะ &lt;1024px (<code className={mono}>lg:hidden</code>) — ไม่ต้องสั่งซ่อนเองที่ call site</li>
        <li>· hit area ทุกช่อง ≥ 44px (<code className={mono}>min-h-11</code>)</li>
        <li>· เว้น <code className={mono}>env(safe-area-inset-bottom)</code> กัน home indicator ทับ</li>
        <li>· active ส่งเข้ามาจาก caller ผ่าน <code className={mono}>item.active</code> — เมนูมีแหล่งความจริงเดียว ไม่เดาจาก path เอง</li>
      </ul>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-2">
        <BottomTabsDemo />
      </div>
      <p className="text-xs mb-10" style={{ color: "var(--color-text-faint)" }}>
        ตัวอย่างโหมด <code className={mono}>position=&quot;inline&quot;</code> — กดสลับ tab ได้
        (ของจริงใช้ <code className={mono}>position=&quot;fixed&quot;</code> ติดขอบล่าง viewport)
      </p>

      <h2 className="text-base font-semibold mb-3">คู่กับ More sheet</h2>
      <p className="text-sm mb-4" style={{ color: "var(--color-muted-foreground)" }}>
        ช่องที่ไม่มี <code className={mono}>href</code> จะ render เป็นปุ่ม — ใช้เปิด{" "}
        <code className={mono}>Sheet side=&quot;bottom&quot;</code> ที่รวมเมนูที่แถบล่างใส่ไม่หมด
      </p>
      <pre
        className="mb-10 rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6"
        style={{
          backgroundColor: "var(--color-card)",
          borderColor: "var(--color-border)",
          fontFamily: "var(--font-mono)",
        }}
      >
{`import { BottomTabs } from "@/components/ui/bottom-tabs"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"

const [moreOpen, setMoreOpen] = useState(false)

<BottomTabs
  ariaLabel="Primary"
  items={[
    { label: "Docs", href: "/docs", icon: BookOpen, active: inDocs },
    { label: "Components", href: "/docs/components", icon: Puzzle, active: inComponents },
    { label: "More", icon: Ellipsis, onSelect: () => setMoreOpen(true) },
  ]}
/>

<Sheet open={moreOpen} onOpenChange={setMoreOpen}>
  <SheetContent side="bottom">
    <SheetTitle>All pages</SheetTitle>
    {/* รายการเมนูชุดเดียวกับ sidebar */}
  </SheetContent>
</Sheet>`}
      </pre>

      <h2 className="text-base font-semibold mb-3">ตรวจว่าเป็น phone ไหม (ใน JS)</h2>
      <p className="text-sm mb-4" style={{ color: "var(--color-muted-foreground)" }}>
        ใช้เมื่อต้องเลือก <strong>โครง</strong> ไม่ใช่แค่ style — hook ใช้ breakpoint เดียวกับ CSS
        และ SSR-safe (server คืน <code className={mono}>false</code>)
      </p>
      <pre
        className="mb-10 rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6"
        style={{
          backgroundColor: "var(--color-card)",
          borderColor: "var(--color-border)",
          fontFamily: "var(--font-mono)",
        }}
      >
{`import { useIsPhone, PHONE_QUERY } from "@/lib/use-is-phone"

const isPhone = useIsPhone()   // true เมื่อ < 1024px
// PHONE_QUERY = "(max-width: 1023.98px)"`}
      </pre>

      <Pagination
        prev={{ href: "/docs/components/base/badge", label: "Badge" }}
        next={{ href: "/docs/components/base/button", label: "Button" }}
      />
    </div>
  );
}
