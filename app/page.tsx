import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import BrandIntro from "@/components/home/brand-intro";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Alshami — Authentic Syrian Brands in Australia",
  description:
    "Discover Alshami Coffee and Al-Attar Herbs — two historic Syrian brands imported directly from Damascus and delivered across Australia.",
  openGraph: {
    title: "Alshami — Authentic Syrian Brands in Australia",
    description:
      "Discover Alshami Coffee and Al-Attar Herbs — two historic Syrian brands imported directly from Damascus and delivered across Australia.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
        <Container className="flex flex-col gap-[6.4rem] md:gap-[9.6rem]">
          <BrandIntro
            imageSrc="/media/images/Untitled-20260422-133330-4204-2x.png"
            imageAlt="Alshami Coffee — premium Syrian coffee blends since 1924"
            title="Alshami Coffee"
            description="A historic Damascus coffee brand established in 1924. Over 100 years of heritage, premium Arabica beans, and the authentic flavour of traditional Levantine coffee culture — now available across Australia."
            ctaLabel="Explore Alshami Coffee"
            ctaHref="/alshami-coffee"
          />
          <BrandIntro
            imageSrc="/media/images/Untitled-20260422-133734-7666-2x.png"
            imageAlt="Al-Attar Herbs — 100% natural Syrian herbal teas since 1990"
            title="Al-Attar Herbs"
            description="Founded in Damascus in 1990, Al-Attar Herbs combines traditional Syrian herbal wisdom with modern scientific research. 100% natural, allergen-free, and crafted for your well-being."
            ctaLabel="Explore Al-Attar Herbs"
            ctaHref="/al-attar-herbs"
            reverse
          />
        </Container>
      </section>
    </main>
  );
}
