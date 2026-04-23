"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/container";

export default function CoffeeHero() {
  return (
    <section className="bg-dark-espresso pt-[8rem] md:pt-[12rem] pb-[6.4rem] md:pb-[9.6rem]">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-[4.8rem] md:gap-[8rem]">
          <motion.div
            className="flex-1 flex flex-col gap-[2.4rem]"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[1.4rem] font-semibold uppercase tracking-widest text-caramel">
              Est. Damascus, 1924
            </p>
            <h1 className="text-[4rem] md:text-[5.6rem] lg:text-[6.4rem] font-bold text-text-white leading-tight tracking-tight">
              Alshami Coffee
            </h1>
            <p className="text-[1.8rem] md:text-[2rem] text-text-white-soft leading-relaxed max-w-[52rem]">
              Over 100 years of heritage. Premium Arabica beans, natural green cardamom, and the authentic flavour of traditional Levantine coffee — now in Australia.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-[52rem]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-[1.2rem] overflow-hidden">
              <Image
                src="/media/images/Untitled-20260422-133331-9773-2x.png"
                alt="Alshami Coffee — premium Syrian coffee brand since 1924"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
