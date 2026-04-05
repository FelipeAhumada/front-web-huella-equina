"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Marca = {
  name: string
  description: string
  initials: string
  logoSrc?: string
  url?: string
}

const marcas: Marca[] = [
  {
    name: "Viña Chocalán",
    description: "Somos una viña familiar, ubicados en la zona costera del Valle del Maipo.",
    initials: "VC",
    url: "https://www.chocalanwines.com",
  },
  {
    name: "Aldani",
    description: "Equipamiento ecuestre de alta calidad para jinetes y caballos.",
    initials: "AL",
    url: "https://www.aldani.cl",
  },
  {
    name: "Alma de Cereza",
    description: "Transformamos la esencia de esta fruta en experiencias líquidas.",
    initials: "AC",
    url:"https://www.almadecereza.com",
  },
  {
    name: "Amor perfecto",
    description: "Transformando la vida de los baristas y conectando a los productores con los clientes.",
    initials: "AP",
    url: "https://www.amorperfecto.com",
  },
  {
    name: "Botupharma",
    description: "Nos enorgullece ser un referente en la producción de ciencia que llega al terreno.",
    initials: "BP",
    url: "https://www.botupharma.com",
  },
  {
    name: "Bombas Center",
    description: "Servicio especializado en sistemas de riego para la Agricultura",
    initials: "BC",
    url: "https://www.bombascenterchile.cl",
  },
]

export function PartnersSection() {
  return (
    <section id="auspiciadores" className="py-20 lg:py-32 bg-primary scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">Presencia en el programa</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-4 mb-6 text-balance">
            Auspiciadores
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Gracias a todas las empresas que han contribuido a la realización de Huella Equina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {marcas.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-background/95 rounded-xl border border-white/10 hover:shadow-xl hover:border-secondary/40 transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white border-2 border-primary/15 shadow-md mb-6 ring-4 ring-primary/5 flex items-center justify-center shrink-0">
                  {item.logoSrc ? (
                    <Image
                      src={item.logoSrc}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                      sizes="96px"
                    />
                  ) : (
                    <span className="font-serif text-2xl font-bold text-primary">{item.initials}</span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.name}</h3>
                <p className="text-sm text-primary/85 leading-relaxed mb-6 grow">{item.description}</p>

                {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Visitar sitio web
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 lg:p-12 bg-secondary/25 border border-secondary/30 rounded-2xl max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            ¿Quieres ser parte de nuestra comunidad?
          </h3>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Si compartes nuestra pasión por los caballos y el bienestar animal, nos encantaría conocerte y explorar
            oportunidades de colaboración.
          </p>
          <a
            href="mailto:contacto@huellaequina.cl"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
