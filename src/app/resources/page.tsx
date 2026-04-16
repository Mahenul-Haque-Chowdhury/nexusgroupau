import type { Metadata } from "next";
import { Resources } from "../pages/Resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download NEXUS Group whitepapers, case studies, and educational resources on secure communication and digital infrastructure.",
};

export default function ResourcesPage() {
  return <Resources />;
}
