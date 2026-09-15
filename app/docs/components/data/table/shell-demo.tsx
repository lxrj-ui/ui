"use client";

import * as React from "react";
import { Settings } from "lucide-react";
import { DataTableShell } from "@/components/ui/data-table-shell";

const thSticky = { boxShadow: "inset 0 -1px 0 var(--color-border)" };

const rows = [
  { name: "Tencent: Hy4 preview", tokens: "100B", input: "$0.834", output: "$2.501", ctx: "1,048,576", latency: "3159ms", tps: "43 t/s", ago: "0d ago" },
  { name: "Alibaba: Wan 3.0 Prime", tokens: "—", input: "from $0.068", output: "—", ctx: "—", latency: "—", tps: "—", ago: "0d ago" },
  { name: "Qwen: Qwen3.8 Flash", tokens: "20B", input: "$0.15", output: "$0.47", ctx: "1,000,000", latency: "3862ms", tps: "54 t/s", ago: "1d ago" },
  { name: "Meta: Muse Image", tokens: "65.1M", input: "$0.01", output: "—", ctx: "65,536", latency: "7ms", tps: "91 t/s", ago: "2d ago" },
  { name: "Z.ai: GLM 5.3 Flash", tokens: "2.88T", input: "$0.075", output: "$0.25", ctx: "1,310,720", latency: "2985ms", tps: "33 t/s", ago: "2d ago" },
  { name: "Recraft: Recraft V4 Styles Pro", tokens: "4.67M", input: "from $0.10", output: "—", ctx: "65,536", latency: "—", tps: "—", ago: "2d ago" },
  { name: "DeepSeek: V4 Flash Vision Exp", tokens: "199B", input: "$0.22", output: "$0.66", ctx: "1,048,576", latency: "1077ms", tps: "87 t/s", ago: "1w ago" },
  { name: "Black Forest Labs: FLUX Video Upscale", tokens: "—", input: "from $0.075", output: "—", ctx: "—", latency: "—", tps: "—", ago: "1w ago" },
  { name: "LiquidAI: LFM2.5-Embedding-350M (free)", tokens: "355M", input: "$0", output: "$0", ctx: "512", latency: "—", tps: "—", ago: "1w ago" },
  { name: "OpenAI: GPT-5.6 Sol", tokens: "1.9T", input: "$2.50", output: "$10.00", ctx: "128,000", latency: "2450ms", tps: "62 t/s", ago: "3d ago" },
  { name: "Google: Gemini 3.7 Flash", tokens: "4.0T", input: "$0.10", output: "$0.40", ctx: "1,000,000", latency: "1800ms", tps: "71 t/s", ago: "1d ago" },
  { name: "Dots Studio: Dots3-Note Preview (free)", tokens: "140B", input: "$0", output: "$0", ctx: "512,000", latency: "1190ms", tps: "58 t/s", ago: "2w ago" },
];

const ColGroup = () => (
  <colgroup>
    <col />
    <col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" />
    <col className="w-10" />
  </colgroup>
);

export function TableShellDemo() {
  const controlsRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="flex h-[560px] flex-col gap-2">
      <div ref={controlsRef} className="flex shrink-0 items-center justify-between gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
        <span className="text-sm font-semibold text-foreground">Models</span>
        <span className="text-xs text-muted-foreground">controls block — shell วัดขอบล่าง block นี้</span>
      </div>
      <DataTableShell fillParent controlsRef={controlsRef} header={
        <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
          <ColGroup />
          <thead>
            <tr className="text-left text-xs text-muted-foreground [&_th]:leading-5">
              <th className="px-4 py-2.5 font-medium whitespace-nowrap" style={thSticky}>Model Name</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Weekly Tokens</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Input</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Output</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Context</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Latency</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Throughput</th>
              <th className="truncate px-3 py-2.5 font-medium text-right tabular-nums" style={thSticky}>Released</th>
              <th className="px-2 py-2.5" style={thSticky}><Settings size={14} className="text-muted-foreground" /></th>
            </tr>
          </thead>
        </table>
      }>
        <table className="w-full table-fixed border-separate border-spacing-0 text-sm [&_tr:last-child]:border-b-0 [&_tr:last-child>td:first-child]:rounded-bl-lg [&_tr:last-child>td:last-child]:rounded-br-lg">
          <ColGroup />
          <tbody>
            {rows.map((m) => (
              <tr key={m.name} className="border-b border-border hover:bg-[var(--color-card-hover)] transition-colors">
                <td className="px-4 py-3">
                  <div className="truncate text-sm font-medium text-foreground">{m.name}</div>
                </td>
                <td className="truncate px-3 py-3 text-right tabular-nums">{m.tokens}</td>
                <td className="truncate px-3 py-3 text-right tabular-nums">{m.input}</td>
                <td className="truncate px-3 py-3 text-right tabular-nums">{m.output || "—"}</td>
                <td className="truncate px-3 py-3 text-right tabular-nums">{m.ctx}</td>
                <td className="truncate px-3 py-3 text-right tabular-nums">{m.latency}</td>
                <td className="truncate px-3 py-3 text-right tabular-nums">{m.tps}</td>
                <td className="truncate px-3 py-3 text-right tabular-nums text-muted-foreground">{m.ago}</td>
                <td className="px-2 py-3" />
              </tr>
            ))}
          </tbody>
        </table>
      </DataTableShell>
    </div>
  );
}
