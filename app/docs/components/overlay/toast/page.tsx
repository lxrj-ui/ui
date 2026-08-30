"use client";

import { Toast, useToast, ToastContainer } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export default function ToastPage() {
  const { toasts, toast, dismiss } = useToast();
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Overlay</Badge>
        <CopyPageButton text="Toast — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Toast</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Transient notifications. Status + neutral variants, auto-dismiss ~5s, bottom-right stacking.</p>

      <h2 className="text-base font-semibold mb-3">Variants</h2>
      <div className="flex flex-wrap gap-2 mb-10">
        <Button onClick={() => toast({ variant: "info", title: "Info", description: "This is an info toast." })}>Info</Button>
        <Button onClick={() => toast({ variant: "positive", title: "Success", description: "Changes saved successfully." })}>Positive</Button>
        <Button onClick={() => toast({ variant: "negative", title: "Error", description: "Something went wrong." })}>Negative</Button>
        <Button onClick={() => toast({ variant: "warning", title: "Warning", description: "Your plan expires soon." })}>Warning</Button>
        <Button onClick={() => toast({ variant: "neutral", title: "Update", description: "A new version is available." })}>Neutral</Button>
      </div>

      <h2 className="text-base font-semibold mb-3">With action</h2>
      <div className="mb-10">
        <Button onClick={() => toast({ variant: "info", title: "File uploaded", description: "report.pdf has been uploaded.", action: { label: "View", onClick: () => {} } })}>Upload file</Button>
      </div>

      <h2 className="text-base font-semibold mb-3">Static examples</h2>
      <div className="space-y-3 mb-10">
        <Toast variant="info" title="Info" description="This is an informational message." />
        <Toast variant="positive" title="Success" description="Your changes have been saved." />
        <Toast variant="negative" title="Error" description="Failed to delete item." />
        <Toast variant="warning" title="Warning" description="Storage almost full." />
        <Toast variant="neutral" description="A new version is available for download." />
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { useToast, ToastContainer } from "@/components/ui/toast"

const { toasts, toast, dismiss } = useToast();

<ToastContainer toasts={toasts} onDismiss={dismiss} />
toast({ variant: "positive", title: "Saved", description: "Done." })`}
      </pre>

      <Pagination prev={{ href: "/docs/components/overlay/dialog", label: "Dialog" }} next={{ href: "/docs/components/overlay/accordion", label: "Accordion" }} />
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
