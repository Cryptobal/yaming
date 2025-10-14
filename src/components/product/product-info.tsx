"use client"

import { motion } from "framer-motion"
import { Shield, Target, Zap, Building, Radio, Layers, Activity, Lock, Plane, Package, Eye, Network, Smartphone } from "lucide-react"
import { Product } from "@/lib/products-data"
import { Card, CardContent } from "@/components/ui/card"

// Mapeo de nombres de iconos a componentes
const iconMap: Record<string, any> = {
  Shield,
  Target,
  Zap,
  Building,
  Radio,
  Layers,
  Activity,
  Lock,
  Plane,
  Package,
  Eye,
  Network,
  Smartphone,
}

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Descripción Larga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnología de Vanguardia
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {product.longDescription}
          </p>
        </motion.div>

        {/* Características Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {product.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Casos de Uso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Casos de Uso Ideales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-background"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-medium">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

