"use client";

import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Data</Badge>
        <CopyPageButton text="Calendar — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Calendar</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Month grid with navigation. Selected: accent bg, today: ring.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
        <Calendar selected={date} onSelect={setDate} />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Calendar } from "@/components/ui/calendar"

<Calendar selected={date} onSelect={setDate} />`}
      </pre>

      <Pagination prev={{ href: "/docs/components/data/skeleton", label: "Skeleton" }} next={{ href: "/docs/components/overlay/dialog", label: "Dialog" }} />
    </div>
  );
}
