"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckoutData } from "@/app/checkout/page"
import { shippingSchema } from "@/lib/validators"
import { REGIONS_CHILE } from "@/lib/regions"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface CheckoutShippingProps {
  data: Partial<CheckoutData>
  onUpdate: (data: Partial<CheckoutData>) => void
  onNext: () => void
  onBack: () => void
}

type ShippingFormData = {
  firstName: string
  lastName: string
  street: string
  number: string
  apartment?: string
  city: string
  region: string
  postalCode: string
  instructions?: string
}

export function CheckoutShipping({ data, onUpdate, onNext, onBack }: CheckoutShippingProps) {
  const [selectedRegion, setSelectedRegion] = useState(data.region || "")
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      street: data.street || "",
      number: data.number || "",
      apartment: data.apartment || "",
      city: data.city || "",
      region: data.region || "",
      postalCode: data.postalCode || "",
      instructions: data.instructions || "",
    },
  })

  const onSubmit = (formData: ShippingFormData) => {
    onUpdate(formData)
    onNext()
  }

  const currentRegion = REGIONS_CHILE.find(r => r.value === selectedRegion)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Dirección de Envío</CardTitle>
          <p className="text-muted-foreground">
            ¿Dónde quieres recibir tu pedido?
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nombre y Apellido */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  Nombre *
                </label>
                <Input
                  id="firstName"
                  placeholder="Juan"
                  {...register("firstName")}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Apellido *
                </label>
                <Input
                  id="lastName"
                  placeholder="Pérez"
                  {...register("lastName")}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Calle y Número */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-2">
                <label htmlFor="street" className="text-sm font-medium">
                  Calle *
                </label>
                <Input
                  id="street"
                  placeholder="Av. Providencia"
                  {...register("street")}
                  className={errors.street ? "border-destructive" : ""}
                />
                {errors.street && (
                  <p className="text-sm text-destructive">{errors.street.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="number" className="text-sm font-medium">
                  Número *
                </label>
                <Input
                  id="number"
                  placeholder="1234"
                  {...register("number")}
                  className={errors.number ? "border-destructive" : ""}
                />
                {errors.number && (
                  <p className="text-sm text-destructive">{errors.number.message}</p>
                )}
              </div>
            </div>

            {/* Departamento */}
            <div className="space-y-2">
              <label htmlFor="apartment" className="text-sm font-medium">
                Depto / Oficina (Opcional)
              </label>
              <Input
                id="apartment"
                placeholder="Depto 301"
                {...register("apartment")}
              />
            </div>

            {/* Región */}
            <div className="space-y-2">
              <label htmlFor="region" className="text-sm font-medium">
                Región *
              </label>
              <select
                id="region"
                {...register("region")}
                onChange={(e) => {
                  setSelectedRegion(e.target.value)
                  setValue("region", e.target.value)
                  setValue("city", "") // Reset city when region changes
                }}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Selecciona una región</option>
                {REGIONS_CHILE.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
              {errors.region && (
                <p className="text-sm text-destructive">{errors.region.message}</p>
              )}
            </div>

            {/* Comuna */}
            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium">
                Comuna *
              </label>
              <select
                id="city"
                {...register("city")}
                disabled={!selectedRegion}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Selecciona una comuna</option>
                {currentRegion?.cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city.message}</p>
              )}
            </div>

            {/* Código Postal */}
            <div className="space-y-2">
              <label htmlFor="postalCode" className="text-sm font-medium">
                Código Postal *
              </label>
              <Input
                id="postalCode"
                placeholder="1234567"
                {...register("postalCode")}
                className={errors.postalCode ? "border-destructive" : ""}
              />
              {errors.postalCode && (
                <p className="text-sm text-destructive">{errors.postalCode.message}</p>
              )}
            </div>

            {/* Instrucciones */}
            <div className="space-y-2">
              <label htmlFor="instructions" className="text-sm font-medium">
                Instrucciones de Entrega (Opcional)
              </label>
              <textarea
                id="instructions"
                rows={3}
                placeholder="Ej: Dejar en conserjería, Timbre apto 301, etc."
                {...register("instructions")}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" size="lg" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <Button type="submit" size="lg" className="min-w-[200px]">
                Continuar a Pago
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

