"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function CarritoPage() {
  const { items, updateQuantity, removeItem, getSubtotal, getTotal } = useCartStore()

  const subtotal = getSubtotal()
  const total = getTotal()
  const shipping = total - subtotal

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Carrito de Compras</h1>

            {items.length === 0 ? (
              <Card className="p-12">
                <CardContent className="text-center space-y-6">
                  <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground" />
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
                    <p className="text-muted-foreground">
                      Agrega productos para comenzar tu compra
                    </p>
                  </div>
                  <Link href="/productos">
                    <Button size="lg">
                      Explorar Productos
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            {/* Image */}
                            <div className="w-32 h-32 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                              <img
                                src={item.product.images.thumbnail}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%23f3f4f6' width='128' height='128'/%3E%3C/svg%3E`
                                }}
                              />
                            </div>

                            {/* Info */}
                            <div className="flex-1 space-y-4">
                              <div>
                                <Link 
                                  href={`/producto/${item.product.slug}`}
                                  className="text-xl font-bold hover:text-primary transition-colors"
                                >
                                  {item.product.name}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {item.product.tagline}
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium">Cantidad:</span>
                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="h-9 w-9"
                                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    >
                                      <Minus className="w-4 h-4" />
                                    </Button>
                                    <span className="w-12 text-center font-bold text-lg">
                                      {item.quantity}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="h-9 w-9"
                                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                      disabled={item.quantity >= item.product.stock}
                                    >
                                      <Plus className="w-4 h-4" />
                                    </Button>
                                  </div>
                                  {item.quantity >= item.product.stock && (
                                    <span className="text-xs text-yellow-600">
                                      Stock máximo
                                    </span>
                                  )}
                                </div>

                                {/* Price */}
                                <div className="text-right">
                                  <p className="text-sm text-muted-foreground">
                                    {formatPrice(item.product.price, { currency: "CLP" })} c/u
                                  </p>
                                  <p className="text-2xl font-bold">
                                    {formatPrice(item.product.price * item.quantity, { currency: "CLP" })}
                                  </p>
                                </div>
                              </div>

                              {/* Remove Button */}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-destructive hover:text-destructive"
                                onClick={() => {
                                  removeItem(item.product.id)
                                  toast.success("Producto eliminado del carrito")
                                }}
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Eliminar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card className="sticky top-24">
                      <CardContent className="p-6 space-y-6">
                        <h2 className="text-2xl font-bold">Resumen del Pedido</h2>

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
                          {shipping === 0 && subtotal > 50000 && (
                            <p className="text-xs text-green-600">
                              ✓ Envío gratis desbloqueado
                            </p>
                          )}
                          {shipping > 0 && (
                            <p className="text-xs text-muted-foreground">
                              Faltan {formatPrice(50000 - subtotal, { currency: "CLP" })} para envío gratis
                            </p>
                          )}

                          <div className="border-t pt-3">
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total</span>
                              <span>{formatPrice(total, { currency: "CLP" })}</span>
                            </div>
                          </div>
                        </div>

                        <Link href="/checkout" className="block">
                          <Button className="w-full" size="lg">
                            Proceder al Pago
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>

                        <Link href="/productos">
                          <Button variant="outline" className="w-full">
                            Continuar Comprando
                          </Button>
                        </Link>

                        {/* Trust Badges */}
                        <div className="pt-6 border-t space-y-3">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                              🔒
                            </div>
                            <div>
                              <p className="font-medium">Compra Segura</p>
                              <p className="text-xs text-muted-foreground">Pago 100% protegido</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                              🚚
                            </div>
                            <div>
                              <p className="font-medium">Envío Rápido</p>
                              <p className="text-xs text-muted-foreground">2-3 días RM, 3-7 regiones</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                              ✓
                            </div>
                            <div>
                              <p className="font-medium">Garantía 2 Años</p>
                              <p className="text-xs text-muted-foreground">Respaldo total</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

