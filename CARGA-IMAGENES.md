# 📸 GUÍA RÁPIDA: Cómo Cargar Imágenes

## 🚀 3 Pasos Simples

### PASO 1: Organiza tus archivos

```
📁 Tienes tus imágenes en tu computadora
    └── Cópialas a la carpeta del proyecto
```

### PASO 2: Ubica la carpeta correcta

```bash
cd /Users/caco/Desktop/yaming
ls public/images/products/  # Verás: echo/ timex/ falcon/ noiser/
```

### PASO 3: Arrastra las imágenes

```
📂 public/images/products/
    │
    ├── echo/
    │   ├── hero.jpg           ← Tu imagen principal de E.C.H.O
    │   ├── gallery-1.jpg      ← Vista 1
    │   ├── gallery-2.jpg      ← Vista 2
    │   ├── gallery-3.jpg      ← Vista 3
    │   └── thumbnail.jpg      ← Miniatura
    │
    ├── timex/
    │   ├── hero.jpg           ← Tu imagen principal de T.I.M.E.X
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   └── thumbnail.jpg
    │
    ├── falcon/
    │   ├── hero.jpg           ← Tu imagen principal de F.A.L.C.O.N
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   └── thumbnail.jpg
    │
    └── noiser/
        ├── hero.jpg           ← Tu imagen principal de N.O.I.S.E.R
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        ├── gallery-3.jpg
        └── thumbnail.jpg
```

## 📋 Checklist Mínimo para Empezar

Para que el sitio funcione AHORA, necesitas **mínimo 2 imágenes por producto**:

### E.C.H.O
- [ ] `hero.jpg` - Imagen principal (el domo en sala de reuniones)
- [ ] `thumbnail.jpg` - Miniatura cuadrada

### T.I.M.E.X
- [ ] `hero.jpg` - Imagen principal (router 4 antenas)
- [ ] `thumbnail.jpg` - Miniatura cuadrada

### F.A.L.C.O.N
- [ ] `hero.jpg` - Imagen principal (case con antenas)
- [ ] `thumbnail.jpg` - Miniatura cuadrada

### N.O.I.S.E.R
- [ ] `hero.jpg` - Imagen principal (dispositivo)
- [ ] `thumbnail.jpg` - Miniatura cuadrada

**Total mínimo: 8 imágenes** (2 por producto x 4 productos)

## 🎯 Cómo Obtener las Imágenes

### Opción A: Desde A.U.R.A Chile
```bash
# Las imágenes que vi en el sitio están en Google Sites
# Puedes descargarlas haciendo:
1. Click derecho en la imagen → "Guardar imagen como..."
2. Guárdala con el nombre correcto (hero.jpg, thumbnail.jpg)
3. Muévela a la carpeta correspondiente
```

### Opción B: Tus Propias Fotos
```bash
# Si tienes fotos profesionales:
1. Renombra tus archivos según la convención
2. Cópialas a las carpetas correspondientes
```

## 💻 Comandos para Copiar Rápido

```bash
# Desde Terminal (macOS/Linux)
cd /Users/caco/Desktop/yaming

# Copiar imagen de ejemplo
cp ~/Downloads/imagen-echo.jpg public/images/products/echo/hero.jpg

# O usa Finder:
# 1. Abre Finder
# 2. Ve a: yaming/public/images/products/
# 3. Arrastra tus imágenes a las carpetas
```

## ✅ Verificar que Funcionó

1. **Abre el navegador:** http://localhost:3001
2. **Ve a Productos:** Click en "Productos" en el menú
3. **Deberías ver:** Tus imágenes cargadas

Si NO ves las imágenes:
```bash
# Verifica que están en el lugar correcto
ls -la public/images/products/echo/

# Debe mostrar:
# hero.jpg
# thumbnail.jpg
# (etc.)
```

## 🔄 Si Cambias una Imagen

1. **Guárdala con el mismo nombre** en la misma carpeta
2. **Refresca el navegador:** `Cmd + Shift + R` (Mac) o `Ctrl + Shift + R` (Windows)
3. **Listo** - debería verse la nueva imagen

## 📐 Tamaños Recomendados

| Imagen | Ancho x Alto | Peso Máximo |
|--------|--------------|-------------|
| hero.jpg | 1920 x 1080 | 300 KB |
| thumbnail.jpg | 500 x 500 | 50 KB |
| gallery-1.jpg | 1200 x 1200 | 200 KB |

## 🎨 Optimizar Imágenes (OPCIONAL pero recomendado)

Antes de cargarlas, optimízalas en:
- https://tinypng.com (arrastra y suelta)
- https://squoosh.app (ajusta calidad)

## 🆘 Ayuda Rápida

**Problema:** "No veo mis imágenes"
```bash
Solución:
1. Verifica el nombre del archivo (debe ser exacto)
2. Verifica la extensión (.jpg no .JPG)
3. Refresca el navegador (Cmd/Ctrl + Shift + R)
```

**Problema:** "Las imágenes están muy pesadas"
```bash
Solución:
1. Ve a https://tinypng.com
2. Arrastra tu imagen
3. Descarga la versión optimizada
4. Reemplaza la original
```

**Problema:** "La imagen se ve distorsionada"
```bash
Solución:
1. Verifica el tamaño recomendado
2. Usa las proporciones correctas (16:9 para hero, 1:1 para thumbnail)
3. No estires imágenes pequeñas
```

## 📞 ¿Necesitas Más Ayuda?

Consulta el archivo detallado: `public/images/README.md`

