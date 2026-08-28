"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { label: "Components", href: "/docs/components/base/button" },
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

const statusBadges = [
  { label: "Operational", variant: "positive" as const },
  { label: "Degraded", variant: "warning" as const },
  { label: "Down", variant: "negative" as const },
  { label: "Beta", variant: "info" as const },
];

const chartData = [
  { label: "Mon", v: 42, c: "var(--color-chart-1)" },
  { label: "Tue", v: 68, c: "var(--color-chart-2)" },
  { label: "Wed", v: 51, c: "var(--color-chart-3)" },
  { label: "Thu", v: 84, c: "var(--color-chart-4)" },
  { label: "Fri", v: 73, c: "var(--color-chart-5)" },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
      <nav
        className="sticky top-0 z-10 flex items-center justify-between px-6 h-14 backdrop-blur border-b"
        style={{
          backgroundColor: "color-mix(in oklab, var(--color-background) 80%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="var(--color-grape)" />
            <path d="M12 7L17 10V14L12 17L7 14V10L12 7Z" fill="var(--color-cloud)" />
          </svg>
          <span className="font-bold text-sm" style={{ color: "var(--color-foreground)" }}>LXRJ-UI</span>
          <span className="hidden sm:inline font-normal text-xs ml-1" style={{ color: "var(--color-text-faint)" }}>
            The Unified Interface
          </span>
        </Link>

        <div className="hidden md:flex gap-5 text-[13px]" style={{ color: "var(--color-muted-foreground)" }}>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="hover:opacity-80 transition-opacity">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md text-sm transition-colors hover:bg-[var(--color-card-hover)]"
            style={{ color: "var(--color-foreground)" }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <Link href="/docs/components/base/button">
            <Button size="sm">Get started</Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center pt-20 pb-10 px-6">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] font-medium mb-6"
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
          className="text-[56px] font-bold leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}
        >
          The Unified Interface
          <br />
          For Every Model
        </h1>
        <p className="mt-4 text-[15px]" style={{ color: "var(--color-muted-foreground)" }}>
          Better <span className="underline">prices</span>, better{" "}
          <span className="underline">uptime</span>, no subscriptions.
        </p>

        <div className="mt-7 flex justify-center gap-3">
          <Link href="/docs/components/base/button">
            <Button size="lg">Get API Key</Button>
          </Link>
          <Link href="/docs/components/base/button">
            <Button size="lg" variant="outline">Discover Components</Button>
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-8 text-xs" style={{ color: "var(--color-muted-foreground)" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <b className="text-[15px]" style={{ color: "var(--color-foreground)" }}>{s.value}</b> {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 px-6 pb-12">
        <div className="p-5 border" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", borderRadius: "8px" }}>
          <div className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-faint)" }}>
            Status
          </div>
          <div className="flex flex-wrap gap-2">
            {statusBadges.map((b) => (
              <Badge key={b.label} variant={b.variant}>{b.label}</Badge>
            ))}
          </div>
        </div>

        <div className="p-5 border" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", borderRadius: "8px" }}>
          <div className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-faint)" }}>
            Tokens · 7d
          </div>
          <div className="flex items-end gap-2 h-24">
            {chartData.map((d) => (
              <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-sm" style={{ height: `${d.v}%`, background: d.c, minHeight: "8px" }} />
                <span className="text-[10px]" style={{ color: "var(--color-text-faint)" }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer
        className="border-t py-6 px-6 text-[12px] flex items-center justify-between"
        style={{ borderColor: "var(--color-border)", color: "var(--color-text-faint)" }}
      >
        <div>© LXRJ-UI — Bauhaus design system (see <Link href="/DESIGN.md" className="underline">DESIGN.md</Link>)</div>
        <div className="flex gap-4">
          <Link href="/DESIGN.md" className="hover:opacity-80">Design</Link>
          <a href="https://github.com/lxrj-ui/ui" className="hover:opacity-80">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
