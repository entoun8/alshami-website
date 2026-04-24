"use client";

import { motion } from "framer-motion";
import StatCountUp from "@/components/stat-count-up";
import { containerVariants, cardVariants } from "@/lib/motion-variants";

type NumericFact = { numeric: true; value: number; suffix?: string; label: string };
type StringFact = { numeric?: false; value: string; label: string };
export type Fact = NumericFact | StringFact;

interface FactGridProps {
  facts: Fact[];
}

export default function FactGrid({ facts }: FactGridProps) {
  return (
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
            {fact.numeric ? (
              <StatCountUp value={fact.value} suffix={fact.suffix} />
            ) : (
              fact.value
            )}
          </span>
          <span className="text-[1.4rem] text-text-black-soft leading-snug">
            {fact.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
