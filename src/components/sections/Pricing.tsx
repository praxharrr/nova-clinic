import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Pricing() {
  const { intro, items, packages } = site.pricing;

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        <SpotlightCard className="group rounded-3xl bg-forest-900 p-8 text-beige-50">
          <h3 className="text-3xl font-medium">{intro.title}</h3>
          <p className="mt-5 origin-left font-serif text-6xl text-gold-400 transition duration-500 group-hover:scale-110">
            {intro.price}
          </p>
          <p className="mt-4 text-beige-200/90">{intro.detail}</p>
        </SpotlightCard>

        {items.map((item) => (
          <SpotlightCard
            key={item.title}
            className="group rounded-3xl bg-beige-50 p-8 ring-1 ring-beige-300"
          >
            <h3 className="text-3xl font-medium">{item.title}</h3>
            <p className="mt-5 origin-left font-serif text-6xl text-forest-900 transition duration-500 group-hover:scale-110">
              {item.price}
            </p>
            <p className="mt-4 text-forest-900/75">{item.detail}</p>
          </SpotlightCard>
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-forest-900/80">{packages}</p>
      <Link
        href="/book"
        className="btn-gold group mt-6 inline-flex items-center rounded-full bg-gold-500 px-7 py-3.5 font-medium text-forest-950"
      >
        Book an appointment
        <ArrowRight
          className="ml-0 h-5 w-0 opacity-0 transition-all duration-500 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100"
          aria-hidden
        />
      </Link>
    </div>
  );
}