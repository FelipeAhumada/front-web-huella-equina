"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Chile Barrilete en Acción",
    description: "Mira la emoción de una carrera de barriletes"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Horseball: Técnicas Básicas",
    description: "Aprende las técnicas fundamentales del horseball"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Bienestar Equino",
    description: "La importancia del cuidado integral del caballo"
  }
]

export function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(0)

  return (
    <section id="videos" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Contenido Audiovisual</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Videos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sumérgete en el mundo ecuestre con nuestros videos exclusivos de entrenamientos, 
            competencias y consejos de bienestar animal.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-foreground/5 rounded-xl overflow-hidden shadow-2xl mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${videos[activeVideo].id}?rel=0`}
              title={videos[activeVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Video Info */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              {videos[activeVideo].title}
            </h3>
            <p className="text-muted-foreground">
              {videos[activeVideo].description}
            </p>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {videos.map((video, index) => (
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
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-white text-sm font-medium text-left truncate">
                    {video.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
