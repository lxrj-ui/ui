"use client";

import * as React from "react";
import { ChevronDown, KeyRound, LogOut, Search, Settings, User } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPortal,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./navigation-menu";

/**
 * Topbar — แถบหัวแอป (DESIGN.md §Navigation)
 * - ตัว Topbar เองต้องมี z-50 เหนือเนื้อหา ไม่งั้น popup โดนทับ (bug-ui.md)
 * - AccountMenu ขวาบนสุด: NavigationMenu hover intent (delay/closeDelay)
 *   + content ชิดขวาใต้ trigger (`absolute right-0 top-full`)
 * - สถานะเปิดของ trigger = `data-popup-open` (Base UI attr — ไม่ใช่ data-[open])
 */

function Topbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="topbar"
      className={cn(
        "sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-between gap-4 border-b bg-[var(--color-background)] px-4 sm:px-6",
        className
      )}
      {...props}
    />
  );
}

function TopbarSection({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="topbar-section" className={cn("flex items-center gap-1", className)} {...props} />;
}

function TopbarBrand({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="topbar-brand"
      className={cn(
        "mr-2 flex items-center gap-2 rounded-md px-1.5 py-1 text-sm font-semibold text-[var(--color-foreground)] no-underline",
        className
      )}
      {...props}
    />
  );
}

function TopbarLink({
  active,
  className,
  ...props
}: React.ComponentProps<"a"> & { active?: boolean }) {
  return (
    <a
      data-slot="topbar-link"
      data-active={active ? "" : undefined}
      className={cn(
        "flex h-9 items-center rounded-md px-2.5 text-sm font-medium text-[var(--color-muted-foreground)] no-underline transition-colors",
        "hover:bg-[var(--color-card-hover)] hover:text-primary",
        "data-active:bg-[var(--color-card-hover)] data-active:text-[var(--color-accent-foreground)]",
        "focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-[var(--color-foreground)]",
        className
      )}
      {...props}
    />
  );
}

const topbarIconButtonClass =
  "grid size-9 place-items-center rounded-md bg-transparent text-[var(--color-muted-foreground)] transition-colors " +
  "hover:bg-[var(--color-card-hover)] hover:text-primary " +
  "focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)]";

interface AccountMenuUser {
  name: string;
  email: string;
}

function AccountMenu({
  user = { name: "Somchai Jaidee", email: "somchai@bcc.glass" },
  delay = 50,
  closeDelay = 150,
  className,
}: {
  user?: AccountMenuUser;
  /** ms รอก่อนเปิดเมนูเมื่อ hover (Base UI Root delay) */
  delay?: number;
  /** ms รอก่อนปิดเมนูเมื่อเลื่อนออก (hover intent — ยิ่งมากยิ่งหน่วง) */
  closeDelay?: number;
  className?: string;
}) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <NavigationMenu delay={delay} closeDelay={closeDelay} className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2 px-1.5">
            <span
              aria-hidden
              className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[11px] font-bold text-[var(--color-primary-foreground)]"
            >
              {initials}
            </span>
            <span className="hidden text-sm font-medium sm:block">{user.name}</span>
            <NavigationMenuIndicator className="transition-transform duration-150 data-popup-open:rotate-180">
              <ChevronDown className="size-3.5" />
            </NavigationMenuIndicator>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[13rem]">
            <div className="px-2 py-1.5">
              <div className="text-sm font-medium text-[var(--color-foreground)]">{user.name}</div>
              <div className="text-xs text-[var(--color-muted-foreground)]">{user.email}</div>
            </div>
            <div className="-mx-1 my-1 h-px bg-[var(--color-border)]" />
            <AccountMenuItem>
              <User />
              Profile
            </AccountMenuItem>
            <AccountMenuItem>
              <Settings />
              Settings
            </AccountMenuItem>
            <AccountMenuItem>
              <KeyRound />
              API Keys
            </AccountMenuItem>
            <div className="-mx-1 my-1 h-px bg-[var(--color-border)]" />
            <AccountMenuItem variant="destructive">
              <LogOut />
              Sign out
            </AccountMenuItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPortal>
        <NavigationMenuPositioner align="end" sideOffset={6} collisionPadding={8}>
          <NavigationMenuPopup>
            <NavigationMenuViewport />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenu>
  );
}

function AccountMenuItem({
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  variant?: "default" | "destructive";
}) {
  return (
    <NavigationMenuLink
      data-slot="account-menu-item"
      data-variant={variant}
      render={<button type="button" />}
      className={cn(
        "flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none transition-colors",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        "hover:bg-[var(--color-card-hover)] hover:text-primary",
        "focus-visible:bg-[var(--color-card-hover)] focus-visible:text-[var(--color-accent-foreground)]",
        "data-[variant=destructive]:text-[var(--color-negative-text)] data-[variant=destructive]:hover:bg-[var(--color-negative-bg)]",
        className
      )}
      {...props}
    >
      {children}
    </NavigationMenuLink>
  );
}

/** ตัวอย่างครบชุด — ใช้เป็น template ในหน้า doc/demo */
export function TopbarDemo() {
  return (
    <Topbar className="rounded-lg border">
      <TopbarSection>
        <TopbarBrand href="#">
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-md bg-[var(--color-primary)] text-[11px] font-bold text-[var(--color-primary-foreground)]"
          >
            L
          </span>
          LXRJ
        </TopbarBrand>
        <TopbarLink href="#" active>
          Docs
        </TopbarLink>
        <TopbarLink href="#">Components</TopbarLink>
        <TopbarLink href="#">Models</TopbarLink>
      </TopbarSection>
      <TopbarSection>
        <button type="button" aria-label="Search" className={topbarIconButtonClass}>
          <Search className="size-4" />
        </button>
        <AccountMenu />
      </TopbarSection>
    </Topbar>
  );
}

export { Topbar, TopbarSection, TopbarBrand, TopbarLink, AccountMenu, AccountMenuItem };
