"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const patrocinadores = [
  {
    name: "Federación Ecuestre de Chile",
    description:
      "Organización oficial que regula y promueve el deporte ecuestre en Chile. Noticias, eventos, formación y una ventana abierta a la vibrante cultura ecuestre del país. Responsable de disciplinas como Salto, Adiestramiento, CCE, Enduro, Enganche, Paraecuestre, Ponies y Rienda.",
    logoSrc: "/images/logo-ecuestre.png",
    url: "https://fedech.cl",
  },
  {
    name: "Federación de Criadores de Caballos de Raza Chilena",
    description:
      "Institución dedicada a la preservación, fomento y promoción del Caballo Chileno, patrimonio vivo de nuestra cultura y tradición. Organizadores del Rodeo y promotores de la crianza responsable.",
    logoSrc: "/images/logo-criadores.svg",
    url: "https://caballoyrodeo.cl",
  },
]

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="py-20 lg:py-32 bg-background border-y border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Inversión en el programa</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            Patrocinadores
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Instituciones que apoyan de forma sostenida a Huella Equina y creen en la difusión del deporte y el
            bienestar ecuestre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {patrocinadores.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/25 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden bg-white border-2 border-primary/10 shadow-inner mb-6 flex items-center justify-center">
                  <Image
                    src={item.logoSrc}
                    alt={item.name}
                    fill
                    className="object-contain p-3"
                    sizes="112px"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.name}</h3>
                <p className="text-sm text-primary/75 leading-relaxed mb-6">{item.description}</p>

                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Visitar sitio web
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
