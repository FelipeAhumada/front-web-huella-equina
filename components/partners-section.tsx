"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

type Marca = {
  name: string
  description: string
  initials: string
  /** Archivo en `public/images/auspiciadores/` (mismo nombre que aquí) o URL absoluta. */
  logoSrc?: string
  url?: string
}

function PartnerLogo({
  name,
  initials,
  logoSrc,
}: {
  name: string
  initials: string
  logoSrc?: string
}) {
  const [failed, setFailed] = useState(false)
  const showFallback = !logoSrc || failed

  return (
    <div className="relative w-full max-w-[240px] h-[88px] sm:h-[100px] mx-auto mb-6 rounded-xl overflow-hidden bg-white border border-white/20 shadow-md flex items-center justify-center px-4 py-3 ring-4 ring-primary/5 shrink-0">
      {showFallback ? (
        <span className="font-serif text-2xl font-bold text-primary">{initials}</span>
      ) : (
        <Image
          src={logoSrc}
          alt={name}
          fill
          className="object-contain p-2"
          sizes="240px"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

const marcas: Marca[] = [
  {
    name: "Viña Chocalán",
    description: "Somos una viña familiar, ubicados en la zona costera del Valle del Maipo.",
    initials: "VC",
    logoSrc: "/images/auspiciadores/chocalan.jpg",
    url: "https://www.chocalanwines.com",
  },
  {
    name: "Aldani",
    description: "Equipamiento ecuestre de alta calidad para jinetes y caballos.",
    initials: "AL",
    logoSrc: "/images/auspiciadores/aldani.jpeg",
    url: "https://www.aldani.cl",
  },
  {
    name: "Alma de Cereza",
    description: "Transformamos la esencia de esta fruta en experiencias líquidas.",
    initials: "AC",
    logoSrc: "/images/auspiciadores/almacereza.png",
    url: "https://www.almadecereza.com",
  },

  {
    name: "Botupharma",
    description: "Nos enorgullece ser un referente en la producción de ciencia que llega al terreno.",
    initials: "BP",
    logoSrc: "/images/auspiciadores/botupharma.jpeg",
    url: "https://www.botupharma.com",
  },
  {
    name: "Bombas Center",
    description: "Servicio especializado en sistemas de riego para la Agricultura",
    initials: "BC",
    logoSrc: "/images/auspiciadores/bombascenter.png",
    url: "https://www.bombascenterchile.cl",
  },
  {
    name: "AguaMarket",
    description:
      "Líder en productos y servicios para la industria del agua: equipamiento, tratamiento, riego y más.",
    initials: "AM",
    logoSrc: "/images/auspiciadores/aguamarket.jpg",
    url: "https://www.aguamarket.com",
  },
  {
    name: "VetLabNawel | Laboratorio Veterinario.",
    description:
      "Laboratorio veterinario especializado en pequeños animales y equinos, equipado con tecnología de última generación.Ofrecemos diagnósticos precisos y rápidos, respaldando la labor clínica con altos estándares de calidad.",
    initials: "NL",
    logoSrc: "/images/auspiciadores/netlabnawel.jpeg",
    url: "#"
    //url: "https://www.netlabnawel.cl",
  }, {
    name: "Vetquestrian | Servicio Veterinario y Reproducción Equina",
    description:
      "Atención clínica integral para equinos de todas las disciplinas, incluyendo urgencias y cirugías menores en terreno.Laboratorio clínico completo y servicios especializados en reproducción equina, con enfoque profesional y personalizado.",
    initials: "VQ",
    logoSrc: "/images/auspiciadores/vetquestrian.jpeg",
    url: "https://vetquestrianspa.cl",
  },
  {
    name: "Dragfarma",
    description:
      "Laboratorio farmacéutico veterinario especializado en productos para equinos. Antiparasitarios, suplementos y soluciones de salud animal de alta calidad.",
    initials: "DF",
    logoSrc: "/images/auspiciadores/dragfarma.jpeg",
    url: "https://www.dragfarma.cl",
  },
  {
    name: "Kali Derma",
    description:
      "Línea dermatológica especializada en el cuidado de la piel equina. Productos formulados para tratar y prevenir afecciones cutáneas en caballos de deporte y trabajo.",
    initials: "KD",
    logoSrc: "/images/auspiciadores/kali-derma.jpeg",
    url: "https://www.kaliderma.cl",
  },
  {
    name: "Idal",
    description:
      "Soluciones integrales para la industria equina. Productos veterinarios y nutricionales que contribuyen al rendimiento y bienestar del caballo.",
    initials: "ID",
    logoSrc: "/images/auspiciadores/idal.jpeg",
    url: "https://www.idal.cl",
  },
  {
    name: "Lazka",
    description:
      "Marca dedicada al mundo ecuestre con productos innovadores para el cuidado, equipamiento y nutrición de caballos de alto rendimiento.",
    initials: "LZ",
    logoSrc: "/images/auspiciadores/lazka.jpeg",
    url: "https://mk.laskachile.com/index.html",
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
          {marcas.map((item) => (
            <div
              key={item.name}
              className="group p-8 bg-background/95 rounded-xl border border-white/10 hover:shadow-xl hover:border-secondary/40 transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <PartnerLogo name={item.name} initials={item.initials} logoSrc={item.logoSrc} />

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
            href="mailto:escobarproduccionestv@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
