"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import FactGrid, { type Fact } from "@/components/fact-grid";
import { fadeUp } from "@/lib/motion-variants";

const facts: Fact[] = [
  { numeric: true, value: 1924, label: "Founded in Damascus" },
  { numeric: true, value: 100, suffix: "+", label: "Years of heritage" },
  { value: "Arabica", label: "Premium bean selection" },
  { value: "Natural", label: "Green cardamom spice" },
];

export default function CoffeeHistory() {
  return (
    <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
      <Container>
        <motion.div
          className="max-w-[80rem] mx-auto flex flex-col gap-[4.8rem]"
          {...fadeUp}
        >
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight">
              A Century of Coffee Craftsmanship
            </h2>
            <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
              Alshami Coffee was established in Damascus, Syria, in 1924 — making it one of the oldest and most respected coffee brands in the Levant. For over a century, the brand has remained committed to the art of authentic Turkish and Arabic coffee, sourcing only the finest premium Arabica beans and blending them with natural green cardamom using a combination of traditional and modern roasting techniques.
            </p>
            <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
              Today, Alshami Coffee is exported worldwide and is available in Middle Eastern specialty grocers across the globe. In Australia, we are proud to be the exclusive importer, bringing this century-old flavour directly from Damascus to your cup.
            </p>
          </div>

          <FactGrid facts={facts} />
        </motion.div>
      </Container>
    </section>
  );
}
