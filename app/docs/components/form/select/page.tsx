"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectOption, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export default function SelectPage() {
  const [framework, setFramework] = useState("");
  const [variant, setVariant] = useState("all");

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Form</Badge>
        <CopyPageButton text="Select — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Select</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Dropdown select. h-9 · border-input · bg-input-bg · rounded-md · text-sm · shadow-xs · check + accent เมื่อเลือก</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="max-w-sm mb-10 space-y-2">
        <Label>Framework</Label>
        <Select value={framework} onValueChange={setFramework}>
          <SelectTrigger>
            <SelectValue placeholder="Select a framework">
              {framework === "next" ? "Next.js" : framework === "remix" ? "Remix" : framework === "astro" ? "Astro" : "Select a framework"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectOption value="next">Next.js</SelectOption>
            <SelectOption value="remix">Remix</SelectOption>
            <SelectOption value="astro">Astro</SelectOption>
          </SelectContent>
        </Select>
      </div>

      <h2 className="text-base font-semibold mb-3">All variants (จาก /models)</h2>
      <p className="text-sm mb-3" style={{ color: "var(--color-muted-foreground)" }}>มี icon นำ <span className="font-mono text-xs">Layers</span> · เลือกแล้วมี <span className="font-mono text-xs">✓</span> สี Grape + พื้น <span className="font-mono text-xs">accent</span></p>
      <div className="max-w-sm mb-10">
        <Select value={variant} onValueChange={setVariant}>
          <SelectTrigger>
            <span className="flex items-center gap-2"><Layers size={14} />{variant === "all" ? "All variants" : variant}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectOption value="all">All variants</SelectOption>
            <SelectOption value="standard">Standard</SelectOption>
            <SelectOption value="free">Free</SelectOption>
            <SelectOption value="extended">Extended</SelectOption>
            <SelectOption value="thinking">Thinking</SelectOption>
            <SelectOption value="batch">Batch</SelectOption>
          </SelectContent>
        </Select>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Select, SelectTrigger, SelectContent, SelectOption } from "@/components/ui/select"
import { Layers } from "lucide-react"

<Select value={variant} onValueChange={setVariant}>
  <SelectTrigger>
    <span className="flex items-center gap-2"><Layers size={14} />All variants</span>
  </SelectTrigger>
  <SelectContent>
    <SelectOption value="all">All variants</SelectOption>
    <SelectOption value="standard">Standard</SelectOption>
    <SelectOption value="free">Free</SelectOption>
  </SelectContent>
</Select>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/textarea", label: "Textarea" }} next={{ href: "/docs/components/form/checkbox", label: "Checkbox" }} />
    </div>
  );
}
