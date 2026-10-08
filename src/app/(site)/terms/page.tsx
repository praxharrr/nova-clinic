import type { Metadata } from "next";
import { Legal } from "@/components/ui/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms for using the ${site.name} website and requesting appointments.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Legal title="Terms of use" updated="8 October 2026">
      <p>
        By using this website you agree to these terms. If you don&apos;t
        agree, please don&apos;t use the site.
      </p>

      <h2>General information only</h2>
      <p>
        The information on this website is general and is not a substitute for
        a personal assessment or medical advice. It does not create a
        physiotherapist-patient relationship until you have been seen by us.
      </p>

      <h2>In an emergency</h2>
      <p>
        If you need urgent medical help, call 999 or go to your nearest
        emergency department. For urgent advice that isn&apos;t an emergency,
        call NHS 111. Please don&apos;t use this website or WhatsApp for
        emergencies.
      </p>

      <h2>Appointment requests</h2>
      <p>
        Requesting an appointment through the website is not a confirmed
        booking. Your appointment is confirmed only when we contact you to say
        so. We may suggest a different time if your preferred time is not
        available.
      </p>

      <h2>Changes and cancellations</h2>
      <p>
        Please give us as much notice as you can if you need to change or
        cancel an appointment. We will tell you about our cancellation terms
        when we confirm your booking.
      </p>

      <h2>Your account</h2>
      <p>
        Please keep your login details private and give us accurate
        information. Tell us straight away if you think someone else has used
        your account.
      </p>

      <h2>Our content</h2>
      <p>
        The text, design and logo on this website belong to {site.name} or are
        used with permission. Please don&apos;t copy them without asking us
        first.
      </p>

      <h2>Our responsibility</h2>
      <p>
        We take care to keep the website accurate and available, but we
        can&apos;t promise it will always be error-free or uninterrupted. We
        are not responsible for loss caused by relying on general information
        on the site. Nothing here limits our liability where the law doesn&apos;t
        allow it, including for death or personal injury caused by our
        negligence.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of England and Wales, and the
        courts of England and Wales can deal with any dispute.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </Legal>
  );
}