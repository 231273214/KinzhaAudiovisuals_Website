const IMG = "/images/proyectos/wiretap";

export const WIRETAP = {
  strip: [
    { label: "Lema", value: "“La verdad es como el humo... siempre encuentra por dónde salir”" },
    { label: "Fecha de edición", value: "Bogotá, Octubre de 1974" },
    { label: "Precio", value: "$1.70 pesos" },
  ],

  images: {
    building: `${IMG}/edificio.jpg`,
    chroniclers: `${IMG}/cronistas.jpg`,
    saxophonist: `${IMG}/saxofonista.jpg`,
    bulb: `${IMG}/bombillo.jpg`,
    compass: `${IMG}/brujula.png`,
  },

  writers: [
    {
      name: "Sergio Andrés Rangel",
      role: "Investigador y Narrador",
      bio: "Es la voz pausada y analítica que desmenuza las actas policiales y los registros de la época. Se encarga de reconstruir la fría planimetría del crimen y conectar las pistas que la policía ignoró.",
    },
    {
      name: "Axel Camilo Prieto",
      role: "Cronista y Director de Foley",
      bio: "Responsable de la inmersión atmosférica. Su oído meticuloso captura el crujido de las cintas de carrete abierto, el zumbido de las radios de válvulas y la persistente lluvia bogotana, transportando al oyente directamente al bar de jazz húmedo y a las oscuras calles de La Candelaria en 1974.",
    },
  ],

  characters: [
    {
      title: "El Saxofonista",
      name: "Esteban Salcedo",
      text: "En otro tiempo, el estudiante estrella del conservatorio de música. Hoy, un alma rota que se para bajo la lluvia bogotana a las 11:00 p.m. para tocar la misma partitura melancólica: la última pieza que compuso la noche en que el gobierno le quitó el financiamiento a su escuela, arrebatándole su futuro.",
    },
    {
      title: "El Detective",
      name: "Tomás Rivas",
      text: "Un expolicía cínico, adicto al humo del cigarrillo y desconfiado por naturaleza. Es el único que entiende que el jazz repetitivo del saxofonista no es arte, sino un mensaje cifrado que devela un complot político.",
    },
    {
      title: "El Candidato",
      name: "Rafael Urrutia",
      text: "Un político carismático que usó la cultura y el arte como trampolín electoral. Financió el conservatorio para ganar votos y lo dejó morir en silencio para avanzar en su carrera, sin saber que sus promesas incumplidas sellarían su propio destino en su apartamento.",
    },
  ],

  cards: [
    { title: "¿Dónde escucharlo?", text: "Emisión semanal en Spotify y Apple Music. Fricción Inmersiva." },
    { title: "Se busca información", text: "¿Estuvo en el centro en Octubre 1974? Saxofonista en bar “Jazz Nocturno”." },
    { title: "Música para el alma", text: "Discos de Miles Davis y Chet Baker. Cool Jazz" },
    { title: "Apoye la escena", text: "Mecenas en Vaki y Kickstarter. Soundtrack original y libro de ilustraciones." },
    { title: "Camino a los premios", text: "Postulación al Festival Gabo y Premios Ondas." },
  ],
};