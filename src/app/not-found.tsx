import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h1 className="text-6xl font-medium">Page not found</h1>
        <p className="mt-4 text-lg text-forest-900/80">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-forest-900 px-7 py-3.5 font-medium text-beige-50 transition hover:bg-forest-800"
          >
            Go to the home page
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-forest-900/30 px-7 py-3.5 font-medium transition hover:border-gold-500"
          >
            View services
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}