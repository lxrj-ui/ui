"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, ChevronDown, ChevronRight, Settings, ArrowDownUp, Layers, List, Table2, Type, Image as ImageIcon, Video, Mic, Boxes, AudioLines, FileInput, Tag, StretchHorizontal, DollarSign, LayoutGrid, Code, Building, User, Trophy, Sparkles } from "lucide-react";
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

const filterSections = [
  { id: "input_mods", label: "Input modalities", icon: FileInput },
  { id: "discount", label: "Discounted", icon: Tag },
  { id: "context", label: "Context length", icon: StretchHorizontal },
  { id: "prompt", label: "Prompt pricing", icon: DollarSign },
  { id: "series", label: "Series", icon: LayoutGrid },
  { id: "cats", label: "Categories", icon: Tag },
  { id: "supported", label: "Supported parameters", icon: Code },
  { id: "providers", label: "Providers", icon: Building },
  { id: "authors", label: "Model authors", icon: User },
];

const thSticky = { boxShadow: "inset 0 -1px 0 var(--color-border)" };

export default function ModelsPage() {
  const [q, setQ] = useState("");
  const [modality, setModality] = useState("All");
  const [view, setView] = useState("table");
  const [sort, setSort] = useState("newest");
  const [open, setOpen] = useState<Record<string, boolean>>({ input_mods: true });
  const controlsRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const controls = controlsRef.current;
    const frame = frameRef.current;
    if (!controls || !frame) return;
    const update = () => frame.style.setProperty("--or-table-sticky-top", `${Math.round(controls.getBoundingClientRect().bottom)}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(controls);
    return () => ro.disconnect();
  }, []);

  const filtered = models.filter((m) => `${m.name} ${m.provider}`.toLowerCase().includes(q.toLowerCase()) && (modality === "All" || m.mods.includes(modality)));

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <MainTopbar
        navLinks={[
          { label: "Models", href: "/models" },
          { label: "Benchmarks" },
          { label: "Chat" },
          { label: "Rankings", href: "/demo" },
        ]}
        rightExtra={
          <button type="button" className="flex shrink-0 items-center gap-2 rounded-md p-1 hover:bg-muted/40 transition-colors">
            <Avatar size="sm" fallback="P" />
            <span className="hidden sm:inline text-sm font-medium">Personal</span>
            <ChevronDown className="hidden sm:block size-3.5 text-muted-foreground" />
          </button>
        }
      />

      <div className="flex max-w-[1600px] mx-auto">
        <nav className="hidden md:flex sticky top-14 h-[calc(100dvh-3.5rem)] w-66 shrink-0 flex-col border-r border-border bg-card pl-6 pt-3 text-sm overflow-hidden">
          <div className="flex-1 overflow-y-auto overflow-x-hidden pr-5 pb-4">
            {filterSections.map((s) => {
              const Icon = s.icon;
              const isOpen = !!open[s.id];
              return (
                <div key={s.id}>
                  <button type="button" onClick={() => setOpen((o) => ({ ...o, [s.id]: !o[s.id] }))} className="group flex w-full cursor-pointer items-center justify-between gap-2 py-3 px-2 text-xs font-medium text-foreground">
                    <span className="flex items-center gap-2 truncate">
                      <Icon className="size-4" />
                      <span className="group-hover:underline">{s.label}</span>
                    </span>
                    {isOpen ? <ChevronDown className="size-4 text-muted-foreground" /> : <ChevronRight className="size-4 text-muted-foreground" />}
                  </button>
                  {isOpen && (
                    <div className="flex flex-col gap-0.5 pb-2">
                      {["Text","Image","File","Audio","Video"].map((o) => (
                        <label key={o} className="flex h-7 cursor-pointer items-center gap-2 rounded-md px-2 text-xs text-muted-foreground hover:bg-muted/40">
                          <input type="checkbox" className="h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-foreground/30 bg-muted accent-[var(--color-primary)]" />
                          {o}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <section className="flex-1 min-w-0 px-4 sm:px-6 pb-4">
          <div ref={controlsRef} className="sticky top-14 z-20 bg-background">
            <div className="flex w-full flex-col gap-2 pt-2 pb-2 sm:gap-4 sm:pt-3">
              <div className="hidden sm:flex items-center justify-between gap-2">
                <h1 className="text-xl font-semibold">Models</h1>
                <div className="flex shrink-0 items-center gap-2">
                  <Button variant="outline" size="sm" className="h-9 px-3"><Trophy className="size-3.5" /> Compare</Button>
                  <Button variant="outline" size="sm" className="h-9 px-3"><Sparkles className="size-3.5" /> Discover Models</Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative w-full md:w-80">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search models..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-9 h-9" />
                </div>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-full sm:w-[14.75rem] sm:flex-none text-sm">
                    <span className="flex items-center gap-2"><ArrowDownUp className="size-3.5 shrink-0" />{sort === "newest" ? "Newest" : sort === "popular" ? "Popular" : "Pricing"}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectOption value="newest">Newest</SelectOption>
                    <SelectOption value="popular">Popular</SelectOption>
                    <SelectOption value="pricing">Pricing</SelectOption>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40 sm:flex-none text-sm">
                    <span className="flex items-center gap-2"><Layers className="size-3.5 shrink-0" />All variants</span>
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
                <div className="ml-auto shrink-0">
                  <SegmentedControl value={view} onValueChange={setView}>
                    <SegmentedSegment value="list"><span className="flex items-center gap-1.5"><List className="size-4" />List</span></SegmentedSegment>
                    <SegmentedSegment value="table"><span className="flex items-center gap-1.5"><Table2 className="size-4" />Table</span></SegmentedSegment>
                  </SegmentedControl>
                </div>
              </div>

              <div className="border-b border-border">
                <div className="flex overflow-x-auto -mb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {modalityTabs.map((t) => {
                    const Icon = t.icon;
                    const active = modality === t.label;
                    return (
                      <button key={t.label} type="button" onClick={() => setModality(t.label)} className={`shrink-0 border-b-2 px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                        <span className="inline-flex items-center gap-1.5">
                          {Icon && <Icon className="size-4" />} {t.label} {t.count !== null && <span className="tabular-nums">{t.count}</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div ref={frameRef} className="flex flex-col overflow-hidden rounded-lg bg-card" style={{ height: "calc(100dvh - var(--or-table-sticky-top, 223px) - 1rem)" }}>
            <div className="rounded-t-lg border-t border-x border-border" style={{ backgroundColor: "var(--color-card)" }}>
              <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
                <colgroup>
                  <col />
                  <col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" />
                  <col className="w-10" />
                </colgroup>
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
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-b-lg border-x border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm [&_tr:last-child]:border-b-0 [&_tr:last-child>td:first-child]:rounded-bl-lg [&_tr:last-child>td:last-child]:rounded-br-lg">
              <colgroup>
                <col />
                <col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" /><col className="w-[9%]" />
                <col className="w-10" />
              </colgroup>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m.id} className="border-b border-border hover:bg-[var(--color-card-hover)] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <Avatar size="sm" fallback={m.provider[0]} />
                        <Link href={`/models/${m.id}`} className="truncate text-sm font-medium text-foreground hover:underline underline-offset-2">{m.name}</Link>
                        {m.badge && <Badge variant={m.badge === "50% off" ? "positive" : "outline"} className="shrink-0 text-xs px-1 py-0">{m.badge}</Badge>}
                      </div>
                    </td>
                    <td className="truncate px-3 py-3 text-right tabular-nums">{m.tokens}</td>
                    <td className="truncate px-3 py-3 text-right tabular-nums">{m.input}</td>
                    <td className="truncate px-3 py-3 text-right tabular-nums">{m.output || "—"}</td>
                    <td className="truncate px-3 py-3 text-right tabular-nums">{m.context}</td>
                    <td className="truncate px-3 py-3 text-right tabular-nums">{m.latency}</td>
                    <td className="truncate px-3 py-3 text-right tabular-nums">{m.throughput}</td>
                    <td className="truncate px-3 py-3 text-right tabular-nums text-muted-foreground">{m.date}</td>
                    <td className="px-2 py-3" />
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
