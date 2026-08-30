import { cn } from "../../lib/utils";

/**
 * Skeleton — DESIGN.md §Loading & skeleton
 * - Shape-preserving, not spinner-over-blank
 * - Fill = muted, animate-pulse, same radius as element
 * - For multi-row lists/tables, keep column layout, stagger row animation
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[var(--color-muted)]", className)}
      {...props}
    />
  );
}

export { Skeleton };
