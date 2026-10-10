import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Ear,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { fullAddress, site } from "@/lib/site";
import { ArcMotif } from "@/components/ui/ArcMotif";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { ServiceList } from "@/components/sections/ServiceList";
import { Pricing } from "@/components/sections/Pricing";

const principles = [
  {
    icon: Ear,
    title: "We listen first",
    text: "Your story matters. We take time to understand your pain, your goals and what a good recovery looks like for you.",
    detail:
      "Your first visit includes time to talk through your history, symptoms and goals.",
  },
  {
    icon: MessageCircle,
    title: "We explain clearly",
    text: "You'll know what we've found, what it means and why we recommend each step.",
    detail:
      "Plain-English explanations of what is going on and what the plan involves, with no jargon.",
  },
  {
    icon: SlidersHorizontal,
    title: "We build it around you",
    text: "Your plan fits your work, family and routine, and it changes as you improve.",
    detail: "Exercises and advice you can realistically fit into your week.",
  },
];

const steps = [
  {
    title: "Request a time",
    text: "Choose a service and the time of day that suits you.",
  },
  {
    title: "We confirm",
    text: "Our team contacts you to confirm your appointment.",
  },
  {
    title: "Your first session",
    text: "We assess, explain what we find and agree a plan with you.",
  },
];

const homeFaqs = [
  {
    q: "Do I need a GP referral?",
    a: "No. You can book directly with us. If you plan to claim through private medical insurance, please check your insurer's requirements first, as some ask for a referral or pre-authorisation.",
  },
  {
    q: "What should I wear?",
    a: "Wear comfortable clothing that lets us see and move the area we're assessing, such as shorts and a T-shirt for a leg or back problem. We'll make sure you feel comfortable and covered throughout.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your condition, how long you've had it and your goals. After your assessment we'll give you an honest idea of what to expect and review it as you progress.",
  },
  {
    q: "Will treatment be painful?",
    a: "Some techniques or exercises can feel uncomfortable, but treatment should not be unbearably painful. We explain what we are doing, and you can ask us to stop or adjust at any time.",
  },
];

const btnGold =
  "btn-gold group inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950";

const arrow =
  "ml-0 h-5 w-0 opacity-0 transition-all duration-500 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100";

export default function Home() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress,
  )}`;

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 text-beige-50">
          <div className="grid items-center gap-10 px-8 pb-24 pt-16 sm:px-14 lg:grid-cols-[1.3fr_1fr] lg:pb-32 lg:pt-24">
            <div>
              <h1 className="rise rise-1 text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">
                Physiotherapy that gets you moving again
              </h1>
              <p className="rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-beige-200/90">
                One-to-one care in Coventry for back pain, joint and muscle
                problems, recovery after surgery, neurological conditions,
                women&apos;s health and children.
              </p>
              <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-4">
                <Link href="/book" className={btnGold}>
                  Book an appointment
                  <ArrowRight className={arrow} aria-hidden />
                </Link>
                <Link
                  href="/services"
                  className="btn-fill inline-flex items-center justify-center rounded-full border border-beige-200/40 px-7 py-3.5 font-medium"
                >
                  Explore services
                </Link>
              </div>
              <p className="rise rise-4 mt-8 text-sm text-beige-200/70">
                {site.registration}
              </p>
            </div>

            <div className="fade-scale relative hidden aspect-[4/5] w-full max-w-md justify-self-center lg:block">
              {site.heroImage ? (
                <div className="hover-zoom absolute inset-0 rounded-3xl">
                  <Parallax className="absolute inset-x-0 -inset-y-10">
                    <Image
                      src={site.heroImage}
                      alt="Physiotherapist guiding a patient through a resistance band exercise"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </Parallax>
                </div>
              ) : (
                <>
                  <ArcMotif className="absolute inset-0 size-full text-gold-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-16 text-center font-serif text-2xl text-beige-100">
                    <span>One-to-one sessions</span>
                    <span className="mx-auto h-px w-10 bg-gold-500" />
                    <span>Personalised plans</span>
                    <span className="mx-auto h-px w-10 bg-gold-500" />
                    <span>Clear explanations</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <SpotlightCard className="group rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
            <h2 className="text-3xl font-medium">Book a session</h2>
            <p className="mt-3 text-forest-900/75">
              Request a time online, or call us to arrange your visit.
            </p>
            <a
              href={site.phoneHref}
              className="link-underline mt-5 inline-flex items-center gap-2 font-medium text-forest-900"
            >
              <Phone className="size-4 text-gold-600" aria-hidden />
              {site.phone}
            </a>
          </SpotlightCard>

          <SpotlightCard className="group rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
            <h2 className="text-3xl font-medium">Visit the clinic</h2>
            <p className="mt-3 flex gap-2 text-forest-900/75">
              <MapPin
                className="mt-1 size-4 shrink-0 text-gold-600"
                aria-hidden
              />
              {fullAddress}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 inline-block font-medium text-forest-900"
            >
              Get directions
            </a>
          </SpotlightCard>

          <SpotlightCard className="group rounded-3xl bg-forest-800 p-7 text-beige-50">
            <h2 className="flex items-center gap-2 text-3xl font-medium">
              <Clock
                className="size-6 text-gold-400 transition duration-700 group-hover:rotate-[360deg]"
                aria-hidden
              />
              Opening hours
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
              {site.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between gap-4 border-b border-beige-200/15 pb-2 last:border-0"
                >
                  <dt className="text-beige-200/80">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </SpotlightCard>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
            Care that starts with listening
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-forest-900/80">
            At {site.name}, every plan begins with you: how you move, what
            hurts, and what you want to get back to.
          </p>
          <div className="hover-zoom relative mt-8 aspect-[4/3] max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/nova3.jpeg"
              alt="Physiotherapist checking a patient's shoulder in a treatment room"
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover object-[50%_80%]"
            />
          </div>
        </Reveal>

        <ul className="space-y-5">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <li key={p.title}>
                <Reveal delay={i * 120}>
                  <SpotlightCard className="group rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
                    <div className="flex gap-5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold-400 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-2xl font-medium transition duration-500 group-hover:translate-x-1">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-forest-900/75">{p.text}</p>
                        <p className="mt-3 border-t border-forest-900/10 pt-3 text-sm text-forest-900/60">
                          {p.detail}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}

          <li>
            <Reveal delay={360}>
              <SpotlightCard className="group flex items-center gap-5 rounded-3xl bg-forest-900 p-7 text-beige-50">
                <ShieldCheck
                  className="size-10 shrink-0 text-gold-400 transition duration-500 group-hover:scale-110"
                  aria-hidden
                />
                <div>
                  <h3 className="text-2xl font-medium">
                    Registered and regulated
                  </h3>
                  <p className="mt-1 text-beige-200/85">{site.registration}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        </ul>
      </section>

      {/* Services */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Conditions we treat
            </h2>
            <Link
              href="/services"
              className="link-underline font-medium text-forest-900 hover:text-forest-700"
            >
              View all services
            </Link>
          </div>
          <ServiceList />
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
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

      {/* How it works */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <Reveal>
          <h2 className="text-4xl font-medium sm:text-5xl">How it works</h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 120} className="h-full">
                <SpotlightCard className="group h-full rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
                  <span className="flex size-12 items-center justify-center rounded-full bg-forest-900 font-serif text-2xl text-gold-400 transition duration-500 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-forest-900/75">{s.text}</p>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
              Questions before you book?
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-forest-900/80">
              A few quick answers to what people ask us most.
            </p>
            <Link
              href="/faq"
              className="link-underline mt-6 inline-block font-medium text-forest-900"
            >
              See all questions
            </Link>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-beige-50 ring-1 ring-beige-300 transition duration-300 hover:ring-gold-500/70 open:shadow-lg open:shadow-forest-950/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-serif text-2xl font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    className="size-5 shrink-0 text-gold-600 transition duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="px-6 pb-6 pr-10 leading-relaxed text-forest-900/80">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Final call to action */}
      <section className="mx-auto mt-28 max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 px-8 py-16 text-beige-50 sm:px-14">
            <div className="hover-zoom absolute inset-y-0 right-0 hidden w-2/5 lg:block">
              <Image
                src="/images/nova1.jpeg"
                alt="Treatment room with a physiotherapist assisting a patient"
                fill
                sizes="40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/30 to-transparent" />
            </div>
            <ArcMotif className="pointer-events-none absolute -right-24 -top-24 size-96 text-gold-500/70 lg:hidden" />
            <div className="relative max-w-xl">
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                Ready to start feeling better?
              </h2>
              <p className="mt-4 text-lg text-beige-200/90">
                Request an appointment online, or call us on{" "}
                <a
                  href={site.phoneHref}
                  className="underline underline-offset-4"
                >
                  {site.phone}
                </a>
                .
              </p>
              <Link href="/book" className={`${btnGold} mt-8`}>
                Book an appointment
                <ArrowRight className={arrow} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}