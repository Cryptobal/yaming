"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Radio, Target, Zap, Shield, Battery, Settings } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Radio,
    title: "Generación de Ruido Electromagnético",
    description: "El dispositivo emite una señal de interferencia que interrumpe las conexiones Bluetooth activas dentro de su rango de alcance efectivo.",
  },
  {
    icon: Target,
    title: "Cobertura de Corta Distancia",
    description: "Su alcance está optimizado para bloquear señales en un radio limitado, evitando interferencias fuera del área deseada. Ideal para espacios controlados.",
  },
  {
    icon: Zap,
    title: "Modo de Funcionamiento Inmediato",
    description: "Simplemente enciéndelo y comenzará a emitir interferencias de manera continua. No requiere configuración compleja ni instalación de software.",
  },
]

const specs = [
  {
    icon: Shield,
    title: "Eficiencia Selectiva",
    description: "Bloquea Bluetooth sin afectar servicios de telecomunicaciones 3G, 4G, o 5G.",
  },
  {
    icon: Battery,
    title: "Portabilidad y Discreción",
    description: "Diseño compacto para uso en espacios controlados y fácil transporte.",
  },
  {
    icon: Settings,
    title: "Alcance Configurable",
    description: "Opciones de 5-10 metros estándar o upgrade a 30 metros según tus necesidades.",
  },
]

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-6 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                ¿Cómo Funciona?
              </h1>
              <p className="text-xl opacity-90">
                Descubre la tecnología detrás de nuestro sistema de inhibición de señales Bluetooth
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
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
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Características Clave
              </h2>
              <p className="text-xl text-muted-foreground">
                Tecnología diseñada para máxima eficiencia y facilidad de uso
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 bg-muted/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <spec.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {spec.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Instrucciones de Uso
              </h2>
              <p className="text-xl text-muted-foreground">
                Tres simples pasos para proteger tu privacidad
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Enciende el Dispositivo",
                  description: "Presiona el botón de encendido y espera la luz indicadora de activación.",
                },
                {
                  step: "2",
                  title: "Posiciona Estratégicamente",
                  description: "Coloca el dispositivo en el centro del área que deseas proteger para máxima cobertura.",
                },
                {
                  step: "3",
                  title: "Monitorea el Funcionamiento",
                  description: "Verifica que la luz LED permanezca encendida indicando operación continua.",
                },
              ].map((instruction, index) => (
                <motion.div
                  key={instruction.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold flex-shrink-0">
                          {instruction.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{instruction.title}</h3>
                          <p className="text-muted-foreground">{instruction.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

