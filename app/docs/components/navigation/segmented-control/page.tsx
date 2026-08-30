"use client";

import { SegmentedControl, SegmentedSegment } from "@/components/ui/segmented-control";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export default function SegmentedControlPage() {
  const [view, setView] = useState("grid");
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Navigation</Badge>
        <CopyPageButton text="SegmentedControl — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>SegmentedControl</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Value picker with track + active segment. Muted bg track, background bg active segment with shadow-sm.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
        <SegmentedControl value={view} onValueChange={setView}>
          <SegmentedSegment value="grid">Grid</SegmentedSegment>
          <SegmentedSegment value="list">List</SegmentedSegment>
          <SegmentedSegment value="board">Board</SegmentedSegment>
        </SegmentedControl>
        <p className="mt-3 text-sm" style={{ color: "var(--color-muted-foreground)" }}>Selected: {view}</p>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { SegmentedControl, SegmentedSegment } from "@/components/ui/segmented-control"

<SegmentedControl value={view} onValueChange={setView}>
  <SegmentedSegment value="grid">Grid</SegmentedSegment>
  <SegmentedSegment value="list">List</SegmentedSegment>
</SegmentedControl>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/accordion", label: "Accordion" }} next={{ href: "/docs/components/layout/button-group", label: "ButtonGroup" }} />
    </div>
  );
}
