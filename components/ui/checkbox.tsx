"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Checkbox — DESIGN.md §Controls
 * - Unchecked: muted fill + input stroke
 * - Checked: accent fill + check
 * - Focus: same neutral ring as everything
 */
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "checked"> {
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const isChecked = checked === true || checked === "indeterminate";
    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked === "indeterminate" ? "mixed" : checked}
        data-state={checked === "indeterminate" ? "indeterminate" : checked ? "checked" : "unchecked"}
        className={cn(
          "peer shrink-0 h-4 w-4 rounded-sm border transition-colors focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)] disabled:cursor-not-allowed disabled:opacity-50",
          isChecked
            ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-primary-foreground)]"
            : "bg-[var(--color-muted)] border-[var(--color-input)]"
        )}
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={() => onCheckedChange?.(!isChecked)}
      >
        {checked === "indeterminate" && (
          <span className="flex items-center justify-center">
            <span className="h-0.5 w-2 rounded-full bg-current" />
          </span>
        )}
        {checked === true && (
          <span className="flex items-center justify-center">
            <Check size={12} strokeWidth={3} />
          </span>
        )}
      </button>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
