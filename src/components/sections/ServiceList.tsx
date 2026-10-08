import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";

export function ServiceList() {
  return (
    <ul className="divide-y divide-forest-900/15 border-y border-forest-900/15">
      {services.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/services/${s.slug}`}
            className="group grid items-center gap-3 py-7 md:grid-cols-[1fr_1.3fr_auto] md:gap-10"
          >
            <h3 className="text-3xl font-medium text-forest-900 transition group-hover:text-forest-700 sm:text-4xl">
              {s.title}
            </h3>
            <p className="max-w-lg text-forest-900/75">{s.short}</p>
            <span
              aria-hidden
              className="hidden size-11 items-center justify-center rounded-full border border-forest-900/25 text-forest-900 transition group-hover:border-gold-500 group-hover:bg-gold-500 md:flex"
            >
              <ArrowUpRight className="size-5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}