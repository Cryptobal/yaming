import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number,
  options: {
    currency?: "USD" | "CLP" | "EUR" | "BRL" | "MXN"
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "USD", notation = "standard" } = options

  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: currency === "CLP" ? 0 : 2,
  }).format(price)
}

export function formatDate(date: Date | string, locale: string = "es-CL"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj)
}

