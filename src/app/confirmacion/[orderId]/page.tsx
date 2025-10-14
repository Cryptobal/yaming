"use client"

import { use } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Package } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ConfirmacionPageProps {
  params: Promise<{
    orderId: string
  }>
}

export default function ConfirmacionPage({ params }: ConfirmacionPageProps) {
  const { orderId } = use(params)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="text-center">
              <CardContent className="p-12 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                </motion.div>

                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    ¡Pedido Confirmado!
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Gracias por tu compra
                  </p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Número de Pedido</p>
                  <p className="text-2xl font-bold">#{orderId}</p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <p className="font-semibold">Confirmación enviada</p>
                      <p className="text-sm text-muted-foreground">
                        Te enviamos un email con los detalles de tu pedido
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Preparando tu pedido</p>
                      <p className="text-sm text-muted-foreground">
                        Lo despacharemos en las próximas 24-48 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                      🚚
                    </div>
                    <div>
                      <p className="font-semibold">Tracking de envío</p>
                      <p className="text-sm text-muted-foreground">
                        Te notificaremos cuando tu pedido sea despachado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link href="/productos" className="flex-1">
                    <Button variant="outline" className="w-full" size="lg">
                      Seguir Comprando
                    </Button>
                  </Link>
                  <Link href="/" className="flex-1">
                    <Button className="w-full" size="lg">
                      Volver al Inicio
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    ¿Necesitas ayuda? Contáctanos por{" "}
                    <a href="https://wa.me/56900000000" className="text-primary hover:underline">
                      WhatsApp
                    </a>
                    {" "}o{" "}
                    <a href="mailto:soporte@yaming.cl" className="text-primary hover:underline">
                      Email
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

