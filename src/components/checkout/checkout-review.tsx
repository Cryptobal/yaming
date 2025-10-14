"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckoutData } from "@/app/checkout/page"
import { useCartStore } from "@/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Loader2, CreditCard, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { REGIONS_CHILE } from "@/lib/regions"

interface CheckoutReviewProps {
  data: CheckoutData
  onBack: () => void
}

export function CheckoutReview({ data, onBack }: CheckoutReviewProps) {
  const { items, getSubtotal, getTotal, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = getSubtotal()
  const total = getTotal()
  const shipping = total - subtotal

  const region = REGIONS_CHILE.find(r => r.value === data.region)

  const handleSubmit = async () => {
    setIsProcessing(true)

    try {
      // Crear orden en la base de datos
      const orderData = {
        customerData: {
          email: data.email,
          phone: data.phone,
          rut: data.rut,
          firstName: data.firstName,
          lastName: data.lastName,
        },
        shippingAddress: {
          street: data.street,
          number: data.number,
          apartment: data.apartment,
          city: data.city,
          region: data.region,
          postalCode: data.postalCode,
          instructions: data.instructions,
        },
        items: items.map(item => ({
          productId: item.product.id,
          productName: item.product.name,
          quantity: item.quantity,
          price: item.product.price,
        })),
        subtotal,
        shipping,
        total,
        paymentMethod: data.paymentMethod,
      }

      // Enviar a API
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Error al procesar el pedido")
      }

      // Si es Webpay, redirigir a Transbank
      if (data.paymentMethod === "webpay" && result.url) {
        window.location.href = result.url
      } else {
        // Transferencia bancaria
        clearCart()
        toast.success("Pedido creado exitosamente", {
          description: "Te enviamos los datos bancarios a tu email",
        })
        window.location.href = `/confirmacion/${result.orderNumber}`
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al procesar el pedido", {
        description: error instanceof Error ? error.message : "Intenta nuevamente",
      })
      setIsProcessing(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Review */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revisa tu Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 pb-4 border-b last:border-0">
                  <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images.thumbnail}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23f3f4f6' width='80' height='80'/%3E%3C/svg%3E`
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      {formatPrice(item.product.price * item.quantity, { currency: "CLP" })}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Teléfono:</strong> {data.phone}</p>
              <p><strong>RUT:</strong> {data.rut}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dirección de Envío</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Nombre:</strong> {data.firstName} {data.lastName}</p>
              <p><strong>Dirección:</strong> {data.street} {data.number}{data.apartment && `, ${data.apartment}`}</p>
              <p><strong>Comuna:</strong> {data.city}</p>
              <p><strong>Región:</strong> {region?.label}</p>
              <p><strong>Código Postal:</strong> {data.postalCode}</p>
              {data.instructions && (
                <p><strong>Instrucciones:</strong> {data.instructions}</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Método de Pago</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                {data.paymentMethod === "webpay" ? (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span className="font-medium">Webpay Plus</span>
                  </>
                ) : (
                  <>
                    <Building2 className="w-5 h-5" />
                    <span className="font-medium">Transferencia Bancaria</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-bold">Resumen</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    {formatPrice(subtotal, { currency: "CLP" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600 font-bold">GRATIS</span>
                    ) : (
                      formatPrice(shipping, { currency: "CLP" })
                    )}
                  </span>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total, { currency: "CLP" })}</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    {data.paymentMethod === "webpay" ? "Pagar con Webpay" : "Confirmar Pedido"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={onBack}
                disabled={isProcessing}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>

              {/* Security Badge */}
              <div className="pt-4 border-t text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                  <span>🔒</span>
                  Conexión segura SSL/TLS
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

