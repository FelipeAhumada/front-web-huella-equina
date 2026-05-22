"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ExternalLink } from "lucide-react"
import asociacionesData from "@/data/asociaciones.json"

type Asociacion = {
  name: string
  description: string
  url: string
  initials: string
  logoSrc?: string
}

function AssociationLogo({
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
    <div className="relative w-28 h-28 rounded-full overflow-hidden bg-white border-2 border-primary/10 shadow-inner mb-6 flex items-center justify-center">
      {showFallback ? (
        <span className="font-serif text-2xl font-bold text-primary">{initials}</span>
      ) : (
        <Image
          src={logoSrc}
          alt={name}
          fill
          className="object-contain p-3"
          sizes="112px"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export function AssociationsSection() {
  const { eyebrow, title, description, items } = asociacionesData
  const asociaciones = items as Asociacion[]

  return (
    <section id="asociaciones" className="py-20 lg:py-32 bg-muted/30 border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            {title}
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {asociaciones.map((item) => (
            <div
              key={item.name}
              className="group p-8 bg-card rounded-xl border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/25 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <AssociationLogo
                  name={item.name}
                  initials={item.initials}
                  logoSrc={item.logoSrc}
                />

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
