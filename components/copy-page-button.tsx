"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function CopyPageButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-[12px] border transition-colors hover:bg-[var(--color-card-hover)]"
      style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy page"}
    </button>
  );
}
