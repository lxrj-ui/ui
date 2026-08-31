import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * ButtonGroup — DESIGN.md §Button group
 * - Row of buttons fused into one control
 * - Shared variant (usually outline)
 * - Inner corners squared, inner borders collapsed
 * - Optional leading muted label cap
 */

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "default" | "ghost";
  hasLabel?: boolean;
}

function ButtonGroup({ variant = "outline", hasLabel = false, children, className, ...props }: ButtonGroupProps) {
  return (
    <div
      className={cn("inline-flex", hasLabel && "-ml-px", className)}
      role="group"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;
        return React.cloneElement(child as React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>, {
          className: cn(
            (child as React.ReactElement<{ className?: string }>).props.className,
            // Shared base — matches Select trigger pattern
            "relative inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors h-9 px-3 focus-visible:z-10 focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)]",
            // Variant styles
            variant === "outline" && "bg-[var(--color-input-bg)] text-[var(--color-muted-foreground)] border hover:bg-[var(--color-muted)] hover:text-[var(--color-accent-foreground)]",
            variant === "default" && "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border border-transparent hover:bg-[var(--color-accent-hover)]",
            variant === "ghost" && "bg-transparent text-[var(--color-muted-foreground)] border border-transparent hover:bg-[var(--color-accent-subtle)]",
            // Radius: only outer corners rounded (override base rounded-md)
            // When hasLabel, first button attaches to label so no left rounding
            hasLabel && isFirst && !isLast && "rounded-none",
            hasLabel && isFirst && isLast && "rounded-none rounded-r-md",
            hasLabel && !isFirst && isLast && "rounded-none rounded-r-md",
            !hasLabel && isFirst && !isLast && "rounded-none rounded-l-md",
            !hasLabel && isLast && !isFirst && "rounded-none rounded-r-md",
            !isFirst && !isLast && "rounded-none",
            !hasLabel && isFirst && isLast && "rounded-md",
            // Inner borders collapsed
            !isFirst && "-ml-px"
          ),
          style: {
            borderColor: variant === "outline" ? "var(--color-input)" : undefined,
          },
        });
      })}
    </div>
  );
}

function ButtonGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-l-md border bg-[var(--color-muted)] px-3 text-sm font-medium h-9",
        className
      )}
      style={{
        borderColor: "var(--color-input)",
        color: "var(--color-muted-foreground)",
      }}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupLabel };
