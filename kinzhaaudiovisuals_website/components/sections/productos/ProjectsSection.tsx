import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import ProjectCard from "@/components/sections/productos/ProjectCard";
import { PROJECTS } from "@/lib/data/projects";

export default function ProjectsSection() {
  return (
    <>
      <SectionIntro title="PROYECTOS">
        Desde la ilustración y el arte conceptual hasta el desarrollo en motores de tiempo real y
        programación full-stack, reunimos las áreas clave para ejecutar tu proyecto de inicio a
        fin.
      </SectionIntro>

      <section>
        <Container className="pb-24">
          <ul className="mx-auto grid max-w-[880px] grid-cols-1 justify-items-center gap-x-16 gap-y-14 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}