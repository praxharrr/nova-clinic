import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { fullAddress, site } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Contact ${site.name} in Coventry to ask a question or arrange a physiotherapy appointment.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&output=embed`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="text-5xl font-medium sm:text-6xl">Get in touch</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-900/80">
        Ask us a question or tell us what you need. To request an appointment
        directly, use our booking page.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-10">
          <ul className="space-y-5 text-lg">
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-gold-600" aria-hidden />
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-4">
              <MessageCircle
                className="mt-1 size-5 shrink-0 text-gold-600"
                aria-hidden
              />
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Message us on WhatsApp
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-gold-600" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-gold-600" aria-hidden />
              <span>{fullAddress}</span>
            </li>
          </ul>

          <div>
            <h2 className="flex items-center gap-2 text-3xl font-medium">
              <Clock className="size-6 text-gold-600" aria-hidden />
              Opening hours
            </h2>
            <dl className="mt-4 max-w-sm space-y-2">
              {site.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between gap-4 border-b border-forest-900/10 pb-2"
                >
                  <dt className="text-forest-900/75">{h.days}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <iframe
            title={`Map showing ${site.name}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-3xl border-0 ring-1 ring-beige-300"
          />
        </div>

        <ContactForm />
      </div>
    </main>
  );
}