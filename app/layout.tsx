import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://casaarcobalenotx.com"),
  title: {
    default: "Casa Arcobaleno | Home, Family & Lifestyle Support in Austin",
    template: "%s | Casa Arcobaleno"
  },
  description: site.description,
  openGraph: {
    title: "Casa Arcobaleno",
    description: site.tagline,
    url: "https://casaarcobalenotx.com",
    siteName: "Casa Arcobaleno",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-home.webp", width: 1800, height: 1200, alt: "Warm organized Austin home interior" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US"
    },
    areaServed: "Austin, Texas",
    description: site.description,
    url: "https://casaarcobalenotx.com"
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="page-fade">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
