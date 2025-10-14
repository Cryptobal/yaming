# 🚀 Yaming - E-commerce de Nivel Mundial

> Plataforma de e-commerce premium para productos A.U.R.A construida con Next.js 15, TypeScript y TailwindCSS

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)](https://yaming.vercel.app)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)

## ✨ Características Implementadas

### 🛒 Sistema de Carrito Completo
- ✅ Carrito persistente (LocalStorage)
- ✅ Sidebar deslizable con animaciones
- ✅ Agregar/quitar/modificar cantidades
- ✅ Cálculo automático de totales
- ✅ Envío gratis sobre $50.000

### 💳 Checkout Multi-Step Optimizado
- ✅ 4 pasos con validación
- ✅ Validación de RUT chileno
- ✅ 16 regiones + comunas de Chile
- ✅ Métodos de pago: Webpay + Transferencia
- ✅ Progress indicator visual

### 📧 Sistema de Notificaciones
- ✅ Email al cliente (confirmación)
- ✅ Email a admin (carlos.irigoyen@gmail.com)
- ✅ Templates HTML profesionales
- ✅ Integración con Resend

### 📦 Productos A.U.R.A
- ✅ E.C.H.O (Anti-espionaje acústico)
- ✅ T.I.M.E.X (Gestión de interferencias)
- ✅ F.A.L.C.O.N (Neutralización aérea)
- ✅ N.O.I.S.E.R (Contra-vigilancia)

### 🎨 Diseño Premium
- ✅ Mobile-first responsive
- ✅ Dark/Light mode
- ✅ Animaciones con Framer Motion
- ✅ shadcn/ui components
- ✅ Optimizado para SEO

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + shadcn/ui
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js
- **Payments:** Stripe, PayPal, Webpay, MercadoPago
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Forms:** React Hook Form + Zod
- **i18n:** next-intl

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Abre [http://localhost:3001](http://localhost:3001) para ver el sitio.

## 💰 Primera Venta en 3 Pasos

### 1. Configura Resend (5 minutos)
```bash
# Ver: CONFIGURACION-EMAILS.md
- Crear cuenta en resend.com
- Obtener API key
- Agregar a .env.local:
  RESEND_API_KEY=re_tu_key_aqui
```

### 2. Carga Imágenes de Productos
```bash
# Ver: CARGA-IMAGENES.md
# Mínimo: 2 imágenes por producto (hero + thumbnail)
public/images/products/echo/hero.jpg
public/images/products/echo/thumbnail.jpg
# (y así para los 4 productos)
```

### 3. ¡Comparte el Link!
```bash
# Deploy automático en cada push a GitHub
https://yaming.vercel.app

# O usa tu dominio:
https://yaming.cl (configurar en Vercel)
```

## 📚 Documentación Completa

- 📧 **[CONFIGURACION-EMAILS.md](CONFIGURACION-EMAILS.md)** - Setup de emails
- 🖼️ **[CARGA-IMAGENES.md](CARGA-IMAGENES.md)** - Cómo cargar imágenes
- 🎉 **[SISTEMA-COMPLETO.md](SISTEMA-COMPLETO.md)** - Overview completo
- 📋 **[.env.example](.env.example)** - Variables de entorno

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   ├── home/              # Homepage sections
│   └── providers/         # Context providers
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
└── styles/                 # Global styles

prisma/
└── schema.prisma          # Database schema

public/
└── images/                # Static images
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables

See `.env.example` for required environment variables.

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

