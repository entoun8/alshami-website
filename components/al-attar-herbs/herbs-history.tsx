"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import FactGrid, { type Fact } from "@/components/fact-grid";
import { fadeUp } from "@/lib/motion-variants";

const facts: Fact[] = [
  { numeric: true, value: 1990, label: "Founded in Damascus" },
  { numeric: true, value: 35, suffix: "+", label: "Years of expertise" },
  { numeric: true, value: 100, suffix: "%", label: "Natural ingredients" },
  { numeric: true, value: 0, label: "Allergens or additives" },
];

export default function HerbsHistory() {
  return (
    <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
      <Container>
        <motion.div
          className="max-w-[80rem] mx-auto flex flex-col gap-[4.8rem]"
          {...fadeUp}
        >
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight">
              Rooted in Syria&apos;s Herbal Heritage
            </h2>
            <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
              Al-Attar for Biopharmaceutical Industries was established in Damascus, Syria, in 1990. One of the pioneering herbal pharmaceutical companies in the Arab world, Al-Attar combines centuries of Syrian herbal wisdom with the rigour of modern scientific research. Every product is developed in specialised research laboratories and formulated in accordance with international pharmacological references for natural medicine.
            </p>
            <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
              All Al-Attar products are 100% natural — free from artificial colours, preservatives, and chemical stimulants — and completely allergen-free. Each blend is individually wrapped in tea bags for the most convenient and hygienic experience. Today, Al-Attar is exported worldwide and available in supermarkets, pharmacies, and Middle Eastern specialty grocers across the globe. In Australia, Alshami is proud to be the exclusive importer.
            </p>
          </div>

          <FactGrid facts={facts} />
        </motion.div>
      </Container>
    </section>
  );
}
