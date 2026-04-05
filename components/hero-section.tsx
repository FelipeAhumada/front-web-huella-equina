import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.png"
          alt="Caballos en campo verde"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4d2c1b]/50 via-[#4d2c1b]/30 to-[#4d2c1b]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight text-balance">
          Donde el amor por los caballos{" "}
          <span className="block">deja huella</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Una plataforma audiovisual y educativa que celebra las disciplinas ecuestres 
          a través del respeto y el bienestar animal.
        </p>

        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <Link href="#temporadas">
                Explorar Temporadas
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white !bg-transparent text-white shadow-none hover:!bg-white/10 hover:!text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="#temporadas">
                <Play className="w-5 h-5 mr-2" />
                Ver Videos
              </Link>
            </Button>
          </div>

          <div className="mt-[30px] animate-bounce" aria-hidden>
            <ChevronDown className="w-8 h-8 text-white/70 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
