import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  PoundSterling,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { fullAddress, site } from "@/lib/site";
import { team } from "@/lib/data/team";
import { services } from "@/lib/data/services";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About us",
  description: `Meet the team at ${site.name}, a physiotherapy clinic in Coventry offering personalised, one-to-one care.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Personal, one-to-one care",
    text: "You see a physiotherapist who knows your name, your history and your goals, not a different face each visit.",
  },
  {
    title: "Honest advice",
    text: "We tell you what we think is going on, what to expect and when treatment is, and isn't, the right next step.",
  },
  {
    title: "Active recovery",
    text: "Hands-on treatment can help, but lasting results come from movement and strength. We teach you how to keep progressing.",
  },
];

const reasons = [
  {
    icon: UserRound,
    title: "One-to-one care",
    text: "Every appointment is just you and your physiotherapist, with no rushing between patients.",
  },
  {
    icon: Clock,
    title: "Evening appointments",
    text: `Open ${site.hoursSummary}, so care can fit around work and family.`,
  },
  {
    icon: PoundSterling,
    title: "Clear fees",
    text: `Initial assessment ${site.pricing.items[0].price}, follow-up treatment ${site.pricing.items[1].price}. No surprises.`,
  },
  {
    icon: HeartHandshake,
    title: "Plans that fit your life",
    text: "Exercises and advice you can realistically fit into your week.",
  },
];

const firstVisit = [
  {
    title: "We talk",
    text: "We start with your story: what is going on, how it affects you and what you want to get back to.",
  },
  {
    title: "We assess",
    text: "We look at how you move and examine the area that is bothering you.",
  },
  {
    title: "We explain",
    text: "You hear what we found and what it means, in plain English.",
  },
  {
    title: "We agree a plan",
    text: "Treatment, exercises and what to expect over the coming weeks, all agreed with you.",
  },
];

const teamFacts = [
  "HCPC registered",
  "CSP member",
  "Over 2 years of UK clinical experience",
  "Remote care experience",
];

const teamAreas = [
  "Musculoskeletal",
  "Neurological",
  "Orthopaedic",
  "Acute care",
  "Rehabilitation",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export default function AboutPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress,
  )}`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="rise rise-1 max-w-3xl text-5xl font-medium leading-tight sm:text-6xl">
        Physiotherapy that is personal, clear and built around you
      </h1>
      <div className="rise rise-2 mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="space-y-5 text-lg leading-relaxed text-forest-900/85">
          <p>
            {site.name} is a physiotherapy clinic in Coventry. We help people
            of all ages move better, recover from injury or surgery and live
            with less pain.
          </p>
          <p>
            Good physiotherapy is personal. We take the time to listen, assess
            carefully and explain what we find, so you always understand your
            plan and can take part in decisions about your care.
          </p>
        </div>
        <SpotlightCard className="h-fit rounded-3xl bg-forest-900 p-8 text-beige-50">
          <h2 className="text-3xl font-medium">Registered and regulated</h2>
          <p className="mt-3 text-beige-200/85">{site.registration}</p>
        </SpotlightCard>
      </div>

      {/* Why choose us */}
      <section className="mt-24">
        <Reveal>
          <h2 className="text-4xl font-medium sm:text-5xl">
            Why people choose {site.name}
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <li key={r.title}>
                <Reveal delay={i * 100} className="h-full">
                  <SpotlightCard className="group h-full rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
                    <span className="flex size-12 items-center justify-center rounded-full bg-forest-900 text-gold-400 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-2xl font-medium">{r.title}</h3>
                    <p className="mt-2 text-forest-900/75">{r.text}</p>
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Values */}
      <section className="mt-24">
        <Reveal>
          <h2 className="text-4xl font-medium sm:text-5xl">What we stand for</h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={i * 100} className="h-full">
                <SpotlightCard className="group h-full rounded-3xl border-l-4 border-gold-500 bg-beige-50 p-7 ring-1 ring-beige-300">
                  <h3 className="text-2xl font-medium transition duration-500 group-hover:translate-x-1">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-forest-900/75">{v.text}</p>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Team */}
      <section className="mt-24">
        <Reveal>
          <h2 className="text-4xl font-medium sm:text-5xl">Meet the team</h2>
        </Reveal>
        <ul className="mt-10 space-y-8">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal>
                <SpotlightCard className="group grid overflow-hidden rounded-[2rem] bg-beige-50 ring-1 ring-beige-300 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="hover-zoom relative min-h-[26rem] lg:min-h-[34rem]">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="flex h-full min-h-[26rem] items-center justify-center bg-forest-900 font-serif text-8xl text-gold-400"
                      >
                        {initials(m.name)}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <h3 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-xl font-semibold text-gold-600">
                      {m.role}
                    </p>

                    {i === 0 && (
                      <>
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {teamFacts.map((f) => (
                            <li
                              key={f}
                              className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-4 py-1.5 text-sm font-semibold text-beige-50"
                            >
                              <ShieldCheck
                                className="size-4 text-gold-400"
                                aria-hidden
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {teamAreas.map((a) => (
                            <li
                              key={a}
                              className="rounded-full border border-forest-900/25 bg-beige-100 px-4 py-1.5 text-sm font-semibold text-forest-900"
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <p className="mt-6 text-lg font-medium leading-relaxed text-forest-900">
                      {m.bio}
                    </p>

                    <div>
                      <Link
                        href="/book"
                        className="btn-gold mt-8 inline-flex rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950"
                      >
                        Book with {m.name.split(" ")[0]}
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* What we treat */}
      <section className="mt-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-medium sm:text-5xl">What we treat</h2>
            <Link
              href="/services"
              className="link-underline font-medium text-forest-900 hover:text-forest-700"
            >
              View all services
            </Link>
          </div>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <Link href={`/services/${s.slug}`} className="block h-full">
                  <SpotlightCard className="group h-full rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium">{s.title}</h3>
                      <span
                        aria-hidden
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-forest-900/25 transition duration-500 group-hover:rotate-12 group-hover:border-gold-500 group-hover:bg-gold-500"
                      >
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <p className="mt-2 text-forest-900/75">{s.short}</p>
                  </SpotlightCard>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* First visit */}
      <section className="mt-24 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="hover-zoom relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/nova4.jpeg"
              alt="Treatment room at the clinic"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
              What to expect at your first visit
            </h2>
            <p className="mt-4 max-w-xl text-lg text-forest-900/80">
              Wear comfortable clothing that lets us see and move the area we
              are assessing. We will make sure you feel comfortable throughout.
            </p>
          </Reveal>
          <ol className="mt-8 space-y-4">
            {firstVisit.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 100}>
                  <SpotlightCard className="group flex gap-5 rounded-3xl bg-beige-50 p-6 ring-1 ring-beige-300">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-900 font-serif text-xl text-gold-400 transition duration-500 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-medium">{s.title}</h3>
                      <p className="mt-1 text-forest-900/75">{s.text}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Visit us */}
      <section className="mt-24">
        <Reveal>
          <SpotlightCard className="group grid gap-10 rounded-[2rem] bg-forest-900 p-8 text-beige-50 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-medium sm:text-5xl">Visit us</h2>
              <p className="mt-5 flex gap-2 text-lg text-beige-200/90">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-gold-400"
                  aria-hidden
                />
                {fullAddress}
              </p>
              <a
                href={site.phoneHref}
                className="link-underline mt-4 inline-flex items-center gap-2 text-lg"
              >
                <Phone className="size-5 text-gold-400" aria-hidden />
                {site.phone}
              </a>
              <div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-8 inline-flex rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-2xl font-medium">
                <Clock className="size-6 text-gold-400" aria-hidden />
                Opening hours
              </h3>
              <dl className="mt-4 space-y-3">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between gap-4 border-b border-beige-200/15 pb-3 last:border-0"
                  >
                    <dt className="text-beige-200/80">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>

      {/* Closing call to action */}
      <section className="mt-24">
        <Reveal>
          <div className="rounded-[2rem] bg-beige-200 px-8 py-14 text-center sm:px-14">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Let&apos;s talk about how we can help
            </h2>
            <Link
              href="/book"
              className="btn-shine mt-8 inline-flex rounded-full bg-forest-900 px-8 py-3.5 font-medium text-beige-50 hover:bg-forest-800"
            >
              Book an appointment
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}