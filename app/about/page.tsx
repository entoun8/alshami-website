import type { Metadata } from "next";
import AboutContent from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Us — Alshami | Authentic Syrian Brands in Australia",
  description:
    "Learn about Alshami — the Australian business importing iconic Syrian brands Alshami Coffee and Al-Attar Herbs directly from Damascus. Discover our story, Syrian heritage, and mission.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
