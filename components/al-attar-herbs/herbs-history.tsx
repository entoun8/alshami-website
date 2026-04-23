"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import StatCountUp from "@/components/stat-count-up";

const facts = [
  { numeric: true as const, value: 1990, label: "Founded in Damascus" },
  { numeric: true as const, value: 35, suffix: "+", label: "Years of expertise" },
  { numeric: true as const, value: 100, suffix: "%", label: "Natural ingredients" },
  { numeric: true as const, value: 0, label: "Allergens or additives" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function HerbsHistory() {
  return (
    <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
      <Container>
        <div className="max-w-[80rem] mx-auto flex flex-col gap-[4.8rem]">
          <div className="flex flex-col gap-[2rem]">
            <motion.h2
              className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight"
              {...fadeUp}
            >
              Rooted in Syria&apos;s Herbal Heritage
            </motion.h2>
            <motion.p
              className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed"
              {...fadeUp}
            >
              Al-Attar for Biopharmaceutical Industries was established in Damascus, Syria, in 1990. One of the pioneering herbal pharmaceutical companies in the Arab world, Al-Attar combines centuries of Syrian herbal wisdom with the rigour of modern scientific research. Every product is developed in specialised research laboratories and formulated in accordance with international pharmacological references for natural medicine.
            </motion.p>
            <motion.p
              className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed"
              {...fadeUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              All Al-Attar products are 100% natural — free from artificial colours, preservatives, and chemical stimulants — and completely allergen-free. Each blend is individually wrapped in tea bags for the most convenient and hygienic experience. Today, Al-Attar is exported worldwide and available in supermarkets, pharmacies, and Middle Eastern specialty grocers across the globe. In Australia, Alshami is proud to be the exclusive importer.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-[2.4rem] md:gap-[3.2rem]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                className="flex flex-col gap-[0.8rem] p-[2.4rem] rounded-[1.2rem] bg-warm-ivory"
                variants={cardVariants}
              >
                <span className="text-[2.8rem] md:text-[3.2rem] xl:text-[3.6rem] font-bold text-caramel leading-none text-balance">
                  <StatCountUp value={fact.value} suffix={fact.suffix} />
                </span>
                <span className="text-[1.4rem] text-text-black-soft leading-snug">
                  {fact.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
