"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { DisplaySettings } from "./display-settings";

export type MainTopbarLink = {
  label: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function MainTopbar({
  logoHref = "/",
  navLinks = [],
  rightExtra,
  showSearch = true,
  className,
}: {
  logoHref?: string;
  navLinks?: MainTopbarLink[];
  rightExtra?: React.ReactNode;
  showSearch?: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <header className={"sticky top-0 z-30 h-14 bg-background border-b border-border " + (className ?? "")}>
      <div className="flex h-full items-center gap-3 px-6 max-w-[1600px] mx-auto">
        <Link href={logoHref} className="flex items-center gap-2 shrink-0 hover:opacity-80">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="var(--color-primary)" />
            <path d="M12 7L17 10V14L12 17L7 14V10L12 7Z" fill="var(--color-background)" />
          </svg>
          <span className="font-semibold text-sm">LXRJ-UI</span>
        </Link>
        {showSearch && (
          <button
            type="button"
            className="hidden sm:flex h-8 w-60 items-center gap-2 rounded-md border border-input bg-input-bg px-3 text-sm text-muted-foreground hover:bg-muted/30 transition-colors"
          >
            <Search className="size-4" />
            Search
            <span className="ml-auto rounded border border-border px-1 py-0.5 text-xs font-mono">⌘K</span>
          </button>
        )}
        <nav className="ml-auto hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((l, i) => {
            const active = l.active ?? (l.href ? isActive(pathname, l.href) : false);
            const cls =
              "transition-colors " +
              (active ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground");
            if (l.href) {
              return (
                <Link key={i} href={l.href} className={cls}>
                  {l.label}
                </Link>
              );
            }
            return (
              <span key={i} onClick={l.onClick} className={"cursor-pointer " + cls}>
                {l.label}
              </span>
            );
          })}
        </nav>
        <div className="hidden sm:block h-5 w-px mx-1" style={{ backgroundColor: "var(--color-border)" }} />
        <DisplaySettings />
        {rightExtra}
      </div>
    </header>
  );
}
