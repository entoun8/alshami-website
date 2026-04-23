"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface BrandEntry {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function BrandIntroSlider({ brands }: { brands: BrandEntry[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Desktop slider — hidden below md */}
      <div
        className="hidden md:block relative overflow-hidden h-screen"
        role="region"
        aria-label="Brand showcase"
      >
        {brands.map((brand, index) => {
          const isActive = index === activeIndex;
          const isEven = index % 2 === 0;

          const imagePanel = (
            <div className="relative w-full h-full">
              <Image
                src={brand.imageSrc}
                alt={brand.imageAlt}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          );

          const textPanel = (
            <div className="w-full h-full bg-alshami-cream flex flex-col items-center justify-center gap-[2.4rem] px-[6.4rem]">
              <h2 className="text-[4rem] font-bold text-alshami-brown leading-tight">
                {brand.title}
              </h2>
              <p className="text-[1.6rem] text-text-black-soft leading-relaxed">
                {brand.description}
              </p>
              <Link
                href={brand.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-caramel text-white text-[1.5rem] font-medium px-[3.2rem] py-[1.4rem] transition-transform active:scale-95 hover:opacity-90"
              >
                {brand.ctaLabel}
              </Link>
            </div>
          );

          return (
            <div key={index} className="absolute inset-0">
              {/* Left panel: slides up from below when inactive */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
                animate={{ y: isActive ? "0%" : "100%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {isEven ? imagePanel : textPanel}
              </motion.div>

              {/* Right panel: slides down from above when inactive */}
              <motion.div
                className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden"
                animate={{ y: isActive ? "0%" : "-100%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {isEven ? textPanel : imagePanel}
              </motion.div>
            </div>
          );
        })}

        {/* Dot navigation — right edge */}
        <div className="absolute right-[3.2rem] top-1/2 -translate-y-1/2 flex flex-col gap-[1.2rem] z-10">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 shadow-md ${
                index === activeIndex
                  ? "bg-caramel scale-125"
                  : "bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile fallback — stacked cards */}
      <div className="md:hidden flex flex-col gap-[3.2rem] bg-alshami-cream px-[1.6rem] py-[3.2rem]">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col gap-[2.4rem]">
            <div className="relative w-full aspect-[4/3] rounded-[1.2rem] overflow-hidden">
              <Image
                src={brand.imageSrc}
                alt={brand.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[2.4rem]">
              <h2 className="text-[3.2rem] font-bold text-alshami-brown leading-tight">
                {brand.title}
              </h2>
              <p className="text-[1.6rem] text-text-black-soft leading-relaxed">
                {brand.description}
              </p>
              <Link
                href={brand.ctaHref}
                className="inline-flex items-center justify-center self-start rounded-full bg-caramel text-white text-[1.5rem] font-medium px-[3.2rem] py-[1.4rem] transition-transform active:scale-95 hover:opacity-90"
              >
                {brand.ctaLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
