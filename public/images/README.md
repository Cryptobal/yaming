# 📸 Guía de Organización de Imágenes

## 🗂️ Estructura de Carpetas

```
public/images/
├── products/          # Imágenes de productos
│   ├── echo/         # E.C.H.O
│   │   ├── hero.jpg           # Imagen principal (1920x1080)
│   │   ├── gallery-1.jpg      # Galería imagen 1
│   │   ├── gallery-2.jpg      # Galería imagen 2
│   │   ├── gallery-3.jpg      # Galería imagen 3
│   │   ├── detail-1.jpg       # Detalle/característica 1
│   │   ├── detail-2.jpg       # Detalle/característica 2
│   │   ├── lifestyle-1.jpg    # Producto en uso
│   │   └── thumbnail.jpg      # Miniatura (500x500)
│   │
│   ├── timex/        # T.I.M.E.X
│   │   └── (misma estructura)
│   │
│   ├── falcon/       # F.A.L.C.O.N
│   │   └── (misma estructura)
│   │
│   └── noiser/       # N.O.I.S.E.R
│       └── (misma estructura)
│
├── hero/             # Imágenes de hero sections
│   ├── home-hero.jpg
│   └── about-hero.jpg
│
├── logos/            # Logos y marcas
│   ├── logo.svg
│   ├── logo-white.svg
│   └── favicon.png
│
├── testimonials/     # Fotos de clientes
│   ├── cliente-1.jpg
│   └── cliente-2.jpg
│
└── banners/          # Banners promocionales
    └── oferta-especial.jpg
```

## 📋 Especificaciones por Tipo de Imagen

### Imágenes de Productos (E.C.H.O, T.I.M.E.X, F.A.L.C.O.N, N.O.I.S.E.R)

#### 1. **hero.jpg** (PRINCIPAL)
- **Tamaño:** 1920x1080px
- **Formato:** JPG o WebP
- **Peso:** < 300KB
- **Descripción:** Imagen principal del producto en ambiente profesional
- **Ejemplo:** Domo E.C.H.O en sala de reuniones

#### 2. **gallery-1.jpg, gallery-2.jpg, gallery-3.jpg**
- **Tamaño:** 1200x1200px
- **Formato:** JPG o WebP
- **Peso:** < 200KB cada una
- **Descripción:** Galería con diferentes ángulos del producto
- **Recomendación:** 
  - gallery-1: Fondo blanco, vista frontal
  - gallery-2: Vista lateral/superior
  - gallery-3: Vista de componentes/accesorios

#### 3. **detail-1.jpg, detail-2.jpg**
- **Tamaño:** 800x600px
- **Formato:** JPG o WebP
- **Peso:** < 150KB cada una
- **Descripción:** Close-ups de características específicas
- **Ejemplo:** Textura del material, botones, LEDs

#### 4. **lifestyle-1.jpg**
- **Tamaño:** 1920x1080px
- **Formato:** JPG o WebP
- **Peso:** < 300KB
- **Descripción:** Producto en uso real
- **Ejemplo:** Persona usando el producto en oficina

#### 5. **thumbnail.jpg**
- **Tamaño:** 500x500px
- **Formato:** JPG o WebP
- **Peso:** < 50KB
- **Descripción:** Miniatura para listados y tarjetas
- **Fondo:** Blanco o transparente (PNG)

### Logos

#### **logo.svg**
- **Formato:** SVG (vectorial)
- **Colores:** Full color
- **Uso:** Header, footer (modo claro)

#### **logo-white.svg**
- **Formato:** SVG (vectorial)
- **Colores:** Blanco/monocromático
- **Uso:** Header, footer (modo oscuro)

#### **favicon.png**
- **Tamaño:** 512x512px
- **Formato:** PNG con transparencia
- **Uso:** Icono del navegador

### Testimoniales

#### **cliente-[numero].jpg**
- **Tamaño:** 200x200px (cuadrado)
- **Formato:** JPG o WebP
- **Peso:** < 50KB
- **Descripción:** Foto profesional del cliente
- **Recomendación:** Fondo neutro, buena iluminación

### Banners Promocionales

#### **oferta-especial.jpg**
- **Tamaño:** 1920x600px
- **Formato:** JPG o WebP
- **Peso:** < 200KB
- **Descripción:** Banners para promociones especiales

## 🎨 Convenciones de Nombres

- ✅ **Usa:** minúsculas y guiones
  - `echo-hero.jpg` ✅
  - `timex-gallery-1.jpg` ✅
  
- ❌ **Evita:** espacios, mayúsculas, caracteres especiales
  - `ECHO Hero.jpg` ❌
  - `timex_gallery_1.JPG` ❌

## 📦 Formatos Recomendados

| Tipo | Formato Principal | Formato Alternativo |
|------|------------------|-------------------|
| Fotografías | **WebP** | JPG (fallback) |
| Logos | **SVG** | PNG (fallback) |
| Íconos | **SVG** | - |
| Transparencias | **PNG** | WebP |

## ⚡ Optimización

Antes de subir las imágenes, optimízalas con:

1. **Online:**
   - https://tinypng.com (PNG/JPG)
   - https://squoosh.app (todos los formatos)
   - https://imagecompressor.com

2. **CLI:**
   ```bash
   # Instalar herramientas
   npm install -g imagemin-cli
   
   # Optimizar todas las imágenes
   imagemin public/images/**/*.{jpg,png} --out-dir=public/images/optimized
   ```

## 🚀 Uso en el Código

```typescript
import Image from 'next/image'

// Forma correcta
<Image
  src="/images/products/echo/hero.jpg"
  alt="E.C.H.O - Dispositivo Anti-espionaje"
  width={1920}
  height={1080}
  priority // Solo para imágenes above-the-fold
/>

// Para imágenes dinámicas
const productId = 'echo'
<Image
  src={`/images/products/${productId}/hero.jpg`}
  alt={product.name}
  width={1920}
  height={1080}
  loading="lazy" // Para imágenes below-the-fold
/>
```

## 📝 Checklist por Producto

### E.C.H.O
- [ ] hero.jpg (domo en sala de reuniones)
- [ ] gallery-1.jpg (vista frontal fondo blanco)
- [ ] gallery-2.jpg (vista superior)
- [ ] gallery-3.jpg (con accesorios)
- [ ] detail-1.jpg (textura del domo)
- [ ] detail-2.jpg (LED de encendido)
- [ ] lifestyle-1.jpg (ejecutivos en reunión)
- [ ] thumbnail.jpg (miniatura para grid)

### T.I.M.E.X
- [ ] hero.jpg (router 4 antenas)
- [ ] gallery-1.jpg (vista frontal fondo blanco)
- [ ] gallery-2.jpg (vista superior con antenas)
- [ ] gallery-3.jpg (puerto/conexiones)
- [ ] detail-1.jpg (close-up antenas)
- [ ] detail-2.jpg (indicadores LED)
- [ ] lifestyle-1.jpg (en rack de servidores)
- [ ] thumbnail.jpg (miniatura para grid)

### F.A.L.C.O.N
- [ ] hero.jpg (case con antenas)
- [ ] gallery-1.jpg (case cerrado fondo blanco)
- [ ] gallery-2.jpg (case abierto mostrando interior)
- [ ] gallery-3.jpg (dimensiones/escala)
- [ ] detail-1.jpg (material del case)
- [ ] detail-2.jpg (sistema de cierre)
- [ ] lifestyle-1.jpg (transporte/uso)
- [ ] thumbnail.jpg (miniatura para grid)

### N.O.I.S.E.R
- [ ] hero.jpg (dispositivo principal)
- [ ] gallery-1.jpg (vista frontal fondo blanco)
- [ ] gallery-2.jpg (vista lateral)
- [ ] gallery-3.jpg (accesorios incluidos)
- [ ] detail-1.jpg (interfaz/controles)
- [ ] detail-2.jpg (conectividad)
- [ ] lifestyle-1.jpg (en uso)
- [ ] thumbnail.jpg (miniatura para grid)

## 💡 Tips Profesionales

1. **Consistencia:** Usa el mismo estilo de iluminación para todos los productos
2. **Fondos:** Fondo blanco puro (#FFFFFF) para imágenes de catálogo
3. **Resolución:** Siempre guarda en 2x para pantallas retina
4. **Compresión:** Usa compresión 85-90% para JPG (balance calidad/peso)
5. **Accesibilidad:** Siempre incluye texto alternativo descriptivo

## 🔄 Actualizar Imágenes

Cuando actualices una imagen:
1. Guárdala con el mismo nombre
2. El navegador la detectará automáticamente
3. Si no se actualiza, limpia caché: `Ctrl + Shift + R`

