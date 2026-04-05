import Image from "next/image"
import { Heart, Shield, Stethoscope, Brain } from "lucide-react"

const welfarePoints = [
  {
    icon: Heart,
    title: "Cuidado Emocional",
    description: "El bienestar emocional del caballo es tan importante como su salud física. Promovemos técnicas de manejo respetuoso y sensible."
  },
  {
    icon: Shield,
    title: "Desensibilización",
    description: "Preparamos al caballo gradualmente para el equipo deportivo, asegurando que se sienta cómodo y seguro en todo momento."
  },
  {
    icon: Stethoscope,
    title: "Supervisión Veterinaria",
    description: "En cada competencia, un veterinario supervisa el bienestar de los animales, garantizando que el caballo siempre sea la prioridad."
  },
  {
    icon: Brain,
    title: "Entrenamiento Consciente",
    description: "Fomentamos métodos de entrenamiento basados en la comprensión del comportamiento equino y el refuerzo positivo."
  }
]

export function WelfareSection() {
  return (
    <section id="bienestar" className="py-20 lg:py-32 bg-background border-y border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/horse-care.jpg"
                alt="Cuidado del caballo"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/15 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Nuestro Compromiso</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
              Bienestar Animal
            </h2>
            <p className="text-primary/90 text-lg mb-10 leading-relaxed">
              En Huella Equina, el caballo siempre es el centro de nuestra atención. Promovemos una relación
              auténtica y responsable entre el ser humano y el equino, basada en el respeto mutuo y la comprensión
              profunda.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {welfarePoints.map((point, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-xl border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/25 transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-primary/80 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
