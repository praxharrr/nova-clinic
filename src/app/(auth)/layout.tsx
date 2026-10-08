import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Link href="/" className="mb-8 text-center">
        <span className="block font-serif text-4xl font-semibold tracking-[0.3em] text-forest-900">
          NOVA
        </span>
        <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-forest-900/70">
          Health &amp; Wellness
        </span>
      </Link>
      <div className="w-full max-w-md rounded-3xl bg-white/60 p-8 shadow-sm ring-1 ring-beige-300">
        {children}
      </div>
    </main>
  );
}