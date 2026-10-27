export const CADENCE_IMG = "/images/proyectos/cadence-of-shadows";

/*  Páginas de texto  */
export type TextBlock =
  | { kind: "title"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "label"; text: string }
  | { kind: "field"; label: string; text: string }
  | { kind: "slug"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "center"; text: string };

export type TextPage = { id: string; blocks: TextBlock[]; figures?: string[] };

export const productPage: TextPage = {
  id: "producto",
  blocks: [
    { kind: "heading", text: "¿Qué es el producto multimedia?" },
    { kind: "label", text: "Definición del concepto" },
    {
      kind: "paragraph",
      text: "Cadence of Shadows es una pieza audiovisual de animación 3D renderizada, concebida como una muestra narrativa de aproximadamente un minuto de duración. La propuesta traslada la estética clásica del cine negro — claroscuros, sombras alargadas, humo de cigarrillo — a un contexto históricamente específico: la Colombia marcada por la violencia bipartidista de las décadas de 1960 y 1970.",
    },
    {
      kind: "paragraph",
      text: "El producto está pensado como pieza de portafolio y prueba de concepto: una cinemática corta capaz de comunicar tono, mundo y personajes en muy poco tiempo, sentando las bases visuales y narrativas para un desarrollo más extenso a futuro.",
    },
    { kind: "heading", text: "Ficha técnica" },
    { kind: "field", label: "Título del proyecto", text: "Cadence of Shadows" },
    { kind: "field", label: "Formato y duración", text: "Animación 3D renderizada · 16:9 · 1080p · 25 fps · ~1 minuto" },
    { kind: "field", label: "Género", text: "Cine negro / thriller policial histórico — ambientación tropical colombiana" },
    {
      kind: "field",
      label: "Sinopsis",
      text: "En una Colombia marcada por la violencia bipartidista, un detective cínico investiga el asesinato de un líder popular. Dos pistas lo llevan a un pasado que creía enterrado y a un bar clandestino donde el crimen organizado y el poder político podrían estar más conectados de lo que nadie se atreve a admitir.",
    },
  ],
  figures: [
    `${CADENCE_IMG}/img_1.png`,
    `${CADENCE_IMG}/img_2.png`,
    `${CADENCE_IMG}/img_3.png`,
  ],
};

export const contextPage: TextPage = {
  id: "contexto",
  blocks: [
    { kind: "heading", text: "Contexto" },
    {
      kind: "paragraph",
      text: "La historia transcurre en una ciudad colombiana de la década de 1970, en medio de la tensión entre los movimientos populares y el poder establecido. La propuesta visual traslada la estética clásica del cine negro —claroscuros, sombras alargadas, humo de cigarrillo— al trópico y a la violencia bipartidista de la época, generando un contraste entre la tradición del género policiaco y el contexto histórico colombiano. El proyecto se desarrollará como una animación 3D renderizada, por lo que toda la ambientación, iluminación y atmósfera noir se logran mediante modelado, texturizado, iluminación virtual y postproducción digital, sin rodaje con actores reales.",
    },
    { kind: "heading", text: "Conflicto" },
    {
      kind: "paragraph",
      text: "El asesinato de un líder revolucionario esconde una verdad incómoda: una posible alianza entre el poder político y el crimen organizado. Fonseca deberá enfrentarse a un pasado que creía enterrado para llegar a la verdad, sin saber todavía hasta dónde está dispuesto a llegar por ella.",
    },
    { kind: "heading", text: "Estructura narrativa" },
    {
      kind: "paragraph",
      text: "La pieza está concebida para una duración aproximada de 1 minuto, por lo que el peso narrativo recae en la imagen, la atmósfera y el montaje más que en los diálogos, que se mantienen breves y funcionales. La historia se organiza en tres momentos:",
    },
    { kind: "field", label: "Inicio (planteamiento)", text: "llegada del detective a la escena del crimen y descubrimiento del cadáver (Escenas 1 y 2)." },
    { kind: "field", label: "Desarrollo (nudo)", text: "análisis de las pistas, visita al forense y desplazamiento hacia el territorio de la antigua pandilla (Escenas 2 a 4)." },
    { kind: "field", label: "Cierre (desenlace / gancho)", text: "confrontación en el bar y aparición de El Italiano, final abierto que plantea el conflicto central de la obra (Escena 5)." },
  ],
};

export const scriptStartPage: TextPage = {
  id: "guion-1",
  blocks: [
    { kind: "title", text: "Guion literario" },
    { kind: "heading", text: "Inicio — Planteamiento" },
    { kind: "slug", text: "1. EXT./INT. Fachada y recibidor de la casa — NOCHE" },
    {
      kind: "paragraph",
      text: "Llovizna fría. Una patrulla está estacionada frente a una casa de fachada colonial, apenas iluminada por un poste de luz. Damián Fonseca desciende de su auto, bota un cigarro al piso y camina hacia la puerta, donde lo espera el CABO EDILBERTO RÍOS.",
    },
    { kind: "heading", text: "Desarrollo — Nudo" },
    { kind: "slug", text: "2. INT. Cuarto principal de la casa — NOCHE" },
    {
      kind: "paragraph",
      text: "El interior revela sillas volteadas y un jarrón roto: señales evidentes de un forcejeo. Fonseca camina despacio, observando cada detalle. Al fondo del cuarto, el cuerpo de EZEQUIEL PEÑA yace bocarriba, con un disparo en el pecho. Fonseca se agacha junto a él. Encuentra una partitura musical doblada bajo el cuerpo y la observa con extrañeza. Luego, con un pañuelo, recoge un casquillo de bala del suelo y lo examina contra la luz.",
    },
    { kind: "slug", text: "3. INT. Oficina del forense — NOCHE" },
    {
      kind: "paragraph",
      text: "Fonseca entrega un sobre con la partitura y el casquillo a la DRA. María Gutiérrez, quien examina el proyectil bajo una lupa.",
    },
    { kind: "slug", text: "4. EXT. Calles de la ciudad — NOCHE" },
    {
      kind: "paragraph",
      text: "Fonseca se cala el sombrero, sube a su auto y conduce por calles empedradas y desiertas, apenas iluminadas por faroles. Montaje breve: el auto avanza entre sombras hasta que, entre la niebla, aparece el rótulo desteñido de un bar.",
    },
  ],
};

export const scriptEndPage: TextPage = {
  id: "guion-2",
  blocks: [
    { kind: "heading", text: "Cierre — Desenlace" },
    { kind: "slug", text: "5. INT. Bar — NOCHE" },
    {
      kind: "paragraph",
      text: "El bar está cargado de humo y música melancólica de jazz de fondo. El Tejón bebe en una esquina. Fonseca se acerca y toma la cerveza y le da un sorbo.",
    },
    {
      kind: "paragraph",
      text: "Fonseca lo agarra de la camisa, lo levanta de la silla y estrella su cabeza contra la barra. El Tejón reacciona y rompe una botella contra la cabeza de Fonseca. Estalla una pelea. El CANTINERO se agacha tras la barra. Al fondo, en una habitación privada, una silueta corpulenta fuma en la penumbra. Al oír el alboroto, se levanta y abre la puerta — vemos su punto de vista: Fonseca, ya golpeado, forcejeando contra El Tejón.",
    },
    {
      kind: "paragraph",
      text: "La puerta se abre del todo. Sale Giovanni Rosso, \"EL ITALIANO\", flanqueado por dos GUARDAESPALDAS. Todo se detiene. El Italiano mira a Fonseca con una media sonrisa.",
    },
    { kind: "center", text: "CORTE A NEGRO." },
    { kind: "center", text: "FIN DEL GUION LITERARIO" },
  ],
};

/*  Personajes  */
export type Character = {
  id: string;
  name: string;
  skin: string;
  sex: string;
  nationality: string;
  birth: string;
  height: string;
  weight: string;
  profession: string;
  status: string;
  outfit: string;
  description: string;
  motivation: string;
  photo: string;
  sheet: string;
  fingerprints?: string[];
  stamp?: string;
  placard?: string[];
  signature?: string;
};

const d = `${CADENCE_IMG}/damian`;
const c = `${CADENCE_IMG}/cabo`;
const r = `${CADENCE_IMG}/ricaurte`;
const g = `${CADENCE_IMG}/giovanni`;

export const CHARACTERS: Character[] = [
  {
    id: "fonseca",
    name: "Damián Fonseca",
    skin: "Clara", sex: "Masculino", nationality: "Colombiano", birth: "20/02/1925",
    height: "1,78 m", weight: "71 kg", profession: "Detective", status: "Vivo",
    outfit: "Viste una gabardina desgastada y un sombrero fedora que rara vez se quita, incluso bajo techo.",
    description: "Cínico, observador y de pocas palabras, esconde el peso de casos que preferiría olvidar.",
    motivation: "Fonseca busca la verdad no por fe en la justicia institucional, sino por una necesidad personal de cerrar cuentas con un pasado que creía enterrado. El asesinato de Ezequiel Peña lo obliga a reabrir una herida que involucra a la antigua pandilla de la 121 — y, posiblemente, a él mismo.",
    photo: `${d}/cara_damian.png`, 
    sheet: `${d}/damian_concept_art.png`, 
    fingerprints: [
      `${d}/huella_1.png`, 
      `${d}/huella_2.png`, 
      `${d}/huella_3.png`, 
      `${d}/huella_4.png`
    ],
  },
  {
    id: "rosso",
    name: "Giovanni Rosso",
    skin: "Clara", sex: "Masculino", nationality: "Italiano", birth: "Desconocida",
    height: "1,73 m", weight: "91 kg", profession: "Empresario", status: "Vivo",
    outfit: "Viste un traje elegante, sombrero y casi siempre con un puro en la boca.",
    description: "Elegante, peligroso, de autoridad silenciosa: no necesita alzar la voz para que todos en el bar se detengan.",
    motivation: "El Italiano protege un pacto que creía sellado. Su reaparición sugiere que el verdadero peligro no es él directamente, sino lo que está dispuesto a hacer para que ciertos secretos — y ciertas alianzas con el poder — sigan enterrados.",
    photo: `${g}/foto_giovanni.png`, 
    sheet: `${g}/concept_art_giovanni.png`, 
    stamp: "Sin registro dactilar", 
  },
  {
    id: "ricaurte",
    name: "Andrés Ricaurte",
    skin: "Clara", sex: "Masculino", nationality: "Colombiano", birth: "08/09/1926",
    height: "1,77 m", weight: "66 kg", profession: "Independiente", status: "Vivo",
    outfit: "Viste una chaqueta de cuero y pantalones de tipo bota campana.",
    description: "Rudo y desconfiado. Bebe en una esquina del bar, alias «Tejón».",
    motivation: "Él quiere que el pasado siga muerto. Cualquier señal de que alguien está removiendo lo que pasó con la vieja pandilla es, para ellos, una amenaza directa a la poca estabilidad que les queda.",
    photo: `${r}/foto_ricaurte.png`, 
    sheet: `${r}/concept_art_ricaurte.png`, 
    fingerprints: [
      `${r}/huella_1.png`, 
      `${r}/huella_2.png`, 
      `${r}/huella_3.png`, 
      `${r}/huella_4.png`
    ], 
    placard: [], 
    signature: "ACAB",
  },
  {
    id: "rios",
    name: "Edilberto Ríos",
    skin: "Media", sex: "Masculino", nationality: "Colombiano", birth: "08/09/1950",
    height: "1,72 m", weight: "57 kg", profession: "Policía", status: "Vivo",
    outfit: "Viste un uniforme de policía de la época.",
    description: "Joven y nervioso. Es el primero en llegar a la escena del crimen; le cuesta sostenerle la mirada a Fonseca.",
    motivation: "Ríos quiere demostrar que merece estar ahí. Su lealtad al procedimiento choca con la manera en que Fonseca opera al margen de las reglas, y esa tensión lo obliga a decidir de qué lado quiere aprender.",
    photo: `${c}/foto_cabo.png`, 
    sheet: `${c}/concept_art_cabo.png`, 
    fingerprints: [
      `${r}/huella_1.png`, 
      `${r}/huella_2.png`, 
      `${r}/huella_3.png`, 
      `${r}/huella_4.png`
    ], 
  },
];

/*  Mood board  */
const M = `${CADENCE_IMG}/mood_board`;

export const MOOD_CHARACTERS = Array.from({ length: 6 }, (_, i) => `${M}/personajes/img_${i + 1}.png`);

export const MOOD_SCENES = Array.from({ length: 8 }, (_, i) => `${M}/Escenarios/mood_${i + 1}.png`);

/* Escenarios */
const E = `${M}/Escenarios_2`;
export type Scenario = {
  id: string;
  title: string;
  stages: [{ label: string; src: string }, { label: string; src: string }];
};

export const SCENARIOS: Scenario[] = [
  {
    id: "calle",
    title: "Fachada y calles",
    stages: [
      { label: "Estudio de luz", src: `${E}/ilustracion_casa.png` },
      { label: "Referencia", src: `${E}/ref_casa.png`},
    ],
  },
  {
    id: "bar",
    title: "Bar clandestino",
    stages: [
      { label: "Boceto", src: `${E}/ilustracion_bar.png` },
      { label: "Referencia", src: `${E}/ref_bar.png` }, 
    ],
  },
];

/* Identidad */
export const IDENTITY = {
  silhouette: `${CADENCE_IMG}/identidad/silueta.png`,
  palette: ["#686868", "#000000", "#ffffff"],
  fonts: ["Special Elite"],
};

/*  Portada */
export const COVER_IMAGE = `${CADENCE_IMG}/portada.png`;