"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "¿Quiénes Somos?" },
  { href: "#patrocinadores", label: "Patrocinadores" },
  { href: "#temporadas", label: "Temporadas" },
  { href: "#bienestar", label: "Bienestar Animal" },
  { href: "#comunidad", label: "Comunidad y Familia" },
  { href: "#auspiciadores", label: "Auspiciadores" },
  { href: "#contacto", label: "Contacto" },
]

function SocialRow({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  const ic = iconClassName ?? "w-5 h-5"
  return (
    <div className={className}>
      <Link
        href="https://www.instagram.com/huella.equina/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground hover:text-primary p-1.5 -m-1.5 touch-manipulation transition-colors"
      >
        <Instagram className={ic} />
      </Link>
      <Link
        href="https://www.youtube.com/@huellaequina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="text-muted-foreground hover:text-primary p-1.5 -m-1.5 touch-manipulation transition-colors"
      >
        <Youtube className={ic} />
      </Link>
      <Link
        href="https://www.tiktok.com/@huella.equina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="text-muted-foreground hover:text-primary p-1.5 -m-1.5 touch-manipulation transition-colors"
      >
        <svg className={ic} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      </Link>
    </div>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 xl:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-3 h-14 sm:h-16 xl:h-20">
          <Link href="/" className="flex shrink-0 items-center min-w-0 touch-manipulation" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Huella Equina"
              width={140}
              height={56}
              className="h-9 w-auto sm:h-10 md:h-11 xl:h-14 max-w-[min(100%,9rem)] sm:max-w-none object-contain object-left"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Escritorio ancho (xl+): enlaces en línea + RRSS */}
          <nav
            className="hidden xl:flex flex-1 items-center justify-center gap-x-2 2xl:gap-x-3 min-w-0 px-2"
            aria-label="Principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs 2xl:text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap py-2 px-0.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <SocialRow className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0" />

          {/* Móvil y tablet: solo botón menú */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("xl:hidden shrink-0 size-10 sm:size-11 touch-manipulation", isOpen && "bg-muted")}
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Panel desplegable: móvil (1 col) · tablet (2 cols) */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="xl:hidden border-t border-border max-h-[min(70dvh,calc(100dvh-3.5rem))] sm:max-h-[min(75dvh,calc(100dvh-4rem))] overflow-y-auto overscroll-contain pb-4"
          >
            <nav
              className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-8"
              aria-label="Principal móvil"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] sm:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 md:py-3.5 border-b border-border/60 md:border-b md:border-border/40 touch-manipulation min-h-12 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 pb-1 border-t border-border">
              <SocialRow className="flex items-center gap-5 sm:gap-6" iconClassName="w-6 h-6 sm:w-5 sm:h-5" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
