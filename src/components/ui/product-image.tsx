"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
}

export function ProductImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
  sizes,
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Placeholder SVG profesional
  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:0.3' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='${width}' height='${height}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='${Math.min(width, height) / 15}' fill='%239ca3af' opacity='0.5'%3E${alt}%3C/text%3E%3C/svg%3E`

  const imageSrc = imageError ? placeholderSvg : src

  const commonProps = {
    alt,
    onError: () => setImageError(true),
    onLoad: () => setIsLoading(false),
    priority,
    className: cn(
      "transition-opacity duration-300",
      isLoading && "opacity-0",
      !isLoading && "opacity-100",
      className
    ),
    sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  }

  if (fill) {
    return (
      <Image
        {...commonProps}
        src={imageSrc}
        fill
        style={{ objectFit: "cover" }}
      />
    )
  }

  return (
    <Image
      {...commonProps}
      src={imageSrc}
      width={width}
      height={height}
    />
  )
}

// Componente específico para thumbnail de productos
export function ProductThumbnail({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <ProductImage
      src={src}
      alt={alt}
      width={500}
      height={500}
      className={cn("rounded-lg", className)}
    />
  )
}

// Componente específico para hero de productos
export function ProductHero({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <ProductImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      priority
      className={cn("w-full h-auto rounded-2xl", className)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
    />
  )
}

