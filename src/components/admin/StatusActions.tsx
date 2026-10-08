import { updateAppointmentStatus } from "@/actions/admin";

const ACTIONS = [
  { status: "confirmed", label: "Confirm" },
  { status: "completed", label: "Complete" },
  { status: "cancelled", label: "Cancel" },
  { status: "pending", label: "Reset" },
];

export function StatusActions({
  id,
  current,
}: {
  id: string;
  current: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {ACTIONS.filter((a) => a.status !== current).map((a) => (
        <form key={a.status} action={updateAppointmentStatus}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="status" value={a.status} />
          <button
            type="submit"
            className="rounded-full border border-forest-900/30 px-3.5 py-1.5 text-xs font-medium transition hover:bg-forest-900 hover:text-beige-50"
          >
            {a.label}
          </button>
        </form>
      ))}
    </div>
  );
}