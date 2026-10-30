"use client";

import * as React from "react";

/**
 * useIsPhone — บอกว่า layout ปัจจุบันเป็น "phone" (แคบกว่า lg) หรือไม่
 *
 * ทำไมต้องมี hook นี้:
 * - โครงนำทางของระบบนี้เปลี่ยนรูปที่ 1024px (sidebar → bottom tab bar) และ
 *   overlay เปลี่ยนทางขึ้น (ลอยกลาง → ขึ้นจากขอบล่าง) — component ที่ต้องเลือก
 *   "โครง" ไม่ใช่แค่ style จึงต้องรู้ผลจาก JS ด้วย ไม่ใช่รู้แค่ใน CSS
 * - ต้องเป็นค่าเดียวกับ CSS: PHONE_QUERY = ต่ำกว่า lg (64rem = 1024px) อยู่ 0.02px
 *   เพื่อกัน subpixel ตอน zoom — ถ้าแก้ breakpoint ต้องแก้ที่ globals.css ด้วย
 *
 * SSR-safe: ฝั่ง server/before hydration คืน false (desktop) แล้วค่อย sync
 * หลัง hydrate — หลีกเลี่ยง hydration mismatch โดยไม่ต้องใส่ suppressHydrationWarning
 */

export const PHONE_QUERY = "(max-width: 1023.98px)";

// MediaQueryList ตัวเดียวต่อหน้า — matchMedia ซ้ำ ๆ ทุก render เปลืองและทำให้
// addEventListener ผูกซ้ำได้
let mql: MediaQueryList | null = null;

function getMql(): MediaQueryList | null {
  if (typeof window === "undefined") return null;
  if (!mql) mql = window.matchMedia(PHONE_QUERY);
  return mql;
}

function subscribe(onChange: () => void): () => void {
  const m = getMql();
  if (!m) return () => {};
  m.addEventListener("change", onChange);
  return () => m.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
  return getMql()?.matches ?? false;
}

// server + ก่อน hydrate = desktop: sidebar โผล่ก่อนแล้วค่อยยุบเป็น tab bar
// (ถ้าเดาเป็น phone จะเห็น tab bar แวบหนึ่งบนจอ desktop ซึ่งน่ารำคาญกว่า)
function getServerSnapshot(): boolean {
  return false;
}

export function useIsPhone(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
