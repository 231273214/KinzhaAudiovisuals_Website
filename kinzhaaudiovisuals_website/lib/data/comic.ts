const EXT = "png";

const img = (name: string) =>
  `/images/proyectos/comic/${/\.\w+$/.test(name) ? name : `${name}.${EXT}`}`;
const art = (name: string, alt: string) => ({ src: img(name), alt });

export type ComicPage =
  | { type: "cover"; kicker: string; title: string; subtitle: string; image: string }
  | { type: "intro"; title: string; subtitle: string; text: string; image: string; chip: string }
  | { type: "facts"; items: { title: string; text: string }[] }
  | {
      type: "text";
      title?: string;
      label?: string;
      paragraphs: string[];
      dense?: boolean;
      palette?: string[];
      image?: { src: string; alt: string };
    }
  | {
      type: "gallery";
      title?: string;
      banner?: string;
      columns?: 1 | 2 | 3;
      items: { src: string; alt: string; label?: string; caption?: string }[];
      paletteLabel?: string;
      palette?: string[];
    }
  | { type: "outline"; chapters: string[]; note: string }
  | { type: "arc"; cards: { title: string; text: string }[] }
  | { type: "closing"; title: string; text: string };

export type ComicSpread = { section?: string; left: ComicPage; right: ComicPage };

const SYNOPSIS_1 =
  "El detective Eduardo Sarmiento recibe una cinta anónima que le advierte que el caso Urrutia, cerrado hace veinte años como un crimen pasional cometido por el saxofonista Julián Mondragón, nunca debió archivarse. Al reabrir el expediente descubre una escena de crimen extrañamente «decorada», un testigo silenciado antes de poder hablar, y finalmente la existencia de Sebastián Urrutia, el gemelo que Rafael escondió toda su vida.";
const SYNOPSIS_2 =
  "La confrontación en la finca de Zipaquirá destapa el motivo real del crimen —una promesa rota de reconocimiento— y exonera póstumamente a Mondragón. El cierre conecta el caso con la propia herida no resuelta de Sarmiento: un hermano que también desapareció sin explicación.";

// HOJA DE MODELO 
const modelSheet = (id: "rafael" | "sarmiento", name: string): ComicPage => ({
  type: "gallery",
  title: "Hoja de modelo",
  columns: 3,
  items: [
    { ...art(`${id}-frente`, `${name}, vista frontal`), caption: "Frente" },
    { ...art(`${id}-perfil`, `${name}, perfil`), caption: "Perfil" },
    { ...art(`${id}-espalda`, `${name}, de espalda`), caption: "Espalda" },
    { ...art(`${id}-boceto`, `Boceto de ${name}`), caption: "Boceto" },
    { ...art(`${id}-construccion`, `Construcción de ${name}`), caption: "Construcción" },
  ],
});

// STORYBOARD 
const sb = (n: number) => ({
  ...art(`storyboard-${String(n).padStart(2, "0")}`, `Storyboard, hoja ${n}`),
  caption: `Hoja ${n}`,
});

export const COMIC_COVER: ComicPage = {
  type: "cover",
  kicker: "Artbook",
  title: "Wire Tap",
  subtitle: "Ecos de la memoria",
  image: img("sarmiento-hero"),
};

export const COMIC_CLOSING: ComicPage = {
  type: "closing",
  title: "Fin del artbook",
  text: "La justicia que se archiva nunca desaparece del todo.",
};

export const COMIC_SPREADS: ComicSpread[] = [
  // 1  Resumen
  {
    section: "Resumen",
    left: {
      type: "intro",
      title: "Wire Tap",
      subtitle: "Ecos de la memoria",
      text: `${SYNOPSIS_1} ${SYNOPSIS_2}`,
      image: img("sarmiento-hero"),
      chip: "Estilo gráfico · infantil / retro",
    },
    right: {
      type: "facts",
      items: [
        {
          title: "Idea central",
          text: "Un crimen archivado hace veinte años —el asesinato de Rafael Urrutia, candidato a la alcaldía— se reabre gracias a una cinta anónima. La investigación revela que la víctima tenía un hermano gemelo abandonado al nacer, criado en un reformatorio mientras Rafael construía una carrera política impecable.",
        },
        {
          title: "Género",
          text: "Thriller / Policiaco noir / Misterio con elementos de drama psicológico.",
        },
        {
          title: "Tema central y mensaje",
          text: "La justicia que se archiva nunca desaparece del todo, y las identidades que se entierran para sobrevivir siempre encuentran la forma de volver. Un eco de ese mismo tema recorre al propio detective, cuyo hermano desapareció años atrás en un caso de corrupción sin resolver.",
        },
        {
          title: "Audiencia objetivo",
          text: "Jóvenes adultos y adultos (16+) apasionados por las novelas gráficas noir, el cómic de autor, los thrillers de misterio y las narrativas transmedia con giros de guion psicológicos.",
        },
      ],
    },
  },

  // 2  Estilo gráfico
  {
    section: "Estilo",
    left: {
      type: "gallery",
      title: "Estilo gráfico",
      banner: "Rubber hose",
      items: [{ ...art("estilo-anatomia", "Estudio de anatomía del estilo"), label: "Anatomía" }],
    },
    right: {
      type: "gallery",
      items: [{ ...art("estilo-expresion", "Estudio de expresiones"), label: "Expresión" }],
      paletteLabel: "Color y sombras",
      palette: ["0A0A0A", "333333", "CCCCCC", "FFFFFF"],
    },
  },

  // 3  Sinopsis
  {
    section: "Sinopsis",
    left: {
      type: "text",
      title: "Sinopsis",
      label: "Eventos de Wire Tap «Ecos de la memoria»",
      paragraphs: [SYNOPSIS_1],
      image: art("rafael-hero", "Rafael Urrutia"),
    },
    right: {
      type: "text",
      paragraphs: [SYNOPSIS_2],
      image: art("rafael-boceto", "Boceto de anatomía"),
    },
  },

  // 4  Outline
  {
    section: "Outline",
    left: {
      type: "text",
      title: "Outline",
      label: "¿Cómo será?",
      paragraphs: [
        "Se dividirá en 8 entregas, cada una correspondiente a un capítulo de la historia. Cada capítulo/entrega contará con 8 páginas (4 hojas de contenido) más portada y contraportada.",
      ],
      image: art("outline", "Construcción del detective"),
    },
    right: {
      type: "outline",
      chapters: [
        "La cinta",
        "El archivo",
        "El testigo equivocado",
        "La muerte del saxofonista",
        "El orfanato",
        "La finca",
        "La confesión",
        "El cierre",
      ],
      note: "8 entregas · 8 páginas cada una",
    },
  },

  // 5  Arco narrativo
  {
    section: "Arco",
    left: {
      type: "text",
      title: "Arco narrativo",
      paragraphs: [],
      image: art("sarmiento-hero", "Eduardo Sarmiento"),
    },
    right: {
      type: "arc",
      cards: [
        {
          title: "El detonante",
          text: "Una cinta de casete anónima llega a manos del detective Sarmiento, afirmando que el caso Urrutia (cerrado hace 20 años) fue una farsa. Sarmiento ignora las advertencias de la fiscalía y retoma la investigación.",
        },
        {
          title: "El hallazgo",
          text: "Tras el asesinato de un testigo clave en plena calle, Sarmiento descubre la existencia de Sebastián, el hermano gemelo que el político mantuvo oculto toda su vida.",
        },
        {
          title: "La confesión",
          text: "En una finca aislada, Sebastián admite la verdad: ejecutó a su hermano en venganza y diseñó la escena del crimen perfecta para culpar a un tercero.",
        },
        {
          title: "El giro",
          text: "Antes de ser esposado, Sebastián descoloca a Sarmiento citando secretos del propio detective. Sarmiento sufre un colapso y despierta solo en la barra de un bar, desconcertado.",
        },
      ],
    },
  },

  // 6  Rafael Urrutia 
  {
    section: "Rafael",
    left: {
      type: "text",
      title: "Rafael Urrutia",
      label: "Concepto del personaje",
      paragraphs: [
        "Candidato presidencial y víctima del magnicidio de octubre de 1974. Su asesinato es el detonante de la historia.",
      ],
      palette: ["FFFFFF", "4E4E4E", "090909", "000000"],
      image: art("rafael-hero", "Rafael Urrutia"),
    },
    right: modelSheet("rafael", "Rafael Urrutia"),
  },

  // 7  Rafael Urrutia 
  {
    left: {
      type: "text",
      title: "Rafael Urrutia",
      label: "Transfondo",
      dense: true,
      paragraphs: [
        "Rafael Urrutia fue un político ambicioso que construyó su imagen pública sobre discursos de progreso, educación y apoyo a la cultura. Como parte de su estrategia electoral para ganar respaldo y reputación, financió la creación de un conservatorio de música donde estudiaban los jóvenes talentos más prometedores de la ciudad, entre ellos el saxofonista Esteban Salcedo.",
      ],
      image: art("rafael-hero", "Rafael Urrutia"),
    },
    right: {
      type: "text",
      dense: true,
      paragraphs: [
        "Sin embargo, para Urrutia las promesas culturales no eran convicciones, sino herramientas políticas desechables. Cuando el proyecto dejó de serle útil o el dinero desapareció, retiró el financiamiento sin dar explicaciones y dejó cerrar la institución, continuando su carrera política como si nada hubiera pasado. Esta decisión destruyó el futuro de los estudiantes y sembró la venganza que culminó con su muerte en su propio apartamento, de un disparo limpio y certero sin señales de ingreso forzado.",
      ],
      image: art("rafael-construccion", "Construcción de Rafael Urrutia"),
    },
  },

  // 8  Eduardo Sarmiento 
  {
    section: "Sarmiento",
    left: {
      type: "text",
      title: "Eduardo Sarmiento",
      label: "Concepto del personaje",
      paragraphs: ["Eduardo Sarmiento es un expolicía reconvertido en detective privado."],
      palette: ["FFFFFF", "2A2A2A", "090909", "000000"],
      image: art("sarmiento-hero", "Eduardo Sarmiento"),
    },
    right: modelSheet("sarmiento", "Eduardo Sarmiento"),
  },

  // 9  Eduardo Sarmiento 
  {
    left: {
      type: "text",
      title: "Eduardo Sarmiento",
      label: "Concepto del personaje",
      dense: true,
      paragraphs: [
        "Es un expolicía reconvertido en detective privado, caracterizado por su voz rasposa, su hábito de fumar cigarrillos y su profunda desconfianza hacia las versiones oficiales. Sarmiento acepta un encargo anónimo pagado en efectivo para investigar la muerte del candidato presidencial Rafael Urrutia en 1974, convirtiéndose en el único en prestar atención a la misteriosa melodía de saxofón que suena cada noche en la escena del crimen.",
      ],
      image: art("sarmiento-hero", "Eduardo Sarmiento"),
    },
    right: {
      type: "text",
      dense: true,
      paragraphs: [
        "Al visitar por primera vez el apartamento donde ocurrió el asesinato, Sarmiento nota una escena demasiado limpia y ordenada, concluyendo que alguien tuvo tiempo suficiente para borrar las huellas e impresiones importantes.",
      ],
      image: art("sarmiento-boceto", "Boceto de Eduardo Sarmiento"),
    },
  },

  // 10  Escenarios I
  {
    section: "Escenarios",
    left: {
      type: "gallery",
      title: "Escenarios",
      items: [
        { ...art("escenario-planta", "Planta de la oficina"), caption: "Planta" },
        { ...art("escenario-oficina", "Vista de la oficina"), caption: "Oficina" },
      ],
    },
    right: {
      type: "gallery",
      items: [
        {
          ...art("escenario-fiscalia", "Fiscalía Central"),
          caption: "Fiscalía Central · martes, 12:00 PM",
        },
      ],
    },
  },

  // 11  Escenarios II
  {
    left: {
      type: "gallery",
      title: "Escenarios",
      items: [
        { ...art("escenario-bar-fachada", "Fachada del bar de jazz"), caption: "Fachada del bar «Jazz»" },
      ],
    },
    right: {
      type: "gallery",
      items: [{ ...art("escenario-bar-interior", "Interior del bar"), caption: "La barra y el piano" }],
    },
  },

  {
    section: "Storyboard",
    left: { type: "gallery", title: "Storyboard", columns: 2, items: [sb(1), sb(2)] },
    right: { type: "gallery", items: [sb(3)] },
  },
  {
    left: { type: "gallery", title: "Storyboard", columns: 2, items: [sb(4), sb(5)] },
    right: { type: "gallery", items: [sb(6)] },
  },
  {
    left: { type: "gallery", title: "Storyboard", columns: 2, items: [sb(7), sb(8)] },
    right: { type: "gallery", items: [sb(9)] },
  },
  {
    left: { type: "gallery", title: "Storyboard", items: [sb(10)] },
    right: { type: "gallery", items: [sb(11)] },
  },
];