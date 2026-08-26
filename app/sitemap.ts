import type { MetadataRoute } from "next";

const BASE_URL = "https://mannenmetpannen.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menus", "/zo-werkt-het", "/over-ons", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
