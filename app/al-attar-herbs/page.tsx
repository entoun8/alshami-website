import type { Metadata } from "next";
import HerbsHero from "@/components/al-attar-herbs/herbs-hero";
import HerbsHistory from "@/components/al-attar-herbs/herbs-history";
import HerbsProducts from "@/components/al-attar-herbs/herbs-products";

export const metadata: Metadata = {
  title: "Al-Attar Herbs — 100% Natural Syrian Herbal Teas Since 1990 | Alshami Australia",
  description:
    "Discover Al-Attar Herbs — a pioneering Syrian herbal pharmaceutical brand founded in Damascus in 1990. 100% natural, allergen-free herbal teas crafted in specialised research laboratories, now available across Australia.",
  openGraph: {
    title: "Al-Attar Herbs — 100% Natural Syrian Herbal Teas Since 1990 | Alshami Australia",
    description:
      "Discover Al-Attar Herbs — a pioneering Syrian herbal pharmaceutical brand founded in Damascus in 1990. 100% natural, allergen-free herbal teas crafted in specialised research laboratories, now available across Australia.",
  },
};

export default function AlAttarHerbsPage() {
  return (
    <main>
      <HerbsHero />
      <HerbsHistory />
      <HerbsProducts />
    </main>
  );
}
