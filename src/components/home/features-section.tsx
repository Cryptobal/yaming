"use client"

import { motion } from "framer-motion"
import { Radio, Target, Zap, Shield, Globe, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Radio,
    title: "Generación Electromagnética",
    description: "Emite señales de interferencia que interrumpen las conexiones Bluetooth activas de forma selectiva.",
  },
  {
    icon: Target,
    title: "Cobertura de Corta Distancia",
    description: "Alcance optimizado de 5-10 metros, con opción de upgrade hasta 30 metros para espacios más amplios.",
  },
  {
    icon: Zap,
    title: "Activación Instantánea",
    description: "Simplemente enciéndelo y comenzará a emitir interferencias de manera continua e inmediata.",
  },
  {
    icon: Shield,
    title: "Eficiencia Selectiva",
    description: "Bloquea Bluetooth sin afectar servicios de telecomunicaciones 3G, 4G o 5G.",
  },
  {
    icon: Globe,
    title: "Portabilidad y Discreción",
    description: "Diseño compacto y ligero, perfecto para uso en espacios controlados y transporte.",
  },
  {
    icon: Clock,
    title: "Uso Continuo",
    description: "Batería de larga duración para uso prolongado sin necesidad de recarga frecuente.",
  },
]

export function FeaturesSection() {
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
            Características Clave
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnología de vanguardia diseñada para proteger tu privacidad en cualquier situación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

