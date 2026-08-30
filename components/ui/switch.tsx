"use client";

import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * Switch — DESIGN.md §Controls
 * - Unchecked: foreground/30 track, hover foreground/40
 * - Checked: brand primary track
 * - Thumb: background color (white on light, ink on dark), slides on toggle
 * - Focus: subtle border + glow (OpenRouter style)
 */
interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "checked"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)] disabled:cursor-not-allowed disabled:opacity-50",
          checked
            ? "bg-[var(--color-primary)]"
            : "bg-foreground/30 hover:bg-foreground/40",
          className
        )}
        ref={ref}
        onClick={() => onCheckedChange?.(!checked)}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onCheckedChange?.(!checked);
          }
          (props as React.KeyboardEventHandler<HTMLButtonElement>)?.onKeyDown?.(e as React.KeyboardEvent<HTMLButtonElement>);
        }}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-[translate,width] duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
