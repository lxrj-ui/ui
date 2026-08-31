"use client";

import * as React from "react";
import {
  ArrowUpDown,
  AudioLines,
  Boxes,
  Image,
  Mic,
  Speech,
  Type,
  Video,
  type LucideIcon,
} from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Tablist — แถวแท็บสรุปหมวดพร้อมตัวเลขนับ (role=tablist, WAI-ARIA tabs)
 * - underline style: active = border-b-2 border-primary, inactive = border-transparent
 * - เลื่อนแนวนอนได้โดยไม่โชว์ scrollbar (.scrollbar-hide)
 * - hover tint ต่อหมวดผ่าน hoverTint (token เช่น --color-modality-text — ไม่มีก็ปลอดภัย)
 * - คำขอจาก BCIG: แท็บกรองโมเดลตาม modality (ดู bug-ui.md)
 */

export interface TablistItem {
  id: string;
  label: React.ReactNode;
  count?: number;
  icon?: LucideIcon;
  hoverTint?: string;
}

function tabClasses(active: boolean) {
  return cn(
    "shrink-0 border-b-2 px-4 py-2 text-xs font-medium transition-colors cursor-pointer",
    active
      ? "border-primary text-primary"
      : "border-transparent text-muted-foreground group hover:text-foreground"
  );
}

function Tablist({
  items,
  value,
  onValueChange,
  ariaLabel = "Filter",
  className,
}: {
  items: TablistItem[];
  /** id ของแท็บที่ active */
  value: string;
  onValueChange: (id: string) => void;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn("flex overflow-x-auto scrollbar-hide -mb-px", className)}
    >
      {items.map((item) => {
        const active = value === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onValueChange(item.id)}
            className={tabClasses(active)}
          >
            <span className="inline-flex items-center gap-1.5">
              {Icon ? (
                <Icon aria-hidden className={cn("size-4", !active && item.hoverTint)} />
              ) : null}
              {item.label}
              {item.count != null ? (
                <span className="tabular-nums">{item.count}</span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const MODALITY_ITEMS: TablistItem[] = [
  { id: "all", label: "All" },
  { id: "text", label: "Text", count: 395, icon: Type, hoverTint: "group-hover:text-modality-text" },
  { id: "image", label: "Image", count: 48, icon: Image, hoverTint: "group-hover:text-modality-image" },
  { id: "video", label: "Video", count: 27, icon: Video, hoverTint: "group-hover:text-modality-video" },
  { id: "speech", label: "Speech", count: 18, icon: Speech, hoverTint: "group-hover:text-modality-tts" },
  { id: "transcription", label: "Transcription", count: 19, icon: Mic, hoverTint: "group-hover:text-modality-transcription" },
  { id: "embeddings", label: "Embeddings", count: 34, icon: Boxes, hoverTint: "group-hover:text-modality-embeddings" },
  { id: "rerank", label: "Rerank", count: 7, icon: ArrowUpDown, hoverTint: "group-hover:text-modality-rerank" },
  { id: "audio", label: "Audio", count: 4, icon: AudioLines, hoverTint: "group-hover:text-modality-audio" },
];

/** ตัวอย่างครบชุด — แท็บกรองโมเดลตาม output modality (เคสจริงจาก BCIG) */
export function TablistDemo() {
  const [value, setValue] = React.useState("all");
  return (
    <Tablist
      items={MODALITY_ITEMS}
      value={value}
      onValueChange={setValue}
      ariaLabel="Filter models by output modality"
    />
  );
}

export { Tablist, MODALITY_ITEMS };
