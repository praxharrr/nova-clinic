"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";

const hiddenOn = ["/book", "/login", "/signup", "/account", "/admin"];

export function MobileBookBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 220;
      setShow(window.scrollY > 400 && !nearBottom);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  if (hiddenOn.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-beige-100 via-beige-100/80 to-transparent pb-4 pl-4 pr-20 pt-8 transition duration-500 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Link
        href="/book"
        className="btn-gold pointer-events-auto flex items-center justify-center gap-2 rounded-full bg-gold-500 py-3.5 font-medium text-forest-950 shadow-lg"
      >
        <CalendarCheck className="size-5" aria-hidden />
        Book an appointment
      </Link>
    </div>
  );
}