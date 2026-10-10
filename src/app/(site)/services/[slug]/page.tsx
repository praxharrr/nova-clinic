import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Phone } from "lucide-react";
import { SERVICE_SLUGS, services } from "@/lib/data/services";
import { serviceDetails } from "@/lib/data/service-details";
import { site } from "@/lib/site";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

const find = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = find(slug);
  if (!service) return {};
  return {
    title: `${service.title} physiotherapy in Coventry`,
    description: service.short,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = find(slug);
  if (!service) notFound();

  const detail = serviceDetails[service.slug];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <nav aria-label="Breadcrumb" className="text-sm text-forest-900/70">
        <Link href="/services" className="link-underline">
          Services
        </Link>{" "}
        / <span aria-current="page">{service.title}</span>
      </nav>

      <h1 className="rise rise-1 mt-4 text-5xl font-medium sm:text-6xl">
        {service.title}
      </h1>
      <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-forest-900/85">
        {detail.intro}
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="space-y-14">
          <Reveal>
            <section>
              <h2 className="text-3xl font-medium sm:text-4xl">
                What we can help with
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {detail.helpsWith.map((item) => (
                  <li
                    key={item}
                    className="group flex gap-3 rounded-2xl bg-beige-50 p-4 ring-1 ring-beige-300 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-950/10 hover:ring-gold-500/70"
                  >
                    <Check
                      className="mt-1 size-5 shrink-0 text-gold-600 transition duration-300 group-hover:scale-125"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <section>
            <Reveal>
              <h2 className="text-3xl font-medium sm:text-4xl">How we help</h2>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {detail.approach.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 100}>
                    <SpotlightCard className="group rounded-2xl border-l-4 border-gold-500 bg-beige-50 p-5 ring-1 ring-beige-300">
                      <p className="transition duration-500 group-hover:translate-x-1">
                        {item}
                      </p>
                    </SpotlightCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          <Reveal>
            <section>
              <h2 className="text-3xl font-medium sm:text-4xl">
                Your first visit
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-forest-900/80">
                {detail.firstVisit}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <SpotlightCard className="group rounded-2xl bg-beige-50 p-5 ring-1 ring-beige-300">
                  <p className="text-sm text-forest-900/60">
                    Initial assessment
                  </p>
                  <p className="mt-1 font-serif text-4xl text-forest-900">
                    {site.pricing.items[0].price}
                  </p>
                  <p className="mt-2 text-sm text-forest-900/75">
                    New patients can use our introductory offer at{" "}
                    {site.pricing.intro.price}.
                  </p>
                </SpotlightCard>
                <SpotlightCard className="group rounded-2xl bg-beige-50 p-5 ring-1 ring-beige-300">
                  <p className="flex items-center gap-2 text-sm text-forest-900/60">
                    <Clock className="size-4 text-gold-600" aria-hidden />
                    Opening hours
                  </p>
                  <p className="mt-2 text-forest-900">{site.hoursSummary}</p>
                  <p className="mt-2 text-sm text-forest-900/75">
                    Wear comfortable clothing that lets us see and move the area
                    we are assessing.
                  </p>
                </SpotlightCard>
              </div>
            </section>
          </Reveal>
        </div>

        <aside className="h-fit rounded-3xl bg-forest-900 p-8 text-beige-50 lg:sticky lg:top-28">
          <h2 className="text-3xl font-medium">Book {service.title}</h2>
          <p className="mt-3 text-beige-200/85">
            Tell us what suits you and we&apos;ll confirm your appointment.
          </p>
          <Link
            href={`/book?service=${service.slug}`}
            className="btn-gold mt-6 flex justify-center rounded-full bg-gold-500 px-6 py-3.5 font-medium text-forest-950"
          >
            Request an appointment
          </Link>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-beige-200 transition hover:text-gold-400"
          >
            <Phone className="size-4" aria-hidden />
            or call {site.phone}
          </a>
          <p className="mt-6 border-t border-beige-200/15 pt-5 text-sm text-beige-200/80">
            {site.registration}
          </p>
        </aside>
      </div>

      <section className="mt-20">
        <Reveal>
          <h2 className="text-3xl font-medium">Other services</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block rounded-full border border-forest-900/25 px-5 py-2.5 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-500/15 hover:shadow-md"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </main>
  );
}