"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import { containerVariants, cardVariants } from "@/lib/motion-variants";

const products = [
  {
    name: "Extra Cardamom Blend (Blue)",
    description:
      "A strong, highly aromatic blend with a pungent cardamom flavour. One of Alshami's most popular and iconic products.",
    imageSrc: "/media/images/Untitled-20260422-134003-0597-2x.png",
    imageAlt: "Alshami Coffee Extra Cardamom Blend Blue packaging",
  },
  {
    name: "Extra Cardamom Blend (Gold)",
    description:
      "A premium aromatic cardamom blend with a slightly refined profile — rich flavour with an elevated finish.",
    imageSrc: "/media/images/Untitled-20260422-134021-9195-2x.png",
    imageAlt: "Alshami Coffee Extra Cardamom Blend Gold packaging",
  },
  {
    name: "Plain Turkish Coffee",
    description:
      "Classic Turkish coffee with no added spices, for those who prefer the pure, unadulterated taste of premium Arabica.",
    imageSrc: "/media/images/Untitled-20260422-134023-5557-2x.png",
    imageAlt: "Alshami Plain Turkish Coffee",
  },
  {
    name: "Mocha Blend",
    description:
      "A green Mocha coffee blend — smooth and earthy in flavour, celebrating the original Yemeni coffee tradition.",
    imageSrc: "/media/images/Untitled-20260422-134023-8568-2x.png",
    imageAlt: "Alshami Mocha Blend coffee",
  },
  {
    name: "Instant Sachets",
    description:
      "Convenient, ready-to-brew sachets for quick preparation of traditional Syrian coffee — authentic flavour, no compromise.",
    imageSrc: "/media/images/Untitled-20260422-134054-2996-2x.png",
    imageAlt: "Alshami Coffee Instant Sachets",
  },
  {
    name: "Arabic Coffee Mix",
    description:
      "A ready-to-mix traditional Arabic coffee blend. Light, fragrant, and steeped in Levantine hospitality tradition.",
    imageSrc: "/media/images/Untitled-20260422-134120-9376-2x.png",
    imageAlt: "Alshami Arabic Coffee Mix",
  },
];

export default function CoffeeProducts() {
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
          className="grid grid-cols-2 md:grid-cols-3 gap-[2rem] md:gap-[2.4rem] lg:gap-[3.2rem]"
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
