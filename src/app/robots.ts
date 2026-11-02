import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/*/connexion",
        "/*/inscription",
        "/*/mon-espace",
        "/*/campus",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
