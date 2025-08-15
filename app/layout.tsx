import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jinmo Lee | KAIST EE PhD Student",
  description: "Research website of Jinmo Lee (KAIST EE, advised by Prof. Jaemin Yoo)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-[#003478]">
          <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition">morcellinus</Link>
            <NavBar />
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-5 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}