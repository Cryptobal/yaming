import { z } from "zod"

// Validador de RUT chileno
export function validateRut(rut: string): boolean {
  // Limpiar el RUT
  const cleanRut = rut.replace(/[^0-9kK]/g, '').toUpperCase()
  
  if (cleanRut.length < 2) return false
  
  const body = cleanRut.slice(0, -1)
  const dv = cleanRut.slice(-1)
  
  // Calcular dígito verificador
  let sum = 0
  let multiplier = 2
  
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier
    multiplier = multiplier === 7 ? 2 : multiplier + 1
  }
  
  const calculatedDv = 11 - (sum % 11)
  const expectedDv = calculatedDv === 11 ? '0' : calculatedDv === 10 ? 'K' : calculatedDv.toString()
  
  return dv === expectedDv
}

// Formateador de RUT
export function formatRut(rut: string): string {
  const cleanRut = rut.replace(/[^0-9kK]/g, '').toUpperCase()
  if (cleanRut.length <= 1) return cleanRut
  
  const body = cleanRut.slice(0, -1)
  const dv = cleanRut.slice(-1)
  
  // Agregar puntos
  const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  
  return `${formattedBody}-${dv}`
}

// Schemas de validación
export const contactSchema = z.object({
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Teléfono debe tener al menos 8 dígitos").regex(/^[+]?[0-9\s-]+$/, "Formato de teléfono inválido"),
  rut: z.string().refine(validateRut, "RUT inválido"),
})

export const shippingSchema = z.object({
  firstName: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "Apellido debe tener al menos 2 caracteres"),
  street: z.string().min(3, "Calle es requerida"),
  number: z.string().min(1, "Número es requerido"),
  apartment: z.string().optional(),
  city: z.string().min(2, "Comuna es requerida"),
  region: z.string().min(2, "Región es requerida"),
  postalCode: z.string().min(7, "Código postal inválido"),
  instructions: z.string().optional(),
})

export const paymentSchema = z.object({
  paymentMethod: z.enum(["webpay", "transfer"]),
})

