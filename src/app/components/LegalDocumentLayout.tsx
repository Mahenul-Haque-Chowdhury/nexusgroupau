import Link from "next/link";
import { ReactNode } from "react";

interface LegalDocumentLayoutProps {
  title: string;
  lastUpdated: string;
  summary: string;
  children: ReactNode;
}

export function LegalDocumentLayout({
  title,
  lastUpdated,
  summary,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <div className="relative pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-12">
        <header className="cinematic-panel mb-8 rounded-3xl p-6 sm:p-8 md:p-10">
          <p className="cinematic-kicker mb-4">Legal</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-white/55">
            Last Updated: {lastUpdated}
          </p>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 md:text-lg">
            {summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/cookie-policy" className="transition-colors hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </header>

        <article className="cinematic-panel space-y-10 rounded-3xl p-6 leading-relaxed text-white/80 sm:p-8 md:p-10">
          {children}
        </article>
      </div>
    </div>
  );
}