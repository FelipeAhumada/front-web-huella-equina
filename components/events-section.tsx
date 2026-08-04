"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

type Evento = {
  title: string
  date: string // ISO format: YYYY-MM-DD
  location: string
  imageSrc: string
  url?: string
}

const eventos: Evento[] = [
  {
    title: "Cuarta Prueba de Doma",
    date: "2026-10-28",
    location: "Club de Polo San Cristóbal",
    imageSrc: "/images/eventos/cuarta-prueba-doma.jpeg",
    url: "https://www.instagram.com/matiasvialperez/",
  },
  {
    title: "Octavo Concurso de Adiestramiento",
    date: "2026-10-28",
    location: "Santiago Paperchase Club",
    imageSrc: "/images/eventos/octavo-concurso-adiestramiento.jpeg",
    url: "https://www.aldani.cl",
  },
]

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number)
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ]
  return `${day} de ${months[month - 1]} ${year}`
}

function isEventActive(isoDate: string): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const eventDate = new Date(isoDate + "T23:59:59")
  return eventDate >= today
}

export function EventsSection() {
  const activeEvents = eventos.filter((e) => isEventActive(e.date))

  if (activeEvents.length === 0) return null

  return (
    <section id="eventos" className="py-20 lg:py-32 bg-muted/30 border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Próximamente
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            Eventos
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Competencias y actividades ecuestres donde Huella Equina estará presente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activeEvents.map((evento) => {
            const Card = (
              <div
                key={evento.title}
                className="group overflow-hidden rounded-xl border border-primary/15 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all bg-card"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={evento.imageSrc}
                    alt={evento.title}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">
                    {evento.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-primary/70 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(evento.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary/70">
                    <MapPin className="w-4 h-4" />
                    <span>{evento.location}</span>
                  </div>
                </div>
              </div>
            )

            if (evento.url) {
              return (
                <Link
                  key={evento.title}
                  href={evento.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </Link>
              )
            }

            return Card
          })}
        </div>
      </div>
    </section>
  )
}
