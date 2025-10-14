"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { getFeaturedProducts } from "@/lib/products-data"

const products = getFeaturedProducts()

export function ProductsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground">
            Elige el kit perfecto para tus necesidades. Todos con garantía de 2 años y envío incluido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                {product.featured && (
                  <Badge className="absolute top-4 right-4 z-10">
                    Más Vendido
                  </Badge>
                )}

                <CardHeader>
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg flex items-center justify-center text-6xl mb-4 overflow-hidden">
                    <img
                      src={product.images.thumbnail}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Crect fill='%23f3f4f6' width='500' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%239ca3af'%3E${product.shortName}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.tagline}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">
                        {formatPrice(product.price, { currency: "CLP" })}
                      </span>
                      {product.comparePrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(product.comparePrice, { currency: "CLP" })}
                        </span>
                      )}
                    </div>
                    {product.comparePrice && (
                      <Badge variant="secondary">
                        Ahorra {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-2">
                  <Link href={`/producto/${product.slug}`} className="w-full">
                    <Button className="w-full" size="lg">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar Ahora
                    </Button>
                  </Link>
                  <Link href={`/producto/${product.slug}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Ver Detalles
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

