"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckoutData } from "@/app/checkout/page"
import { paymentSchema } from "@/lib/validators"
import { ArrowRight, ArrowLeft, CreditCard, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CheckoutPaymentProps {
  data: Partial<CheckoutData>
  onUpdate: (data: Partial<CheckoutData>) => void
  onNext: () => void
  onBack: () => void
}

type PaymentFormData = {
  paymentMethod: "webpay" | "transfer"
}

const paymentMethods = [
  {
    id: "webpay",
    name: "Webpay Plus",
    description: "Paga con tarjeta de crédito o débito",
    icon: CreditCard,
    badges: ["Visa", "Mastercard", "RedCompra"],
  },
  {
    id: "transfer",
    name: "Transferencia Bancaria",
    description: "Te enviaremos los datos bancarios por email",
    icon: Building2,
    badges: ["Confirmación manual"],
  },
]

export function CheckoutPayment({ data, onUpdate, onNext, onBack }: CheckoutPaymentProps) {
  const [selected, setSelected] = useState<"webpay" | "transfer">(
    data.paymentMethod || "webpay"
  )

  const {
    handleSubmit,
    setValue,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentMethod: data.paymentMethod || "webpay",
    },
  })

  const onSubmit = (formData: PaymentFormData) => {
    onUpdate(formData)
    onNext()
  }

  const handleSelect = (method: "webpay" | "transfer") => {
    setSelected(method)
    setValue("paymentMethod", method)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Método de Pago</CardTitle>
          <p className="text-muted-foreground">
            Selecciona cómo deseas pagar tu pedido
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                const isSelected = selected === method.id

                return (
                  <motion.button
                    key={method.id}
                    type="button"
                    onClick={() => handleSelect(method.id as "webpay" | "transfer")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full p-6 rounded-lg border-2 text-left transition-all",
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{method.name}</h3>
                          {isSelected && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                              <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {method.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {method.badges.map((badge) => (
                            <span
                              key={badge}
                              className="text-xs px-2 py-1 rounded bg-muted font-medium"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Nota informativa */}
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                {selected === "webpay" ? (
                  <>
                    <strong>Pago seguro:</strong> Serás redirigido a la plataforma de Transbank para completar tu pago de forma segura.
                  </>
                ) : (
                  <>
                    <strong>Transferencia bancaria:</strong> Te enviaremos los datos bancarios por email. Tu pedido se procesará una vez confirmemos el pago.
                  </>
                )}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" size="lg" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <Button type="submit" size="lg" className="min-w-[200px]">
                Revisar Pedido
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

