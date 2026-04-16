import type { Metadata } from "next";
import { Portfolio } from "../pages/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore NEXUS Group case studies and measurable client outcomes across communication, content, software, and STR revenue systems.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
