import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Table — DESIGN.md §Tables & data display
 * - Row states: hover → card-hover, selected → selected-bg, disabled → opacity-50
 * - Header: muted-foreground, overline/body size
 * - Numbers: tabular-nums, right-aligned
 * - Truncation: truncate with tooltip, line-clamp-2 for multi-line
 * - Empty: text-faint, italic
 *
 * OR-style additions (OpenRouter pattern):
 * - sticky header, grid-based rows, sort buttons, settings button, density classes
 */

function Table({ className, density, ...props }: React.HTMLAttributes<HTMLTableElement> & { density?: "compact" | "regular" | "comfortable" }) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn(
          "w-full caption-bottom text-sm font-normal",
          density === "compact" && "or-table--density-compact",
          density === "comfortable" && "or-table--density-comfortable",
          className
        )}
        style={{ color: "var(--color-foreground)" }}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, sticky, top, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & { sticky?: boolean; top?: number }) {
  return (
    <thead
      className={cn(
        "[&_tr]:border-b",
        sticky && "sticky z-10 bg-background [&_th:first-child]:rounded-tl-lg [&_th:last-child]:rounded-tr-lg",
        className
      )}
      style={{ borderColor: "var(--color-border)", ...(top !== undefined ? { top } : {}) }}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  );
}

function TableFooter({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot
      className={cn("border-t bg-[var(--color-muted)] font-medium", className)}
      style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }}
      {...props}
    />
  );
}

function TableRow({ className, selected, grid, ...props }: React.HTMLAttributes<HTMLTableRowElement> & { selected?: boolean; grid?: boolean }) {
  return (
    <tr
      className={cn(
        "border-b transition-colors",
        grid && "or-table__row--grid",
        selected && "bg-[var(--color-selected-bg)]",
        !selected && "hover:bg-[var(--color-card-hover)]",
        className
      )}
      style={{ borderColor: "var(--color-border)" }}
      data-state={selected ? "selected" : undefined}
      {...props}
    />
  );
}

function TableHead({ className, numeric, grid, sortable, sortDirection, onSort, ...props }: React.ThHTMLAttributes<HTMLTableCellElement> & { numeric?: boolean; grid?: boolean; sortable?: boolean; sortDirection?: "asc" | "desc" | null; onSort?: () => void }) {
  return (
    <th
      className={cn(
        "h-10 px-4 text-left font-medium align-middle",
        numeric && "text-right tabular-nums",
        grid && "or-table__cell--grid",
        sortable && "cursor-pointer select-none hover:text-foreground transition-colors",
        className
      )}
      style={{ color: "var(--color-muted-foreground)" }}
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      {sortable ? (
        <span className="inline-flex items-center gap-1.5">
          {props.children}
          <svg className="size-3.5 opacity-50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            {sortDirection === "asc" ? (
              <path d="M4.5 6L7.5 3L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : sortDirection === "desc" ? (
              <path d="M4.5 9L7.5 12L10.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d="M4.5 6L7.5 3L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 9L7.5 12L10.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </>
            )}
          </svg>
        </span>
      ) : (
        props.children
      )}
    </th>
  );
}

function TableCell({ className, numeric, truncate, grid, ...props }: React.TdHTMLAttributes<HTMLTableCellElement> & { numeric?: boolean; truncate?: boolean; grid?: boolean }) {
  return (
    <td
      className={cn(
        "px-4 py-3 align-middle",
        numeric && "text-right tabular-nums",
        truncate && "truncate max-w-[200px]",
        grid && "or-table__cell--grid",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      className={cn("mt-4 text-xs", className)}
      style={{ color: "var(--color-text-faint)" }}
      {...props}
    />
  );
}

function TableEmpty({ className, colSpan, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={cn("px-4 py-8 text-center italic", className)}
        style={{ color: "var(--color-text-faint)" }}
        {...props}
      />
    </tr>
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption, TableEmpty };
