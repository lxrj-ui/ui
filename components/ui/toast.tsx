"use client";

import * as React from "react";
import { X, Info, AlertTriangle, CheckCircle2 } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Toast / Banner — DESIGN.md §Banner / toast
 * - Status + neutral variants
 * - Background: status color at 14 (-bg tokens)
 * - Border: status color at 30 (color-mix)
 * - CTA text matches status color
 * - Toasts: opaque popover, auto-dismiss ~5s, bottom-right stack
 */

type ToastVariant = "info" | "positive" | "negative" | "warning" | "neutral";

interface ToastItem {
  id: string;
  variant: ToastVariant;
  title?: string;
  description: string;
  action?: { label: string; onClick: () => void };
}

const variantConfig: Record<ToastVariant, { bg: string; border: string; text: string; Icon: typeof Info }> = {
  info: { bg: "var(--color-info-bg)", border: "color-mix(in oklab, var(--color-info) 30%, transparent)", text: "var(--color-info-text)", Icon: Info },
  positive: { bg: "var(--color-positive-bg)", border: "color-mix(in oklab, var(--color-positive) 30%, transparent)", text: "var(--color-positive-text)", Icon: CheckCircle2 },
  negative: { bg: "var(--color-negative-bg)", border: "color-mix(in oklab, var(--color-negative) 30%, transparent)", text: "var(--color-negative-text)", Icon: AlertTriangle },
  warning: { bg: "var(--color-warning-bg)", border: "color-mix(in oklab, var(--color-warning) 30%, transparent)", text: "var(--color-warning-text)", Icon: AlertTriangle },
  neutral: { bg: "var(--color-muted)", border: "var(--color-border)", text: "var(--color-muted-foreground)", Icon: Info },
};

function Toast({ variant = "neutral", title, description, action, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: ToastVariant; title?: string; description: string; action?: { label: string; onClick: () => void } }) {
  const c = variantConfig[variant];
  const Icon = c.Icon;
  return (
    <div
      className={cn("flex items-start gap-3 rounded-lg border p-4 shadow-lg", className)}
      style={{ backgroundColor: c.bg, borderColor: c.border }}
      {...props}
    >
      <Icon size={16} className="shrink-0 mt-0.5" style={{ color: c.text }} />
      <div className="flex-1 min-w-0">
        {title && (
          <div className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
            {title}
          </div>
        )}
        <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
          {description}
        </div>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="shrink-0 text-sm font-medium underline underline-offset-2 hover:opacity-80"
          style={{ color: c.text }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

// Toast Provider / Container for auto-dismiss stacking
function ToastContainer({ toasts, onDismiss }: { toasts: ToastItem[]; onDismiss: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} variant={toast.variant} title={toast.title} description={toast.description} action={toast.action ? { ...toast.action, onClick: () => { toast.action?.onClick(); onDismiss(toast.id); } } : undefined} className="relative">
          <button
            onClick={() => onDismiss(toast.id)}
            className="absolute right-3 top-3 p-0.5 rounded opacity-60 hover:opacity-100"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            <X size={14} />
          </button>
        </Toast>
      ))}
    </div>
  );
}

// useToast hook
function useToast() {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const addToast = React.useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, toast: addToast, dismiss };
}

export { Toast, ToastContainer, useToast, type ToastItem, type ToastVariant };
