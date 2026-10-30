"use client";

import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Sheet — side drawer over Base UI Dialog (DESIGN.md §Overlays)
 * Built on Base UI Dialog (matches OpenRouter's stack).
 * - Floating surface: opaque + border + shadow, never translucent
 * - side="left" | "right" slide animation
 * - side="bottom" = phone pattern: ขึ้นจากขอบล่าง มี drag handle, มุมบนมน,
 *   max-height 88dvh (เห็นหน้าเว็บข้างหลัง = รู้ว่าปิดได้) และเว้น safe area
 *   ไว้กัน home indicator ทับปุ่ม — ดู brain/patterns/responsive-mobile-ia.md
 */

function Sheet(props: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root data-slot="sheet" {...props} />;
}

function SheetTrigger(props: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose(props: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal(props: React.ComponentProps<typeof Dialog.Portal>) {
  return <Dialog.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }: React.ComponentProps<typeof Dialog.Backdrop>) {
  return (
    <Dialog.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/80 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog.Popup> & {
  side?: "left" | "right" | "bottom";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-[var(--color-popover)] text-[var(--color-popover-foreground)] shadow-lg transition ease-in-out duration-200",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r border-[var(--color-border)] data-ending-style:-translate-x-full data-starting-style:-translate-x-full sm:max-w-sm",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l border-[var(--color-border)] data-ending-style:translate-x-full data-starting-style:translate-x-full sm:max-w-sm",
          // bottom: แกน Y แทนแกน X (ใส่ translate แยกตาม side เพื่อไม่ให้ชนกัน)
          side === "bottom" &&
            "inset-x-0 bottom-0 max-h-[88dvh] w-full rounded-t-xl border-t border-[var(--color-border)] pb-[env(safe-area-inset-bottom,0px)] data-ending-style:translate-y-full data-starting-style:translate-y-full",
          className
        )}
        {...props}
      >
        {side === "bottom" && (
          // drag handle — บอกว่าเป็น sheet ที่ปิดได้ ไม่ใช่ dialog ค้าง
          <div
            aria-hidden
            data-slot="sheet-handle"
            className="mx-auto mt-3 h-1 w-9 shrink-0 rounded-full bg-[var(--color-border)]"
          />
        )}
        {children}
        {showCloseButton && (
          <Dialog.Close
            className={cn(
              // ปุ่มปิดต้องกดง่ายบนมือถือ: 44px hit area (icon ยัง 16px)
              "absolute right-4 top-4 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:border-[var(--focus-border)] focus-visible:shadow-[var(--focus-shadow)]",
              side === "bottom" && "top-2 grid size-11 place-items-center p-0"
            )}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        )}
      </Dialog.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />;
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-footer" className={cn("mt-auto flex gap-2 p-4", className)} {...props} />;
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="sheet-title"
      className={cn("text-base font-semibold text-[var(--color-foreground)]", className)}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      data-slot="sheet-description"
      className={cn("text-sm text-[var(--color-muted-foreground)]", className)}
      {...props}
    />
  );
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
