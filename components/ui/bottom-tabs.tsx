"use client";

import * as React from "react";
import Link from "next/link";
import { Bot, Ellipsis, LayoutDashboard, Smartphone, type LucideIcon } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * BottomTabs — โครงนำทางของ "phone" (ต่ำกว่า lg) แทน sidebar
 *
 * โมเดลมาจาก t3code-docker setup console (ดู brain/patterns/responsive-mobile-ia.md):
 * - แสดงเฉพาะ < 1024px (`lg:hidden`) — desktop ใช้ Sidebar ตัวเดิม
 * - tab 4–5 ตัว + "More" ที่เหลือ อยู่ใน More sheet ไม่ยัดทุกหน้าใส่แถบล่าง
 * - hit area ≥ 44px (`min-h-11`) + `env(safe-area-inset-bottom)` กัน home indicator
 * - รับ active จาก caller (component ไม่เดา) — เมนูต้องมีแหล่งความจริงเดียว
 *
 * ใช้ `position="fixed"` (ค่าเริ่มต้น) เป็นแถบจริง / `position="inline"` สำหรับ
 * ตัวอย่างในหน้า docs หรือกรณีฝังใน container ที่ไม่ใช่ viewport
 */

export interface BottomTabItem {
  /** ใช้เป็น key ตอน render (ถ้าไม่มีจะใช้ href/label) */
  id?: string;
  label: string;
  /** ถ้าไม่ส่ง href จะ render เป็น <button> (เช่น "More" ที่เปิด sheet) */
  href?: string;
  icon?: LucideIcon;
  /** ตัวเลข/จุดแจ้งเตือนข้าง label */
  badge?: React.ReactNode;
  /** บังคับ active เอง — ถ้าไม่ส่งจะเทียบกับ activeHref แบบตรงตัว */
  active?: boolean;
  onSelect?: () => void;
}

export interface BottomTabsProps {
  items: BottomTabItem[];
  /** pathname ปัจจุบัน — ใช้เทียบแบบตรงตัวเท่านั้น (caller คุม active เองได้ผ่าน item.active) */
  activeHref?: string;
  ariaLabel?: string;
  position?: "fixed" | "inline";
  className?: string;
}

function BottomTabs({
  items,
  activeHref,
  ariaLabel = "Primary",
  position = "fixed",
  className,
}: BottomTabsProps) {
  return (
    <nav
      aria-label={ariaLabel}
      data-slot="bottom-tabs"
      className={cn(
        "border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md",
        position === "fixed"
          ? "fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
          : "relative w-full",
        className
      )}
    >
      <div className="flex items-stretch">
        {items.map((item, i) => {
          const active = item.active ?? (activeHref != null && item.href === activeHref);
          const Icon = item.icon;

          const cls = cn(
            "flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 px-1 py-1.5 no-underline transition-colors",
            "text-[11px] leading-none",
            // focus เป็นกลาง (ไม่ใช้ accent) ตาม DESIGN.md §Focus
            "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--color-foreground)]",
            active
              ? "font-medium text-[var(--color-foreground)]"
              : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          );

          const badge =
            item.badge != null ? (
              <span
                className={cn(
                  "min-w-4 rounded-full px-1 text-center text-[10px] font-medium tabular-nums",
                  // มีไอคอน → แปะมุมไอคอน / ไม่มีไอคอน → ต่อท้าย label ในบรรทัด
                  Icon ? "absolute -right-2 -top-1" : "shrink-0"
                )}
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-primary-foreground)",
                }}
              >
                {item.badge}
              </span>
            ) : null;

          const body = (
            <>
              {Icon ? (
                <span className="relative">
                  <Icon aria-hidden className="size-5" />
                  {badge}
                </span>
              ) : null}
              <span className="flex max-w-full items-center gap-1">
                <span className="truncate">{item.label}</span>
                {Icon ? null : badge}
              </span>
            </>
          );

          const key = item.id ?? item.href ?? item.label + i;

          return item.href ? (
            <Link key={key} href={item.href} aria-current={active ? "page" : undefined} className={cls}>
              {body}
            </Link>
          ) : (
            <button
              key={key}
              type="button"
              onClick={item.onSelect}
              aria-haspopup={item.onSelect ? "dialog" : undefined}
              className={cls}
            >
              {body}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * ตัวอย่างในหน้า docs — 4 tab + More แบบที่ setup console ใช้
 * (ไอคอนเป็น lucide ที่ผู้ใช้ส่งเข้ามา ไม่ผูกกับชุดไอคอนใดไอคอนหนึ่ง)
 */
function BottomTabsDemo() {
  const [active, setActive] = React.useState("overview");
  const items: BottomTabItem[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "access", label: "Access", icon: Smartphone },
    { id: "agents", label: "Agents", icon: Bot, badge: "2" },
    { id: "more", label: "More", icon: Ellipsis },
  ].map((t) => ({
    ...t,
    active: active === t.id,
    // inline demo ไม่มี router → ใช้ onSelect สลับ active
    onSelect: () => setActive(t.id),
  }));

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-lg border border-[var(--color-border)]">
      <BottomTabs items={items} position="inline" ariaLabel="Example phone navigation" />
    </div>
  );
}

export { BottomTabs, BottomTabsDemo };
