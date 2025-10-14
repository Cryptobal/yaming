"use client"

import { use } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, Mail, Home, Download } from "lucide-react"
import { motion } from "framer-motion"
import { formatPrice } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ConfirmacionPageProps {
  params: Promise<{
    orderNumber: string
  }>
}

export default function ConfirmacionPage({ params }: ConfirmacionPageProps) {
  const { orderNumber } = use(params)
  const router = useRouter()
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Obtener detalles de la orden
    fetch(`/api/checkout?orderNumber=${orderNumber}`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading order:", err)
        setLoading(false)
      })
  }, [orderNumber])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-center text-destructive">Orden no encontrada</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                No pudimos encontrar tu orden.
              </p>
              <Button onClick={() => router.push("/")}>
                Volver al Inicio
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Mensaje de éxito */}
          <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>
                <h1 className="text-3xl font-bold mb-2">¡Gracias por tu compra!</h1>
                <p className="text-muted-foreground text-lg">
                  Tu orden <span className="font-semibold text-primary">#{order.orderNumber}</span> ha sido confirmada
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Detalles de la orden */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Resumen de tu compra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {order.items?.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between items-start border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">{item.productName || item.productId}</p>
                      <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">
                      {formatPrice(item.price * item.quantity, "CLP")}
                    </p>
                  </div>
                ))}
                
                <div className="pt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{formatPrice(order.subtotal, "CLP")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Envío:</span>
                    <span>{order.shipping === 0 ? "Gratis" : formatPrice(order.shipping, "CLP")}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-primary">{formatPrice(order.total, "CLP")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información de envío */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Información de envío
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Enviar a:</p>
                  <p className="font-medium">
                    {order.customerData?.firstName} {order.customerData?.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {order.customerData?.email}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {order.customerData?.phone}
                  </p>
                </div>
                
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Dirección:</p>
                  <p className="text-sm">
                    {order.shippingAddress?.street} {order.shippingAddress?.number}
                    {order.shippingAddress?.apartment && `, Depto ${order.shippingAddress.apartment}`}
                  </p>
                  <p className="text-sm">
                    {order.shippingAddress?.city}, {order.shippingAddress?.region}
                  </p>
                  <p className="text-sm">
                    {order.shippingAddress?.postalCode}
                  </p>
                  {order.shippingAddress?.instructions && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Instrucciones: {order.shippingAddress.instructions}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Información adicional */}
          <Card>
            <CardHeader>
              <CardTitle>¿Qué sigue?</CardTitle>
              <CardDescription>
                Te hemos enviado un email de confirmación con todos los detalles de tu pedido
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Preparación del pedido</p>
                  <p className="text-sm text-muted-foreground">
                    Estamos preparando tu pedido para el envío (1-2 días hábiles)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Despacho</p>
                  <p className="text-sm text-muted-foreground">
                    Recibirás un email con el número de seguimiento cuando tu pedido sea despachado
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Entrega</p>
                  <p className="text-sm text-muted-foreground">
                    Tu pedido llegará en 2-3 semanas a tu dirección
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              onClick={() => router.push("/")}
              className="flex-1"
            >
              <Home className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.print()}
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar Comprobante
            </Button>
          </div>

          {/* Ayuda */}
          <Card className="mt-6 bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground">
                ¿Tienes alguna pregunta? Contáctanos en{" "}
                <a href="mailto:soporte@yaming.cl" className="text-primary hover:underline">
                  soporte@yaming.cl
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

