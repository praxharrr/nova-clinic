import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, MessageCircle, Target } from "lucide-react";
import { ServiceList } from "@/components/sections/ServiceList";
import { Pricing } from "@/components/sections/Pricing";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Physiotherapy services in Coventry",
  description:
    "Physiotherapy for low back pain, musculoskeletal pain, post-operative rehab, neurological conditions, women's health and paediatric conditions in Coventry.",
  alternates: { canonical: "/services" },
};

const included = [
  {
    icon: ClipboardList,
    title: "A full assessment",
    text: "We look at how you move and examine the area that is bothering you.",
  },
  {
    icon: MessageCircle,
    title: "A clear explanation",
    text: "You hear what we found and what it means, in plain English.",
  },
  {
    icon: Target,
    title: "A plan built around you",
    text: "Treatment and exercises agreed with you, aimed at what you want to get back to.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="rise rise-1 text-5xl font-medium sm:text-6xl">
        Our services
      </h1>
      <p className="rise rise-2 mt-5 max-w-2xl text-lg leading-relaxed text-forest-900/80">
        Whatever brought you here, we start by understanding what is going on
        and what you want to get back to. Choose a service to learn more.
      </p>

      <div className="mt-12">
        <Reveal>
          <ServiceList />
        </Reveal>
      </div>

      <section className="mt-24">
        <Reveal>
          <h2 className="text-4xl font-medium sm:text-5xl">
            Every appointment includes
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {included.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <Reveal delay={i * 120} className="h-full">
                  <SpotlightCard className="group h-full rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
                    <span className="flex size-12 items-center justify-center rounded-full bg-forest-900 text-gold-400 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-2xl font-medium">{item.title}</h3>
                    <p className="mt-2 text-forest-900/75">{item.text}</p>
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-24">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Simple, clear fees
            </h2>
            <Link
              href="/fees"
              className="link-underline font-medium text-forest-900 hover:text-forest-700"
            >
              See all fees
            </Link>
          </div>
          <Pricing />
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <SpotlightCard className="group rounded-[2rem] bg-forest-900 px-8 py-12 text-beige-50 sm:px-12">
            <h2 className="text-3xl font-medium sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-beige-200/90">
              Request an appointment and we&apos;ll point you in the right
              direction.
            </p>
            <Link
              href="/book?service=not-sure"
              className="btn-gold mt-7 inline-flex rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950"
            >
              Request an appointment
            </Link>
          </SpotlightCard>
        </Reveal>
      </section>
    </main>
  );
}