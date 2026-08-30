"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Chip — DESIGN.md §Badge variants (removable/interactive cousin)
 * - Neutral muted fill, rounded-md, body text in muted-foreground
 * - card-hover on hover
 * - Optional trailing × (ghost, size-5, fades in on hover)
 * - Use for active filters, multi-select tokens, dismissible tags
 */

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  removable?: boolean;
  onRemove?: () => void;
  selected?: boolean;
}

function Chip({ removable, onRemove, selected, children, className, ...props }: ChipProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm transition-colors",
        selected
          ? "bg-[var(--color-selected-bg)] text-[var(--color-foreground)] border border-[var(--color-border)]"
          : "bg-[var(--color-muted)] text-[var(--color-muted-foreground)] border border-transparent hover:bg-[var(--color-card-hover)]",
        className
      )}
      {...props}
    >
      {children}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="inline-flex items-center justify-center h-5 w-5 rounded opacity-0 transition-opacity hover:bg-[var(--color-card-hover)] group-hover:opacity-100 focus:opacity-100"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}

export { Chip, type ChipProps };
