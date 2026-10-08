import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { serviceLabel } from "@/lib/data/services";
import { slotLabel } from "@/lib/data/booking";
import { formatDate, formatDateTime } from "@/lib/dates";
import { StatusActions } from "@/components/admin/StatusActions";

const FILTERS = ["pending", "confirmed", "completed", "cancelled"] as const;

const BADGE: Record<string, string> = {
  pending: "bg-gold-500/20 text-gold-600",
  confirmed: "bg-forest-100 text-forest-800",
  completed: "bg-beige-200 text-forest-900/70",
  cancelled: "bg-red-100 text-red-800",
};

export default async function AdminAppointmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const { status } = await searchParams;
  const filter = FILTERS.find((f) => f === status);

  let query = supabase
    .from("appointments")
    .select(
      "id, service, preferred_date, preferred_slot, note, status, created_at, profiles(full_name, email, phone)"
    )
    .order("created_at", { ascending: false });
  if (filter) query = query.eq("status", filter);

  const [{ data: appointments, error }, { data: all }] = await Promise.all([
    query,
    supabase.from("appointments").select("status"),
  ]);

  const counts: Record<string, number> = {};
  all?.forEach((a) => {
    counts[a.status] = (counts[a.status] ?? 0) + 1;
  });

  return (
    <>
      <h1 className="text-5xl font-semibold">Appointments</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/admin"
          className={`rounded-full px-4 py-2 text-sm ${
            !filter
              ? "bg-forest-900 text-beige-50"
              : "bg-white/60 ring-1 ring-beige-300 hover:bg-white"
          }`}
        >
          All ({all?.length ?? 0})
        </Link>
        {FILTERS.map((f) => (
          <Link
            key={f}
            href={`/admin?status=${f}`}
            className={`rounded-full px-4 py-2 text-sm capitalize ${
              filter === f
                ? "bg-forest-900 text-beige-50"
                : "bg-white/60 ring-1 ring-beige-300 hover:bg-white"
            }`}
          >
            {f} ({counts[f] ?? 0})
          </Link>
        ))}
      </div>

      {error && (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          Couldn&apos;t load appointments: {error.message}
        </p>
      )}

      {!error && !appointments?.length && (
        <p className="mt-8 text-forest-900/70">No appointments here yet.</p>
      )}

      <ul className="mt-8 space-y-4">
        {appointments?.map((a) => {
          const p = Array.isArray(a.profiles) ? a.profiles[0] : a.profiles;
          return (
            <li
              key={a.id}
              className="rounded-2xl bg-white/60 p-6 ring-1 ring-beige-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold">
                    {p?.full_name || "Unnamed patient"}
                  </p>
                  <p className="mt-1 text-sm text-forest-900/70">
                    {p?.phone && (
                      <a href={`tel:${p.phone}`} className="hover:underline">
                        {p.phone}
                      </a>
                    )}
                    {p?.phone && p?.email && " · "}
                    {p?.email && (
                      <a href={`mailto:${p.email}`} className="hover:underline">
                        {p.email}
                      </a>
                    )}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                    BADGE[a.status] ?? ""
                  }`}
                >
                  {a.status}
                </span>
              </div>

              <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-forest-900/60">Service</dt>
                  <dd className="mt-0.5 font-medium">
                    {serviceLabel(a.service)}
                  </dd>
                </div>
                <div>
                  <dt className="text-forest-900/60">Preferred time</dt>
                  <dd className="mt-0.5 font-medium">
                    {formatDate(a.preferred_date)} ·{" "}
                    {slotLabel(a.preferred_slot)}
                  </dd>
                </div>
                <div>
                  <dt className="text-forest-900/60">Requested</dt>
                  <dd className="mt-0.5 font-medium">
                    {formatDateTime(a.created_at)}
                  </dd>
                </div>
              </dl>

              {a.note && (
                <p className="mt-4 rounded-xl bg-beige-100 px-4 py-3 text-sm whitespace-pre-wrap">
                  <span className="mb-1 block text-forest-900/60">
                    Patient message
                  </span>
                  {a.note}
                </p>
              )}

              <div className="mt-5">
                <StatusActions id={a.id} current={a.status} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}