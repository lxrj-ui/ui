"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainTopbar } from "@/components/main-topbar";
import {
  ExternalLink,
  ArrowRight,
  Shield,
  Check,
  Lock,
  KeyRound,
  Users,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";

/* ── Arrow icon used in "View all" links ── */
const ArrowIcon = ({ className = "inline-flex size-3" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true" data-slot="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const navLinks = [
  { label: "Models", href: "/models" },
  { label: "Demo", href: "/demo" },
  { label: "Components", href: "/docs/components" },
  { label: "DESIGN.md", href: "/DESIGN.md" },
  { label: "README.md", href: "/README.md" },
  { label: "GitHub", href: "https://github.com/lxrj-ui/ui" },
];

const stats = [
  { value: "300T+", label: "Monthly Tokens" },
  { value: "10M+", label: "Global Users" },
  { value: "80+", label: "Providers" },
  { value: "500+", label: "Models" },
];

/* ── SVG Icons for provider-like circles ── */
const ProviderIcons = [
  { letter: "G", color: "#4285F4", bg: "rgba(66,133,244,0.15)" },
  { letter: "O", color: "#000000", bg: "rgba(0,0,0,0.1)" },
  { letter: "M", color: "#0668E1", bg: "rgba(6,104,225,0.15)" },
  { letter: "A", color: "#FF9900", bg: "rgba(255,153,0,0.15)" },
  { letter: "D", color: "#2D8AFF", bg: "rgba(45,138,255,0.15)" },
  { letter: "Q", color: "#FF6B00", bg: "rgba(255,107,0,0.15)" },
  { letter: "X", color: "#000000", bg: "rgba(0,0,0,0.1)" },
  { letter: "Z", color: "#000000", bg: "rgba(0,0,0,0.1)" },
  { letter: "C", color: "#FF6F00", bg: "rgba(255,111,0,0.15)" },
  { letter: "H", color: "#FF9F1C", bg: "rgba(255,159,28,0.15)" },
  { letter: "A", color: "#FF4D4D", bg: "rgba(255,77,77,0.15)" },
  { letter: "M", color: "#00D4AA", bg: "rgba(0,212,170,0.15)" },
];

const FeatureCardVisuals = [
  /* Card 1: Animated provider icon grid */
  (
    <div className="absolute inset-0">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30 dark:from-slate-11 dark:via-transparent dark:to-slate-11" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30 dark:from-slate-11 dark:via-transparent dark:to-slate-11" />
      </div>
      <div className="absolute inset-4 grid grid-cols-5 gap-x-0 gap-y-1 scale-105 z-10">
        {ProviderIcons.map((p, i) => (
          <div
            key={i}
            className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
            style={{
              animation: `float${i} 4s ease-in-out infinite ${i * 150}ms`,
              opacity: 0.85,
            }}
          >
            <div className="flex items-center justify-center size-6 shrink-0 rounded-full border bg-background p-1" style={{ borderColor: p.color }}>
              <span className="text-xs font-bold" style={{ color: p.color }}>{p.letter}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  /* Card 2: SVG routing diagram */
  (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
        <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground whitespace-nowrap">anthropic/claude-opus-5</div>
        <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/60" aria-labelledby="routing-diagram-title">
          <title id="routing-diagram-title">Model routing visualization</title>
          <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
          <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
          <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        <div className="flex justify-between w-full">
          {[
            { letter: "G", color: "#4285F4" },
            { letter: "A", color: "#000000" },
            { letter: "B", color: "#FF9900" },
          ].map((p, i) => (
            <div key={i} className="relative flex shrink-0 items-center justify-center box-content p-px overflow-hidden rounded-sm bg-background size-8">
              <div className="absolute inset-px flex items-center justify-center">
                <span className="text-xs font-bold" style={{ color: p.color }}>{p.letter}</span>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-border/60" style={{ borderColor: "var(--color-border)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  /* Card 3: Abstract performance chart (SVG) */
  (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-0 z-10">
        <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20 dark:from-slate-11 dark:to-slate-11" />
        <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20 dark:from-slate-11 dark:to-slate-11" />
      </div>
      <svg viewBox="0 0 300 150" className="h-full w-full object-contain" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="perfGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--color-grape)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-grape)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="perfGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--color-volt)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-volt)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="260" height="110" fill="transparent" />
        <path d="M30 120 Q80 90 130 70 Q180 50 230 80 Q270 110 280 120" fill="url(#perfGradient)" stroke="var(--color-grape)" strokeWidth="1.5" />
        <path d="M30 130 Q80 100 130 80 Q180 60 230 90 Q270 120 280 130" fill="url(#perfGradient2)" stroke="var(--color-volt)" strokeWidth="1.5" />
        <g stroke="var(--color-border)" strokeWidth="0.5" opacity="0.3">
          <line x1="30" y1="40" x2="280" y2="40" />
          <line x1="30" y1="70" x2="280" y2="70" />
          <line x1="30" y1="100" x2="280" y2="100" />
        </g>
      </svg>
    </div>
  ),
  /* Card 4: Lock + checkmark + globe SVG */
  (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-52">
        <div className="flex justify-between items-end w-full px-11 -mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4 text-muted-foreground">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <div className="w-7 h-7 rounded-full bg-positive/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5" style={{ color: "var(--color-positive-text)" }}>
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4 text-muted-foreground">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-32 text-muted-foreground/60">
          <title>Data policy visualization</title>
          <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
          <path strokeWidth=".4" d="M14.2 14.5a3.6 3.6 0 0 0 1.5-.2 1.2 1.2 0 0 0-1.9-1m.4 1.2v.3a4.8 4.8 0 0 1-2.4.6c-.9 0-1.7-.2-2.4-.6a2.4 2.4 0 0 1 0-.3m4.8 0a2.4 2.4 0 0 0-.4-1.3m0 0a2.4 2.4 0 0 0-2-1.1 2.4 2.4 0 0 0-2 1.1m0 0a1.2 1.2 0 0 0-1.9 1.1 3.6 3.6 0 0 0 1.5.2m.4-1.3a2.4 2.4 0 0 0-.4 1.3M13 9.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-5.4 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
        </svg>
      </div>
    </div>
  ),
];

const featureCards = [
  {
    visual: FeatureCardVisuals[0],
    title: "Text, Images, Videos, and Audio",
    description: "Generate anything through a single, unified interface. All major models in one place.",
    cta: "Browse all",
    href: "/models",
  },
  {
    visual: FeatureCardVisuals[1],
    title: "Higher Availability",
    description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
    cta: "Learn more",
    href: "/docs/components",
  },
  {
    visual: FeatureCardVisuals[2],
    title: "Price and Performance",
    description: "Keep costs in check without sacrificing speed. LXRJ runs at the edge for minimal latency between your users and their inference.",
    cta: "Learn more",
    href: "/docs/components",
  },
  {
    visual: FeatureCardVisuals[3],
    title: "Custom Data Policies",
    description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
    cta: "View docs",
    href: "/docs/components",
  },
];

const featuredModels = [
  { name: "Gemini 3.7 Flash", provider: "google", tokens: "4.2T", trend: "+148%", color: "#4285F4" },
  { name: "GPT-5.6 Sol", provider: "openai", tokens: "1.9T", trend: "+41%", color: "#000000" },
  { name: "Muse Spark 1.2", provider: "meta", tokens: "105.6B", trend: "+28%", color: "#0668E1" },
];

const featuredAgents = [
  {
    name: "Replit",
    description: "The easiest way to go from idea to app",
    color: "#F26522",
    visual: (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        <div className="relative h-full w-full flex items-center justify-center">
          <span className="text-6xl font-bold" style={{ color: "#F26522", opacity: 0.4 }}>R</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-60">
          <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
            <span className="text-xs font-bold" style={{ color: "#F26522" }}>R</span>
          </div>
          <span className="text-xs font-medium" style={{ color: "#F26522" }}>replit.com</span>
        </div>
      </div>
    ),
  },
  {
    name: "Hermes Agent",
    description: "An autonomous agent that grows with you",
    color: "#8B5CF6",
    visual: (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-violet-500/10 to-violet-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
        <div className="relative h-full w-full flex items-center justify-center">
          <span className="text-6xl font-bold" style={{ color: "#8B5CF6", opacity: 0.4 }}>H</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-60">
          <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
            <span className="text-xs font-bold" style={{ color: "#8B5CF6" }}>H</span>
          </div>
          <span className="text-xs font-medium" style={{ color: "#8B5CF6" }}>hermes.ai</span>
        </div>
      </div>
    ),
  },
  {
    name: "Kilo Code",
    description: "Everything you need for agentic development",
    color: "#10B981",
    visual: (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-emerald-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        <div className="relative h-full w-full flex items-center justify-center">
          <span className="text-6xl font-bold" style={{ color: "#10B981", opacity: 0.4 }}>K</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-60">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <span className="text-xs font-bold" style={{ color: "#10B981" }}>K</span>
          </div>
          <span className="text-xs font-medium" style={{ color: "#10B981" }}>kilocode.ai</span>
        </div>
      </div>
    ),
  },
];

const signupSteps = [
  {
    step: 1,
    title: "Signup",
    description: "Create an account to get started. You can set up an org for your team later.",
    visual: (
      <div className="flex gap-2 max-w-56">
        {["Google", "GitHub", "MetaMask"].map((p) => (
          <div key={p} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    ),
  },
  {
    step: 2,
    title: "Buy credits",
    description: "Credits can be used with any model or provider.",
    visual: (
      <div className="flex flex-col gap-2">
        {[
          { date: "Apr 1", amount: "$99" },
          { date: "Mar 30", amount: "$103" },
        ].map((r) => (
          <div key={r.date} className="h-6 bg-foreground/5 rounded-sm flex items-center px-2">
            <span className="text-2xs text-muted-foreground">{r.date}</span>
            <div className="flex-1 mx-2 h-2 bg-foreground/8 rounded-sm" />
            <span className="text-xs font-medium text-foreground">{r.amount}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    step: 3,
    title: "Get your API key",
    description: "Create an API key and start making requests. Fully OpenAI compatible.",
    visual: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-foreground" />
          <div className="h-6 flex-1 bg-foreground/5 rounded-sm flex items-center px-2">
            <span className="text-2xs text-muted-foreground tracking-wide">LXRJ_API_KEY</span>
          </div>
        </div>
        <div className="h-6 bg-foreground/5 rounded-sm flex items-center px-2">
          <span className="text-2xs tracking-wider text-muted-foreground">••••••••••••••••</span>
        </div>
      </div>
    ),
  },
];

const blogPosts = [
  {
    title: "Video Generation API: A Code-First Guide",
    description: "Every video provider has its own endpoint, job statuses, polling logic, and output format. Our async video API puts Seedance, Veo, Wan, and more behind one submit, poll, and download loop.",
    date: "August 25, 2026",
    href: "/docs/components",
  },
  {
    title: "GPT 5.6 Discounts & Jevons Paradox",
    description: "OpenAI introduced large discounts on their new Terra and Luna models. What impact did these discounts have on token volumes, total spend, and the competition?",
    date: "August 25, 2026",
    href: "/docs/components",
  },
  {
    title: "How to Choose the Best AI Model",
    description: "There's no single best AI model, only the best model for a given task, budget, and moment. This article describes a six-step framework for choosing one.",
    date: "August 25, 2026",
    href: "/docs/components",
  },
];

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Models", href: "/models" },
      { label: "Benchmarks", href: "/docs/components" },
      { label: "Rankings", href: "/docs/components" },
      { label: "Apps", href: "/docs/components" },
      { label: "Enterprise", href: "/docs/components" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/docs/components" },
      { label: "Blog", href: "/docs/components" },
      { label: "Privacy", href: "/docs/components" },
      { label: "Terms of Service", href: "/docs/components" },
    ],
  },
  {
    title: "Developer",
    links: [
      { label: "Documentation", href: "/docs/components" },
      { label: "API Reference", href: "/docs/components" },
      { label: "Status", href: "/docs/components" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", href: "https://discord.gg/lxrj" },
      { label: "GitHub", href: "https://github.com/lxrj-ui/ui" },
      { label: "X", href: "https://x.com/lxrj" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
      {/* ── Nav ── */}
      <MainTopbar
        navLinks={[
          { label: "Models", href: "/models" },
          { label: "Demo", href: "/demo" },
          { label: "Components", href: "/docs/components" },
          { label: "Docs", href: "/docs" },
        ]}
        rightExtra={
          <Link href="/docs/components">
            <Button size="sm">Get started</Button>
          </Link>
        }
      />

      {/* ── Hero ── */}
      <div className="max-w-6xl mx-auto text-center pt-20 pb-10 px-6">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-6"
          style={{
            borderColor: "var(--color-accent-border)",
            color: "var(--color-accent-foreground)",
            backgroundColor: "var(--color-accent-subtle)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-volt)", boxShadow: "0 0 8px var(--color-volt)" }} />
          v2 — Bauhaus design system
        </div>

        <h1
          className="text-[56px] font-bold leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
        >
          The Unified Interface
          <br />
          For Every Model
        </h1>
        <p className="mt-4 text-base" style={{ color: "var(--color-muted-foreground)" }}>
          Better <span className="underline">prices</span>, better{" "}
          <span className="underline">uptime</span>, no subscriptions.
        </p>

        <div className="mt-7 flex justify-center gap-3">
          <Link href="/docs/components">
            <Button size="lg">Get API Key</Button>
          </Link>
          <Link href="/demo">
            <Button size="lg" variant="outline">View Demo</Button>
          </Link>
        </div>

        {/* ── Stats ── */}
        <div className="mt-10 flex justify-center gap-8 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--color-foreground)" }}>{s.value}</div>
              <div className="text-2xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature Cards (4 columns) ── */}
      <div className="flex flex-col gap-y-4 md:gap-y-8 max-w-7xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 gap-6 xl:grid-cols-4">
          {featureCards.map((card) => (
            <Link key={card.title} href={card.href} className="h-full">
              <div
                className="rounded-lg border border-border bg-card text-card-foreground group/card flex flex-col h-full overflow-hidden hover:bg-card-hover transition-colors"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="bg-background transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-lg border-b p-2 shrink-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {card.visual}
                </div>
                <div className="flex flex-col gap-2 px-6 py-4 h-full">
                  <div className="flex flex-col gap-2 h-full">
                    <div className="text-base font-semibold leading-snug">{card.title}</div>
                    <div className="text-xs text-muted-foreground">{card.description}</div>
                  </div>
                  <span className="text-xs font-medium text-foreground underline underline-offset-2 decoration-current/40 group-hover/card:text-accent-foreground group-hover/card:decoration-accent-foreground transition-colors flex items-center gap-1">
                    {card.cta}
                    <ArrowIcon className="inline-flex size-3 transition-transform group-hover/card:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Featured Models ── */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-6 px-6 mt-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-section font-medium mb-1 align-baseline" style={{ color: "var(--color-foreground)" }}>Featured Models</h2>
            <p className="text-xs text-muted-foreground">500+ active models on 80+ providers</p>
          </div>
          <Link
            href="/models"
            className="text-muted-foreground group inline-flex text-xs hover:text-accent-foreground transition-colors"
          >
            <span className="inline-flex items-center gap-1">
              <span>View all</span>
              <ArrowIcon className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredModels.map((model) => (
            <Link key={model.name} href="/models" className="h-full block">
              <div
                className="rounded-lg border bg-card text-card-foreground group hover:bg-card-hover transition-colors h-full flex flex-col overflow-hidden"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="size-10 rounded-sm overflow-hidden shrink-0 bg-background ring-1 ring-border/60 transition-transform group-hover:scale-110 flex items-center justify-center">
                        <span className="text-xs font-bold" style={{ color: model.color }}>{model.provider.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-base font-semibold leading-snug">{model.name}</div>
                        <p className="text-xs text-muted-foreground">by {model.provider}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 pt-5 border-t" style={{ borderColor: "var(--color-border)" }}>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start justify-between">
                        <span className="text-xs text-muted-foreground">Tokens</span>
                        <span className="text-xs font-medium text-foreground">{model.tokens}</span>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <span className="text-xs text-muted-foreground">Weekly Trend</span>
                        <span className="text-xs font-medium" style={{ color: "var(--color-positive-text)" }}>{model.trend}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Featured Agents ── */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-6 px-6 mt-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-section font-medium mb-1 align-baseline flex items-center gap-1" style={{ color: "var(--color-foreground)" }}>
              Featured Agents
              <ArrowIcon className="inline-block size-5 text-muted-foreground" />
            </h2>
            <p className="text-xs text-muted-foreground">250k+ apps using LXRJ with 4.2M+ users globally</p>
          </div>
          <Link
            href="/docs/components"
            className="text-muted-foreground group inline-flex text-xs hover:text-accent-foreground transition-colors"
          >
            <span className="inline-flex items-center gap-1">
              <span>View all</span>
              <ArrowIcon className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAgents.map((agent) => (
            <Link key={agent.name} href="/docs/components" className="h-full block">
              <div
                className="rounded-lg border bg-card text-card-foreground group/card flex flex-1 justify-stretch flex-col h-full overflow-hidden hover:bg-card-hover transition-colors"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                className="bg-background transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-64 overflow-hidden rounded-t-lg shrink-0 max-h-[180px]"
                style={{ borderColor: "var(--color-border)" }}
              >
                {agent.visual}
              </div>
                <div className="p-6 flex flex-1 justify-between flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="size-10 rounded-sm overflow-hidden shrink-0 bg-background ring-1 ring-border/60 flex items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: agent.color }}>{agent.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold leading-snug mb-1">{agent.name}</div>
                      <p className="text-xs text-muted-foreground">{agent.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Signup 3 Steps ── */}
      <div className="flex flex-col gap-y-8 md:gap-y-12 max-w-4xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {signupSteps.map((step) => (
            <div key={step.step} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-foreground text-xs font-medium">
                  {step.step}
                </div>
                <h3 className="text-base font-medium text-foreground">{step.title}</h3>
              </div>
              <div className="min-h-10 md:min-h-12">
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
              <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recent Blog Posts ── */}
      <div className="w-full max-w-3xl mx-auto px-6 mt-16 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-section font-medium" style={{ color: "var(--color-foreground)" }}>Recent Blog Posts</h2>
            <Link
              href="/docs/components"
              className="text-muted-foreground group inline-flex text-xs hover:text-accent-foreground transition-colors"
            >
              <span className="inline-flex items-center gap-1">
                <span>View all</span>
                <ArrowIcon className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
          <div>
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.href} className="group block">
                <article className="flex gap-5 py-6 border-b last:border-b-0" style={{ borderColor: "var(--color-border)" }}>
                  <div className="shrink-0 self-start overflow-hidden rounded-xl w-32 h-20 md:w-40 md:h-24 bg-muted flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col gap-2 min-w-0 flex-1">
                    <h3 className="text-heading font-medium transition-colors line-clamp-2" style={{ color: "var(--color-foreground)" }}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-xs line-clamp-2 hidden sm:block">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2" style={{ color: "color-mix(in oklab, var(--color-muted-foreground) 50%, transparent)" }}>
                      <time className="text-overline">{post.date}</time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="px-6 py-12 md:px-12 md:py-16 border-t" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-7xl grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-colors w-fit">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="var(--color-grape)" />
                <path d="M12 7L17 10V14L12 17L7 14V10L12 7Z" fill="var(--color-cloud)" />
              </svg>
              <span className="font-bold text-foreground">LXRJ-UI</span>
            </Link>
            <div className="text-xs text-muted-foreground">© 2026 LXRJ-UI — Bauhaus design system</div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-medium text-foreground">{col.title}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-accent-foreground transition-colors flex items-center gap-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
