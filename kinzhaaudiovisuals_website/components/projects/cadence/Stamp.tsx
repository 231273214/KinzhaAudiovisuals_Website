"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { text: string; active: boolean; className?: string };

export function Stamp({ text, active, className = "" }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={
        active
          ? { opacity: 0.92, scale: 1, rotate: -3 }
          : { opacity: 0, scale: 1.8, rotate: -10 }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 420, damping: 24, delay: active ? 0.9 : 0 }
      }
      className={`pointer-events-none border-[0.7cqw] border-double border-black px-[2.5cqw] py-[0.8cqw] font-display text-[5.2cqw] font-bold uppercase leading-none tracking-wide text-black ${className}`}
    >
      {text}
    </motion.div>
  );
}