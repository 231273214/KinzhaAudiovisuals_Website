"use client";

import { motion } from "framer-motion";

type Props = {
  label?: string;
  href: string; 
};

export default function NeonButton({ label = "Descargar Beta", href }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, boxShadow: "0px 0px 18px rgba(176, 0, 0, 0.8)" }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 border border-[#e53e3e] bg-brand-red px-6 py-3 font-typewriter text-xs uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d69e2e]"
    >
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 bg-white motion-safe:animate-pulse"
      />
      {label}
    </motion.a>
  );
}