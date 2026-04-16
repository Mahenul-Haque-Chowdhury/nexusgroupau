import type { Metadata } from "next";
import { CookiePolicy } from "../pages/CookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand what cookies Nexus Group uses, why they are used, and how you can manage cookie consent.",
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}
