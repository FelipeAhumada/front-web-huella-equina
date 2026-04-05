import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Users, Baby, Accessibility } from "lucide-react"

const stories = [
  {
    quote: "Excelente programa donde se pueden ver las 12 disciplinas del mundo Ecuestre practicadas en Chile, desde el punto de vista del bienestar animal.",
    author: "Elizabeth Kassis",
    role: "Criadero Santana"
  },
  {
    quote: "Hacen Falta programas así, Generalmenta tenemos que ver porgramas de otros paises, para poder ir viendo las mejoras continuas de nuestros animales.",
    author: "Bruno Maraboli",
    role: "Maestro de Equitación y Dueño Centro Equestre Entre Viña"
  }
]

const communityFeatures = [
  {
    icon: Baby,
    title: "Desde los 3 Años",
    description: "Categorías especiales para los más pequeños, fomentando el amor por los caballos desde temprana edad."
  },
  {
    icon: Users,
    title: "Familias Completas",
    description: "Padres, hijos y abuelos comparten la pasión ecuestre, creando recuerdos inolvidables juntos."
  },
  {
    icon: Accessibility,
    title: "Equitación Adaptada",
    description: "Programas inclusivos para personas con discapacidad o necesidades especiales, porque todos merecen experimentar la conexión con los caballos."
  }
]

export function CommunitySection() {
  return (
    <section id="comunidad" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Nuestra Familia</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            Comunidad y Familia
          </h2>
          <p className="text-primary/90 text-lg max-w-2xl mx-auto">
            Somos una comunidad unida por el amor a los caballos, donde cada miembro, 
            sin importar su edad o condición, encuentra su lugar.
          </p>
        </div>

        {/* Community Image */}
        <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden mb-16 shadow-xl">
          <Image
            src="/images/family-equestrian.jpg"
            alt="Familia ecuestre"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-lg">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
              Unidos por la Pasión
            </h3>
            <p className="text-white/90 text-sm lg:text-base">
              Historias de generaciones que han encontrado en el mundo ecuestre un espacio de conexión y crecimiento.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="border border-primary/15 shadow-lg bg-background/95">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary/85 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="border border-primary/15 shadow-lg bg-background/95">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <blockquote className="text-primary text-lg leading-relaxed mb-6 italic">
                  &quot;{story.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-primary">
                      {story.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">{story.author}</p>
                    <p className="text-sm text-primary/80">{story.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
