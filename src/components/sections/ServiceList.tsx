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
            className="group relative grid items-center gap-3 py-7 md:grid-cols-[1fr_1.3fr_auto] md:gap-10"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <h3 className="text-3xl font-medium text-forest-900 transition duration-500 ease-out group-hover:translate-x-2 group-hover:text-forest-700 sm:text-4xl">
              {s.title}
            </h3>
            <p className="max-w-lg text-forest-900/75 transition duration-500 group-hover:text-forest-900">
              {s.short}
            </p>
            <span
              aria-hidden
              className="hidden size-11 items-center justify-center rounded-full border border-forest-900/25 text-forest-900 transition duration-500 group-hover:rotate-12 group-hover:border-gold-500 group-hover:bg-gold-500 md:flex"
            >
              <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}