// components/projects/cadence/CharacterSheet.tsx
import type { Character } from "@/lib/data/cadence";
import { Paper } from "./Paper";
import { Photo } from "./Photo";

export function CharacterSheet({ character: c }: { character: Character }) {
  return (
    <Paper side="right">
      <div className="group flex size-full flex-col px-[6cqw] py-[5cqw]">
        <div className="relative flex-1 overflow-hidden rounded-sm bg-neutral-300">
          <Photo
            src={c.sheet}
            alt={`Hoja de modelo de ${c.name}`}
            fit="contain"
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </div>
        <p className="mt-[2cqw] text-center text-[1.9cqw] uppercase tracking-[0.2em] text-black/60">
          Hoja de modelo — {c.name}
        </p>
      </div>
    </Paper>
  );
}