"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export default function AccordionPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Overlay</Badge>
        <CopyPageButton text="Accordion — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Accordion</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Collapsible disclosure sections. Trigger: full-width row with trailing chevron that rotates on open.</p>

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10 max-w-lg">
        <Accordion>
          <AccordionItem id="item-1">
            <AccordionTrigger id="item-1">What is LXRJ-UI?</AccordionTrigger>
            <AccordionContent id="item-1">
              LXRJ-UI is a Bauhaus-inspired design system built on Tailwind CSS with CSS variable tokens.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-2">
            <AccordionTrigger id="item-2">How do I install it?</AccordionTrigger>
            <AccordionContent id="item-2">
              Clone the repository and run bun install. All components are in components/ui/.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-3">
            <AccordionTrigger id="item-3">Is it free?</AccordionTrigger>
            <AccordionContent id="item-3">
              Yes, LXRJ-UI is open source and free to use.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

<Accordion>
  <AccordionItem id="item-1">
    <AccordionTrigger id="item-1">Title</AccordionTrigger>
    <AccordionContent id="item-1">Content here.</AccordionContent>
  </AccordionItem>
</Accordion>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/overlay/toast", label: "Toast" }} next={{ href: "/docs/components/navigation/pagination", label: "Pagination" }} />
    </div>
  );
}
