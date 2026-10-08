export const site = {
  name: "Nova Health & Wellness",
  tagline: "Physiotherapy in Coventry",
  description:
    "Expert, one-to-one physiotherapy in Coventry for back pain, musculoskeletal conditions, post-operative rehab, neurological conditions, women's health and children.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // TODO: replace every value below with the real details
  phone: "+44 7000 000000",
  phoneHref: "tel:+447000000000",
  whatsappNumber: "447000000000", // digits only, no + or spaces
  email: "hello@example.co.uk",
  address: {
    line1: "Clinic address line 1",
    line2: "",
    city: "Coventry",
    postcode: "CV1 1AA",
  },
  hours: [
    { days: "Monday to Friday", time: "08:00 to 18:00" },
    { days: "Saturday", time: "09:00 to 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
  instagram: "", // full URL, or leave empty to hide
  facebook: "", // full URL, or leave empty to hide

  // TODO: confirm these are accurate before launch
  registration: "Our physiotherapists are registered with the HCPC.",

  // Optional: put a photo in /public/images and set e.g. "/images/hero.jpg"
  heroImage: null as string | null,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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