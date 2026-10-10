import Image from "next/image";
import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
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
        className="size-11 rounded-md sm:size-14"
      />
      <span className="flex flex-col items-center leading-none">
        <span className="font-serif text-3xl tracking-[0.4em] text-forest-900 sm:text-4xl">
          NOVA
        </span>
        <span className="mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-forest-700 sm:text-[10px]">
          <span aria-hidden="true" className="h-px w-5 bg-gold-500 sm:w-8" />
          Health &amp; Wellness
          <span aria-hidden="true" className="h-px w-5 bg-gold-500 sm:w-8" />
        </span>
      </span>
    </Link>
  );
}