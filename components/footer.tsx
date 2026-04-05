import Link from "next/link"
import { Instagram, Youtube, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background py-16 scroll-mt-20 text-left">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-12 mb-12 items-start">
          {/* Brand */}
          <div className="flex flex-col items-start sm:col-span-2 lg:col-span-1">
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
            <div className="flex items-center gap-4">
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
          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg font-bold mb-4 w-full">Enlaces</h4>
            <ul className="space-y-3 w-full">
              <li>
                <Link href="#inicio" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Inicio
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
                <Link href="#bienestar" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Bienestar Animal
                </Link>
              </li>
              <li>
                <Link href="#auspiciadores" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Auspiciadores
                </Link>
              </li>
              <li>
                <Link href="#comunidad" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Comunidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg font-bold mb-4 w-full">Temporadas</h4>
            <ul className="space-y-3 w-full">
              <li>
                <Link href="#temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  E1: Horse Ball
                </Link>
              </li>
              <li>
                <Link href="#temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  E2: Chile Barrilete
                </Link>
              </li>
              <li>
                <Link href="#temporadas" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  E3: Enduro Ecuestre
                </Link>
              </li>
              <li>
                <Link href="#bienestar" className="text-background/70 hover:text-primary transition-colors text-sm inline-block">
                  Bienestar Equino
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start sm:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-lg font-bold mb-4 w-full">Contacto</h4>
            <ul className="space-y-4 w-full">
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                <div className="min-w-0">
                  <p className="text-sm text-background/70">Email</p>
                  <a href="mailto:contacto@huellaequina.cl" className="text-sm hover:text-primary transition-colors break-all">
                    contacto@huellaequina.cl
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                <div className="min-w-0">
                  <p className="text-sm text-background/70">Ubicación</p>
                  <p className="text-sm">Viña Chocalán, Chile</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col items-center gap-6 text-center">
          <a
            href="https://www.soft-innova.com"
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
