import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { SITE_URL } from "@/config";
import { skills, categories } from "@/data/skills";
import { courses } from "@/data/courses";

/**
 * Only public, indexable routes. Private/placeholder routes (parcours,
 * tutoriels, projets, connexion, legal, mon-espace, campus) are excluded and
 * also carry `robots: noindex` on their pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/formations",
    ...courses.map((c) => `/formations/${c.slug}`),
    "/skills",
    ...skills.map((s) => `/skills/${s.slug}`),
    ...categories.map((c) => `/categories/${c.slug}`),
    "/a-propos",
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}/${locales[0]}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
      ),
    },
  }));
}
