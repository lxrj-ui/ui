"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Boxes, Ellipsis, Puzzle } from "lucide-react";

import { BottomTabs, type BottomTabItem } from "./ui/bottom-tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import type { DocsNavGroup } from "./docs-nav-data";

/**
 * DocsMobileNav — โครงนำทางของ docs site บนมือถือ (< 1024px)
 *
 * Desktop: sidebar เต็ม (15rem) เห็นทุกหน้า
 * Phone:   4 tab ล่าง (Docs / Components / Models / More) + More = bottom sheet
 *          ที่ยกเมนูทั้งหมดขึ้นมา — "เมนูครบ" ไม่ได้หายไปไหน แค่เปลี่ยนที่อยู่
 *
 * เหตุผลที่เลือก 3 tab + More แทนการย่อ sidebar ทั้ง 55 รายการลงแถบล่าง:
 * แถบล่างมีที่จริง ~5 ช่อง, ตัวอักษร 11px อ่านยากถ้ายัดมากกว่านั้น
 * และหน้าที่ข้อมูลหนัก (table) ต้องได้พื้นที่อ่าน (brain/patterns/responsive-mobile-ia.md §3)
 */
export function DocsMobileNav({ groups }: { groups: DocsNavGroup[] }) {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = React.useState(false);

  // หน้าที่ไม่ใช่ tab ใด ๆ → ไฮไลต์ More เพื่อให้รู้ว่าตัวเอง "อยู่ตรงไหน"
  const inDocs = pathname === "/docs";
  const inSubPage = pathname.startsWith("/docs") && !pathname.startsWith("/docs/components");
  const inComponents = pathname.startsWith("/docs/components");
  const inModels = pathname.startsWith("/models");
  const elsewhere = !inDocs && !inSubPage && !inComponents && !inModels;

  const items: BottomTabItem[] = [
    { id: "docs", label: "Docs", href: "/docs", icon: BookOpen, active: inDocs || inSubPage },
    { id: "components", label: "Components", href: "/docs/components", icon: Puzzle, active: inComponents },
    { id: "models", label: "Models", href: "/models", icon: Boxes, active: inModels },
    {
      id: "more",
      label: "More",
      icon: Ellipsis,
      active: moreOpen || elsewhere,
      onSelect: () => setMoreOpen(true),
    },
  ];

  return (
    <>
      <BottomTabs items={items} ariaLabel="Docs navigation" />

      <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
        <SheetContent side="bottom" showCloseButton className="gap-0">
          <SheetHeader className="pb-1">
            <SheetTitle>All pages</SheetTitle>
            <SheetDescription>ทุกหน้าใน sidebar — จัดกลุ่มเหมือนกันทุกจุด</SheetDescription>
          </SheetHeader>

          {/* overscroll-contain: เลื่อนใน sheet แล้วไม่ลากหน้าเว็บข้างหลังตาม */}
          <div className="min-h-0 overflow-y-auto overscroll-contain px-2 pb-3">
            {groups.map((group) => (
              <div key={group.label}>
                <p
                  className="px-3 pb-1 pt-3 text-2xs font-medium uppercase tracking-wider"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {group.label}
                </p>
                <ul>
                  {group.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className="flex min-h-11 items-center justify-between gap-2 rounded-md px-3 text-sm no-underline transition-colors hover:bg-[var(--color-card-hover)]"
                          style={{
                            color: active ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                            backgroundColor: active ? "var(--color-selected-bg)" : undefined,
                            fontWeight: active ? 500 : undefined,
                          }}
                        >
                          <span className="truncate">{item.label}</span>
                          {item.badge ? (
                            <span
                              className="shrink-0 rounded-full border px-1.5 text-2xs"
                              style={{
                                color: "var(--color-muted-foreground)",
                                borderColor: "var(--color-border)",
                                backgroundColor:
                                  item.badgeVariant === "outline" ? "transparent" : "var(--color-muted)",
                              }}
                            >
                              {item.badge}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
