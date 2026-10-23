import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { agencyJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Legazpi City, Albay`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: site.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ROAM International Travel and Tours, Your Gateway to ROAM the World" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// Switch to false when ROAM approves the public launch.
const demoMode = true;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH" data-scroll-behavior="smooth">
      <body id="top" className="flex min-h-dvh flex-col">
        <JsonLd data={agencyJsonLd()} />
        {demoMode && (
          <div role="note" className="border-b border-line bg-mist px-4 py-2 text-center text-xs font-semibold leading-relaxed text-brand-800 sm:text-sm">
            Website Preview | For demonstration purposes only.
          </div>
        )}
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
