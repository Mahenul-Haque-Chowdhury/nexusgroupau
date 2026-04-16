import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Video & Motion Content Studio",
  description:
    "Premium cinematic production and motion graphics services for modern brands.",
};

export default function ContentServicePage() {
  return <ServiceDetail serviceId="content" />;
}
