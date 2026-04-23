"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-6.4rem)] sm:h-[calc(100vh-7.2rem)] md:h-[calc(100vh-8.3rem)] lg:h-[calc(100vh-9.9rem)] min-h-[50rem] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/media/videos/banner.mp4"
      />
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/media/images/small-screen-banner.png"
          alt="Alshami hero"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-[1.6rem] md:px-[2.4rem]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-[4.8rem] sm:text-[5.6rem] md:text-[6.4rem] lg:text-[8rem] font-bold text-white leading-[1.1] tracking-tight"
        >
          Alshami
        </motion.h1>
        <motion.p
          variants={item}
          className="text-[1.7rem] md:text-[2rem] text-white/80 mt-[1.6rem] max-w-[52rem] mx-auto leading-relaxed"
        >
          Authentic Syrian heritage, delivered to your door across Australia.
        </motion.p>
      </motion.div>
    </section>
  );
}
