import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Anonymous Communication Gateway",
  description:
    "Privacy-first encrypted communication infrastructure with zero-knowledge architecture and distributed security.",
};

export default function CommunicationServicePage() {
  return <ServiceDetail serviceId="communication" />;
}
