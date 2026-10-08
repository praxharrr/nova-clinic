import type { Metadata } from "next";
import Link from "next/link";
import { ServiceList } from "@/components/sections/ServiceList";

export const metadata: Metadata = {
  title: "Physiotherapy services in Coventry",
  description:
    "Physiotherapy for low back pain, musculoskeletal pain, post-operative rehab, neurological conditions, women's health and paediatric conditions in Coventry.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="text-5xl font-medium sm:text-6xl">Our services</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-900/80">
        Whatever brought you here, we start by understanding what is going on
        and what you want to get back to. Choose a service to learn more.
      </p>

      <div className="mt-12">
        <ServiceList />
      </div>

      <p className="mt-12 text-forest-900/80">
        Not sure which service you need?{" "}
        <Link
          href="/book?service=not-sure"
          className="font-medium text-forest-900 underline underline-offset-4"
        >
          Request an appointment
        </Link>{" "}
        and we&apos;ll point you in the right direction.
      </p>
    </main>
  );
}