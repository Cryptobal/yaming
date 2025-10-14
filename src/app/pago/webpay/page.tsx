"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, XCircle, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { formatPrice } from "@/lib/utils"
import { toast } from "sonner"

function WebpayPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const orderNumber = searchParams.get("order")
  
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState<any>(null)
  const [processing, setProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "success" | "failed" | null>(null)

  useEffect(() => {
    if (!orderNumber) {
      toast.error("Número de orden no válido")
      router.push("/carrito")
      return
    }

    // Obtener detalles de la orden
    fetch(`/api/checkout?orderNumber=${orderNumber}`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading order:", err)
        toast.error("Error al cargar la orden")
        setLoading(false)
      })
  }, [orderNumber, router])

  const handlePayment = async () => {
    setProcessing(true)
    
    // Simular proceso de pago con Webpay
    // En producción, aquí se integraría con el SDK de Transbank
    
    setTimeout(() => {
      // Simular éxito del pago (90% de probabilidad)
      const success = Math.random() > 0.1
      
      if (success) {
        setPaymentStatus("success")
        toast.success("¡Pago exitoso!", {
          description: "Tu orden ha sido procesada correctamente",
        })
        
        // Redirigir a confirmación después de 2 segundos
        setTimeout(() => {
          router.push(`/confirmacion/${orderNumber}`)
        }, 2000)
      } else {
        setPaymentStatus("failed")
        toast.error("Error en el pago", {
          description: "Por favor, intenta nuevamente",
        })
        setProcessing(false)
      }
    }, 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Cargando información de pago...</p>
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
                No pudimos encontrar tu orden. Por favor, intenta nuevamente.
              </p>
              <Button onClick={() => router.push("/carrito")}>
                Volver al Carrito
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
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Procesar Pago con Webpay</CardTitle>
              <CardDescription>
                Orden #{order.orderNumber}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Resumen de la orden */}
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="font-semibold mb-3">Resumen de tu compra:</h3>
                
                {order.items?.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.productName || item.productId} x{item.quantity}</span>
                    <span className="font-medium">
                      {formatPrice(item.price * item.quantity, { currency: "CLP" })}
                    </span>
                  </div>
                ))}
                
                <div className="border-t pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{formatPrice(order.subtotal, { currency: "CLP" })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Envío:</span>
                    <span>{order.shipping === 0 ? "Gratis" : formatPrice(order.shipping, { currency: "CLP" })}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-primary">{formatPrice(order.total, { currency: "CLP" })}</span>
                  </div>
                </div>
              </div>

              {/* Estado del pago */}
              {paymentStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-green-900 dark:text-green-100">
                    ¡Pago exitoso!
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Redirigiendo a tu confirmación...
                  </p>
                </motion.div>
              )}

              {paymentStatus === "failed" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center"
                >
                  <XCircle className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-red-900 dark:text-red-100">
                    Error en el pago
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Por favor, intenta nuevamente
                  </p>
                </motion.div>
              )}

              {/* Información de Webpay */}
              <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p className="font-medium mb-2">💳 Procesamiento seguro con Webpay Plus</p>
                <p>
                  Serás redirigido a la plataforma de Transbank para completar tu pago de forma segura.
                  Aceptamos todas las tarjetas de débito y crédito.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col gap-3">
                {!paymentStatus && (
                  <>
                    <Button
                      size="lg"
                      onClick={handlePayment}
                      disabled={processing}
                      className="w-full"
                    >
                      {processing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Procesando pago...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 mr-2" />
                          Pagar {formatPrice(order.total, { currency: "CLP" })}
                        </>
                      )}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => router.push("/carrito")}
                      disabled={processing}
                    >
                      Cancelar y volver
                    </Button>
                  </>
                )}
              </div>

              {/* Información adicional */}
              <div className="text-xs text-muted-foreground text-center space-y-1">
                <p>🔒 Tus datos están protegidos con encriptación SSL</p>
                <p>📧 Recibirás un email de confirmación al completar tu compra</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default function WebpayPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <WebpayPageContent />
    </Suspense>
  )
}

