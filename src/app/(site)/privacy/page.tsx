import type { Metadata } from "next";
import { Legal } from "@/components/ui/Legal";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Legal title="Privacy policy" updated="8 October 2026">
      <p>
        This policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
        collects and uses your personal information when you use our website,
        create an account, request an appointment or contact us.
      </p>

      <h2>Who we are</h2>
      <p>
        We are the data controller for the information described here. You can
        contact us at <a href={`mailto:${site.email}`}>{site.email}</a>, on{" "}
        {site.phone}, or by post at {fullAddress}.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account details:</strong> your name, email address, phone
          number and password (stored securely, in encrypted form).
        </li>
        <li>
          <strong>Appointment requests:</strong> the service you want, your
          preferred date and time of day, any message you choose to add, and
          the status of your request.
        </li>
        <li>
          <strong>Enquiries:</strong> your name, email, phone number (if given)
          and the message you send us.
        </li>
        <li>
          <strong>Technical information:</strong> essential cookies that keep
          you logged in, and standard server logs.
        </li>
      </ul>

      <h2>How and why we use it</h2>
      <ul>
        <li>
          To create and manage your account, and to handle your appointment
          requests and keep you informed about them. This is necessary to
          take steps at your request before providing care.
        </li>
        <li>
          To reply to your enquiries, which is in our legitimate interests and
          yours.
        </li>
        <li>
          To keep our website secure and working properly, which is in our
          legitimate interests.
        </li>
        <li>
          To meet our legal and professional obligations, such as keeping
          records.
        </li>
      </ul>
      <p>
        We tell you what we collect at the point you give it to us, and we ask
        for your consent where you submit a form.
      </p>

      <h2>Health information</h2>
      <p>
        Information about your health is especially sensitive. Please don&apos;t
        include detailed medical history in website forms or messages. We will
        go through it with you at your appointment. Clinical information
        discussed in your sessions is recorded in our clinic records, which are
        handled separately from this website.
      </p>

      <h2>Who we share it with</h2>
      <p>We do not sell your information. We use trusted providers to run our website:</p>
      <ul>
        <li>Vercel, which hosts our website</li>
        <li>Supabase, which provides our database and login system</li>
        <li>Resend, which sends our emails</li>
      </ul>
      <p>
        These providers only process information on our instructions. We may
        also share information where the law requires it or to protect
        someone&apos;s safety.
      </p>

      <h2>Where your information is stored</h2>
      <p>
        Our database is hosted in the UK or the European Economic Area. Some of
        our providers may process limited information elsewhere, including the
        United States. Where they do, we rely on appropriate safeguards such as
        approved international data transfer arrangements.
      </p>

      <h2>Cookies</h2>
      <p>
        We use only essential cookies that keep you signed in to your account.
        We don&apos;t use advertising or analytics cookies. If that changes, we
        will update this page and ask for your consent first.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep account and appointment request information while your account
        is active and for as long as needed afterwards for legal, accounting
        and professional reasons. Clinical records are kept for the periods
        recommended by professional guidance. You can ask us to close your
        account at any time.
      </p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>ask for a copy of the information we hold about you</li>
        <li>ask us to correct anything that is wrong</li>
        <li>ask us to delete your information, in some circumstances</li>
        <li>ask us to restrict or stop using your information, in some circumstances</li>
        <li>receive your information in a portable format, in some circumstances</li>
      </ul>
      <p>
        To use any of these rights, contact us using the details above.
      </p>

      <h2>Complaints</h2>
      <p>
        If you&apos;re unhappy with how we handle your information, please tell
        us first so we can put it right. You can also complain to the
        Information Commissioner&apos;s Office at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>{" "}
        or on 0303 123 1113.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows
        when it was last changed.
      </p>
    </Legal>
  );
}