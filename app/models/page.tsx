"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Settings, ArrowDownUp, Layers, List, Table2, Type, Image as ImageIcon, Video, Mic, Boxes, AudioLines, FileInput, Tag, StretchHorizontal, DollarSign, LayoutGrid, Code, Building, User } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectOption } from "@/components/ui/select";
import { SegmentedControl, SegmentedSegment } from "@/components/ui/segmented-control";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { MainTopbar } from "@/components/main-topbar";

const models = [
  { id: "tencent/hy4-preview", name: "Tencent: Hy4 preview", short: "Hy4 preview", provider: "Tencent", tokens: "100B", input: "$0.834", output: "$2.501", context: "1,048,576", latency: "3159ms", throughput: "43 t/s", date: "0d ago", mods: ["Text"], badge: null },
  { id: "alibaba/wan-3.0-prime", name: "Alibaba: Wan 3.0 Prime", short: "Wan 3.0 Prime", provider: "Alibaba", tokens: "—", input: "from $0.068", output: "", context: "—", latency: "—", throughput: "—", date: "0d ago", mods: ["Video"], badge: null },
  { id: "inclusionai/ling-3.0-flash-fin:free", name: "Ling 3.0 Flash Fin (free)", short: "Ling 3.0 Flash Fin (free)", provider: "InclusionAI", tokens: "24.3B", input: "$0", output: "$0", context: "262,144", latency: "1384ms", throughput: "78 t/s", date: "1d ago", mods: ["Text"], badge: "free" },
  { id: "qwen/qwen3.8-flash", name: "Qwen: Qwen3.8 Flash", short: "Qwen3.8 Flash", provider: "Qwen", tokens: "20B", input: "$0.15", output: "$0.47", context: "1,000,000", latency: "3862ms", throughput: "54 t/s", date: "1d ago", mods: ["Text","Image"], badge: null },
  { id: "meta/muse-image", name: "Meta: Muse Image", short: "Muse Image", provider: "Meta", tokens: "65.1M", input: "$0.01", output: "", context: "65,536", latency: "7ms", throughput: "91 t/s", date: "2d ago", mods: ["Image"], badge: null },
  { id: "z-ai/glm-5.3-flash", name: "Z.ai: GLM 5.3 Flash", short: "GLM 5.3 Flash", provider: "Z.ai", tokens: "2.88T", input: "$0.075", output: "$0.25", context: "1,310,720", latency: "2985ms", throughput: "33 t/s", date: "2d ago", mods: ["Text"], badge: "50% off" },
  // --- dummy ---
  { id: "recraft/recraft-v4-styles-pro", name: "Recraft: Recraft V4 Styles Pro", short: "Recraft V4 Styles Pro", provider: "Recraft", tokens: "4.67M", input: "from $0.10", output: "", context: "65,536", latency: "—", throughput: "—", date: "2d ago", mods: ["Image"], badge: null },
  { id: "alibaba/wan-3.0", name: "Alibaba: Wan 3.0", short: "Wan 3.0", provider: "Alibaba", tokens: "—", input: "from $0.0425", output: "", context: "—", latency: "—", throughput: "—", date: "3d ago", mods: ["Video"], badge: "15% off" },
  { id: "meta/muse-spark-1.2-contributor", name: "Meta: Muse Spark 1.2 Contributor", short: "Muse Spark 1.2 Contributor", provider: "Meta", tokens: "223B", input: "$0.10", output: "$0.20", context: "1,048,576", latency: "3948ms", throughput: "77 t/s", date: "6d ago", mods: ["Text"], badge: null },
  { id: "deepseek/deepseek-v4-flash-vision-exp", name: "DeepSeek: V4 Flash Vision Exp", short: "DeepSeek V4 Flash Vision Exp", provider: "DeepSeek", tokens: "199B", input: "$0.22", output: "$0.66", context: "1,048,576", latency: "1077ms", throughput: "87 t/s", date: "1w ago", mods: ["Text","Image"], badge: null },
  { id: "tencent/hy-mt2-30b-a3b", name: "Tencent: Hy-MT2-30B-A3B", short: "Hy-MT2-30B-A3B", provider: "Tencent", tokens: "121M", input: "$0.074", output: "$0.295", context: "8,192", latency: "704ms", throughput: "108 t/s", date: "1w ago", mods: ["Text"], badge: null },
  { id: "black-forest-labs/flux-video-upscale", name: "Black Forest Labs: FLUX Video Upscale", short: "FLUX Video Upscale", provider: "Black Forest Labs", tokens: "—", input: "from $0.075", output: "", context: "—", latency: "—", throughput: "—", date: "1w ago", mods: ["Video"], badge: null },
  { id: "z-ai/glm-5.3", name: "Z.ai: GLM 5.3", short: "GLM 5.3", provider: "Z.ai", tokens: "1.21T", input: "$0", output: "$0", context: "1,310,720", latency: "—", throughput: "—", date: "1w ago", mods: ["Text"], badge: null },
  { id: "liquid/lfm-2.5-embedding-350m:free", name: "LiquidAI: LFM2.5-Embedding-350M (free)", short: "LFM2.5-Embedding-350M (free)", provider: "Liquid", tokens: "355M", input: "$0", output: "$0", context: "512", latency: "—", throughput: "—", date: "1w ago", mods: ["Embeddings"], badge: "free" },
  { id: "qwen/qwen3.8-27b", name: "Qwen: Qwen3.8 27B", short: "Qwen3.8 27B", provider: "Qwen", tokens: "216B", input: "$0.35", output: "$2.75", context: "1,000,000", latency: "1961ms", throughput: "25 t/s", date: "2w ago", mods: ["Text"], badge: null },
  { id: "dots-studio/dots-3-note-preview:free", name: "Dots Studio: Dots3-Note Preview (free)", short: "Dots3-Note Preview (free)", provider: "Dots Studio", tokens: "140B", input: "$0", output: "$0", context: "512,000", latency: "1190ms", throughput: "58 t/s", date: "2w ago", mods: ["Text","Audio"], badge: "free" },
  { id: "openai/gpt-5.6-sol", name: "OpenAI: GPT-5.6 Sol", short: "GPT-5.6 Sol", provider: "OpenAI", tokens: "1.9T", input: "$2.50", output: "$10.00", context: "128,000", latency: "2450ms", throughput: "62 t/s", date: "3d ago", mods: ["Text","Image"], badge: "popular" },
  { id: "google/gemini-3.7-flash", name: "Google: Gemini 3.7 Flash", short: "Gemini 3.7 Flash", provider: "Google", tokens: "4.0T", input: "$0.10", output: "$0.40", context: "1,000,000", latency: "1800ms", throughput: "71 t/s", date: "1d ago", mods: ["Text","Image","Video"], badge: "new" },
];

const modalityTabs = [
  { label: "All", count: null, icon: null },
  { label: "Text", count: 388, icon: Type },
  { label: "Image", count: 48, icon: ImageIcon },
  { label: "Video", count: 27, icon: Video },
  { label: "Speech", count: 18, icon: AudioLines },
  { label: "Transcription", count: 19, icon: Mic },
  { label: "Embeddings", count: 34, icon: Boxes },
  { label: "Rerank", count: 7, icon: ArrowDownUp },
  { label: "Audio", count: 4, icon: AudioLines },
];

export default function ModelsPage() {
  const [q, setQ] = useState("");
  const [modality, setModality] = useState("All");
  const [view, setView] = useState("table");
  const [sort, setSort] = useState("newest");

  const filtered = models.filter((m) => `${m.name} ${m.provider}`.toLowerCase().includes(q.toLowerCase()) && (modality === "All" || m.mods.includes(modality)));

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)", background: "var(--color-background)", color: "var(--color-foreground)" }}>
      <MainTopbar
        navLinks={[
          { label: "Models", href: "/models" },
          { label: "Benchmarks" },
          { label: "Chat" },
          { label: "Rankings", href: "/demo" },
        ]}
        rightExtra={
          <a href="https://github.com/lxrj-ui/ui" target="_blank" rel="noreferrer" className="text-sm hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>
            GitHub
          </a>
        }
      />

      <div className="flex max-w-[1600px] mx-auto">
        <nav className="hidden md:flex sticky top-14 h-[calc(100dvh-3.5rem)] w-66 shrink-0 flex-col gap-0 overflow-hidden border-r bg-card pl-6 pt-3 text-sm" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex-1 overflow-y-auto pr-5 pb-4 space-y-0">
            <Accordion>
              <AccordionItem id="input_mods">
                <AccordionTrigger id="input_mods"><span className="flex items-center gap-2 text-sm"><FileInput className="size-4" /> Input modalities</span></AccordionTrigger>
                <AccordionContent id="input_mods">
                  <div className="flex flex-col gap-1 pl-2">
                    {["Text","Image","File","Audio","Video"].map((o) => (
                      <label key={o} className="flex h-8 items-center gap-2 rounded-md px-2 hover:bg-[var(--color-card-hover)] cursor-pointer text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                        <span className="grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-foreground/30 bg-muted"><input type="checkbox" className="sr-only" /></span>{o}
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem id="discount"><AccordionTrigger id="discount"><span className="flex items-center gap-2 text-sm"><Tag className="size-4" /> Discounted</span></AccordionTrigger><AccordionContent id="discount"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="context"><AccordionTrigger id="context"><span className="flex items-center gap-2 text-sm"><StretchHorizontal className="size-4" /> Context length</span></AccordionTrigger><AccordionContent id="context"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="prompt"><AccordionTrigger id="prompt"><span className="flex items-center gap-2 text-sm"><DollarSign className="size-4" /> Prompt pricing</span></AccordionTrigger><AccordionContent id="prompt"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="series"><AccordionTrigger id="series"><span className="flex items-center gap-2 text-sm"><LayoutGrid className="size-4" /> Series</span></AccordionTrigger><AccordionContent id="series"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="cats"><AccordionTrigger id="cats"><span className="flex items-center gap-2 text-sm"><Tag className="size-4" /> Categories</span></AccordionTrigger><AccordionContent id="cats"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="supported"><AccordionTrigger id="supported"><span className="flex items-center gap-2 text-sm"><Code className="size-4" /> Supported parameters</span></AccordionTrigger><AccordionContent id="supported"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="providers2"><AccordionTrigger id="providers2"><span className="flex items-center gap-2 text-sm"><Building className="size-4" /> Providers</span></AccordionTrigger><AccordionContent id="providers2"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
              <AccordionItem id="authors"><AccordionTrigger id="authors"><span className="flex items-center gap-2 text-sm"><User className="size-4" /> Model authors</span></AccordionTrigger><AccordionContent id="authors"><div className="pl-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>—</div></AccordionContent></AccordionItem>
            </Accordion>
          </div>
        </nav>

        {/* Main */}
        <section className="flex-1 min-w-0 px-4 sm:px-6 pb-24">
          <div className="sticky top-14 z-20 bg-[var(--color-background)] pt-3 pb-2">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-xl font-semibold">Models</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Compare</Button>
                <Button size="sm">Discover Models</Button>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <div className="relative w-80">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-text-faint)" }} />
                <Input placeholder="Search models..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-9 h-9 text-sm" />
              </div>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[160px] text-sm">
                  <span className="flex items-center gap-2"><ArrowDownUp size={14} />{sort === "newest" ? "Newest" : sort === "popular" ? "Popular" : "Pricing"}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectOption value="newest">Newest</SelectOption>
                  <SelectOption value="popular">Popular</SelectOption>
                  <SelectOption value="pricing">Pricing</SelectOption>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px] text-sm">
                  <span className="flex items-center gap-2"><Layers size={14} />All variants</span>
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
              <div className="ml-auto">
                <SegmentedControl value={view} onValueChange={setView}>
                  <SegmentedSegment value="list"><span className="flex items-center gap-1.5"><List size={14} />List</span></SegmentedSegment>
                  <SegmentedSegment value="table"><span className="flex items-center gap-1.5"><Table2 size={14} />Table</span></SegmentedSegment>
                </SegmentedControl>
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b mt-3" style={{ borderColor: "var(--color-border)" }}>
              {modalityTabs.map((t) => {
                const Icon = t.icon;
                return (
                  <button key={t.label} onClick={() => setModality(t.label)} className="shrink-0 px-4 py-2 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5" style={{ borderColor: modality === t.label ? "var(--color-primary)" : "transparent", color: modality === t.label ? "var(--color-primary)" : "var(--color-muted-foreground)" }}>
                    {Icon && <Icon size={14} />} {t.label} {t.count !== null && <span className="tabular-nums">{t.count}</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table */}
          <div className="mt-4 rounded-lg border" style={{ borderColor: "var(--color-border)" }}>
            <table className="w-full text-sm table-auto border-separate border-spacing-0">
              <thead className="sticky top-[206px] z-10" style={{ backgroundColor: "var(--color-card)", boxShadow: "inset 0 -1px 0 var(--color-border)" }}>
                  <tr className="text-left" style={{ color: "var(--color-muted-foreground)" }}>
                    <th className="px-4 py-2 font-medium text-xs whitespace-nowrap">Model Name</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Weekly Tokens</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Input</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Output</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Context</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Latency</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Throughput</th>
                    <th className="px-3 py-2 font-medium text-right tabular-nums text-xs">Released</th>
                    <th className="px-2 py-2"><Settings size={14} style={{ color: "var(--color-text-faint)" }} /></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m) => (
                    <tr key={m.id} className="border-b hover:bg-[var(--color-card-hover)]" style={{ borderColor: "var(--color-border)" }}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Avatar size="sm" fallback={m.provider[0]} />
                          <Link href={`/models/${m.id}`} className="text-sm font-medium hover:underline whitespace-nowrap" style={{ color: "var(--color-foreground)" }}>{m.name}</Link>
                          {m.badge && <Badge variant={m.badge === "50% off" ? "positive" : "outline"} className="text-xs px-1 py-0">{m.badge}</Badge>}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums">{m.tokens}</td>
                      <td className="px-3 py-3 text-right tabular-nums">{m.input}</td>
                      <td className="px-3 py-3 text-right tabular-nums">{m.output || "—"}</td>
                      <td className="px-3 py-3 text-right tabular-nums">{m.context}</td>
                      <td className="px-3 py-3 text-right tabular-nums">{m.latency}</td>
                      <td className="px-3 py-3 text-right tabular-nums">{m.throughput}</td>
                      <td className="px-3 py-3 text-right tabular-nums" style={{ color: "var(--color-muted-foreground)" }}>{m.date}</td>
                      <td className="px-2 py-3" />
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </section>
      </div>
    </div>
  );
}
