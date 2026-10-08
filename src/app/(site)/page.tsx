import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { fullAddress, site } from "@/lib/site";
import { ArcMotif } from "@/components/ui/ArcMotif";
import { ServiceList } from "@/components/sections/ServiceList";

const principles = [
  {
    title: "We listen first",
    text: "Your story matters. We take time to understand your pain, your goals and what a good recovery looks like for you.",
  },
  {
    title: "We explain clearly",
    text: "You'll know what we've found, what it means and why we recommend each step.",
  },
  {
    title: "We build it around you",
    text: "Your plan fits your work, family and routine, and it changes as you improve.",
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

const btnGold =
  "inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950 transition hover:bg-gold-400";

export default function Home() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 text-beige-50">
          <div className="grid items-center gap-10 px-8 pb-24 pt-16 sm:px-14 lg:grid-cols-[1.3fr_1fr] lg:pb-32 lg:pt-24">
            <div>
              <h1 className="text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">
                Physiotherapy that gets you moving again
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-beige-200/90">
                One-to-one care in Coventry for back pain, joint and muscle
                problems, recovery after surgery, neurological conditions,
                women&apos;s health and children.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/book" className={btnGold}>
                  Book an appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-beige-200/40 px-7 py-3.5 font-medium transition hover:border-gold-400 hover:text-gold-400"
                >
                  Explore services
                </Link>
              </div>
              <p className="mt-8 text-sm text-beige-200/70">
                {site.registration}
              </p>
            </div>

            <div className="relative hidden aspect-square w-full max-w-md justify-self-center lg:block">
              {site.heroImage ? (
                <Image
                  src={site.heroImage}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="rounded-3xl object-cover"
                />
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
          <div className="rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
            <h2 className="text-3xl font-medium">Book a session</h2>
            <p className="mt-3 text-forest-900/75">
              Request a time online, or call us to arrange your visit.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 font-medium text-forest-900 underline-offset-4 hover:underline"
            >
              <Phone className="size-4 text-gold-600" aria-hidden />
              {site.phone}
            </a>
          </div>

          <div className="rounded-3xl bg-beige-50 p-7 ring-1 ring-beige-300">
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
              className="mt-5 inline-block font-medium text-forest-900 underline-offset-4 hover:underline"
            >
              Get directions
            </a>
          </div>

          <div className="rounded-3xl bg-forest-800 p-7 text-beige-50">
            <h2 className="flex items-center gap-2 text-3xl font-medium">
              <Clock className="size-6 text-gold-400" aria-hidden />
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
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
            Care that starts with listening
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-forest-900/80">
            At {site.name}, every plan begins with you: how you move, what
            hurts, and what you want to get back to.
          </p>
        </div>
        <ul className="space-y-8">
          {principles.map((p) => (
            <li key={p.title} className="border-l-2 border-gold-500 pl-6">
              <h3 className="text-2xl font-medium">{p.title}</h3>
              <p className="mt-2 max-w-lg text-forest-900/75">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-medium sm:text-5xl">
            Conditions we treat
          </h2>
          <Link
            href="/services"
            className="font-medium text-forest-900 underline underline-offset-4 hover:text-forest-700"
          >
            View all services
          </Link>
        </div>
        <ServiceList />
      </section>

      {/* How it works */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <h2 className="text-4xl font-medium sm:text-5xl">How it works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-900 font-serif text-xl text-gold-400">
                {i + 1}
              </span>
              <div>
                <h3 className="text-2xl font-medium">{s.title}</h3>
                <p className="mt-1.5 text-forest-900/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Final call to action */}
      <section className="mx-auto mt-28 max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 px-8 py-16 text-beige-50 sm:px-14">
          <ArcMotif className="pointer-events-none absolute -right-24 -top-24 size-96 text-gold-500/70" />
          <div className="relative max-w-xl">
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
              Ready to start feeling better?
            </h2>
            <p className="mt-4 text-lg text-beige-200/90">
              Request an appointment online, or call us on{" "}
              <a href={site.phoneHref} className="underline underline-offset-4">
                {site.phone}
              </a>
              .
            </p>
            <Link href="/book" className={`${btnGold} mt-8`}>
              Book an appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}