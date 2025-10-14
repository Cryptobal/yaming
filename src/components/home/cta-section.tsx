"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para Proteger tu Privacidad?
          </h2>
          <p className="text-xl opacity-90">
            Únete a miles de clientes satisfechos que ya protegen su privacidad con Yaming. 
            Envío gratis en tu primera compra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/productos">
              <Button size="lg" variant="secondary" className="group">
                Ver Productos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Contactar Ventas
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold">5,000+</div>
              <div className="opacity-90">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">2 Años</div>
              <div className="opacity-90">Garantía Incluida</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="opacity-90">Soporte al Cliente</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

