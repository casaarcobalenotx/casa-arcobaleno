import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://casaarcobalenotx.com";
  const routes = ["", "/services", "/about", "/gallery", "/contact", ...services.map((service) => service.href)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-20"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
