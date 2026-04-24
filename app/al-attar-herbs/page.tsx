import type { Metadata } from "next";
import BrandHero from "@/components/brand-hero";
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
      <BrandHero
        estLabel="Est. Damascus, 1990"
        heading="Al-Attar Herbs"
        description="Over 35 years of herbal expertise. 100% natural, allergen-free herbal teas crafted in specialised research laboratories — rooted in Syria's ancient tradition of natural medicine."
        imageSrc="/media/images/Untitled-20260422-133751-1683-2x.png"
        imageAlt="Al-Attar Herbs — 100% natural Syrian herbal teas since 1990"
      />
      <HerbsHistory />
      <HerbsProducts />
    </main>
  );
}
