import Link from "next/link";
import { Clock, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";
import { AuthLink } from "./AuthLink";
import { HeaderShell } from "./HeaderShell";

export function SiteHeader() {
  return (
    <>
      <div className="hidden bg-forest-900 text-sm text-beige-200 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <p className="flex items-center gap-2">
            <Clock className="size-4 text-gold-400" aria-hidden />
            {site.hoursSummary}
          </p>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 transition hover:text-gold-400"
          >
            <Phone className="size-4 text-gold-400" aria-hidden />
            {site.phone}
          </a>
        </div>
      </div>

      <HeaderShell>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Wordmark />

          <nav
            aria-label="Main"
            className="hidden items-center gap-9 text-[0.95rem] lg:flex"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-forest-900/80 hover:text-forest-900"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-5 lg:flex">
              <AuthLink className="link-underline text-[0.95rem] font-medium text-forest-900" />
              <Link
                href="/book"
                className="btn-shine rounded-full bg-gold-500 px-6 py-2.5 text-[0.95rem] font-medium text-forest-950 hover:bg-gold-400"
              >
                Book an appointment
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </HeaderShell>
    </>
  );
}