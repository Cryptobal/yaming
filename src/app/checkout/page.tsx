"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CheckoutSteps } from "@/components/checkout/checkout-steps"
import { CheckoutContact } from "@/components/checkout/checkout-contact"
import { CheckoutShipping } from "@/components/checkout/checkout-shipping"
import { CheckoutPayment } from "@/components/checkout/checkout-payment"
import { CheckoutReview } from "@/components/checkout/checkout-review"
import { useCartStore } from "@/store/cart-store"
import { redirect } from "next/navigation"
import { motion } from "framer-motion"

export type CheckoutData = {
  // Contacto
  email: string
  phone: string
  rut: string
  
  // Envío
  firstName: string
  lastName: string
  street: string
  number: string
  apartment?: string
  city: string
  region: string
  postalCode: string
  instructions?: string
  
  // Pago
  paymentMethod: "webpay" | "transfer"
}

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items)
  const [currentStep, setCurrentStep] = useState(1)
  const [checkoutData, setCheckoutData] = useState<Partial<CheckoutData>>({})

  // Redirigir si el carrito está vacío
  if (items.length === 0) {
    redirect("/productos")
  }

  const updateData = (data: Partial<CheckoutData>) => {
    setCheckoutData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Finalizar Compra</h1>

            {/* Progress Steps */}
            <CheckoutSteps currentStep={currentStep} />

            {/* Step Content */}
            <div className="mt-12">
              {currentStep === 1 && (
                <CheckoutContact
                  data={checkoutData}
                  onUpdate={updateData}
                  onNext={nextStep}
                />
              )}
              {currentStep === 2 && (
                <CheckoutShipping
                  data={checkoutData}
                  onUpdate={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 3 && (
                <CheckoutPayment
                  data={checkoutData}
                  onUpdate={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 4 && (
                <CheckoutReview
                  data={checkoutData as CheckoutData}
                  onBack={prevStep}
                />
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

