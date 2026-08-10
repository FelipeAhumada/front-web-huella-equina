export interface Episode {
  id: string
  title: string
  description: string
  image: string
  season: number
  episodeNumber: number
  start?: number
  /** Si es true, el video aún no está disponible */
  upcoming?: boolean
  /** Fecha de estreno para episodios upcoming */
  premiereLabel?: string
  /** URL de video en Cloudinary (para intros/promos que no están en YouTube) */
  cloudinaryVideo?: string
}

export const episodes: Episode[] = [
  // ─── Temporada 2 ────────────────────────────────────────────
  {
    id: "oaPGMbpLpzs",
    title: "El Secreto del Enduro Equino: ¿Hasta Dónde Puede Resistir un Caballo? con Dr. Cristian Madariaga",
    description:
      "¿Cómo logra un caballo recorrer más de 100 kilómetros a toda velocidad sin poner en riesgo su salud? En este episodio de Huella Equina exploramos el enduro equino junto al Dr. Cristian Madariaga.",
    image: "https://i.ytimg.com/vi/oaPGMbpLpzs/hqdefault.jpg",
    season: 2,
    episodeNumber: 2,
  },
  {
    id: "_S6fLx33WBs",
    title: "¿El Polo es Solo para la Élite? La Realidad del Polista Profesional Chileno | Matías Vial",
    description:
      "En este primer episodio de la Temporada 2, exploramos el mundo del polo profesional en Chile junto a Matías Vial, desmitificando la idea de que es un deporte exclusivo para la élite.",
    image: "https://i.ytimg.com/vi/_S6fLx33WBs/hqdefault.jpg",
    season: 2,
    episodeNumber: 1,
  },
  {
    id: "intro-t2",
    title: "Introducción Temporada 2",
    description:
      "Conoce lo que trae la segunda temporada de Huella Equina: nuevas disciplinas, historias y la pasión por el bienestar ecuestre.",
    image: "https://res.cloudinary.com/dqbsozfek/video/upload/v1785640368/WhatsApp_Video_2026-08-01_at_1.51.56_PM_kqixtp.jpg",
    season: 2,
    episodeNumber: 0,
    cloudinaryVideo: "https://res.cloudinary.com/dqbsozfek/video/upload/v1785640368/WhatsApp_Video_2026-08-01_at_1.51.56_PM_kqixtp.mp4",
  },

  // ─── Temporada 1 ────────────────────────────────────────────
  {
    id: "cwOQXRiWiYk",
    title: "E12: ¿Qué aprendimos de los caballos?",
    description:
      "¡Llegamos al final de un viaje maravilloso! 🐎 Bienvenidos al último episodio de la primera temporada de Huella Equina",
    image:
      "https://i.ytimg.com/vi/cwOQXRiWiYk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD-hfwcFMRXRofz4f4CzJrOtPFqjA",
    season: 1,
    episodeNumber: 12,
  },
  {
    id: "GbSh1-zeBs4",
    title: "E11: Equitación de Escuela",
    description: "La filosofía que cambiará tu forma de montar | con Raúl Villaroel",
    image:
      "https://i.ytimg.com/vi/GbSh1-zeBs4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCrFQNm7KLbqhGfCe5GCQha0gqmAA",
    season: 1,
    episodeNumber: 11,
  },
  {
    id: "4qfqRROyEGs",
    title: "E10: Bienestar Equino en Chile",
    description:
      "¿Sabías que la ciencia del bienestar animal nació de la mano de \"locos\" que estudiaban delfines y jaguares?",
    image:
      "https://i.ytimg.com/vi/4qfqRROyEGs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBnugPBEN735K0o0lDLISeU31PNEQ",
    season: 1,
    episodeNumber: 10,
  },
  {
    id: "CMQegTLpv4c",
    title: "E9: Equinoterapia",
    description: "Mucho más que un paseo a caballo | Huella Equina con Fundación CINTEC",
    image: "https://img.youtube.com/vi/CMQegTLpv4c/maxresdefault.jpg",
    season: 1,
    episodeNumber: 9,
  },
  {
    id: "JJKAgMGaaSM",
    title: "E8: Del Enganche Ecuestre a Capurachi",
    description: "¿Puede el caballo chileno competir al más alto nivel mundial en el enganche ecuestre?",
    image: "https://img.youtube.com/vi/JJKAgMGaaSM/maxresdefault.jpg",
    season: 1,
    episodeNumber: 8,
  },
  {
    id: "PWiq8m9CKY8",
    title: "E7: Escuadras Ecuestres",
    description: "Escuadras Ecuestres: tradición, familia y futuro del Caballo Chileno.",
    image: "/images/escuadras-ecuestres.jpg",
    season: 1,
    episodeNumber: 7,
  },
  {
    id: "jMoerxsjgqQ",
    title: "E6: Enduro Ecuestre: Lo que NADIE te cuenta",
    description: "Enduro ecuestre en el mundo: lo que no ves detrás de la competencia… y el rol clave del veterinario",
    image: "/images/hqdefault.jpg",
    season: 1,
    episodeNumber: 6,
  },
  {
    id: "UYsYfcISKO8",
    title: "E5: Reining en Chile",
    description:
      "En este episodio de Huella Equina, nos adentramos en una de las disciplinas más técnicas, elegantes y desafiantes del mundo ecuestre: el Reining.",
    image: "/images/temporada-e5.jpg",
    season: 1,
    episodeNumber: 5,
  },
  {
    id: "7pd9PvQRmC4",
    title: "E4: Pruebas Funcionales",
    description: "De la Tradición al Deporte",
    image: "/images/pruebas-funcionales.jpg",
    season: 1,
    episodeNumber: 4,
    start: 1,
  },
  {
    id: "ZlLzpJPCbrc",
    title: "E3: Enduro Ecuestre",
    description:
      "Nos adentramos en una de las disciplinas más exigentes y fascinantes del mundo ecuestre: el Enduro Ecuestre, junto a Andrés Álvares, jinete y referente de esta disciplina en Chile.",
    image: "/images/enduro-ecuestre.jpg",
    season: 1,
    episodeNumber: 3,
  },
  {
    id: "K3fs9_quVmw",
    title: "E2: Chile Barrilete",
    description:
      "Una emocionante carrera contra el tiempo donde el jinete y su caballo deben esquivar obstáculos (barriles) dispuestos en un patrón triangular. Un deporte verdaderamente inclusivo que celebra la conexión entre jinete y caballo.",
    image: "/images/chile-barrilete.jpg",
    season: 1,
    episodeNumber: 2,
  },
  {
    id: "djz255ehb_o",
    title: "E1: Horse Ball",
    description:
      "Un deporte de equipo dinámico y rápido donde la 'pareja' (jinete-caballo) debe anotar un gol con una pelota equipada con asas. El ramassage permite recoger la pelota sin desmontar, demostrando una sincronía perfecta.",
    image: "/images/horseball.jpg",
    season: 1,
    episodeNumber: 1,
  },
]

/** Filtra episodios por temporada, ordenados por número de episodio descendente */
export function getEpisodesBySeason(season: number): Episode[] {
  return episodes
    .filter((e) => e.season === season)
    .sort((a, b) => b.episodeNumber - a.episodeNumber)
}

/** Obtener las temporadas disponibles ordenadas de más reciente a más antigua */
export function getSeasons(): number[] {
  const seasons = [...new Set(episodes.map((e) => e.season))]
  return seasons.sort((a, b) => b - a)
}
