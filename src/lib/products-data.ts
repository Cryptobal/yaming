// Base de datos de productos basada en A.U.R.A Chile
// Optimizada para SEO y conversión

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  currency: string
  images: {
    hero: string
    thumbnail: string
    gallery: string[]
  }
  features: {
    icon: string
    title: string
    description: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  useCases: string[]
  includes: string[]
  warranty: string
  shipping: string
  category: string
  tags: string[]
  rating: number
  reviews: number
  stock: number
  featured: boolean
}

export const PRODUCTS: Record<string, Product> = {
  echo: {
    id: "echo",
    slug: "echo",
    name: "E.C.H.O",
    shortName: "ECHO",
    tagline: "Elimination of Covered Hearing Operations",
    description: "Tecnología anti-espionaje de nivel táctico que crea una zona de silencio efectivo",
    longDescription: "E.C.H.O es un dispositivo táctico que crea una zona de silencio efectivo, bloqueando la captación de micrófonos ocultos, espías acústicos y dispositivos de escucha. Genera una cortina de ultrasonido inaudible que satura cualquier micrófono que pueda encontrarse en su rango de acción (3 a 4 metros).",
    price: 189990,
    comparePrice: 249990,
    currency: "CLP",
    images: {
      hero: "/images/products/echo/hero.jpg",
      thumbnail: "/images/products/echo/thumbnail.jpg",
      gallery: [
        "/images/products/echo/gallery-1.jpg",
        "/images/products/echo/gallery-2.jpg",
        "/images/products/echo/gallery-3.jpg",
      ],
    },
    features: [
      {
        icon: "Shield",
        title: "Protección Acústica Avanzada",
        description: "Genera cortina de ultrasonido inaudible que satura micrófonos en el rango de 3-4 metros",
      },
      {
        icon: "Target",
        title: "Cobertura Optimizada",
        description: "Rango de acción efectivo de 3-4 metros, ideal para salas de reuniones y espacios controlados",
      },
      {
        icon: "Zap",
        title: "Activación Instantánea",
        description: "Funcionamiento inmediato al encender, sin configuración compleja ni instalación",
      },
      {
        icon: "Building",
        title: "Uso Corporativo",
        description: "Ideal para reuniones corporativas, salas de estrategia y oficinas ejecutivas",
      },
    ],
    specifications: [
      { label: "Alcance Efectivo", value: "3-4 metros" },
      { label: "Tecnología", value: "Ultrasonido inaudible" },
      { label: "Tipo de Dispositivo", value: "Anti-espionaje acústico" },
      { label: "Aplicación", value: "Micrófonos ocultos y espías acústicos" },
      { label: "Diseño", value: "Compacto y portátil" },
      { label: "Inspiración", value: "Tecnología de fuerzas especiales" },
      { label: "Dimensiones", value: "15cm x 15cm x 8cm" },
      { label: "Peso", value: "450g" },
      { label: "Alimentación", value: "USB-C / Batería recargable" },
      { label: "Autonomía", value: "8 horas continuas" },
    ],
    useCases: [
      "Reuniones corporativas confidenciales",
      "Salas de estrategia empresarial",
      "Oficinas ejecutivas",
      "Juntas directivas",
      "Negociaciones privadas",
      "Espacios de trabajo sensibles",
    ],
    includes: [
      "1x Dispositivo E.C.H.O",
      "1x Cable USB-C",
      "1x Adaptador de corriente",
      "1x Manual de usuario en español",
      "1x Estuche de transporte",
      "Garantía de 2 años",
    ],
    warranty: "2 años de garantía contra defectos de fabricación",
    shipping: "Envío gratis a todo Chile. 2-3 días hábiles RM, 3-7 días regiones",
    category: "Anti-espionaje",
    tags: ["anti-espionaje", "seguridad", "corporativo", "ultrasonido", "táctica"],
    rating: 4.9,
    reviews: 89,
    stock: 12,
    featured: true,
  },
  
  timex: {
    id: "timex",
    slug: "timex",
    name: "T.I.M.E.X",
    shortName: "TIMEX",
    tagline: "Total Interference Management for Efficient eXecution",
    description: "Sistema de gestión total de interferencias para ejecución eficiente de operaciones",
    longDescription: "T.I.M.E.X es un sistema profesional de gestión de interferencias diseñado para operaciones que requieren control total del espectro electromagnético. Con 4 antenas de alta potencia, proporciona cobertura completa y gestión eficiente de múltiples frecuencias simultáneamente.",
    price: 349990,
    comparePrice: 449990,
    currency: "CLP",
    images: {
      hero: "/images/products/timex/hero.jpg",
      thumbnail: "/images/products/timex/thumbnail.jpg",
      gallery: [
        "/images/products/timex/gallery-1.jpg",
        "/images/products/timex/gallery-2.jpg",
        "/images/products/timex/gallery-3.jpg",
      ],
    },
    features: [
      {
        icon: "Radio",
        title: "4 Antenas de Alta Potencia",
        description: "Sistema multi-antena para cobertura completa y gestión eficiente de interferencias",
      },
      {
        icon: "Layers",
        title: "Gestión Multi-frecuencia",
        description: "Capaz de manejar múltiples bandas de frecuencia simultáneamente",
      },
      {
        icon: "Activity",
        title: "Monitoreo en Tiempo Real",
        description: "Sistema de monitoreo continuo con indicadores LED de estado operacional",
      },
      {
        icon: "Lock",
        title: "Nivel Profesional",
        description: "Diseñado para operaciones que requieren máxima confiabilidad y control",
      },
    ],
    specifications: [
      { label: "Antenas", value: "4 unidades de alta potencia" },
      { label: "Cobertura", value: "360° omnidireccional" },
      { label: "Bandas de Frecuencia", value: "Multi-banda simultánea" },
      { label: "Alcance", value: "Hasta 50 metros" },
      { label: "Tipo", value: "Sistema de gestión de interferencias" },
      { label: "Montaje", value: "Desktop / Montaje en rack" },
      { label: "Dimensiones", value: "25cm x 18cm x 6cm" },
      { label: "Peso", value: "1.2kg" },
      { label: "Alimentación", value: "AC 220V / DC 12V" },
      { label: "Consumo", value: "25W" },
    ],
    useCases: [
      "Operaciones de seguridad profesional",
      "Instalaciones críticas",
      "Centros de comando",
      "Facilidades gubernamentales",
      "Operaciones tácticas",
      "Perímetros de seguridad",
    ],
    includes: [
      "1x Sistema T.I.M.E.X",
      "4x Antenas de alta potencia",
      "1x Cable de alimentación",
      "1x Adaptador DC",
      "1x Kit de montaje",
      "1x Manual técnico completo",
      "Garantía de 2 años",
    ],
    warranty: "2 años de garantía contra defectos de fabricación",
    shipping: "Envío gratis a todo Chile. 3-5 días hábiles",
    category: "Gestión de Interferencias",
    tags: ["profesional", "multi-antena", "seguridad", "táctico", "interferencias"],
    rating: 4.8,
    reviews: 56,
    stock: 8,
    featured: true,
  },

  falcon: {
    id: "falcon",
    slug: "falcon",
    name: "F.A.L.C.O.N",
    shortName: "FALCON",
    tagline: "Frequency Annulling for Low-altitude Counter-Overhead Neutralization",
    description: "Sistema de anulación de frecuencias para neutralización contra-aérea de baja altitud",
    longDescription: "F.A.L.C.O.N es un sistema portátil robusto diseñado para neutralización de amenazas de baja altitud. Cuenta con un case resistente de nivel militar y sistema de antenas dual para máxima efectividad. Ideal para operaciones móviles que requieren despliegue rápido y protección contra amenazas aéreas no tripuladas.",
    price: 549990,
    comparePrice: 699990,
    currency: "CLP",
    images: {
      hero: "/images/products/falcon/hero.jpg",
      thumbnail: "/images/products/falcon/thumbnail.jpg",
      gallery: [
        "/images/products/falcon/gallery-1.jpg",
        "/images/products/falcon/gallery-2.jpg",
        "/images/products/falcon/gallery-3.jpg",
      ],
    },
    features: [
      {
        icon: "Shield",
        title: "Case de Nivel Militar",
        description: "Construcción robusta resistente a impactos, agua y polvo (IP67)",
      },
      {
        icon: "Plane",
        title: "Neutralización Aérea",
        description: "Especializado en amenazas de baja altitud y dispositivos no tripulados",
      },
      {
        icon: "Package",
        title: "Sistema Portátil",
        description: "Diseño tipo maleta para transporte y despliegue rápido en campo",
      },
      {
        icon: "Zap",
        title: "Despliegue Rápido",
        description: "Operacional en menos de 60 segundos desde el despliegue",
      },
    ],
    specifications: [
      { label: "Tipo de Case", value: "Militar IP67 (resistente agua/polvo)" },
      { label: "Antenas", value: "2 antenas de alto gain" },
      { label: "Alcance Efectivo", value: "Hasta 100 metros" },
      { label: "Especialización", value: "Baja altitud / UAV" },
      { label: "Tiempo de Despliegue", value: "< 60 segundos" },
      { label: "Portabilidad", value: "Tipo maleta con manija" },
      { label: "Dimensiones (cerrado)", value: "45cm x 35cm x 15cm" },
      { label: "Peso", value: "4.5kg" },
      { label: "Alimentación", value: "Batería interna recargable" },
      { label: "Autonomía", value: "4 horas continuas" },
    ],
    useCases: [
      "Protección de perímetros críticos",
      "Eventos de alta seguridad",
      "Operaciones móviles",
      "Protección VIP",
      "Instalaciones temporales",
      "Respuesta rápida a amenazas",
    ],
    includes: [
      "1x Sistema F.A.L.C.O.N completo",
      "1x Case militar resistente",
      "2x Antenas de alto gain",
      "1x Batería recargable",
      "1x Cargador rápido",
      "1x Kit de accesorios",
      "1x Manual de operación táctica",
      "Garantía de 2 años",
    ],
    warranty: "2 años de garantía contra defectos de fabricación",
    shipping: "Envío gratis a todo Chile. 3-5 días hábiles",
    category: "Neutralización Aérea",
    tags: ["portátil", "militar", "UAV", "anti-drone", "táctico", "móvil"],
    rating: 5.0,
    reviews: 34,
    stock: 5,
    featured: true,
  },

  noiser: {
    id: "noiser",
    slug: "noiser",
    name: "N.O.I.S.E.R / AUREX",
    shortName: "NOISER",
    tagline: "Networked Omnidirectional Interference Signal Emitter for Reconnaissance",
    description: "Emisor de señales de interferencia omnidireccional en red para reconocimiento",
    longDescription: "N.O.I.S.E.R (también conocido como AUREX) es un sistema avanzado de emisión de señales de interferencia diseñado para operaciones de reconocimiento y contra-vigilancia. Con capacidad de red y emisión omnidireccional, proporciona protección completa contra sistemas de monitoreo y rastreo.",
    price: 279990,
    comparePrice: 349990,
    currency: "CLP",
    images: {
      hero: "/images/products/noiser/hero.jpg",
      thumbnail: "/images/products/noiser/thumbnail.jpg",
      gallery: [
        "/images/products/noiser/gallery-1.jpg",
        "/images/products/noiser/gallery-2.jpg",
        "/images/products/noiser/gallery-3.jpg",
      ],
    },
    features: [
      {
        icon: "Radio",
        title: "Emisión Omnidireccional",
        description: "Cobertura 360° para protección completa contra vigilancia electrónica",
      },
      {
        icon: "Network",
        title: "Capacidad de Red",
        description: "Puede operar en conjunto con múltiples unidades para cobertura extendida",
      },
      {
        icon: "Eye",
        title: "Contra-vigilancia",
        description: "Especializado en prevenir rastreo y monitoreo electrónico",
      },
      {
        icon: "Smartphone",
        title: "Multi-espectro",
        description: "Efectivo contra diversos sistemas de rastreo y localización",
      },
    },
    specifications: [
      { label: "Tipo de Emisión", value: "Omnidireccional 360°" },
      { label: "Modo de Operación", value: "Standalone / En red" },
      { label: "Especialización", value: "Contra-vigilancia y reconocimiento" },
      { label: "Alcance", value: "20-30 metros" },
      { label: "Conectividad", value: "Mesh network" },
      { label: "Indicadores", value: "LED multi-estado" },
      { label: "Dimensiones", value: "12cm x 8cm x 3cm" },
      { label: "Peso", value: "280g" },
      { label: "Alimentación", value: "Batería interna / USB-C" },
      { label: "Autonomía", value: "6 horas continuas" },
    ],
    useCases: [
      "Operaciones de reconocimiento",
      "Prevención de rastreo electrónico",
      "Protección de privacidad móvil",
      "Operaciones encubiertas",
      "Contra-vigilancia personal",
      "Vehículos de seguridad",
    ],
    includes: [
      "1x Dispositivo N.O.I.S.E.R",
      "1x Cable USB-C",
      "1x Batería de repuesto",
      "1x Clip de sujeción",
      "1x Manual de operación",
      "1x Estuche de transporte",
      "Garantía de 2 años",
    ],
    warranty: "2 años de garantía contra defectos de fabricación",
    shipping: "Envío gratis a todo Chile. 2-3 días hábiles",
    category: "Contra-vigilancia",
    tags: ["contra-vigilancia", "reconocimiento", "portátil", "red", "tracking"],
    rating: 4.7,
    reviews: 67,
    stock: 15,
    featured: false,
  },
}

// Helper para obtener producto por slug
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS[slug]
}

// Helper para obtener todos los productos
export function getAllProducts(): Product[] {
  return Object.values(PRODUCTS)
}

// Helper para obtener productos relacionados
export function getRelatedProducts(currentProductId: string, limit: number = 3): Product[] {
  return getAllProducts()
    .filter(p => p.id !== currentProductId)
    .slice(0, limit)
}

// Helper para obtener productos destacados
export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(p => p.featured)
}

