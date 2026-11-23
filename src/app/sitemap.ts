import type { MetadataRoute } from "next";
import { courses, notes } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/research", "/courses", "/about", "/privacy"].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const courseRoutes = courses.map((course) => ({
    url: `${site.url}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const noteRoutes = notes.map((note) => ({
    url: `${site.url}/notes/${note.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...noteRoutes];
}
