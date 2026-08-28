import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Button — DESIGN.md §Buttons
 * - radius-md (6px), text-button (14px w500)
 * - h-10 default · h-8 sm · h-11 lg · h-10 w-10 icon
 * - focus: NEUTRAL (border foreground/30 + 3px glow), NOT accent
 * - hovers: primary → accent-hover e0 · outline → muted bg + accent-foreground · ghost → accent-subtle 08
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border border-transparent hover:bg-[var(--color-accent-hover)]",
        outline: "bg-[var(--color-background)] text-[var(--color-muted-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-muted)] hover:text-[var(--color-accent-foreground)]",
        ghost: "bg-transparent text-[var(--color-muted-foreground)] border border-transparent hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-foreground)]",
        destructive: "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] border border-transparent hover:opacity-90",
        link: "bg-transparent text-[var(--color-foreground)] border border-transparent underline underline-offset-2 decoration-foreground/40 hover:decoration-foreground",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
