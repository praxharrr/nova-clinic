export const SERVICE_SLUGS = [
  "low-back-pain",
  "musculoskeletal-pain",
  "post-operative-rehab",
  "neurological-conditions",
  "womens-health",
  "paediatric-conditions",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
};

// Draft wording. We'll refine it with the clinic owner when we build the pages.
export const services: Service[] = [
  {
    slug: "low-back-pain",
    title: "Low Back Pain",
    short:
      "Assessment and treatment for acute and persistent lower back pain, helping you move comfortably again.",
  },
  {
    slug: "musculoskeletal-pain",
    title: "Musculoskeletal Pain",
    short:
      "Care for joint, muscle and tendon pain, from the neck and shoulders to the hips and knees.",
  },
  {
    slug: "post-operative-rehab",
    title: "Post-Operative Rehab",
    short:
      "Structured rehabilitation after surgery to restore strength, movement and confidence.",
  },
  {
    slug: "neurological-conditions",
    title: "Neurological Conditions",
    short:
      "Specialist rehabilitation to support movement, balance and independence.",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    short:
      "Support for pregnancy-related, postnatal and pelvic health concerns.",
  },
  {
    slug: "paediatric-conditions",
    title: "Paediatric Conditions",
    short:
      "Gentle, child-friendly physiotherapy to support development and movement.",
  },
];

export const BOOKING_SERVICE_VALUES = [...SERVICE_SLUGS, "not-sure"] as const;

export const BOOKING_SERVICE_OPTIONS = [
  ...services.map((s) => ({ value: s.slug as string, label: s.title })),
  { value: "not-sure", label: "Not sure yet" },
];

export const serviceLabel = (slug: string) =>
  BOOKING_SERVICE_OPTIONS.find((o) => o.value === slug)?.label ?? slug;