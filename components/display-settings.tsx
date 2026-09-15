"use client";

import * as React from "react";
import { Sun, Moon, Check, Type, Palette } from "lucide-react";

type Theme = "light" | "dark";
type Font = "jakarta" | "inter" | "google-sans";

const STORAGE_KEYS = { theme: "theme", font: "font" } as const;
const VALID_FONTS: Font[] = ["jakarta", "inter", "google-sans"];

function readStored<T extends string>(key: string, fallback: T, allowed: readonly T[]): T {
  try {
    const v = localStorage.getItem(key);
    if (allowed.includes(v as T)) return v as T;
  } catch {}
  return fallback;
}

function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem(STORAGE_KEYS.theme, t); } catch {}
}
function applyFont(f: Font) {
  document.documentElement.dataset.font = f;
  try { localStorage.setItem(STORAGE_KEYS.font, f); } catch {}
}

export function DisplaySettings() {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("dark");
  const [font, setFont] = React.useState<Font>("jakarta");
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const t = (document.documentElement.dataset.theme as Theme) || readStored<Theme>(STORAGE_KEYS.theme, "dark", ["light", "dark"] as const);
    const f = (document.documentElement.dataset.font as Font) || readStored<Font>(STORAGE_KEYS.font, "jakarta", VALID_FONTS);
    setTheme(t);
    setFont(f);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const chooseTheme = (t: Theme) => { setTheme(t); applyTheme(t); };
  const chooseFont = (f: Font) => { setFont(f); applyFont(f); };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Display settings"
        aria-expanded={open}
        className="flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs transition-colors hover:opacity-80"
        style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)", backgroundColor: "var(--color-card)" }}
      >
        <Palette size={14} />
        <span className="hidden sm:inline">Display</span>
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Display settings"
          className="absolute right-0 top-full z-50 mt-1.5 w-64 rounded-lg border p-1 shadow-lg"
          style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Theme</div>
          <RadioRow
            icon={theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
            label="Light"
            description="Default"
            selected={theme === "light"}
            onClick={() => chooseTheme("light")}
          />
          <RadioRow
            icon={theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
            label="Dark"
            description="Low light"
            selected={theme === "dark"}
            onClick={() => chooseTheme("dark")}
          />
          <div className="my-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
          <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Font</div>
          <RadioRow
            icon={<Type size={14} />}
            label="Jakarta"
            description="Sans"
            selected={font === "jakarta"}
            onClick={() => chooseFont("jakarta")}
          />
          <RadioRow
            icon={<Type size={14} />}
            label="Inter"
            description="Sans · ไทย"
            selected={font === "inter"}
            onClick={() => chooseFont("inter")}
          />
          <RadioRow
            icon={<Type size={14} />}
            label="Google Sans"
            description="Sans · ไทย"
            selected={font === "google-sans"}
            onClick={() => chooseFont("google-sans")}
          />
        </div>
      )}
    </div>
  );
}

function RadioRow({ icon, label, description, selected, onClick }: { icon: React.ReactNode; label: string; description: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:opacity-80"
      style={{ color: selected ? "var(--color-foreground)" : "var(--color-muted-foreground)" }}
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-md" style={{ backgroundColor: selected ? "var(--color-accent-subtle)" : "transparent", color: selected ? "var(--color-primary)" : "var(--color-muted-foreground)" }}>
        {icon}
      </span>
      <span className="flex-1">
        <span className="block font-medium">{label}</span>
        <span className="block text-xs" style={{ color: "var(--color-muted-foreground)" }}>{description}</span>
      </span>
      {selected && <Check size={14} style={{ color: "var(--color-primary)" }} />}
    </button>
  );
}
