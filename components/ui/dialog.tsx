"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Dialog — DESIGN.md §Destructive confirmation
 * - AlertDialog for destructive confirmation
 * - Cancel (outline) left, Confirm (destructive) right
 * - Confirm names the action, never just "OK"
 */
interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;

  return (
    <DialogContext.Provider value={{ open: isOpen, onOpenChange: setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

const DialogContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({ open: false, onOpenChange: () => {} });

function useDialog() {
  return React.useContext(DialogContext);
}

function DialogTrigger({ children, asChild, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { onOpenChange } = useDialog();
  return (
    <button onClick={() => onOpenChange(true)} {...props}>
      {children}
    </button>
  );
}

function DialogOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useDialog();
  if (!open) return null;
  return (
    <div
      className={cn("fixed inset-0 z-50 bg-black/80 animate-in fade-in-0", className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { showCloseButton?: boolean }) {
  const { open, onOpenChange } = useDialog();
  if (!open) return null;
  return (
    <>
      <DialogOverlay />
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
        <div
          className={cn(
            "w-full max-w-md rounded-md border p-6 shadow-lg",
            className
          )}
          style={{
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-border)",
          }}
          {...props}
        >
          {children}
          {showCloseButton && (
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5", className)} {...props} />;
}

function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-base font-semibold leading-none tracking-tight", className)}
      style={{ color: "var(--color-foreground)" }}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm", className)}
      style={{ color: "var(--color-muted-foreground)" }}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex justify-end gap-3 mt-6", className)} {...props} />;
}

function DialogClose({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useDialog();
  return (
    <button onClick={() => onOpenChange(false)} {...props}>
      {children}
    </button>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};
