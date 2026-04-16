import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnMount } from "./components/ScrollToTopOnMount";
import { CinematicAmbient } from "./components/CinematicAmbient";
import { Preloader } from "./components/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusgroup.ltd"),
  title: {
    default: "NEXUS Group",
    template: "%s | NEXUS Group",
  },
  description:
    "NEXUS Group connects advanced digital systems, communication, and media into one seamless solution platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
          <Preloader />
          <CinematicAmbient />
          <ScrollToTopOnMount />
          <CustomCursor />
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
