import Image from "next/image";
import Link from "next/link";

export function Wordmark({
  className = "",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Nova Health & Wellness, home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={96}
        height={96}
        priority
        className="hover-tilt size-11 rounded-md sm:size-14"
      />
      <span className="flex flex-col items-center leading-none">
        <span
          className={`font-serif text-3xl tracking-[0.4em] sm:text-4xl ${
            inverted ? "text-beige-50" : "text-forest-900"
          }`}
        >
          NOVA
        </span>
        <span
          className={`mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] sm:text-[10px] ${
            inverted ? "text-beige-200" : "text-forest-700"
          }`}
        >
          <span aria-hidden="true" className="h-px w-5 bg-gold-500 sm:w-8" />
          Health &amp; Wellness
          <span aria-hidden="true" className="h-px w-5 bg-gold-500 sm:w-8" />
        </span>
      </span>
    </Link>
  );
}