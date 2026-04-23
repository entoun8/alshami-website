"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import StatCountUp from "@/components/stat-count-up";

type NumericFact = { numeric: true; value: number; suffix?: string; label: string };
type StringFact = { numeric?: false; value: string; label: string };
type Fact = NumericFact | StringFact;

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
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.4rem] md:gap-[3.2rem]">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-[0.8rem] p-[2.4rem] rounded-[1.2rem] bg-warm-ivory"
              >
                <span className="text-[2.8rem] md:text-[3.2rem] xl:text-[3.6rem] font-bold text-caramel leading-none text-balance">
                  {fact.numeric ? (
                    <StatCountUp value={fact.value} suffix={fact.suffix} />
                  ) : (
                    fact.value
                  )}
                </span>
                <span className="text-[1.4rem] text-text-black-soft leading-snug">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
