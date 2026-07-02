import type { Metadata } from "next";
import { ServicesCatalog } from "../components/ServicesCatalog";

export const metadata: Metadata = {
  title: "Services",
  description:
    "All ZTEC Software Lab services: web and mobile development, e-commerce, SEO, tech consultancy, database and server management, ERP, CRM, HRMS, POS, inventory, project management, and custom software automation.",
  keywords: [
    "software development services",
    "web development Australia",
    "ERP CRM HRMS development",
    "custom software automation",
    "database and server management",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesCatalog />;
}
