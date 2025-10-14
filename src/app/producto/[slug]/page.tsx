"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductDetailHero } from "@/components/product/product-detail-hero"
import { ProductInfo } from "@/components/product/product-info"
import { ProductTabs } from "@/components/product/product-tabs"
import { RelatedProducts } from "@/components/product/related-products"
import { getProductBySlug } from "@/lib/products-data"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetailHero product={product} />
        <ProductInfo product={product} />
        <ProductTabs product={product} />
        <RelatedProducts currentProductId={product.id} />
      </main>
      <Footer />
    </div>
  )
}

