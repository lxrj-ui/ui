"use client";

import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * SegmentedControl — DESIGN.md §Segmented control
 * - Track: muted bg, border, rounded-md, p-0.5
 * - Inactive: muted-foreground, hover → accent-foreground
 * - Active: background bg, accent-foreground text, shadow-sm, rounded-sm
 * - Also works as SegmentedTabs (switches content panels)
 */

interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

function SegmentedControl({ value, onValueChange, children, className, ...props }: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border p-0.5",
        className
      )}
      style={{
        backgroundColor: "var(--color-muted)",
        borderColor: "var(--color-border)",
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && "props" in child) {
          return React.cloneElement(child as React.ReactElement<{ selected?: boolean; onClick?: () => void }>, {
            selected: (child as React.ReactElement<{ value?: string }>).props.value === value,
            onClick: () => onValueChange?.((child as React.ReactElement<{ value?: string }>).props.value || ""),
          });
        }
        return child;
      })}
    </div>
  );
}

interface SegmentedSegmentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  selected?: boolean;
}

function SegmentedSegment({ selected, children, className, ...props }: SegmentedSegmentProps) {
  return (
    <button
      role="tab"
      aria-selected={selected}
      data-state={selected ? "active" : "inactive"}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-3 py-1 text-sm font-medium transition-colors",
        selected
          ? "bg-[var(--color-background)] text-[var(--color-foreground)] shadow-sm"
          : "text-[var(--color-muted-foreground)] hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { SegmentedControl, SegmentedSegment };
