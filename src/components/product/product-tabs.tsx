"use client"

import { motion } from "framer-motion"
import { Product } from "@/lib/products-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Package, FileText, Shield, Truck } from "lucide-react"

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1">
              <TabsTrigger value="specifications" className="gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Especificaciones</span>
                <span className="sm:hidden">Specs</span>
              </TabsTrigger>
              <TabsTrigger value="includes" className="gap-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Incluye</span>
                <span className="sm:hidden">Box</span>
              </TabsTrigger>
              <TabsTrigger value="warranty" className="gap-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Garantía</span>
                <span className="sm:hidden">Warranty</span>
              </TabsTrigger>
              <TabsTrigger value="shipping" className="gap-2">
                <Truck className="w-4 h-4" />
                <span className="hidden sm:inline">Envío</span>
                <span className="sm:hidden">Ship</span>
              </TabsTrigger>
            </TabsList>

            {/* Especificaciones Técnicas */}
            <TabsContent value="specifications">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Especificaciones Técnicas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start pb-4 border-b last:border-0"
                      >
                        <span className="font-medium text-muted-foreground">{spec.label}</span>
                        <span className="font-semibold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contenido de la Caja */}
            <TabsContent value="includes">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contenido del Paquete</h3>
                  <p className="text-muted-foreground mb-6">
                    Cada {product.name} incluye todo lo necesario para empezar a usarlo inmediatamente:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.includes.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Garantía y Devoluciones */}
            <TabsContent value="warranty">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Garantía y Devoluciones</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Garantía del Producto
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.warranty}
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold mb-3">Política de Devolución</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Tienes 30 días para devolver tu producto sin uso</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>El producto debe estar en su empaque original</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Reembolso completo en 5-7 días hábiles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Costo de envío de devolución a cargo del cliente</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold mb-3">Soporte Técnico</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Nuestro equipo de soporte técnico está disponible para ayudarte con cualquier consulta sobre el producto.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href="mailto:soporte@yaming.cl" className="text-primary hover:underline">
                          soporte@yaming.cl
                        </a>
                        <a href="https://wa.me/56900000000" className="text-primary hover:underline">
                          WhatsApp: +56 9 0000 0000
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Envío y Entrega */}
            <TabsContent value="shipping">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Envío y Entrega</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {product.shipping}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t">
                      <div className="text-center p-6 rounded-lg bg-muted/30">
                        <div className="text-3xl mb-2">📦</div>
                        <h4 className="font-semibold mb-2">Empaque Seguro</h4>
                        <p className="text-sm text-muted-foreground">
                          Embalaje profesional para máxima protección
                        </p>
                      </div>
                      <div className="text-center p-6 rounded-lg bg-muted/30">
                        <div className="text-3xl mb-2">🚚</div>
                        <h4 className="font-semibold mb-2">Tracking en Tiempo Real</h4>
                        <p className="text-sm text-muted-foreground">
                          Rastrea tu pedido desde el envío hasta la entrega
                        </p>
                      </div>
                      <div className="text-center p-6 rounded-lg bg-muted/30">
                        <div className="text-3xl mb-2">✓</div>
                        <h4 className="font-semibold mb-2">Envío Gratis</h4>
                        <p className="text-sm text-muted-foreground">
                          Sin costos adicionales en todo Chile
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold mb-4">Couriers Asociados</h4>
                      <div className="flex flex-wrap gap-4">
                        <div className="px-4 py-2 rounded-lg border">Chilexpress</div>
                        <div className="px-4 py-2 rounded-lg border">Starken</div>
                        <div className="px-4 py-2 rounded-lg border">Blue Express</div>
                        <div className="px-4 py-2 rounded-lg border">DHL (Internacional)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

