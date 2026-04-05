"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

const episodes = [
  {
    id: "djz255ehb_o",
    title: "E1: Horse Ball",
    description: "Un deporte de equipo dinámico y rápido donde la 'pareja' (jinete-caballo) debe anotar un gol con una pelota equipada con asas. El ramassage permite recoger la pelota sin desmontar, demostrando una sincronía perfecta.",
    image: "/images/horseball.jpg"
  },
  {
    id: "K3fs9_quVmw",
    title: "E2: Chile Barrilete",
    description: "Una emocionante carrera contra el tiempo donde el jinete y su caballo deben esquivar obstáculos (barriles) dispuestos en un patrón triangular. Un deporte verdaderamente inclusivo que celebra la conexión entre jinete y caballo.",
    image: "/images/chile-barrilete.jpg"
  },
  {
    id: "ZlLzpJPCbrc",
    title: "E3: Enduro Ecuestre",
    description: "Nos adentramos en una de las disciplinas más exigentes y fascinantes del mundo ecuestre: el Enduro Ecuestre, junto a Andrés Álvares, jinete y referente de esta disciplina en Chile.",
    image: "/images/enduro-ecuestre.jpg",
    start: 2
  }
]

export function SeasonsSection() {
  const [activeVideo, setActiveVideo] = useState(2) // E3 is featured by default
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentEpisode = episodes[activeVideo]

  return (
    <>
      <section id="temporadas" className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">Contenido Audiovisual</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-4 mb-6 text-balance">
              Temporadas
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Descubre las emocionantes disciplinas ecuestres que promovemos, donde la destreza, 
              la velocidad y el trabajo en equipo se unen.
            </p>
          </div>

          {/* Main Video Player */}
          <div className="max-w-5xl mx-auto">
            <div 
              className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl mb-8 cursor-pointer group ring-1 ring-white/10"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${currentEpisode.id}/maxresdefault.jpg`}
                alt={currentEpisode.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {currentEpisode.title}
              </h3>
              <p className="text-white/85 max-w-2xl mx-auto">
                {currentEpisode.description}
              </p>
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {episodes.map((episode, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVideo(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden group transition-all ${
                    activeVideo === index 
                      ? "ring-4 ring-primary shadow-lg" 
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${episode.id}/maxresdefault.jpg`}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                    <p className="text-white text-sm font-medium text-left truncate">
                      {episode.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${currentEpisode.id}?autoplay=1${currentEpisode.start ? `&start=${currentEpisode.start}` : ''}`}
              title={currentEpisode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
