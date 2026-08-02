"use client"

import { useState } from "react"
import { Play, Clock, Filter } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { episodes, getSeasons, getEpisodesBySeason, type Episode } from "@/data/episodes"

export default function TemporadasPage() {
  const seasons = getSeasons()
  const [activeSeason, setActiveSeason] = useState<number | null>(null)

  const filteredEpisodes = activeSeason
    ? getEpisodesBySeason(activeSeason)
    : [...episodes].sort((a, b) => {
        if (b.season !== a.season) return b.season - a.season
        return b.episodeNumber - a.episodeNumber
      })

  return (
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-b from-primary to-primary/95 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
              Temporadas
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Explora todos los episodios de Huella Equina. Disciplinas ecuestres, bienestar animal y las historias
              detrás del mundo ecuestre chileno.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-white/60 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filtrar:</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveSeason(null)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeSeason === null
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Todas
            </button>
            {seasons.map((season) => (
              <button
                key={season}
                type="button"
                onClick={() => setActiveSeason(season)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeSeason === season
                    ? "bg-secondary text-secondary-foreground shadow-lg"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                Temporada {season}
              </button>
            ))}
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No hay episodios disponibles para esta temporada.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

function EpisodeCard({ episode }: { episode: Episode }) {
  const openYoutube = () => {
    if (episode.upcoming) return
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
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2">
            <Clock className="w-10 h-10 text-white/80" />
            <span className="text-white font-semibold text-sm bg-primary/80 px-3 py-1 rounded-full">
              {episode.premiereLabel || "Próximamente"}
            </span>
          </div>
        ) : (
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
        <div className="flex items-center gap-2 mb-2 flex-wrap">
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
        <p className="text-white/70 text-xs line-clamp-3">
          {episode.description}
        </p>
      </div>
    </div>
  )
}
