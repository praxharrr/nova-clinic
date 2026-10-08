"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { AuthLink } from "./AuthLink";

function Menu_() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="rounded-full p-2 text-forest-900 transition hover:bg-beige-200"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-beige-300 bg-beige-100 px-6 pb-6 shadow-lg"
        >
          <nav className="flex flex-col py-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-beige-200 py-3.5 font-serif text-2xl text-forest-900"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-4">
            <Link
              href="/book"
              className="flex-1 rounded-full bg-gold-500 px-5 py-3 text-center font-medium text-forest-950 transition hover:bg-gold-400"
            >
              Book an appointment
            </Link>
            <AuthLink className="font-medium text-forest-900 underline-offset-4 hover:underline" />
          </div>
        </div>
      )}
    </div>
  );
}

// Re-mounting on every route change closes the menu after navigation.
export function MobileNav() {
  const pathname = usePathname();
  return <Menu_ key={pathname} />;
}