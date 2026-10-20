"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Cover } from "./Cover";
import { Dossier } from "./Dossier";

export function CadenceExperience() {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          key="dossier"
          initial={{ opacity: 0, y: 60, rotateX: 14 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformPerspective: 1600 }}
        >
          <Dossier />
        </motion.div>
      ) : (
        <motion.div
          key="cover"
          exit={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
          transition={{ duration: 0.6 }}
        >
          <Cover onOpen={() => setOpen(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}