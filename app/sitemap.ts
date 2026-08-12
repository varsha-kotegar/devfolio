import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data";

const base = "https://varshakotegar.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/playground`, changeFrequency: "monthly", priority: 0.6 },
    ...caseStudies.map((cs) => ({
      url: `${base}/projects/${cs.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
