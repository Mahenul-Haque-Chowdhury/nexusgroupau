import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore NEXUS Group case studies and measurable client outcomes across communication, content, software, and STRA (Short term rental accommodation) revenue systems.",
};

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden pt-24">
      <div className="relative flex min-h-[78svh] items-center justify-center px-5 sm:px-8 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-amber-400/12 blur-3xl" />
        </div>

        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/55">Portfolio</p>
          <h1 className="mb-5 animate-pulse bg-gradient-to-r from-white via-white/92 to-white/70 bg-clip-text text-[clamp(2rem,8vw,4.5rem)] font-bold tracking-tight text-transparent">
            Under Construction
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            We are preparing this section and will publish portfolio case studies soon.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-white/75 [animation-delay:0ms]" />
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-white/75 [animation-delay:180ms]" />
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-white/75 [animation-delay:360ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
