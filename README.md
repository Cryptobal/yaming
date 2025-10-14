# Yaming - Marketplace E-commerce de Nivel Mundial

Plataforma e-commerce de nivel mundial construida con Next.js 14+, TypeScript, TailwindCSS y Prisma.

## 🚀 Características

- ✨ Diseño moderno y responsive (Mobile-first)
- 🎨 Dark/Light mode con next-themes
- 🛒 Carrito de compras y checkout completo
- 💳 Integración con múltiples pasarelas de pago
- 🚚 Sistema de envíos internacional
- 🌍 Multi-idioma y localización
- 📊 Panel de administración completo
- 🔐 Autenticación con NextAuth.js
- 📱 PWA support
- ⚡ Optimizado para SEO y Core Web Vitals

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

## 📦 Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Generate Prisma Client
npm run db:generate

# Push database schema
npm run db:push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

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

