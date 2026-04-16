import type { Metadata } from "next";
import { About } from "../pages/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NEXUS Group and our unified architecture for communication, content, software, and revenue systems.",
};

export default function AboutPage() {
  return <About />;
}
