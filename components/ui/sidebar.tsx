"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Sidebar — docs navigation
 * - ใช้ next/link → client-side nav, state การย่อ + scroll position ไม่รีเซ็ตทุกคลิก
 * - active จาก usePathname() (หรือส่ง activeHref ทับ) + scroll ไปลิงก์ปัจจุบันอัตโนมัติ
 * - สถานะย่อ persist ใน localStorage — ไม่หายตอน refresh
 */

const EXPANDED_KEY = "lxrj-ui:sidebar-expanded";

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

interface SidebarItem {
  label: string;
  href: string;
  badge?: string;
  badgeVariant?: "default" | "outline";
}

interface SidebarProps {
  groups: SidebarGroup[];
  activeHref?: string;
  className?: string;
}

function Sidebar({ groups, activeHref, className }: SidebarProps) {
  const pathname = usePathname();
  const active = activeHref ?? pathname;

  const [expanded, setExpanded] = React.useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.map((g) => [g.label, true]))
  );
  const activeRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(EXPANDED_KEY);
      if (raw) setExpanded((prev) => ({ ...prev, ...JSON.parse(raw) }));
    } catch {}
  }, []);

  const toggle = (label: string) => {
    setExpanded((prev) => {
      const next = { ...prev, [label]: !prev[label] };
      try {
        localStorage.setItem(EXPANDED_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  React.useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <aside
      className={cn("sticky top-14 h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r p-3", className)}
      style={{ borderColor: "var(--color-border)" }}
    >
      <nav aria-label="Pages" className="space-y-1">
        {groups.map((group) => (
          <div key={group.label} className="mb-4">
            <button
              onClick={() => toggle(group.label)}
              className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md hover:opacity-80 transition-colors"
              style={{ color: "var(--color-text-faint)" }}
              aria-expanded={expanded[group.label]}
            >
              {group.label}
              <ChevronDown
                size={14}
                className={cn("transition-transform", expanded[group.label] && "rotate-180")}
                style={{ color: "var(--color-muted-foreground)" }}
              />
            </button>
            {expanded[group.label] && (
              <div className="space-y-0.5 pl-2">
                {group.items.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={isActive ? activeRef : undefined}
                      className={cn(
                        "block rounded-md px-3 py-1.5 text-sm transition-colors",
                        isActive ? "font-medium" : "hover:bg-[var(--color-card-hover)]"
                      )}
                      style={{
                        backgroundColor: isActive ? "var(--color-selected-bg)" : undefined,
                        color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span
                            className={cn(
                              "text-xs px-1.5 py-0.5 rounded-full border",
                              item.badgeVariant === "outline" ? "border-[var(--color-border)]" : "border-transparent"
                            )}
                            style={
                              item.badgeVariant === "outline"
                                ? { color: "var(--color-muted-foreground)", borderColor: "var(--color-border)" }
                                : { color: "var(--color-muted-foreground)", backgroundColor: "var(--color-muted)" }
                            }
                          >
                            {item.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export { Sidebar, type SidebarGroup, type SidebarItem };
