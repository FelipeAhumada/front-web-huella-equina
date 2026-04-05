import { Heart, Eye, Users, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Amor genuino por los caballos y el deporte ecuestre"
  },
  {
    icon: Eye,
    title: "Visibilidad",
    description: "Difundimos y educamos sobre deportes ecuestres"
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Conectamos a quienes comparten nuestra pasión"
  },
  {
    icon: Award,
    title: "Responsabilidad",
    description: "Promovemos prácticas éticas y bienestar animal"
  }
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Conócenos</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
              ¿Quiénes Somos?
            </h2>
            <div className="space-y-6 text-primary-foreground/95 leading-relaxed">
              <p>
                Somos <strong className="text-primary-foreground">Huella Equina</strong>, un programa de televisión dedicado a difundir, educar y visibilizar el mundo de los deportes ecuestres desde una mirada moderna, responsable y comprometida.
              </p>
              <p>
                Nacimos con el propósito de acercar la cultura ecuestre a la comunidad, mostrando no solo la competencia, sino también el vínculo único entre jinete y caballo, basado en el respeto, la confianza y el cuidado mutuo.
              </p>
              <p>
                En Huella Equina creemos firmemente que el <strong className="text-primary-foreground">bienestar animal es fundamental</strong> en cada disciplina. Por eso, promovemos prácticas responsables, destacamos buenas iniciativas y generamos conciencia sobre la importancia de garantizar una vida digna, saludable y equilibrada para los caballos.
              </p>
              <p>
                A través de reportajes, entrevistas, coberturas de eventos y contenido educativo, buscamos inspirar tanto a quienes ya forman parte del mundo ecuestre como a nuevas generaciones interesadas en conocerlo.
              </p>
              <p className="text-lg font-medium text-primary-foreground/95 italic border-l-4 border-primary pl-4">
                Más que un programa, somos una comunidad que valora la pasión por los caballos, el deporte y el respeto por la vida.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-background/95 rounded-xl border border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-primary/90">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-16 text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-primary">
            Huella Equina: donde el deporte y el bienestar animal dejan su marca.
          </p>
        </div>
      </div>
    </section>
  )
}
