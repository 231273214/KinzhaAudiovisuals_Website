// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-[#12141c] focus-within:border-[#b00000]/70 hover:border-[#b00000]/70 transition-colors duration-300"
    >
      {/* Imagen completa */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale-[40%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:blur-[1px] group-focus-within:scale-105"
      />

      {/* Degradado para legibilidad (aparece en hover) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100"
      />

      {/* Info que sube en hover */}
      <div
        className="absolute inset-x-0 bottom-0 flex translate-y-6 flex-col gap-2 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d69e2e]">
          {project.type}
        </span>
        <h3 className="text-2xl font-bold uppercase tracking-wide text-[#e2e8f0]">
          {project.title}
        </h3>
        <p className="line-clamp-2 max-w-md text-sm text-[#e2e8f0]/80">
          {project.description}
        </p>
        <Link
          href={project.href}
          className="mt-2 inline-flex w-fit items-center gap-2 border border-[#e53e3e] bg-[#b00000] px-4 py-2 font-mono text-xs uppercase tracking-widest text-white transition hover:shadow-[0_0_18px_rgba(176,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d69e2e]"
        >
          {project.cta}
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}