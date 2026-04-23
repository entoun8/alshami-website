"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import StatCountUp from "@/components/stat-count-up";

const fadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function AboutContent() {
  return (
    <>
      {/* Hero intro */}
      <section className="bg-dark-espresso py-[8rem] md:py-[12rem]">
        <Container>
          <motion.div
            className="max-w-[72rem]"
            {...fadeUp}
          >
            <h1 className="text-[4rem] md:text-[5.6rem] lg:text-[6.4rem] font-bold text-text-white leading-tight tracking-tight mb-[2.4rem]">
              Our Story
            </h1>
            <p className="text-[1.8rem] md:text-[2rem] text-text-white-soft leading-relaxed">
              Alshami is an Australian business built on a simple belief — that the world deserves to experience the authentic flavours and traditions of Syria.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Business story */}
      <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
        <Container>
          <motion.div
            className="max-w-[80rem] mx-auto flex flex-col gap-[4rem]"
            {...fadeUp}
          >
            <div>
              <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight mb-[2rem]">
                Who We Are
              </h2>
              <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
                Alshami imports and distributes two iconic Syrian brands — Alshami Coffee and Al-Attar Herbs — directly from Damascus, Syria, to customers across Australia. We act as the Australian home for these celebrated products, making it possible for anyone in Australia to access the same authentic Syrian quality that generations of families have trusted for over a century.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Syrian heritage */}
      <section className="bg-warm-ivory py-[6.4rem] md:py-[9.6rem]">
        <Container>
          <motion.div
            className="max-w-[80rem] mx-auto flex flex-col gap-[4rem]"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div>
              <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight mb-[2rem]">
                Syrian Heritage
              </h2>
              <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed mb-[2rem]">
                Damascus has long been one of the world&apos;s great centres of trade, culture, and craftsmanship. The two brands we represent are deeply rooted in that heritage.
              </p>
              <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
                Alshami Coffee was established in Damascus in 1924 — over 100 years ago — and has since become one of the most recognised names in Turkish and Arabic coffee across the Middle East and beyond. Al-Attar Herbs, founded in Damascus in 1990, carries on Syria&apos;s ancient tradition of herbal medicine, combining centuries-old remedies with modern scientific research to create 100% natural, allergen-free herbal teas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.4rem] mt-[1.6rem]">
              {[
                { value: 1924, label: "Alshami Coffee founded" },
                { value: 1990, label: "Al-Attar Herbs founded" },
                { value: 100, suffix: "+", label: "Years of coffee heritage" },
                { value: 35, suffix: "+", label: "Years of herbal expertise" },
              ].map(({ value, suffix, label }) => (
                <div key={label} className="flex flex-col gap-[0.8rem]">
                  <span className="text-[3.2rem] md:text-[4rem] xl:text-[4.4rem] font-bold text-caramel leading-none text-balance">
                    <StatCountUp value={value} suffix={suffix} />
                  </span>
                  <span className="text-[1.4rem] text-text-black-soft leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
        <Container>
          <motion.div
            className="max-w-[80rem] mx-auto"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight mb-[2rem]">
              Our Mission
            </h2>
            <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed mb-[2rem]">
              Our mission is to bring the genuine taste of Syria to Australian homes and businesses. We believe that great food and drink carry the stories of the people and places that created them, and we are committed to preserving that authenticity at every step.
            </p>
            <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
              Whether it&apos;s the rich, cardamom-scented aroma of a cup of Alshami Coffee, or the soothing comfort of an Al-Attar herbal tea — we want every product we deliver to be a small piece of Syria in your hands.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
