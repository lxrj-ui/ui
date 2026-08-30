import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * CTACard — DESIGN.md §CTA card
 * - Self-contained card inviting one action
 * - card bg + standard border, rounded-xl
 * - px-6 py-8 (md:py-10) — roomier than content card
 * - Heading → body line → action row
 * - Accent button is the card's only color — never tint the card surface
 */

interface CTACardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  description?: string;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

function CTACard({ heading, description, action, secondaryAction, children, className, ...props }: CTACardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border px-6 py-8 md:py-10 text-center",
        className
      )}
      style={{
        backgroundColor: "var(--color-card)",
        borderColor: "var(--color-border)",
      }}
      {...props}
    >
      <div className="mx-auto max-w-sm space-y-3">
        {heading && (
          <h3 className="text-base font-semibold" style={{ color: "var(--color-foreground)", fontFamily: "var(--font-brand)" }}>
            {heading}
          </h3>
        )}
        {description && (
          <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
            {description}
          </p>
        )}
        {children}
        {(action || secondaryAction) && (
          <div className="flex items-center justify-center gap-3 pt-2">
            {action}
            {secondaryAction}
          </div>
        )}
      </div>
    </div>
  );
}

export { CTACard };
