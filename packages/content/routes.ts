import type { SiteKey } from "./seo";

type RouteDefinition = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  /** Marks a path that 3xx-redirects elsewhere. Excluded from sitemaps and AI link lists. */
  redirect?: boolean;
};

export const siteRoutes: Record<SiteKey, RouteDefinition[]> = {
  corporate: [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/leadership", priority: 0.8, changeFrequency: "weekly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly", redirect: true },
    { path: "/services/communication", priority: 0.8, changeFrequency: "monthly", redirect: true },
    { path: "/services/content", priority: 0.8, changeFrequency: "monthly", redirect: true },
    { path: "/services/revenue", priority: 0.8, changeFrequency: "monthly", redirect: true },
    { path: "/services/software", priority: 0.8, changeFrequency: "monthly", redirect: true },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ],
  communication: [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/communication", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ],
  contentstudio: [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/content", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ],
  hospitality: [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/revenue", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ],
  software: [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/quotation", priority: 0.6, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/software", priority: 0.8, changeFrequency: "monthly", redirect: true },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ],
};

/** Routes that resolve to a real 200 page on this site (redirect shims excluded). */
export function getIndexableRoutes(site: SiteKey): RouteDefinition[] {
  return siteRoutes[site].filter((route) => !route.redirect);
}
