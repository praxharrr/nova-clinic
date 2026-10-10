export const site = {
  name: "Nova Health & Wellness",
  tagline: "Physiotherapy in Coventry",
  description:
    "Expert, one-to-one physiotherapy in Coventry for back pain, musculoskeletal conditions, post-operative rehab, neurological conditions, women's health and children.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  phone: "+44 7918 634588",
  phoneHref: "tel:+447918634588",
  whatsappNumber: "447918634588",
  // TODO: create this mailbox (or an email forward) on the domain before launch
  email: "info@novahealthandwellness.uk",
  address: {
    line1: "220 Henley Rd",
    line2: "",
    city: "Coventry",
    postcode: "CV2 1BW",
  },
  hours: [
    { days: "Thursday", time: "09:00 to 20:00" },
    { days: "Saturday", time: "09:00 to 20:00" },
    { days: "Other days", time: "Closed" },
  ],
  hoursSummary: "Thursday and Saturday, 9am to 8pm",
  openDays: [4, 6], // 0 = Sunday, 1 = Monday ... 6 = Saturday
  instagram: "https://www.instagram.com/nova.healthnwellness",
  facebook: "https://www.facebook.com/share/1CPxFDXQr7/",

  registration:
    "Our physiotherapist is registered with the HCPC and is a member of the CSP.",

  // Optional: put a photo in /public/images and set e.g. "/images/hero.jpg"
  heroImage: "/images/nova2.jpeg" as string | null,

  pricing: {
    intro: {
      title: "Introductory offer",
      price: "£60",
      detail:
        "Initial assessment plus your first treatment session, up to 1 hour in total. For new patients in their first month.",
    },
    items: [
      {
        title: "Initial assessment",
        price: "£60",
        detail:
          "A full assessment, a clear explanation of what we find and a plan for your care.",
      },
      {
        title: "Follow-up treatment",
        price: "£55",
        detail: "Per treatment session.",
      },
    ],
    packages:
      "Package discounts are available, depending on the severity of your condition and your physiotherapist's recommendation. Ask us when you book.",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fees", label: "Fees" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const fullAddress = [
  site.address.line1,
  site.address.line2,
  site.address.city,
  site.address.postcode,
]
  .filter(Boolean)
  .join(", ");