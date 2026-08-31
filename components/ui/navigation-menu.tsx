"use client";

import * as React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";

import { cn } from "../../lib/utils";

/**
 * NavigationMenu — hover-open account/menu pill (DESIGN.md §Navigation)
 * Built on Base UI NavigationMenu (matches OpenRouter's stack).
 *
 * ⚠️ Base UI attr mapping (ตรวจสอบจาก @base-ui/react source):
 * - Trigger/Icon: `data-popup-open` (เมื่อเมนูเปิด), `data-pressed` — **ไม่ใช่** `data-open`
 * - Content: `data-open` / `data-closed` / `data-starting-style` / `data-ending-style`
 * - Hover intent: Root รับ `delay` / `closeDelay` (ms, default 50/50)
 */

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Root>) {
  return (
    <BaseNavigationMenu.Root
      data-slot="navigation-menu"
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Root>
  );
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof BaseNavigationMenu.List>) {
  return (
    <BaseNavigationMenu.List
      data-slot="navigation-menu-list"
      className={cn("flex flex-1 list-none items-center justify-center gap-x-1", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Item>) {
  return <BaseNavigationMenu.Item data-slot="navigation-menu-item" className={cn("relative", className)} {...props} />;
}

function NavigationMenuTrigger({ className, children, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Trigger>) {
  return (
    <BaseNavigationMenu.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-2 py-1.5 text-sm font-medium transition-colors",
        "hover:bg-[var(--color-card-hover)] hover:text-[var(--color-accent-foreground)]",
        "focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)]",
        "data-popup-open:bg-[var(--color-accent)] data-popup-open:text-[var(--color-accent-foreground)]",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Trigger>
  );
}

/**
 * Content เคลื่อนเข้าไป render ใน Viewport เมื่อ item นั้น active
 * — ต้องมีโครง Portal > Positioner > Popup > Viewport ครบใน tree ไม่งั้น Content จะไม่ mount
 * (Base UI: `portalContainer = viewportTargetElement || viewportElement` → null ถ้าไม่มี Viewport)
 */

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Content>) {
  return (
    <BaseNavigationMenu.Content
      data-slot="navigation-menu-content"
      className={cn("h-full w-max p-1", className)}
      {...props}
    />
  );
}

function NavigationMenuPortal(props: React.ComponentProps<typeof BaseNavigationMenu.Portal>) {
  return <BaseNavigationMenu.Portal data-slot="navigation-menu-portal" {...props} />;
}

function NavigationMenuPositioner({
  className,
  sideOffset = 6,
  align = "end",
  collisionPadding = 8,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Positioner>) {
  return (
    <BaseNavigationMenu.Positioner
      data-slot="navigation-menu-positioner"
      sideOffset={sideOffset}
      align={align}
      collisionPadding={collisionPadding}
      className={cn("z-[80] outline-hidden", className)}
      {...props}
    />
  );
}

function NavigationMenuPopup({ className, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Popup>) {
  return (
    <BaseNavigationMenu.Popup
      data-slot="navigation-menu-popup"
      className={cn(
        "relative h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] rounded-md border bg-[var(--color-popover)] text-[var(--color-popover-foreground)] shadow-md outline-hidden transition-[scale,opacity,width,height] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({ className, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Viewport>) {
  return (
    <BaseNavigationMenu.Viewport
      data-slot="navigation-menu-viewport"
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    />
  );
}

const NavigationMenuLink = BaseNavigationMenu.Link;
const NavigationMenuIndicator = BaseNavigationMenu.Icon;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuPopup,
  NavigationMenuViewport,
  NavigationMenuLink,
  NavigationMenuIndicator,
};
