"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BrandIntroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
}

export default function BrandIntro({
  imageSrc,
  imageAlt,
  title,
  description,
  ctaLabel,
  ctaHref,
  reverse = false,
}: BrandIntroProps) {
  return (
    <motion.div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-[3.2rem] md:gap-[6.4rem] items-center`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2">
        <div className="relative w-full aspect-[4/3] rounded-[1.2rem] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-[2.4rem]">
        <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-[1.6rem] text-text-black-soft leading-relaxed">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center self-start rounded-full bg-caramel text-white text-[1.5rem] font-medium px-[3.2rem] py-[1.4rem] transition-transform active:scale-95 hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.div>
  );
}
