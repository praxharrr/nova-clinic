import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { signOut } from "@/actions/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen">
      <header className="bg-forest-900 text-beige-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="font-serif text-2xl tracking-[0.25em]">
              NOVA
              <span className="ml-3 font-sans text-xs uppercase tracking-[0.2em] text-gold-400">
                Dashboard
              </span>
            </Link>
            <nav className="flex gap-5 text-sm">
              <Link href="/admin" className="hover:text-gold-400">
                Appointments
              </Link>
              <Link href="/admin/patients" className="hover:text-gold-400">
                Patients
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/" className="hover:text-gold-400">
              View site
            </Link>
            <form action={signOut}>
              <button type="submit" className="hover:text-gold-400">
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </div>
  );
}