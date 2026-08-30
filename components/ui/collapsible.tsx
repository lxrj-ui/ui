"use client";

import * as React from "react";
import { Collapsible } from "@base-ui/react/collapsible";

import { cn } from "../../lib/utils";

/**
 * Collapsible — DESIGN.md §Controls
 * Built on Base UI Collapsible (matches OpenRouter's stack).
 */

function CollapsibleRoot(props: React.ComponentProps<typeof Collapsible.Root>) {
  return <Collapsible.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(props: React.ComponentProps<typeof Collapsible.Trigger>) {
  return <Collapsible.Trigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({ className, ...props }: React.ComponentProps<typeof Collapsible.Panel>) {
  return (
    <Collapsible.Panel
      data-slot="collapsible-content"
      className={cn(
        "flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-[height] duration-150 ease-[ease-out] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-starting-style:h-0",
        className
      )}
      {...props}
    />
  );
}

export { CollapsibleRoot as Collapsible, CollapsibleTrigger, CollapsibleContent };
