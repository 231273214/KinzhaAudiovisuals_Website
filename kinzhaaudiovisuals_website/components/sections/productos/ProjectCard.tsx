import Image from "next/image";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="w-full max-w-[280px]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/25 shadow-[inset_0_0_20px_rgba(255,255,255,0.08)]">
        {project.cover && (
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="280px"
            className="object-cover opacity-70"
          />
        )}
        <span className="absolute left-3 top-2 text-xs">#{project.number}</span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
          <h3 className="font-display text-2xl font-bold uppercase leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-[10px] uppercase tracking-wide underline underline-offset-2">
            {project.kind}
          </p>
        </div>
      </div>

      <h4 className="mt-3 font-display text-sm font-bold uppercase">{project.heading}</h4>
      <p className="mt-1 text-xs leading-snug">{project.description}</p>

      <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
        {project.links.map(({ label, href }) => (
          <li key={label}>
            {href ? (
              <a href={href} className="underline-offset-2 hover:underline">
                {label}
              </a>
            ) : (
              <span>{label}</span>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}