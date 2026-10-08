import { requireAdmin } from "@/lib/auth";
import { formatDateTime } from "@/lib/dates";

export default async function AdminPatientsPage() {
  const { supabase } = await requireAdmin();

  const { data: patients, error } = await supabase
    .from("profiles")
    .select("id, full_name, email, phone, created_at, appointments(count)")
    .order("created_at", { ascending: false });

  return (
    <>
      <h1 className="text-5xl font-semibold">Patients</h1>

      {error && (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          Couldn&apos;t load patients: {error.message}
        </p>
      )}

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white/60 ring-1 ring-beige-300">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-beige-300 text-forest-900/60">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Phone</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Bookings</th>
              <th className="px-5 py-3 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {patients?.map((p) => {
              const count = Array.isArray(p.appointments)
                ? (p.appointments[0]?.count ?? 0)
                : 0;
              return (
                <tr key={p.id} className="border-b border-beige-200 last:border-0">
                  <td className="px-5 py-3 font-medium">
                    {p.full_name || "-"}
                  </td>
                  <td className="px-5 py-3">{p.phone || "-"}</td>
                  <td className="px-5 py-3">{p.email}</td>
                  <td className="px-5 py-3">{count}</td>
                  <td className="px-5 py-3">{formatDateTime(p.created_at)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!patients?.length && !error && (
          <p className="px-5 py-6 text-forest-900/70">No patients yet.</p>
        )}
      </div>
    </>
  );
}