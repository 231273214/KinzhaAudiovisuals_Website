export type Service = {
  id: string;
  title: string;
  image: string;
  whatIs: string;
  whatWeCreate: string;
};

const PENDING = "Texto pendiente.";

export const SERVICES: Service[] = [
  {
    id: "edicion-video",
    title: "Edición de video",
    image: "/images/servicios/Edición_Video.webp",
    whatIs: "Tratamiento audiovisual para estructurar el ritmo, la estética visual y la coherencia narrativa del material grabado.",
    whatWeCreate:"Montaje y corte final, corrección de color, diseño sonoro, efectos visuales (VFX) y piezas listas para distribución o emisión.",
  },
  {
    id: "comic",
    title: "Comics",
    image: "/images/servicios/Comics.webp",
    whatIs:
      "Narración visual donde combinamos ilustración, diseño de personajes y narrativa secuencial para dar vida a historias de alto impacto visual.",
    whatWeCreate:
      "Comics digitales e impresos, noveles graficas, webtoons, storyboards y paneles ilustrados a la medida.",
  },
  {
    id: "modelos-3d",
    title: "Modelado3D",
    image: "/images/servicios/Modelos_3D.webp",
    whatIs: "Creación de objetos, entornos y personajes tridimensionales esculpidos con alto nivel de detalle, textura y optimización.",
    whatWeCreate: "Modelos 3D para animación o videojuegos, assets optimizados, rigging de personajes y renderizado hiperrealista o estilizado.",
  },
  {
    id: "peliculas",
    title: "Peliculas",
    image: "/images/servicios/Peliculas.webp",
    whatIs: "Gestión creativa y supervisión cinematográfica integral para transformar guiones en producciones audiovisuales de gran escala.",
    whatWeCreate: "Dirección artistica, cinematografía, desarrollo de guión, producción audiovisual y cortometrajes/largometrajes cinemátograficos.",
  },
  {
    id: "programación",
    title: "Programación",
    image: "/images/servicios/Programación.webp",
    whatIs: "Desarrollo de software y soluciones digitales enfocadas en construir plataformas intuitivas, rápidas y escalables.",
    whatWeCreate: "Páginas web corporativas, tiendas virtuales (e-commerce), aplicaciones móviles (iOS y Android) y sistemas web a la medida.",
  },
  {
    id: "videojuegos",
    title: "Videojuegos",
    image: "/images/servicios/Videojuegos.webp",
    whatIs: "Diseño e implementación de experiencias interactivas que combinan jugabilidad, arte visual, mecánicas sólidas y lógica de código.",
    whatWeCreate: "Videojuegos 2D y 3D para PC, consolas o móviles, prototipos jugables (vertical slices) y experiencias interactivas.",
  },
];

export const DEFAULT_SERVICE_INDEX = 1;