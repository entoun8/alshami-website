"use client";

import { useMotionValue, useTransform, animate, motion } from "framer-motion";

interface StatCountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function StatCountUp({ value, suffix = "", duration = 1.3 }: StatCountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  return (
    <motion.span
      onViewportEnter={() => animate(count, value, { duration, ease: "easeOut" })}
      viewport={{ once: true }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}
