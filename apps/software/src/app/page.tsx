import type { Metadata } from "next";
import { buildFaqSchema, serializeJsonLd, siteFaqs } from "@ztecgroup/content";
import { SoftwareExperience } from "./components/SoftwareExperience";
import { Faq } from "./components/Faq";

export const metadata: Metadata = {
  title: {
    absolute: "ZTEC Software Lab | Custom Software Development & Automation in Australia",
  },
  description:
    "ZTEC Software Lab delivers custom software development, web and mobile apps, business process automation, and systems architecture for Australian enterprise operations. A ZTEC Group Pty Ltd service.",
  keywords: [
    "custom software development Australia",
    "business process automation",
    "web application development",
    "enterprise software architecture",
    "systems integration",
    "API integration",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = buildFaqSchema("software", process.env.NEXT_PUBLIC_SITE_URL);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      ) : null}
      <SoftwareExperience />
      <section
        aria-labelledby="faq-heading"
        className="relative z-10 px-5 pb-28 pt-6 sm:px-8 md:pb-36 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="cinematic-kicker">FAQ</span>
            <h2
              id="faq-heading"
              className="mt-7 text-[clamp(1.9rem,4.2vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-14">
            <Faq items={siteFaqs.software} />
          </div>
        </div>
      </section>
    </>
  );
}
