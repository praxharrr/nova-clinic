import Link from "next/link";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  const main = inverted ? "text-beige-50" : "text-forest-900";
  const sub = inverted ? "text-beige-200" : "text-forest-900/80";

  return (
    <Link
      href="/"
      aria-label="Nova Health & Wellness, home"
      className="inline-flex flex-col items-center leading-none"
    >
      <span
        className={`font-serif text-3xl font-semibold tracking-[0.32em] ${main}`}
      >
        NOVA
      </span>
      <span
        className={`mt-1.5 flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] ${sub}`}
      >
        <span className="h-px w-4 bg-gold-500" />
        Health &amp; Wellness
        <span className="h-px w-4 bg-gold-500" />
      </span>
    </Link>
  );
}