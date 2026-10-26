"use client";

import { useId, useState } from "react";
import type { Level } from "@/lib/data/shadows";

export default function LevelFolder({ level }: { level: Level }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="group relative pt-6">
      {/* Pestaña de la carpeta */}
      <div className="absolute left-4 top-0 h-6 w-32 rounded-t-md bg-[#a88a50] px-3 pt-1 font-typewriter text-[10px] uppercase tracking-[0.2em] text-black/70">
        Exp. 0{level.id}
      </div>

      <article
        className={`relative rounded-b-md rounded-tr-md bg-[#c9aa6a] p-5 text-[#16130d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 ${
          open ? "" : "group-hover:-translate-y-1 group-hover:-rotate-[0.6deg]"
        }`}
      >
        {/* Sello */}
        <span
          aria-hidden="true"
          className={`absolute right-3 top-3 rotate-12 border-2 px-2 py-0.5 font-typewriter text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mix-blend-multiply transition-colors duration-300 ${
            open
              ? "border-[#2f5d3a] text-[#2f5d3a]"
              : "border-[#b00000] text-[#b00000]"
          }`}
        >
          {open ? "Desclasificado" : "Confidencial"}
        </span>

        <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-black/60">
          Nivel {level.id}
        </p>
        <h3 className="mt-1 max-w-[70%] font-display text-2xl font-bold uppercase leading-tight">
          {level.name}
        </h3>

        <dl className="mt-5 space-y-3 text-sm leading-snug">
          <div>
            <dt className="font-typewriter text-[10px] uppercase tracking-widest text-black/60">
              Mecánica
            </dt>
            <dd>{level.mechanics}</dd>
          </div>
          <div>
            <dt className="font-typewriter text-[10px] uppercase tracking-widest text-black/60">
              Ambiente
            </dt>
            <dd>{level.ambience}</dd>
          </div>
          <div>
            <dt className="font-typewriter text-[10px] uppercase tracking-widest text-black/60">
              BPM Audio
            </dt>
            <dd className="font-bold text-[#7a0000]">{level.bpm}</dd>
          </div>
        </dl>

        {level.briefing && (
          <>
            <div
              id={panelId}
              aria-hidden={!open}
              className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-4 border-t border-black/30 pt-3 text-sm leading-snug">
                  {level.briefing}
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((o) => !o)}
              className="mt-4 font-typewriter text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 transition-colors hover:text-[#7a0000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7a0000]"
            >
              {open ? "Cerrar expediente" : "Abrir expediente"}
            </button>
          </>
        )}
      </article>
    </li>
  );
}