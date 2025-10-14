"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Santiago, Chile",
    rating: 5,
    text: "Excelente producto. Lo uso en la playa y funciona perfecto. La batería dura todo el día y es muy fácil de transportar.",
    verified: true,
  },
  {
    name: "Carlos Rodríguez",
    location: "Valparaíso, Chile",
    rating: 5,
    text: "Superó mis expectativas. El alcance de 10 metros es más que suficiente para mi jardín. Muy recomendado.",
    verified: true,
  },
  {
    name: "Ana Martínez",
    location: "Concepción, Chile",
    rating: 4,
    text: "Buen producto, llegó rápido y bien empacado. El servicio al cliente es excelente. Lo recomiendo 100%.",
    verified: true,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground">
            Miles de clientes satisfechos en todo Chile confían en Yaming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-4 border-t">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                    {testimonial.verified && (
                      <p className="text-xs text-primary mt-1">
                        ✓ Compra Verificada
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Más de <span className="font-bold text-primary">5,000+ clientes satisfechos</span> en todo el país
          </p>
        </motion.div>
      </div>
    </section>
  )
}

