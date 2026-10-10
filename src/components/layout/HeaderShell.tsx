"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function HeaderShell({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (y < 80) {
          setHidden(false);
          lastY.current = y;
        } else if (delta > 8) {
          setHidden(true);
          lastY.current = y;
        } else if (delta < -8) {
          setHidden(false);
          lastY.current = y;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-beige-300/70 bg-beige-100/90 backdrop-blur transition-[transform,opacity] duration-500 ease-out focus-within:pointer-events-auto focus-within:translate-y-0 focus-within:opacity-100 ${
        hidden ? "pointer-events-none -translate-y-full opacity-0" : ""
      }`}
    >
      {children}
    </header>
  );
}