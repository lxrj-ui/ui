import type { ReactNode } from "react";
import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

type Variant = "note" | "tip" | "warning" | "info" | "success";

const config: Record<Variant, { label: string; Icon: typeof Info; token: string }> = {
  note:    { label: "Note",    Icon: Info,          token: "info" },
  tip:     { label: "Tip",     Icon: Lightbulb,     token: "positive" },
  warning: { label: "Warning", Icon: AlertTriangle, token: "warning" },
  info:    { label: "Info",    Icon: Info,          token: "info" },
  success: { label: "Success", Icon: CheckCircle2,  token: "positive" },
};

export function Callout({ variant = "note", children }: { variant?: Variant; children: ReactNode }) {
  const c = config[variant];
  const Icon = c.Icon;
  return (
    <div
      className="flex items-start gap-3 rounded-lg border p-4 my-5"
      style={{
        backgroundColor: `var(--color-${c.token}-bg)`,
        borderColor: `color-mix(in oklab, var(--color-${c.token}) 25%, transparent)`,
      }}
    >
      <Icon size={16} className="shrink-0 mt-0.5" style={{ color: `var(--color-${c.token}-text)` }} />
      <div className="flex-1 text-[14px] leading-6" style={{ color: "var(--color-foreground)" }}>
        <div className="font-semibold mb-1" style={{ color: `var(--color-${c.token}-text)` }}>
          {c.label}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
