import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { BookingForm } from "@/components/booking/BookingForm";
import { BOOKING_SERVICE_VALUES } from "@/lib/data/services";
import { upcomingOpenDates } from "@/lib/dates";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Book an appointment" };

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService = (BOOKING_SERVICE_VALUES as readonly string[]).includes(
    service ?? ""
  )
    ? service
    : undefined;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const dates = upcomingOpenDates(site.openDays, 12);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-5xl font-semibold">Book an appointment</h1>
      <p className="mt-3 mb-8 text-forest-900/80">
        Tell us what you need and when suits you. We&apos;ll confirm your
        appointment shortly.
      </p>

      {user ? (
        <BookingForm defaultService={defaultService} dates={dates} />
      ) : (
        <div className="space-y-4 rounded-3xl bg-white/60 p-8 text-center ring-1 ring-beige-300">
          <p className="text-lg">
            Please log in or create an account to request an appointment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/login?next=/book"
              className="rounded-full bg-forest-900 px-6 py-3 font-medium text-beige-50 transition hover:bg-forest-800"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full border border-forest-900 px-6 py-3 font-medium transition hover:bg-forest-900 hover:text-beige-50"
            >
              Create account
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}