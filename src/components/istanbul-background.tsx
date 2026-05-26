"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function IstanbulBackground() {
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["center 50%", "center 40%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.45, 0.62, 0.75]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          backgroundPosition,
          opacity,
        }}
      />
      <div className="absolute inset-0 bg-white/60" />
    </div>
  );
}
