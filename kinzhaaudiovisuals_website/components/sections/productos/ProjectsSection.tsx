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
          <ul className="mx-auto flex max-w-[960px] flex-wrap justify-center gap-x-10 gap-y-12">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}