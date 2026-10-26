"use client";

import { motion } from "framer-motion";

type Props = { label: string; primary?: boolean; href?: string };

export default function NeonButton({ label, primary = false, href }: Props) {
  const className = `inline-flex items-center gap-2 border px-6 py-3 font-typewriter text-xs uppercase tracking-widest transition-colors ${
    primary
      ? "border-[#e53e3e] bg-brand-red text-white shadow-lg motion-safe:animate-flicker-slow"
      : "border-gray-700 bg-black/60 text-gray-300 hover:border-red-600"
  } ${href ? "motion-safe:hover:animate-flicker-once" : "cursor-not-allowed opacity-50"}`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 bg-red-500 ${href ? "motion-safe:animate-ping" : ""}`}
      />
      {label}
    </>
  );

  if (!href) {
    return (
      <button type="button" disabled title="Próximamente" className={className}>
        {content}
      </button>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, boxShadow: "0px 0px 18px rgba(176, 0, 0, 0.6)" }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}