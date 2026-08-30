"use client";
import { useEffect, useState } from "react";
export function AgentLoop({ title = "Agents loop" }: { title?: string }) {
  const [logs, setLogs] = useState<string[]>(["[รอ] loop ยังไม่เริ่ม — สั่ง /loop <เป้าหมาย> เพื่อเริ่ม"]);
  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const r = await fetch("/api/loop-state", { cache: "no-store" });
        if (r.ok) { const j = await r.json(); if (j.logs) setLogs(j.logs); }
      } catch {}
    }, 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-xl border bg-[var(--color-card)] p-4 shadow-sm" style={{ borderColor: "var(--color-border)" }}>
      <div className="text-sm font-medium mb-2" style={{ color: "var(--color-foreground)" }}>{title} — คิด → เรียก tool → ดูผล</div>
      <pre className="text-xs whitespace-pre-wrap max-h-64 overflow-auto rounded-md bg-[var(--color-muted)] p-3" style={{ color: "var(--color-muted-foreground)" }}>{logs.join("\n")}</pre>
    </div>
  );
}
