import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

/**
 * Badge — DESIGN.md §Badge variants
 * - overline 12px w500, rounded-full
 * - status variants use -text label + display at /12 bg + /14 border
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
        secondary: "border-transparent bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]",
        outline: "border-[var(--color-border)] bg-transparent text-[var(--color-foreground)]",
        destructive: "border-transparent bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)]",
        positive: "border-[color-mix(in_srgb,var(--color-positive)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-positive)_12%,transparent)] text-[var(--color-positive-text)]",
        negative: "border-[color-mix(in_srgb,var(--color-negative)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-negative)_12%,transparent)] text-[var(--color-negative-text)]",
        warning: "border-[color-mix(in_srgb,var(--color-warning)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-warning)_12%,transparent)] text-[var(--color-warning-text)]",
        info: "border-[color-mix(in_srgb,var(--color-info)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-info)_12%,transparent)] text-[var(--color-info-text)]",
        promo: "border-[color-mix(in_srgb,var(--color-promo)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-promo)_12%,transparent)] text-[var(--color-promo-text)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
