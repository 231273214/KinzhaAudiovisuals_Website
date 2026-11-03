export type Project = {
  id: string;
  title: string;
  type: string;  
  description: string;
  image: string;   
  href: string;   
  cta: string;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Cadence of Shadows",
    type: "Videojuego",
    description: "Videojuego 2.5D de estética noir, detectives en Colombia, 1970.",
    image: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/cadence-of-shadows",
    cta: "Ver más información",
  },
  {
    id: "2",
    title: "Wiretap",
    type: "Podcast",
    description: "La precuela oficial en audio: registros e interceptaciones que revelan los hechos previos.",
    image: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/wiretap",
    cta: "Escuchar",
  },
  {
    id: "3",
    title: "Historia Cadence",
    type: "Cómic",
    description: "La historia del podcast en formato cómic, con un giro que responde un ¿por qué?",
    image: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/comic",
    cta: "Leer cómic",
  },
  {
    id: "4",
    title: "Cadence Animado",
    type: "Animación 3D",
    description: "Serie animada que expande el universo narrativo de Cadence.",
    image: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/cadence-animado",
    cta: "Ver animación",
  },
];