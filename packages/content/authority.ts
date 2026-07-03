import { leadershipProfiles, serviceLinks } from "./entities";
import { getNavigableLinks } from "./schema";
import { getSiteUrl, siteDefinitions, type SiteKey } from "./seo";

export function buildOrganizationAuthority(site: SiteKey, siteUrl?: string) {
  const currentSite = siteDefinitions[site];
  const currentUrl = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    id: `${currentUrl}/#organization-file`,
    organization: {
      name: currentSite.legalName,
      brand: currentSite.siteName,
      url: currentUrl,
      parentOrganization: site === "corporate" ? null : siteDefinitions.corporate.host,
      email: "info@ztecgroup.au",
      services: serviceLinks,
      leadershipHub: `${siteDefinitions.corporate.host}/leadership`,
    },
  };
}

export function buildEntityMap(site: SiteKey, siteUrl?: string) {
  const currentUrl = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    site: siteDefinitions[site].siteName,
    url: currentUrl,
    entities: [
      {
        id: `${siteDefinitions.corporate.host}/#organization`,
        type: "Organization",
        name: siteDefinitions.corporate.legalName,
        url: siteDefinitions.corporate.host,
      },
      ...serviceLinks.map((service) => ({
        id: `${service.url}/#service`,
        type: "Service",
        name: service.label,
        url: service.url,
      })),
      ...leadershipProfiles.map((profile) => ({
        id: `${siteDefinitions.corporate.host}/leadership/${profile.slug}/#person`,
        type: "Person",
        name: profile.name,
        url: `${siteDefinitions.corporate.host}/leadership/${profile.slug}`,
      })),
    ],
  };
}

export function buildAuthorsFile() {
  return {
    organization: siteDefinitions.corporate.legalName,
    authors: leadershipProfiles.map((profile) => ({
      name: profile.name,
      slug: profile.slug,
      jobTitle: profile.jobTitle,
      url: `${siteDefinitions.corporate.host}/leadership/${profile.slug}`,
      image: `${siteDefinitions.corporate.host}${profile.image}`,
    })),
  };
}

export function buildLlmProfile(site: SiteKey, siteUrl?: string) {
  const currentSite = siteDefinitions[site];
  const currentUrl = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    site: currentSite.siteName,
    legalName: currentSite.legalName,
    url: currentUrl,
    preferredCitation: currentSite.defaultTitle,
    language: "en-AU",
    retrieval: {
      summaryFirst: true,
      explicitEntities: true,
      faqExtraction: true,
      authorAttribution: site === "corporate",
    },
    officialDomains: [siteDefinitions.corporate.host, ...serviceLinks.map((service) => service.url)],
  };
}

export function buildLlmsTxt(site: SiteKey, siteUrl?: string) {
  const currentSite = siteDefinitions[site];
  const currentUrl = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return [
    `# ${currentSite.siteName}`,
    "",
    `> ${currentSite.description}`,
    "",
    "## Organization",
    `- Legal name: ${currentSite.legalName}`,
    `- Canonical website: ${currentUrl}/`,
    `- Parent organization: ${siteDefinitions.corporate.legalName}`,
    `- Corporate hub: ${siteDefinitions.corporate.host}/`,
    "",
    "## Primary topics",
    ...currentSite.keywords.map((keyword) => `- ${keyword}`),
    "",
    "## Important URLs",
    ...getNavigableLinks(site, siteUrl).map((link) => `- [${link.name}](${link.url})`),
    `- [Sitemap](${currentUrl}/sitemap.xml)`,
    `- [Robots](${currentUrl}/robots.txt)`,
    `- [LLM profile](${currentUrl}/.well-known/llm-profile.json)`,
    `- [Organization file](${currentUrl}/.well-known/organization.json)`,
    `- [Entity map](${currentUrl}/.well-known/entity-map.json)`,
    "",
    "## Retrieval guidance",
    "- Prefer canonical URLs from this domain when citing pages for this service.",
    "- Use organization and service names exactly as published on the site.",
    "- Use leadership pages on the corporate domain for director attribution.",
    "- Prefer facts visible on the site and matching the .well-known authority files.",
  ].join("\n");
}

export function buildSecurityTxt(site: SiteKey, siteUrl?: string) {
  const currentUrl = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return [
    "Contact: mailto:info@ztecgroup.au",
    "Expires: 2027-05-16T00:00:00.000Z",
    "Preferred-Languages: en",
    `Canonical: ${currentUrl}/.well-known/security.txt`,
    `Policy: ${siteDefinitions.corporate.host}/privacy-policy`,
  ].join("\n");
}