"use client";

import { useEffect } from "react";

export function ThemeInit() {
  useEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t === "light" || t === "dark") {
        document.documentElement.dataset.theme = t;
      }
    } catch {}
  }, []);

  return null;
}
