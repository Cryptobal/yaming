// Configuración centralizada de imágenes
// Cambia las rutas aquí cuando tengas las imágenes reales

export const PRODUCT_IMAGES = {
  echo: {
    hero: "/images/products/echo/hero.jpg",
    thumbnail: "/images/products/echo/thumbnail.jpg",
    gallery: [
      "/images/products/echo/gallery-1.jpg",
      "/images/products/echo/gallery-2.jpg",
      "/images/products/echo/gallery-3.jpg",
    ],
    details: [
      "/images/products/echo/detail-1.jpg",
      "/images/products/echo/detail-2.jpg",
    ],
    lifestyle: "/images/products/echo/lifestyle-1.jpg",
  },
  timex: {
    hero: "/images/products/timex/hero.jpg",
    thumbnail: "/images/products/timex/thumbnail.jpg",
    gallery: [
      "/images/products/timex/gallery-1.jpg",
      "/images/products/timex/gallery-2.jpg",
      "/images/products/timex/gallery-3.jpg",
    ],
    details: [
      "/images/products/timex/detail-1.jpg",
      "/images/products/timex/detail-2.jpg",
    ],
    lifestyle: "/images/products/timex/lifestyle-1.jpg",
  },
  falcon: {
    hero: "/images/products/falcon/hero.jpg",
    thumbnail: "/images/products/falcon/thumbnail.jpg",
    gallery: [
      "/images/products/falcon/gallery-1.jpg",
      "/images/products/falcon/gallery-2.jpg",
      "/images/products/falcon/gallery-3.jpg",
    ],
    details: [
      "/images/products/falcon/detail-1.jpg",
      "/images/products/falcon/detail-2.jpg",
    ],
    lifestyle: "/images/products/falcon/lifestyle-1.jpg",
  },
  noiser: {
    hero: "/images/products/noiser/hero.jpg",
    thumbnail: "/images/products/noiser/thumbnail.jpg",
    gallery: [
      "/images/products/noiser/gallery-1.jpg",
      "/images/products/noiser/gallery-2.jpg",
      "/images/products/noiser/gallery-3.jpg",
    ],
    details: [
      "/images/products/noiser/detail-1.jpg",
      "/images/products/noiser/detail-2.jpg",
    ],
    lifestyle: "/images/products/noiser/lifestyle-1.jpg",
  },
} as const

export const LOGO_IMAGES = {
  main: "/images/logos/logo.svg",
  white: "/images/logos/logo-white.svg",
  favicon: "/images/logos/favicon.png",
} as const

export const HERO_IMAGES = {
  home: "/images/hero/home-hero.jpg",
  about: "/images/hero/about-hero.jpg",
} as const

// Placeholders mientras no tengas las imágenes reales
export const PLACEHOLDER_IMAGES = {
  product: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23e5e7eb' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='64' fill='%239ca3af'%3EImagen de Producto%3C/text%3E%3C/svg%3E",
  thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Crect fill='%23f3f4f6' width='500' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%236b7280'%3EThumbnail%3C/text%3E%3C/svg%3E",
}

// Helper para obtener imagen con fallback a placeholder
export function getProductImage(
  product: keyof typeof PRODUCT_IMAGES,
  type: "hero" | "thumbnail" | "lifestyle",
  usePlaceholder = false
): string {
  if (usePlaceholder) {
    return type === "thumbnail" ? PLACEHOLDER_IMAGES.thumbnail : PLACEHOLDER_IMAGES.product
  }
  return PRODUCT_IMAGES[product][type]
}

// Helper para obtener galería de imágenes
export function getProductGallery(
  product: keyof typeof PRODUCT_IMAGES,
  usePlaceholder = false
): readonly string[] | string[] {
  if (usePlaceholder) {
    return Array(3).fill(PLACEHOLDER_IMAGES.product)
  }
  return PRODUCT_IMAGES[product].gallery
}

