"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Product } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ProductHero } from "@/components/ui/product-image"

interface ProductDetailHeroProps {
  product: Product
}

export function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const allImages = [product.images.hero, ...product.images.gallery]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Galería de Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Imagen Principal */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <img
                    src={allImages[selectedImage]}
                    alt={`${product.name} - Vista ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback a placeholder si la imagen no carga
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'%3E%3Crect fill='%23f3f4f6' width='1000' height='1000'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%239ca3af'%3E${product.shortName}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controles de Navegación */}
              {allImages.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}

              {/* Botón Zoom */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setIsZoomed(true)}
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
            </div>

            {/* Miniaturas */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground/20"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f3f4f6' width='200' height='200'/%3E%3C/svg%3E`
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Información Rápida */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Código de Producto */}
            <p className="text-sm text-muted-foreground">SKU: {product.id.toUpperCase()}-001</p>

            {/* Título y Tagline */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.tagline}</p>
            </div>

            {/* Descripción Corta */}
            <p className="text-xl leading-relaxed">{product.description}</p>

            {/* Precio */}
            <div className="flex items-baseline gap-4 py-4 border-y">
              <span className="text-4xl font-bold">
                ${product.price.toLocaleString("es-CL")}
              </span>
              {product.comparePrice && (
                <>
                  <span className="text-2xl text-muted-foreground line-through">
                    ${product.comparePrice.toLocaleString("es-CL")}
                  </span>
                  <span className="text-lg font-semibold text-green-600">
                    {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Stock y Rating */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reseñas)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.stock > 5 ? "bg-green-500" : "bg-yellow-500"}`} />
                <span className="text-sm font-medium">
                  {product.stock > 5 ? "En stock" : `Solo ${product.stock} disponibles`}
                </span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="space-y-3">
              <Button size="lg" className="w-full text-lg h-14">
                Agregar al Carrito
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Comprar Ahora
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <p className="text-xs font-medium">Envío Gratis</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <p className="text-xs font-medium">Compra Segura</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✓</div>
                <p className="text-xs font-medium">Garantía 2 Años</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Zoom */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-7xl p-0">
          <img
            src={allImages[selectedImage]}
            alt={`${product.name} - Zoom`}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </section>
  )
}

