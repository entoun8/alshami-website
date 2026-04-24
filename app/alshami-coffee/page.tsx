import type { Metadata } from "next";
import BrandHero from "@/components/brand-hero";
import CoffeeHistory from "@/components/alshami-coffee/coffee-history";
import CoffeeProducts from "@/components/alshami-coffee/coffee-products";

export const metadata: Metadata = {
  title: "Alshami Coffee — Authentic Syrian Coffee Since 1924 | Alshami Australia",
  description:
    "Discover Alshami Coffee — a historic Damascus brand founded in 1924. Premium Arabica beans, natural green cardamom, and over 100 years of Levantine coffee heritage, now available across Australia.",
  openGraph: {
    title: "Alshami Coffee — Authentic Syrian Coffee Since 1924 | Alshami Australia",
    description:
      "Discover Alshami Coffee — a historic Damascus brand founded in 1924. Premium Arabica beans, natural green cardamom, and over 100 years of Levantine coffee heritage, now available across Australia.",
  },
};

export default function AlshamiCoffeePage() {
  return (
    <main>
      <BrandHero
        estLabel="Est. Damascus, 1924"
        heading="Alshami Coffee"
        description="Over 100 years of heritage. Premium Arabica beans, natural green cardamom, and the authentic flavour of traditional Levantine coffee — now in Australia."
        imageSrc="/media/images/Untitled-20260422-133331-9773-2x.png"
        imageAlt="Alshami Coffee — premium Syrian coffee brand since 1924"
      />
      <CoffeeHistory />
      <CoffeeProducts />
    </main>
  );
}
