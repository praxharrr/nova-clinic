import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, fullAddress } from "@/lib/site";
import { services } from "@/lib/data/services";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-forest-900 text-beige-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Wordmark inverted />
          <p className="max-w-xs text-sm leading-relaxed text-beige-200/80">
            {site.tagline}. Personalised, one-to-one care to help you move well
            and feel well.
          </p>
          <p className="max-w-xs text-sm text-beige-200/70">
            {site.registration}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-beige-50">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition hover:text-gold-400"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-beige-50">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <span>{fullAddress}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={site.phoneHref} className="hover:text-gold-400">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-beige-50">Opening hours</h2>
          <dl className="mt-4 space-y-2.5 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt>{h.days}</dt>
                <dd className="text-beige-50">{h.time}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex gap-5 text-sm">
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-gold-400 hover:underline"
              >
                Instagram
              </a>
            )}
            {site.facebook && (
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-gold-400 hover:underline"
              >
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-beige-200/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-beige-200/70">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-400">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}