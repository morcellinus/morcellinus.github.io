import "./globals.css";
import type { Metadata, Viewport } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jinmo Lee | NUMS AI & SNU CSE",
  description: "Jinmo Lee, Founding Research Scientist at NUMS AI and PhD student at SNU CSE, researching tabular foundation models and heterogeneous graphs.",
  metadataBase: new URL("https://morcellinus.github.io"),
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#003478" };

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
        <main id="main-content" className="site-container py-6 sm:py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
