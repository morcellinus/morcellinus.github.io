import "./globals.css";
import type { Metadata, Viewport } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jinmo Lee | NUMS AI & SNU CSE",
  description: "Jinmo Lee, Founding Research Scientist at NUMS AI and PhD student at SNU CSE, researching tabular foundation models and heterogeneous graphs.",
  metadataBase: new URL("https://morcellinus.github.io"),
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#003478" };

const analyticsId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="bg-[#003478]">
          <div className="site-container flex flex-col items-start justify-between gap-1 py-3 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
            <Link href="/" className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition">morcellinus</Link>
            <NavBar />
          </div>
        </header>
        <main id="main-content" className="site-container site-main">{children}</main>
        <Footer />
        {analyticsId && (
          <Script
            src="https://cloud.umami.is/script.js"
            strategy="afterInteractive"
            data-website-id={analyticsId}
            data-domains="morcellinus.github.io"
            data-exclude-search="true"
            data-exclude-hash="true"
            data-do-not-track="true"
          />
        )}
      </body>
    </html>
  );
}
