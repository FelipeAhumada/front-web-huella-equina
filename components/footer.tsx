import Link from "next/link"
import { Instagram, Youtube, Mail, Phone, Globe } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background py-16 scroll-mt-20 text-left">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-12 mb-12 items-start">
          {/* Brand + RRSS + Logo Productora */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/images/logo_blanco.png"
                alt="Huella Equina"
                width={250}
                height={100}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              Plataforma audiovisual y educativa que celebra las disciplinas ecuestres a través del respeto y el
              bienestar animal.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="https://www.instagram.com/huella.equina/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors shrink-0"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@huellaequina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors shrink-0"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@huella.equina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors shrink-0"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>
            {/* Logo Productora - comentado hasta recibir formato webp
            <Link
              href="https://www.instagram.com/studiocontentpro/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Image
                src="/images/logo-escobar-producciones.png"
                alt="Studio Content Pro"
                width={375}
                height={375}
                className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            */}
          </div>

          {/* Enlaces */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg font-bold mb-4 w-full">Enlaces</h4>
            <ul className="space-y-3 w-full">
              <li>
                <Link href="#inicio" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#quienes-somos" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  ¿Quiénes Somos?
                </Link>
              </li>
              <li>
                <Link href="#patrocinadores" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Patrocinadores
                </Link>
              </li>
              <li>
                <Link href="#temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Temporadas
                </Link>
              </li>
              <li>
                <Link href="/temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Todas las Temporadas
                </Link>
              </li>
              <li>
                <Link href="#bienestar" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Bienestar Animal
                </Link>
              </li>
              <li>
                <Link href="#comunidad" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Comunidad y Familia
                </Link>
              </li>
              <li>
                <Link href="#auspiciadores" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Auspiciadores
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Temporadas (al medio) */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg font-bold mb-4 w-full">Temporadas</h4>
            <ul className="space-y-3 w-full">
              <li>
                <Link href="/temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  T1 — 12 Capítulos
                </Link>
              </li>
              <li>
                <Link href="/temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-1">
                  <span className="text-secondary font-bold">T2</span> Nueva temporada
                </Link>
              </li>
              <li>
                <Link href="/temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 mt-2">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto (a la derecha) */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg font-bold mb-4 w-full">Contacto</h4>
            <ul className="space-y-3 w-full">
              <li className="text-background font-semibold text-sm">Sebastian Escobar Villarreal</li>
              <li className="text-background/60 text-xs">Escobar Producciones</li>
              <li>
                <a
                  href="mailto:escobarproduccionestv@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  escobarproduccionestv@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.huellaequina.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                >
                  <Globe className="w-4 h-4 shrink-0" />
                  www.huellaequina.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56972279332"
                  className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +56 9 72279332
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col items-center gap-6 text-center">
          <a
            href="https://soft-innova.com?utm_source=cliente_web&utm_medium=footer&utm_campaign=huellaequina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm text-background/50 hover:text-primary transition-colors"
          >
            <Image
              src="/images/iso-removebg-preview.png"
              alt="Soft-Innova"
              width={25}
              height={25}
              className="size-[25px] shrink-0 object-contain"
            />
            Sitio web desarrollado por SofTech
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap w-full">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Huella Equina. Todos los derechos reservados.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link href="#" className="text-xs text-background/50 hover:text-background transition-colors whitespace-nowrap">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-xs text-background/50 hover:text-background transition-colors whitespace-nowrap">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
