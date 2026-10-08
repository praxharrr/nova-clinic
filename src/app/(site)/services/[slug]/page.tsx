import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { SERVICE_SLUGS, services } from "@/lib/data/services";
import { serviceDetails } from "@/lib/data/service-details";
import { site } from "@/lib/site";

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
        <Link href="/services" className="hover:underline">
          Services
        </Link>{" "}
        / <span aria-current="page">{service.title}</span>
      </nav>

      <h1 className="mt-4 text-5xl font-medium sm:text-6xl">{service.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-900/85">
        {detail.intro}
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="space-y-14">
          <section>
            <h2 className="text-3xl font-medium sm:text-4xl">
              What we can help with
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {detail.helpsWith.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    className="mt-1 size-5 shrink-0 text-gold-600"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-medium sm:text-4xl">How we help</h2>
            <ul className="mt-6 space-y-4">
              {detail.approach.map((item) => (
                <li key={item} className="border-l-2 border-gold-500 pl-5">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-medium sm:text-4xl">
              Your first visit
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-forest-900/80">
              {detail.firstVisit}
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-3xl bg-forest-900 p-8 text-beige-50 lg:sticky lg:top-28">
          <h2 className="text-3xl font-medium">Book {service.title}</h2>
          <p className="mt-3 text-beige-200/85">
            Tell us what suits you and we&apos;ll confirm your appointment.
          </p>
          <Link
            href={`/book?service=${service.slug}`}
            className="mt-6 flex justify-center rounded-full bg-gold-500 px-6 py-3.5 font-medium text-forest-950 transition hover:bg-gold-400"
          >
            Request an appointment
          </Link>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-beige-200 hover:text-gold-400"
          >
            <Phone className="size-4" aria-hidden />
            or call {site.phone}
          </a>
        </aside>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-medium">Other services</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-block rounded-full border border-forest-900/25 px-5 py-2.5 text-sm transition hover:border-gold-500 hover:bg-gold-500/15"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}