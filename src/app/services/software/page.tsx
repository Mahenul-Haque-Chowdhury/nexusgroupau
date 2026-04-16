import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Software & Business Systems",
  description:
    "Enterprise software development, automation, and scalable cloud systems.",
};

export default function SoftwareServicePage() {
  return <ServiceDetail serviceId="software" />;
}
