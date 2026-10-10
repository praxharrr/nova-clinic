import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Package, ShieldCheck } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fees",
  description: `Clear, simple physiotherapy fees at ${site.name} in Coventry, including our introductory offer for new patients.`,
  alternates: { canonical: "/fees" },
};

const goodToKnow = [
  {
    icon: Gift,
    title: "Introductory offer",
    text: site.pricing.intro.detail,
  },
  {
    icon: Package,
    title: "Package discounts",
    text: site.pricing.packages,
  },
  {
    icon: ShieldCheck,
    title: "Private medical insurance",
    text: "If you plan to claim through your insurer, please check their requirements first, as some ask for a referral or pre-authorisation.",
  },
];

export default function FeesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="rise rise-1 text-5xl font-medium sm:text-6xl">Fees</h1>
      <p className="rise rise-2 mt-5 max-w-2xl text-lg leading-relaxed text-forest-900/80">
        Straightforward pricing, so you know what to expect before you book.
      </p>

      <div className="mt-12">
        <Reveal>
          <Pricing />
        </Reveal>
      </div>

      <section className="mt-24">
        <Reveal>
          <h2 className="text-4xl font-medium sm:text-5xl">Good to know</h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {goodToKnow.map((item, i) => {
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
          <div className="rounded-[2rem] bg-beige-200 px-8 py-14 text-center sm:px-14">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Ready to book your first session?
            </h2>
            <p className="mt-3 text-lg text-forest-900/80">
              Questions about fees?{" "}
              <Link
                href="/contact"
                className="link-underline font-medium text-forest-900"
              >
                Get in touch
              </Link>
              .
            </p>
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