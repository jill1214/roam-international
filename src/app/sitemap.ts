import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { tours } from "@/data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tours", "/services", "/about", "/travel-inspiration", "/faqs", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...tours.map((t) => ({ url: `${site.url}/tours/${t.slug}`, changeFrequency: "weekly" as const, priority: 0.9 })),
  ];
}
