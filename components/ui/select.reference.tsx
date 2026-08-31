"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Select — OpenRouter style (custom dropdown)
 * - Trigger: h-9 border border-input bg-input-bg rounded-md px-3 text-sm shadow-xs gap-2
 * - Content: rounded-md border bg-popover shadow-md p-1
 * - Item: px-2 py-1.5 text-sm rounded-sm hover:bg-card-hover, active: bg-accent-subtle + check
 * - SelectValue renders the selected option's label (options self-register)
 */

interface SelectContextValue {
  value?: string;
  onValueChange?: (v: string) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  registerOption: (value: string, label: string) => void;
  subscribe: (fn: () => void) => () => void;
  getLabel: (value: string) => string | undefined;
}
const SelectContext = React.createContext<SelectContextValue>({
  open: false,
  setOpen: () => {},
  registerOption: () => {},
  subscribe: () => () => {},
  getLabel: () => undefined,
});

const Select = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (v: string) => void; defaultValue?: string }
>(({ className, children, value, onValueChange, defaultValue, ...props }, ref) => {
  const [internal, setInternal] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);
  const labels = React.useRef(new Map<string, string>());
  const listeners = React.useRef(new Set<() => void>());
  const v = value ?? internal;
  const setV = onValueChange ?? setInternal;
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const registerOption = React.useCallback((val: string, label: string) => {
    if (labels.current.get(val) !== label) {
      labels.current.set(val, label);
      listeners.current.forEach((fn) => fn());
    }
  }, []);

  const subscribe = React.useCallback((fn: () => void) => {
    listeners.current.add(fn);
    return () => listeners.current.delete(fn);
  }, []);

  const getLabel = React.useCallback((val: string) => labels.current.get(val), []);

  return (
    <SelectContext.Provider value={{ value: v, onValueChange: setV, open, setOpen, registerOption, subscribe, getLabel }}>
      <div ref={containerRef} className={cn("relative", className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
});
Select.displayName = "Select";

function SelectTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = React.useContext(SelectContext);
  return (
    <button
      type="button"
      role="combobox"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className={cn(
        "group/trigger flex h-9 w-full items-center justify-between rounded-md border bg-[var(--color-input-bg)] px-3 py-2 text-sm focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)] disabled:opacity-50",
        className
      )}
      style={{ borderColor: "var(--color-input)" }}
      {...props}
    >
      <span className="flex items-center gap-2 truncate">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 opacity-50 transition-all duration-200" />
    </button>
  );
}

function SelectValue({ placeholder, children }: { placeholder?: string; children?: React.ReactNode }) {
  const { value, subscribe, getLabel } = React.useContext(SelectContext);
  const label = React.useSyncExternalStore(
    subscribe,
    () => (value ? (getLabel(value) ?? "") : ""),
    () => ""
  );
  if (children) return <span className="truncate">{children}</span>;
  return <span className="truncate">{value ? label || value : placeholder}</span>;
}

function SelectContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = React.useContext(SelectContext);
  if (!open) return null;
  return (
    <div
      className={cn(
        "absolute top-full z-50 mt-1 w-full min-w-[180px] rounded-md border bg-[var(--color-popover)] p-1 shadow-md",
        className
      )}
      style={{ borderColor: "var(--color-border)" }}
      {...props}
    >
      {children}
    </div>
  );
}

function SelectItem({ value, children, className, ...props }: { value: string; children: React.ReactNode; className?: string } & Omit<React.HTMLAttributes<HTMLDivElement>, "value">) {
  const { value: selected, onValueChange, setOpen, registerOption } = React.useContext(SelectContext);
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = selected === value;

  React.useEffect(() => {
    registerOption(value, ref.current?.querySelector("[data-item-label]")?.textContent ?? String(value));
  }, [value, children, registerOption]);

  return (
    <div
      ref={ref}
      role="option"
      aria-selected={isActive}
      onClick={() => {
        onValueChange?.(value);
        setOpen(false);
      }}
      className={cn(
        "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer text-muted-foreground font-medium",
        isActive
          ? "bg-accent text-accent-foreground"
          : "hover:bg-card-hover hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <span className="w-4 shrink-0 flex items-center justify-center">
        {isActive && <Check size={14} style={{ color: "var(--color-accent-foreground)" }} />}
      </span>
      <span data-item-label>{children}</span>
    </div>
  );
}

function SelectGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

function SelectLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-2 py-1.5 text-sm font-medium", className)} {...props} />;
}

const SelectOption = SelectItem;

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectOption, SelectGroup, SelectLabel };
