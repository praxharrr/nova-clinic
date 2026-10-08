import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/faq",
    "/contact",
    "/book",
    "/privacy",
    "/terms",
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${site.url}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}