import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Plus } from "lucide-react";
import { site } from "@/lib/site";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: `Answers to common questions about physiotherapy appointments at ${site.name} in Coventry.`,
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Do I need a GP referral?",
    a: "No. You can book directly with us. If you plan to claim through private medical insurance, please check your insurer's requirements first, as some ask for a referral or pre-authorisation.",
  },
  {
    q: "What should I wear?",
    a: "Wear comfortable clothing that lets us see and move the area we're assessing, such as shorts and a T-shirt for a leg or back problem. We'll make sure you feel comfortable and covered throughout.",
  },
  {
    q: "How long is a session?",
    a: "Your first session is longer than follow-ups because it includes a full assessment. We'll confirm the exact length when we confirm your appointment.",
  },
  {
    q: "How much does it cost?",
    a: `An initial assessment is ${site.pricing.items[0].price} and each follow-up treatment session is ${site.pricing.items[1].price}. New patients can also take our introductory offer: your assessment plus first treatment, up to 1 hour in total, for ${site.pricing.intro.price} in their first month. Package discounts may be available, so ask us when you book. You can see everything on our fees page.`,
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your condition, how long you've had it and your goals. After your assessment we'll give you an honest idea of what to expect and review it as you progress.",
  },
  {
    q: "Will treatment be painful?",
    a: "Some techniques or exercises can feel uncomfortable, but treatment should not be unbearably painful. We explain what we are doing, and you can ask us to stop or adjust at any time.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. A parent or carer stays with the child during the session, and we use play-based activities to make it enjoyable.",
  },
  {
    q: "Can I bring someone with me?",
    a: "Yes. You're welcome to bring a family member, friend or carer to your appointment.",
  },
  {
    q: "How do I book or change an appointment?",
    a: "Request a time online and we'll contact you to confirm. To change or cancel, reply to your confirmation email, call us or message us on WhatsApp.",
  },
  {
    q: "Is my personal information kept safe?",
    a: "We only ask for the details we need to arrange your care and handle them in line with UK data protection law. Please don't put detailed medical history into online forms, as we'll go through it with you in person. Our privacy policy explains more.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <h1 className="rise rise-1 text-5xl font-medium sm:text-6xl">
        Frequently asked questions
      </h1>

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={(i % 4) * 60}>
            <details className="group rounded-2xl bg-beige-50 ring-1 ring-beige-300 transition duration-300 hover:-translate-y-0.5 hover:ring-gold-500/70 open:shadow-lg open:shadow-forest-950/10">
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
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SpotlightCard className="group mt-14 rounded-[2rem] bg-forest-900 p-8 text-beige-50 sm:p-10">
          <h2 className="text-3xl font-medium sm:text-4xl">
            Still have a question?
          </h2>
          <p className="mt-3 text-beige-200/90">
            Send us a message or reach us directly. We&apos;re happy to help.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-gold inline-flex rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950"
            >
              Get in touch
            </Link>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 rounded-full border border-beige-200/40 px-7 py-3.5 font-medium"
            >
              <MessageCircle className="size-5" aria-hidden />
              WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="btn-fill inline-flex items-center gap-2 rounded-full border border-beige-200/40 px-7 py-3.5 font-medium"
            >
              <Phone className="size-5" aria-hidden />
              Call us
            </a>
          </div>
        </SpotlightCard>
      </Reveal>
    </main>
  );
}