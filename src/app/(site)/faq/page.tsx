import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { site } from "@/lib/site";

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
    a: "Fees depend on the type and length of session. Contact us for current prices, and we'll confirm them before you book.",
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

      <h1 className="text-5xl font-medium sm:text-6xl">
        Frequently asked questions
      </h1>

      <div className="mt-10 border-t border-forest-900/15">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-forest-900/15">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-2xl font-medium marker:content-none [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus
                className="size-5 shrink-0 text-gold-600 transition group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="pb-6 pr-10 leading-relaxed text-forest-900/80">
              {f.a}
            </p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-forest-900/80">
        Still have a question?{" "}
        <Link
          href="/contact"
          className="font-medium text-forest-900 underline underline-offset-4"
        >
          Get in touch
        </Link>
        .
      </p>
    </main>
  );
}