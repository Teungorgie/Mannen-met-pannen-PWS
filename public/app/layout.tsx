import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mannenmetpannen.nl"),
  title: "Mannen met Pannen | Catering aan huis in Den Haag",
  description:
    "Mannen met Pannen verzorgt gezellige driegangendiners aan huis in Den Haag en omgeving. Kies uit een Italiaans of Frans menu voor €24,95 p.p. Wijn is optioneel.",
  openGraph: {
    title: "Mannen met Pannen | Catering aan huis in Den Haag",
    description:
      "Gezellige driegangendiners aan huis in Den Haag en omgeving. Italiaans of Frans, vanaf €24,95 p.p.",
    locale: "nl_NL",
    type: "website",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${fraunces.variable} ${workSans.variable} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
