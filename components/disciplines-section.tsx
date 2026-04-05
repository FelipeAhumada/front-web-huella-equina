"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Timer, Users, Trophy, Target, Play, X } from "lucide-react"

const disciplines = [
  {
    title: "Chile Barrilete",
    image: "/images/chile-barrilete.jpg",
    description: "Una emocionante carrera contra el tiempo donde el jinete y su caballo deben esquivar obstáculos (barriles) dispuestos en un patrón triangular.",
    features: [
      { icon: Timer, text: "Carrera contra reloj" },
      { icon: Users, text: "Sin límites de edad o género" },
      { icon: Trophy, text: "Abierto a todas las razas" },
    ],
    highlight: "Un deporte verdaderamente inclusivo que celebra la conexión entre jinete y caballo.",
    youtubeId: null
  },
  {
    title: "Horseball",
    image: "/images/horseball.jpg",
    description: "Un deporte de equipo dinámico y rápido donde la 'pareja' (jinete-caballo) debe anotar un gol con una pelota equipada con asas.",
    features: [
      { icon: Target, text: "Técnica de ramassage" },
      { icon: Users, text: "Deporte en equipo" },
      { icon: Trophy, text: "Alta intensidad" },
    ],
    highlight: "El ramassage permite recoger la pelota sin desmontar, demostrando una sincronía perfecta.",
    youtubeId: null
  },
  {
    title: "T1-E3 Enduro Ecuestre",
    image: "/images/enduro-ecuestre.jpg",
    description: "Nos adentramos en una de las disciplinas más exigentes y fascinantes del mundo ecuestre: el Enduro Ecuestre, junto a Andrés Álvares, jinete y referente de esta disciplina en Chile.",
    features: [
      { icon: Timer, text: "Disciplina exigente" },
      { icon: Users, text: "Jinete y caballo" },
      { icon: Trophy, text: "Conexión, estrategia y respeto por el caballo" },
    ],
    highlight: "¿Sabías que en el Enduro Ecuestre no gana el más rápido… sino el que mejor cuida a su caballo?",
    youtubeId: "ZlLzpJPCbrc",
    youtubeStart: 2
  }
]

export function DisciplinesSection() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; start?: number } | null>(null)

  return (
    <>
      <section id="disciplinas" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Nuestras Disciplinas</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Disciplinas Destacadas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre las emocionantes disciplinas ecuestres que promovemos, donde la destreza, 
              la velocidad y el trabajo en equipo se unen.
            </p>
          </div>

          {/* Disciplines Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {disciplines.map((discipline, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg bg-card">
                <div className="relative h-64 lg:h-72">
                  <Image
                    src={discipline.image}
                    alt={discipline.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 font-serif text-2xl lg:text-3xl font-bold text-white">
                    {discipline.title}
                  </h3>
                  {discipline.youtubeId && (
                    <button
                      onClick={() => setActiveVideo({ id: discipline.youtubeId!, start: discipline.youtubeStart })}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover:scale-110"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </button>
                  )}
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {discipline.description}
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {discipline.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-center">
                        <div className="w-10 h-10 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-secondary rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-secondary-foreground italic">
                      {discipline.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1${activeVideo.start ? `&start=${activeVideo.start}` : ''}`}
              title="Video de disciplina ecuestre"
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
