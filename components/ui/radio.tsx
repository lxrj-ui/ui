"use client";

import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * Radio — DESIGN.md §Controls
 * - Unchecked: muted fill + input stroke
 * - Checked: border-primary (dot)
 * - Focus: same neutral ring as everything
 */
const Radio = React.forwardRef<HTMLInputElement, Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">>(
  ({ className, checked, ...props }, ref) => {
    return (
      <button
        role="radio"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className={cn(
          "peer shrink-0 h-4 w-4 rounded-full border transition-colors focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)] disabled:cursor-not-allowed disabled:opacity-50",
          checked
            ? "bg-[var(--color-background)] border-[var(--color-primary)]"
            : "bg-[var(--color-muted)] border-[var(--color-input)]"
        )}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {checked && (
          <span className="flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
          </span>
        )}
      </button>
    );
  }
);
Radio.displayName = "Radio";

export { Radio };
