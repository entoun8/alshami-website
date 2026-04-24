import type { Metadata } from "next";
import CoffeeHero from "@/components/alshami-coffee/coffee-hero";
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
      <CoffeeHero />
      <CoffeeHistory />
      <CoffeeProducts />
    </main>
  );
}
