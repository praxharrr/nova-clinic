import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { fullAddress, site } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Contact ${site.name} in Coventry to ask a question or arrange a physiotherapy appointment.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress,
  )}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress,
  )}`;

  const methods = [
    {
      icon: Phone,
      label: site.phone,
      href: site.phoneHref,
      external: false,
    },
    {
      icon: MessageCircle,
      label: "Message us on WhatsApp",
      href: `https://wa.me/${site.whatsappNumber}`,
      external: true,
    },
    {
      icon: Mail,
      label: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: MapPin,
      label: fullAddress,
      href: mapsUrl,
      external: true,
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="rise rise-1 text-5xl font-medium sm:text-6xl">
        Get in touch
      </h1>
      <p className="rise rise-2 mt-5 max-w-2xl text-lg leading-relaxed text-forest-900/80">
        Ask us a question or tell us what you need. To request an appointment
        directly, use our booking page.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-10">
          <ul className="space-y-3">
            {methods.map((m, i) => {
              const Icon = m.icon;
              return (
                <li key={m.href}>
                  <Reveal delay={i * 80}>
                    <a
                      href={m.href}
                      {...(m.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-2xl bg-beige-50 p-4 text-lg ring-1 ring-beige-300 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-950/10 hover:ring-gold-500/70"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold-400 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="transition duration-300 group-hover:translate-x-1">
                        {m.label}
                      </span>
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal>
            <SpotlightCard className="group rounded-3xl bg-forest-900 p-7 text-beige-50">
              <h2 className="flex items-center gap-2 text-3xl font-medium">
                <Clock
                  className="size-6 text-gold-400 transition duration-700 group-hover:rotate-[360deg]"
                  aria-hidden
                />
                Opening hours
              </h2>
              <dl className="mt-4 space-y-2">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between gap-4 border-b border-beige-200/15 pb-2 last:border-0"
                  >
                    <dt className="text-beige-200/80">{h.days}</dt>
                    <dd className="font-medium">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <iframe
              title={`Map showing ${site.name}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full rounded-3xl border-0 ring-1 ring-beige-300"
            />
          </Reveal>
        </div>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}