import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Introducción al Campereo: Trabajo de Suelo",
    excerpt: "El campereo o trabajo de suelo es fundamental para establecer una comunicación clara con tu caballo. Aprende las técnicas básicas.",
    date: "15 Mar 2026",
    category: "Entrenamiento",
    readTime: "5 min"
  },
  {
    title: "El Arte del Embocado: Guía Completa",
    excerpt: "Elegir el bocado correcto es crucial para el bienestar de tu caballo. Descubre los diferentes tipos y cuándo usar cada uno.",
    date: "10 Mar 2026",
    category: "Equipamiento",
    readTime: "8 min"
  },
  {
    title: "Preparación Mental del Caballo para Competencias",
    excerpt: "La desensibilización y preparación emocional son clave antes de cualquier competencia. Te compartimos nuestros mejores consejos.",
    date: "5 Mar 2026",
    category: "Bienestar",
    readTime: "6 min"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Recursos</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
              Blog y Consejos
            </h2>
          </div>
          <Link 
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow group overflow-hidden">
              <CardContent className="p-0">
                {/* Category Banner */}
                <div className="h-2 bg-primary" />
                
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime} de lectura</span>
                    <Link 
                      href="#"
                      className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
