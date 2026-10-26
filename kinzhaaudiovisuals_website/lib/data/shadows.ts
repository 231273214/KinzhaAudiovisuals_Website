export const GAME = {
  title: "Cadence of Shadows",
  // las rutas cuando este el arte. Mientras estén vacías.
  // Ejemplo: "/images/proyectos/shadows/hero.jpg"
  heroImage: "",

  blurb:
    "Un título inmersivo que combina una narrativa de misterio con un cuidado diseño visual y sonoro, sumergiendo al jugador en una atmósfera llena de secretos.",

  synopsis:
    "Un thriller psicológico y de acción 2.5D ambientado en la Colombia de los años 70. Entre la bruma de Bogotá, la violencia de las calles y los acordes disonantes del jazz, cada pista recopilada es una nota en la partitura de un crimen no resuelto.",

  trailerUrl: "",
  wishlistUrl: "",

  facts: [
    { label: "Género", value: "Acción narrativa noir 2.5D" },
    { label: "Motor / plataforma", value: "Unreal Engine 5.3 / PC" },
    { label: "Ambientación", value: "Bogotá 1970s / Jazz oscuro" },
  ],
};

export type Level = {
  id: number;
  name: string;
  mechanics: string;
  ambience: string;
  bpm: string;
  briefing?: string;
};

export const levels: Level[] = [
  {
    id: 1,
    name: "Bar Jazz Nocturno",
    mechanics: "Tutorial de combate c.c., parry, lanzamiento de botellas/sillas.",
    ambience: "Bar retro 70s, banda de jazz en vivo, mesas de madera.",
    bpm: "120 BPM in crescendo",
    briefing:
      "Objetivo: Introducir de forma orgánica el movimiento y el combate cuerpo a cuerpo derrotando a 8 matones y un jefe intermedio. Pistas Clave: No aplica inspección profunda; el entorno actúa como tutorial de interacción (sillas y botellas como armas). Experiencia del Jugador: Adrenalina, urgencia y ritmo cinematográfico; el jugador debe sentir la satisfacción de encadenar combos y ejecuciones al compás de una banda de jazz que acelera con la acción.",
  },
  {
    id: 2,
    name: "Sitio del Crimen",
    mechanics: "Inspección de 8 pistas, deducción sin combate.",
    ambience: "Casa bogotana 70s, lluvia, metrónomo en el ático.",
    bpm: "60-70 BPM disonante",
    briefing:
      "Objetivo: Investigar el asesinato del líder político explorando la casa de arquitectura bogotana y registrando 8 evidencias (5 obligatorias). Pistas Clave: La cinta magnética distorsionada, el cuerpo con cortes en forma de pentagrama, la partitura inconclusa y el metrónomo activo en el ático. Experiencia del Jugador: Reflexión, solemnidad y tensión ambiental sin enemigos; el jugador debe sentir la inquietante revelación de que el crimen sigue una estructura rítmica y simbólica.",
  },
  {
    id: 3,
    name: "Oficina del Detective",
    mechanics: "Tablón de conexiones, llamadas, descanso.",
    ambience: "Oficina personal, luz cenital, teléfono rotativo.",
    bpm: "Contrabajo continuo",
    briefing:
      "Objetivo: Confrontar la evidencia en un espacio seguro para conectar las pistas en el tablero de investigación y desbloquear el siguiente arco narrativo. Pistas Clave: El escritorio de organización de pruebas, el tablón de hilos rojos y el teléfono rotativo para llamadas clave. Experiencia del Jugador: Calma inquisitiva y satisfacción deductiva; el jugador debe sentirse como un verdadero detective conectando cabos sueltos mientras escucha el feedback musical de acierto o error.",
  },
];

export type GalleryItem = {
  id: string;
  src: string; 
  alt: string;
  caption: string;
};

export const gallery: GalleryItem[] = [
  { id: "shot-01", src: "", alt: "Callejón nocturno bajo la lluvia", caption: "Callejón, Bogotá 1970" },
  { id: "shot-02", src: "", alt: "Interior del bar de jazz", caption: "Bar Jazz Nocturno" },
  { id: "shot-03", src: "", alt: "Escena del crimen con el metrónomo", caption: "Sitio del crimen" },
  { id: "shot-04", src: "", alt: "Oficina del detective", caption: "Oficina del detective" },
  { id: "shot-05", src: "", alt: "Arte conceptual del detective", caption: "Arte conceptual" },
  { id: "shot-06", src: "", alt: "Arte conceptual del saxofonista", caption: "Arte conceptual" },
];

export type EvidenceType = "physical" | "testimonial" | "documentary";

export type EvidenceItem = {
  id: string;
  title: string;
  location: string;
  type: EvidenceType;
  description: string;
  coordinates: { x: number; y: number };
  connectedTo: string[];
  image: string;
  animation?: "metronome";
  viewable?: boolean;
};

export const evidence: EvidenceItem[] = [
  {
    id: "EVID-01",
    title: "Partitura con sangre",
    location: "Escritorio",
    type: "physical",
    description: "Partitura manchada de sangre, encontrada sobre el escritorio.",
    coordinates: { x: 24, y: 9 },
    connectedTo: ["EVID-02", "EVID-04"],
    image: "/images/proyectos/shadows/Partitura.png",
  },
  {
    id: "EVID-02",
    title: "Foto Polaroid",
    location: "Sitio del crimen",
    type: "documentary",
    description: "Polaroid del cuerpo: los cortes dibujan un pentagrama.",
    coordinates: { x: 72, y: 12 },
    connectedTo: ["EVID-01", "EVID-03"],
    image: "/images/proyectos/shadows/Fotografia.png",
    viewable: true,
  },
  {
    id: "EVID-03",
    title: "Cinta magnética",
    location: "Oficina del detective",
    type: "testimonial",
    description: "Cinta distorsionada con un fragmento de voz casi ilegible.",
    coordinates: { x: 30, y: 55 },
    connectedTo: ["EVID-02", "EVID-04"],
    image: "/images/proyectos/shadows/Cinta.png",
  },
  {
    id: "EVID-04",
    title: "Metrónomo activo",
    location: "Ático",
    type: "physical",
    description: "Metrónomo en marcha a 60 BPM en el ático de la casa.",
    coordinates: { x: 76, y: 52 },
    connectedTo: ["EVID-03", "EVID-01"],
    image: "",
    animation: "metronome",
  },
];

export type Clue3D = {
  id: string;
  /** Código que se muestra, ej: "EVID-04" */
  code: string;
  title: string;
  /** Ej: "Prueba física", "Testimonio", "Documental" */
  category: string;
  description: string;
  /** Ruta al .glb en /public. Vacío = usa el placeholder */
  model: string;
  /** Forma procedural mientras no hay modelo */
  placeholder?: "metronome" | "reel";
  /** Imagen para dispositivos sin WebGL (un render de tu modelo) */
  poster?: string;
};

export const clues3d: Clue3D[] = [
  {
    id: "libreta",
    code: "EVID-01",
    title: "Libreta con Anotaciones",
    category: "Documental",
    description:
      "Hallada en la librería de la sede personal del líder político. Contiene notas a mano con secuencias de compases, patrones rítmicos y nombres de contacto que vinculan al movimiento social con el circuito nocturno de clubes de jazz de Bogotá.",
    model: "/images/proyectos/shadows/Libreta.glb", 
    placeholder: "libreta",
  },
  {
    id: "cinta",
    code: "EVID-02",
    title: "Cinta Magnética Distorsionada",
    category: "Física / Auditiva",
    description:
      "Recuperada en el reproductor de la sala-cocina durante la inspección del crimen. Al reproducirla en la oficina, emite una grabación ambiental distorsionada donde se mezclan frases del candidato con la primera muestra sonora del asesino.",
    model: "/images/proyectos/shadows/Cinta.glb",
    placeholder: "reel",
  },
  {
    id: "foto",
    code: "EVID-03",
    title: "Fotografía de Músicos Comunitarios",
    category: "Testimonial / Fotografía",
    description:
      "Encontrada en el segundo piso de la casa victima. Retrata al candidato sonriendo junto a una agrupación local de jazz; revela la estrecha relación entre el líder y los colectivos artísticos de la época.",
    model: "/images/proyectos/shadows/Fotografia.glb",
    placeholder: "reel",
  },
  {
    id: "partitura",
    code: "EVID-04",
    title: "Partitura Manchada de Sangre",
    category: "Documental / Simbólica",
    description:
      "Ubicada sobre el escritorio principal del despacho tras el homicidio. Presenta anotaciones musicales incompletas y cortes paralelos en el papel que coinciden con el patrón de heridas encontradas en el cuerpo, insinuando una composición mortal.",
    model: "/images/proyectos/shadows/Partitura.glb",
    placeholder: "reel",
  },
];