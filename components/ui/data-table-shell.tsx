"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * DataTableShell — app-style table frame (verified on /demo, OR-pattern)
 *
 * - กรอบสูงเท่าพื้นที่จอที่เหลือใต้ controls (วัดจาก controlsRef ด้วย ResizeObserver)
 * - header: static อยู่นิ่งเหนือข้อมูลเสมอ (ข้อมูลไม่ลอดหลังหัว)
 * - data area: scroll ภายใน (scrollbar ซ่อน)
 * - ตั้ง --or-table-sticky-top ให้ controls block เองด้วย (ตัวแปรจากตอน sticky thead)
 */
function DataTableShell({
  controlsRef,
  header,
  children,
  className,
  dataClassName,
  fillParent = false,
}: {
  controlsRef?: React.RefObject<HTMLDivElement | null>;
  header?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  dataClassName?: string;
  fillParent?: boolean;
}) {
  const frameRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const controls = controlsRef?.current;
    const frame = frameRef.current;
    if (!controls || !frame) return;
    const update = () => frame.style.setProperty("--or-table-sticky-top", `${Math.round(controls.getBoundingClientRect().bottom)}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(controls);
    return () => ro.disconnect();
  }, [controlsRef]);

  return (
    <div ref={frameRef} className={cn("flex flex-col overflow-hidden rounded-lg bg-card", fillParent && "min-h-0 flex-1", className)} style={fillParent ? undefined : { height: "calc(100dvh - var(--or-table-sticky-top, 223px) - 1rem)" }}>
      <div className="rounded-t-lg border-t border-x border-border bg-card">{header}</div>
      <div className={cn("min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-b-lg border-x border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", dataClassName)}>{children}</div>
    </div>
  );
}

export { DataTableShell };
