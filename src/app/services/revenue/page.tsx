import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "STRA Management Consultation",
  description:
    "Step-by-step STRA (Short term rental accommodation) launch and operations guidance for investors and homeowners, including feasibility, compliance, pricing, and occupancy optimization.",
};

export default function RevenueServicePage() {
  return <ServiceDetail serviceId="revenue" />;
}
