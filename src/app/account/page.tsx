import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/actions/auth";
import { serviceLabel } from "@/lib/data/services";
import { slotLabel } from "@/lib/data/booking";
import { formatDate } from "@/lib/dates";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?next=/account");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email, phone")
    .eq("id", user.id)
    .single();

  const { data: appointments } = await supabase
    .from("appointments")
    .select("id, service, preferred_date, preferred_slot, status")
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-5xl font-semibold">
        Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
      </h1>
      <p className="mt-4">{profile?.email}</p>
      <p>{profile?.phone}</p>

      <section className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold">Your appointments</h2>
          <Link
            href="/book"
            className="rounded-full bg-forest-900 px-5 py-2.5 text-sm font-medium text-beige-50 transition hover:bg-forest-800"
          >
            Book new
          </Link>
        </div>

        {appointments?.length ? (
          <ul className="mt-6 space-y-3">
            {appointments.map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between gap-4 rounded-2xl bg-white/60 p-5 ring-1 ring-beige-300"
              >
                <div>
                  <p className="font-medium">{serviceLabel(a.service)}</p>
                  <p className="text-sm text-forest-900/70">
                    {formatDate(a.preferred_date)} ·{" "}
                    {slotLabel(a.preferred_slot)}
                  </p>
                </div>
                <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-medium capitalize text-gold-600">
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-forest-900/70">No appointments yet.</p>
        )}
      </section>

      <form action={signOut} className="mt-12">
        <button
          type="submit"
          className="rounded-full border border-forest-900 px-6 py-3 transition hover:bg-forest-900 hover:text-beige-50"
        >
          Log out
        </button>
      </form>
    </main>
  );
}