"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import ProductCard from "@/components/alshami-coffee/product-card";

const products = [
  {
    name: "Zhourat Shamia",
    description:
      "A classic Syrian blend of aromatic herbs and flowers — chamomile, lemon verbena, Damask rose, and green tea. Calming, fragrant, and caffeine-free.",
    imageSrc: "/media/images/Untitled-20260422-134140-7460-2x.png",
    imageAlt: "Al-Attar Zhourat Shamia herbal tea blend",
  },
  {
    name: "Chamomile",
    description:
      "Pure chamomile, naturally calming and soothing. A timeless herbal classic known for its gentle, floral character.",
    imageSrc: "/media/images/Untitled-20260422-134151-1666-2x.png",
    imageAlt: "Al-Attar Chamomile herbal tea",
  },
  {
    name: "Aniseed and Fennel",
    description:
      "A warming, aromatic digestive blend of aniseed and fennel — comforting and naturally sweet.",
    imageSrc: "/media/images/Untitled-20260422-134153-8394-2x.png",
    imageAlt: "Al-Attar Aniseed and Fennel herbal tea",
  },
  {
    name: "Cumin and Lemon",
    description:
      "A digestive support blend with the earthy warmth of cumin and a bright citrus twist of lemon.",
    imageSrc: "/media/images/Untitled-20260422-133617-9069-2x.png",
    imageAlt: "Al-Attar Cumin and Lemon herbal tea",
  },
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

export default function HerbsProducts() {
  return (
    <section className="bg-warm-ivory py-[6.4rem] md:py-[9.6rem]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[4rem] md:mb-[5.6rem]"
        >
          <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight">
            Our Products
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] md:gap-[2.4rem] lg:gap-[3.2rem]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {products.map((product) => (
            <motion.div key={product.name} variants={cardVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
