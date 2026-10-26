export type Project = {
  id: string;
  number: number;
  title: string;
  kind: string;
  heading: string;
  description: string;
  tags: string[];
  links: { label: string; href?: string }[];
  cover?: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cadence-of-shadows",
    number: 1,
    title: "Cadence of Shadows",
    kind: "Videogame",
    heading: "Cadence of Shadows",
    description:
      "Un título inmersivo que combina una narrativa de misterio con un cuidado diseño visual y sonoro, sumergiendo al jugador en una atmósfera llena de secretos.",
    tags: ["Unreal", "Narrative Game", "3D Art", "Sound Design"],
    links: [{ label: "Trailer" }, { label: "Demo" }],
    cover: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/cadence-of-shadows",
  },
  {
    id: "wiretap",
    number: 2,
    title: "Wiretap",
    kind: "Podcast",
    heading: "Wiretap",
    description:
      "Serie en formato podcast que funciona como la precuela oficial de Cadence. A través de registros de audio e interceptaciones, expande el universo narrativo revelando los eventos previos a la historia principal.",
    tags: ["Premiere", "Audio Experience", "Sound Design", "Narrative Podcast", "Cadence Universe"],
    links: [{ label: "Episodios" }, { label: "Trailer" }, { label: "Lore" }],
    cover: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/wiretap",
  },
  {
    id: "historia-cadence",
    number: 3,
    title: "Historia Cadence",
    kind: "Comic",
    heading: "Comic",
    description:
      "Precuela del videojuego Cadence of Shadows, un comic al estilo toon que cuenta la historia narrada del podcast, pero con un pequeño giro que da respuesta a algunos ¿por qué? del juego.",
    tags: ["Krita", "Comic ilustrado", "Cadence Universe"],
    links: [{ label: "Viñetas" }, { label: "Arte digital" }, { label: "Lore" }],
    cover: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/comic",
  },
  {
    id: "cadence-animado",
    number: 4,
    title: "Cadence Animado",
    kind: "Animación 3D",
    heading: "Animación",
    description:
      "Cortometraje de animación 3D renderizada de cine negro, ambientado en la Colombia de los años 70. Un detective cínico investiga el asesinato de un líder popular y se enfrenta a un pasado que creía enterrado.",
    tags: ["Animación 3D", "Cine negro", "Cadence Universe"],
    links: [{ label: "Blender" }, { label: "Krita" }, { label: "Lore" }],
    cover: "/proyectos/Textura_Papel.jpg",
    href: "/proyectos/cadence-animado",
  },
];