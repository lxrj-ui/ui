"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Accordion — DESIGN.md §Accordion
 * - Collapsible disclosure, each item border-b
 * - Trigger: full-width row, body font-medium, trailing icon-sm chevron rotates on open
 * - Content: body, animates open/closed
 */

interface AccordionContextType {
  openItems: Set<string>;
  toggle: (id: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItems: new Set(),
  toggle: () => {},
});

function Accordion({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggle = React.useCallback((id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn("divide-y", props.className)} style={{ borderColor: "var(--color-border)" }} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ id, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { id: string }) {
  return (
    <div data-accordion-item={id} {...props}>
      {children}
    </div>
  );
}

function AccordionTrigger({ id, children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { id: string }) {
  const { openItems, toggle } = React.useContext(AccordionContext);
  const isOpen = openItems.has(id);

  return (
    <button
      onClick={() => toggle(id)}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between gap-2 py-3 px-2 text-left text-sm font-medium transition-all hover:opacity-80",
        className
      )}
      style={{ color: "var(--color-foreground)" }}
      {...props}
    >
      <span className="flex-1 text-left">{children}</span>
      <ChevronRight
        size={16}
        className={cn("size-4 shrink-0 text-muted-foreground transition-transform duration-200", isOpen && "rotate-90")}
        style={{ color: "var(--color-muted-foreground)" }}
      />
    </button>
  );
}

function AccordionContent({ id, children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { id: string }) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.has(id);

  if (!isOpen) return null;

  return (
    <div
      className={cn("pb-3 text-sm animate-in slide-in-from-top-1", className)}
      style={{ color: "var(--color-muted-foreground)" }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
