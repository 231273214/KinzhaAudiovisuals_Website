export type TeamMember = {
  id: string;
  name: string;
  image: string;
  skills: string[];
  bio: string;
};

const PENDING = "Texto pendiente.";

export const TEAM: TeamMember[] = [
  {
    id: "sergio",
    name: "Sergio",
    image: "/images/team/Sergio.png",
    skills: ["Artista 3D", "Envioroment artist", "programador frontend"],
    bio: "Ha trabajado en el videojuego cadence of shadows como el artista 3D creando el modelado de la ciudad y los assets de esta misma y en el podcats wiretap como locurtor y editor secundario del mismo.",
  },
  {
    id: "mauricio",
    name: "Mauricio",
    image: "/images/team/Mauricio.png",
    skills: ["Unreal", "UX / UI", "Programador full stack"],
    bio: "Ha trabajado en el videojuego Cadence of Shadows como el programador, creando sistemas de IA de enemigos, sistemas de armas e inventario, sistemas de vida y ataque.",
  },
  {
    id: "camilo",
    name: "Camilo",
    image: "/images/team/Camilo.jpeg",
    skills: ["Artista 2D", "UX/UI", "Artista pixel art"],
    bio: "Ha trabajado en el videojuego cadence of shadows creando los sprites del personaje principal, villanos, personajes secundarios, creo texturas de algunos edificios de la ciudad y sprites de algunos assets.",
  },
  {
    id: "axel",
    name: "Axel",
    image: "/images/team/Axel.jpeg",
    skills: ["Artista 3D", "UX/UI", "Artista pixel art"],
    bio: "Ha trabajado en el videojuego cadence of shadows creando las texturas de algunos edificios de la ciudad y sprites de algunos assets de interiores y elementos como armas y alimentos. Tambien trabajo en el podcast wire tap como locutor y editor principal.",
  },
];