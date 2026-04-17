import type { Metadata } from "next";
import { Home } from "./pages/Home";

export const metadata: Metadata = {
  description:
    "NEXUS Group connects advanced digital systems, communication, and media into one seamless solution platform.",
};

export default function HomePage() {
  return <Home />;
}
