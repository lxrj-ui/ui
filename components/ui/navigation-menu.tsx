"use client";

import * as React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";

import { cn } from "../../lib/utils";

/**
 * NavigationMenu — hover-open account/menu pill (DESIGN.md §Navigation)
 * Built on Base UI NavigationMenu (matches OpenRouter's stack).
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
        "data-[open]:bg-[var(--color-accent-subtle)]",
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

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Content>) {
  return (
    <BaseNavigationMenu.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute right-0 top-full mt-1 z-[100] origin-[var(--transform-origin)] rounded-md border bg-[var(--color-popover)] text-[var(--color-popover-foreground)] p-2 shadow-md outline-hidden transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0",
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
      className={cn(
        "relative mt-1.5 h-[var(--nav-menu-viewport-height)] w-full origin-top overflow-hidden rounded-md border bg-[var(--color-popover)] text-[var(--color-popover-foreground)] shadow-md",
        className
      )}
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
  NavigationMenuViewport,
  NavigationMenuLink,
  NavigationMenuIndicator,
};
