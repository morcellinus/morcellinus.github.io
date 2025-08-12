import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jinmo Lee | KAIST EE PhD Student",
  description: "Research website of Jinmo Lee (KAIST EE, advised by Prof. Jaemin Yoo)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container py-5 flex items-center justify-between">
            <div className="text-lg font-bold tracking-tight">Jinmo Lee</div>
            <NavBar />
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}