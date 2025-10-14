"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckoutData } from "@/app/checkout/page"
import { contactSchema, formatRut } from "@/lib/validators"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface CheckoutContactProps {
  data: Partial<CheckoutData>
  onUpdate: (data: Partial<CheckoutData>) => void
  onNext: () => void
}

type ContactFormData = {
  email: string
  phone: string
  rut: string
}

export function CheckoutContact({ data, onUpdate, onNext }: CheckoutContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: data.email || "",
      phone: data.phone || "",
      rut: data.rut || "",
    },
  })

  const rutValue = watch("rut")

  const onSubmit = (formData: ContactFormData) => {
    onUpdate(formData)
    onNext()
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
          <CardTitle className="text-2xl">Información de Contacto</CardTitle>
          <p className="text-muted-foreground">
            Te enviaremos la confirmación de tu pedido a este email
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+56 9 1234 5678"
                {...register("phone")}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Para coordinar la entrega
              </p>
            </div>

            {/* RUT */}
            <div className="space-y-2">
              <label htmlFor="rut" className="text-sm font-medium">
                RUT *
              </label>
              <Input
                id="rut"
                type="text"
                placeholder="12.345.678-9"
                {...register("rut")}
                onChange={(e) => {
                  const formatted = formatRut(e.target.value)
                  setValue("rut", formatted)
                }}
                value={rutValue}
                className={errors.rut ? "border-destructive" : ""}
              />
              {errors.rut && (
                <p className="text-sm text-destructive">{errors.rut.message}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Para facturación electrónica
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <Button type="submit" size="lg" className="min-w-[200px]">
                Continuar a Envío
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

