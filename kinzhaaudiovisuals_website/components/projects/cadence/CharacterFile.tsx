"use client";

import type { Character } from "@/lib/data/cadence";
import { Paper } from "./Paper";
import { Photo } from "./Photo";
import { Stamp } from "./Stamp";

const RULED = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, transparent 0, transparent calc(1.5em - 1px), rgb(0 0 0 / .4) calc(1.5em - 1px), rgb(0 0 0 / .4) 1.5em)",
  backgroundPosition: "0 0.15em",
} as const;

function Cell({ label, value, span }: { label: string; value: string; span: string }) {
  return (
    <div className={`${span} -mb-px -mr-px min-w-0 border border-black/80 px-[1cqw] pb-[0.6cqw] pt-[0.3cqw]`}>
      <p className="text-[2.2cqw] uppercase leading-tight">{label}</p>
      <p className="text-[1.6cqw] uppercase leading-tight">{value}</p>
    </div>
  );
}

function Box({ title, text }: { title: string; text: string }) {
  return (
    <div className="col-span-6 -mb-px -mr-px border border-black/80 p-[1cqw]">
      <p className="text-[2.5cqw] uppercase leading-none">{title}</p>
      <p className="mt-[0.6cqw] min-h-[11cqw] text-[1.85cqw] leading-snug">{text}</p>
    </div>
  );
}

type Props = { character: Character; active: boolean };

export function CharacterFile({ character: c, active }: Props) {
  return (
    <Paper side="left">
      <div className="relative flex size-full flex-col px-[7cqw] py-[5cqw]">
        <div className="absolute right-[7cqw] top-[3cqw] border border-black px-[1.4cqw] py-[0.4cqw] text-center text-[1.9cqw] uppercase leading-tight">
          Cadence of<br />Shadows
        </div>

        <div className="mt-[5.5cqw] h-[2cqw] bg-neutral-700" />
        <div className="grid grid-cols-12 pr-px">
          <Cell label="Nombre" value={c.name} span="col-span-3" />
          <Cell label="Tez" value={c.skin} span="col-span-2" />
          <Cell label="Sexo" value={c.sex} span="col-span-2" />
          <Cell label="Nacionalidad" value={c.nationality} span="col-span-3" />
          <Cell label="F.D.N" value={c.birth} span="col-span-2" />
          <Cell label="Altura" value={c.height} span="col-span-3" />
          <Cell label="Peso" value={c.weight} span="col-span-3" />
          <Cell label="Profesión" value={c.profession} span="col-span-3" />
          <Cell label="Estado" value={c.status} span="col-span-3" />
          <Box title="Vestimenta" text={c.outfit} />
          <Box title="Descripción" text={c.description} />
        </div>

        <div className="mt-[2.5cqw] grid grid-cols-[1fr_0.95fr] gap-[2cqw]">
          <div className="border border-black/80 p-[1.2cqw]">
            <p className="text-[2.6cqw] uppercase leading-none">Motivación</p>
            <p className="mt-[0.8cqw] min-h-[30cqw] text-[1.85cqw] leading-[1.5]" style={RULED}>
              {c.motivation}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[1.2cqw] bg-neutral-800 p-[1.4cqw]">
              <div className="relative aspect-[4/5] bg-neutral-300">
                <Photo src={c.photo} alt={`Retrato de ${c.name}`} className="absolute inset-0" sizes="240px" />
                {c.placard && (
                  <div className="absolute inset-x-[14%] bottom-[4%] bg-neutral-300 py-[0.8cqw] text-center text-[1.5cqw] uppercase leading-snug text-black/80">
                    {c.placard.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -left-[4.5cqw] top-[42%] h-[2.4cqw] w-[9cqw] rounded-full border-[0.35cqw] border-neutral-500" />
          </div>
        </div>

        <div className="mt-[2.5cqw] h-[2cqw] bg-neutral-700" />
        <div className="relative h-[17cqw] border border-black/80">
          <div className="absolute inset-0 grid grid-cols-5 divide-x divide-black/70" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} />
            ))}
          </div>
          {c.fingerprints && (
            <Photo src={c.fingerprints} alt="Huellas dactilares" fit="contain" className="absolute inset-0" sizes="400px" />
          )}
          {c.stamp && (
            <div className="absolute inset-0 grid place-items-center">
              <Stamp text={c.stamp} active={active} />
            </div>
          )}
        </div>
        <div className="mt-[1cqw] grid grid-cols-2 gap-[4cqw] text-[3cqw]">
          <div className="border-b border-black/80 pb-[0.5cqw]">&nbsp;</div>
          <div className="border-b border-black/80 pb-[0.5cqw] text-center italic">{c.signature ?? "\u00a0"}</div>
        </div>
      </div>
    </Paper>
  );
}