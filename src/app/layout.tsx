import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnMount } from "./components/ScrollToTopOnMount";
import { CinematicAmbient } from "./components/CinematicAmbient";
import { Preloader } from "./components/Preloader";

export const viewport: Viewport = {
  themeColor: "#070a12",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusgroup.ltd"),
  applicationName: "NexusGroup Limited",
  title: {
    default: "NexusGroup Limited - Unified Ecosystem of Digital Services",
    template: "%s | NexusGroup Limited - Unified Ecosystem of Digital Services",
  },
  description:
    "NEXUS Group connects advanced digital systems, communication, and media into one seamless solution platform.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  other: {
    "msapplication-TileColor": "#070a12",
    "msapplication-config": "/browserconfig.xml",
  },
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
