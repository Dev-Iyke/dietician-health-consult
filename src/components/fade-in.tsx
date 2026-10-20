"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
  className?: string;
}>;

export function FadeIn({ children, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
