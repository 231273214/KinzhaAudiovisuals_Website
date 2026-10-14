"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import TeamCard from "@/components/sections/equipo/TeamCard";
import { TEAM } from "@/lib/data/team";

export default function TeamShowcase() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = TEAM.find((m) => m.id === selectedId);

  return (
    <section>
      <Container className="pb-32">
        <div
          className="mx-auto w-fit"
          style={{ "--card-w": "clamp(88px, 18vw, 240px)" } as React.CSSProperties}
        >
          <ul className="flex items-start pb-[calc(var(--card-w)*0.5)]">
            {TEAM.map((member, i) => (
              <TeamCard
                key={member.id}
                member={member}
                index={i}
                selected={member.id === selectedId}
                onSelect={() =>
                  setSelectedId((prev) => (prev === member.id ? null : member.id))
                }
              />
            ))}
          </ul>

          <div aria-live="polite" className="min-h-72">
            {selected && (
              <article
                key={selected.id}
                className="animate-fade-in motion-reduce:animate-none"
              >
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <h3 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold uppercase leading-none">
                    {selected.name}
                  </h3>

                  {selected.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-3">
                      {selected.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-brand-red px-4 py-1 text-xs shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <p className="mt-4 max-w-[560px] text-sm leading-relaxed">{selected.bio}</p>
              </article>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}