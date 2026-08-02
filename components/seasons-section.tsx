"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { shouldShowSeasonsInlinePlayerNow } from "@/lib/seasons-inline-player"
import { getEpisodesBySeason } from "@/data/episodes"

export function SeasonsSection() {
  const [showInlinePlayer, setShowInlinePlayer] = useState(false)
  const season2Episodes = getEpisodesBySeason(2)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setShowInlinePlayer(shouldShowSeasonsInlinePlayerNow())
  }, [])

  // Pausar video cuando sale de la vista, reproducir cuando vuelve
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="temporadas" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Contenido Audiovisual
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-4 mb-6 text-balance">
            Temporada 2
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Una nueva temporada de Huella Equina con historias increíbles del mundo ecuestre chileno.
            Descubre la pasión, la tradición y el bienestar animal.
          </p>
        </div>

        {/* Main Video Player - Video principal T2 */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl mb-8 ring-1 ring-white/10">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dqbsozfek/video/upload/v1785640368/WhatsApp_Video_2026-08-01_at_1.51.56_PM_kqixtp.mp4"
              controls
              autoPlay
              loop
              playsInline
            />
          </div>

          {/* Episode Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {season2Episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} showInlinePlayer={showInlinePlayer} />
            ))}
          </div>

          {/* Ver más temporadas */}
          <div className="text-center">
            <Link
              href="/temporadas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Ver todas las temporadas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function EpisodeCard({
  episode,
  showInlinePlayer,
}: {
  episode: ReturnType<typeof getEpisodesBySeason>[number]
  showInlinePlayer: boolean
}) {
  const openYoutube = () => {
    window.open(
      `https://www.youtube.com/watch?v=${episode.id}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <div className="group relative rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={episode.image || `https://img.youtube.com/vi/${episode.id}/maxresdefault.jpg`}
          alt={episode.title}
          className="w-full h-full object-cover"
        />

        {episode.upcoming ? (
          /* Badge de "Próximamente" */
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2">
            <Clock className="w-10 h-10 text-white/80" />
            <span className="text-white font-semibold text-sm bg-primary/80 px-3 py-1 rounded-full">
              {episode.premiereLabel || "Próximamente"}
            </span>
          </div>
        ) : (
          /* Botón de play */
          <button
            type="button"
            onClick={openYoutube}
            className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            T{episode.season} · E{episode.episodeNumber}
          </span>
          {episode.upcoming && (
            <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
              Próximo estreno
            </span>
          )}
        </div>
        <h3 className="font-serif text-white font-bold text-sm leading-snug mb-1 line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-white/70 text-xs line-clamp-2">
          {episode.description}
        </p>
      </div>
    </div>
  )
}
