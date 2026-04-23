import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alshami",
  description: "Authentic Syrian brands in Australia — Alshami Coffee and Al-Attar Herbs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-[6.4rem] sm:pt-[7.2rem] md:pt-[8.3rem] lg:pt-[9.9rem]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
