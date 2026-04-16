import type { Metadata } from "next";
import { TermsOfService } from "../pages/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms and conditions that govern use of Nexus Group Pty Ltd services.",
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
