"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Calendar / DatePicker — DESIGN.md §Calendar / date picker
 * - Grid-based calendar with month navigation
 * - Selected: accent bg, today: ring
 */

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  className?: string;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Calendar({ selected, onSelect, className }: CalendarProps) {
  const [viewDate, setViewDate] = React.useState(selected || new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const today = new Date();

  return (
    <div className={cn("p-3 w-fit", className)}>
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setViewDate(new Date(year, month - 1))}
          className="inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-[var(--color-card-hover)] transition-colors"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <ChevronLeft size={14} />
        </button>
        <div className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
          {MONTHS[month]} {year}
        </div>
        <button
          onClick={() => setViewDate(new Date(year, month + 1))}
          className="inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-[var(--color-card-hover)] transition-colors"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0">
        {WEEKDAYS.map((day) => (
          <div key={day} className="h-8 flex items-center justify-center text-xs font-medium" style={{ color: "var(--color-text-faint)" }}>
            {day}
          </div>
        ))}
        {days.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const date = new Date(year, month, day);
          const isSelected = selected && date.toDateString() === selected.toDateString();
          const isToday = date.toDateString() === today.toDateString();

          return (
            <button
              key={day}
              onClick={() => onSelect?.(date)}
              className={cn(
                "h-8 w-8 flex items-center justify-center rounded-md text-sm transition-colors",
                isSelected && "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]",
                !isSelected && isToday && "ring-1 ring-[color-mix(in_srgb,var(--color-foreground)_30%,transparent)]",
                !isSelected && "hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent-foreground)]"
              )}
              style={{ color: isSelected ? undefined : "var(--color-foreground)" }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };
