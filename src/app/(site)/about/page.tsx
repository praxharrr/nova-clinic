import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { team } from "@/lib/data/team";

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

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="max-w-3xl text-5xl font-medium leading-tight sm:text-6xl">
        Physiotherapy that is personal, clear and built around you
      </h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
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
        <div className="h-fit rounded-3xl bg-forest-900 p-8 text-beige-50">
          <h2 className="text-3xl font-medium">Registered and regulated</h2>
          <p className="mt-3 text-beige-200/85">{site.registration}</p>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-4xl font-medium sm:text-5xl">What we stand for</h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="border-l-2 border-gold-500 pl-6">
              <h3 className="text-2xl font-medium">{v.title}</h3>
              <p className="mt-2 text-forest-900/75">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24">
        <h2 className="text-4xl font-medium sm:text-5xl">Meet the team</h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <li
              key={m.name}
              className="flex gap-6 rounded-3xl bg-beige-50 p-6 ring-1 ring-beige-300"
            >
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={112}
                  height={112}
                  className="size-28 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex size-28 shrink-0 items-center justify-center rounded-full bg-forest-900 font-serif text-3xl text-gold-400"
                >
                  {initials(m.name)}
                </div>
              )}
              <div>
                <h3 className="text-2xl font-medium">{m.name}</h3>
                <p className="text-sm text-gold-600">{m.role}</p>
                <p className="mt-3 text-forest-900/75">{m.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24 rounded-[2rem] bg-beige-200 px-8 py-14 text-center sm:px-14">
        <h2 className="text-4xl font-medium sm:text-5xl">
          Let&apos;s talk about how we can help
        </h2>
        <Link
          href="/book"
          className="mt-8 inline-flex rounded-full bg-forest-900 px-8 py-3.5 font-medium text-beige-50 transition hover:bg-forest-800"
        >
          Book an appointment
        </Link>
      </section>
    </main>
  );
}