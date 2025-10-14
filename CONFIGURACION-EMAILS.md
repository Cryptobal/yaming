# 📧 Configuración del Sistema de Emails

## 🎯 Objetivo

Cada vez que hay una venta, recibirás un email automático a: **carlos.irigoyen@gmail.com**

## 🚀 Setup Rápido (5 minutos)

### PASO 1: Crear cuenta en Resend

1. Ve a https://resend.com
2. Click en "Start Building" o "Sign Up"
3. Regístrate con carlos.irigoyen@gmail.com (o cualquier email)
4. Verifica tu email

### PASO 2: Obtener API Key

1. Una vez dentro, ve a "API Keys" en el menú lateral
2. Click en "Create API Key"
3. Nombre: "Yaming Production"
4. Permisos: "Sending access"
5. Click "Create"
6. **COPIA LA API KEY** (solo se muestra una vez)
   - Ejemplo: `re_123456789...`

### PASO 3: Configurar en tu Proyecto

#### Opción A: Local (desarrollo)

```bash
# Crear archivo .env.local
cd /Users/caco/Desktop/yaming
echo "RESEND_API_KEY=re_TU_API_KEY_AQUI" > .env.local
echo "EMAIL_FROM=\"Yaming <onboarding@resend.dev>\"" >> .env.local
echo "ADMIN_EMAIL=carlos.irigoyen@gmail.com" >> .env.local
```

#### Opción B: Vercel (producción)

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `RESEND_API_KEY` = `re_TU_API_KEY_AQUI`
   - `EMAIL_FROM` = `Yaming <onboarding@resend.dev>`
   - `ADMIN_EMAIL` = `carlos.irigoyen@gmail.com`
4. Click "Save"
5. Redeploy el proyecto

### PASO 4: Verificar Dominio (OPCIONAL - Para producción)

Para enviar desde tu@yaming.cl en lugar de onboarding@resend.dev:

1. En Resend, ve a "Domains"
2. Click "Add Domain"
3. Ingresa: `yaming.cl`
4. Resend te dará registros DNS (MX, TXT, DKIM)
5. Agrégalos en tu proveedor de dominio
6. Espera 24-48 horas para verificación
7. Actualiza `EMAIL_FROM` a: `Ventas <ventas@yaming.cl>`

## 📨 Cómo Funciona el Sistema

### Flujo de Email en una Venta:

```
Cliente compra E.C.H.O ($189.990)
        ↓
Sistema crea orden #YAM-12345678
        ↓
    ┌───┴───┐
    ↓       ↓
Email 1     Email 2
Cliente     TÚ (Carlos)
```

### Email al Cliente:

```
De: Yaming <onboarding@resend.dev>
Para: cliente@email.com
Asunto: Confirmación de Pedido #YAM-12345678

Contenido:
✅ Número de pedido
✅ Productos comprados
✅ Total pagado
✅ Dirección de envío
✅ Tiempo estimado de entrega
✅ Información de contacto
```

### Email a TI (Carlos): ⭐

```
De: Yaming <onboarding@resend.dev>
Para: carlos.irigoyen@gmail.com
Asunto: 🎉 Nueva Venta #YAM-12345678 - $189.990

Contenido:
🎉 NUEVA VENTA!
━━━━━━━━━━━━━━━
Pedido: #YAM-12345678
Total: $189.990 CLP

CLIENTE:
Nombre: Juan Pérez
Email: juan@email.com
Teléfono: +56 9 1234 5678
RUT: 12.345.678-9

PRODUCTOS:
• E.C.H.O × 1 = $189.990

ENVIAR A:
Juan Pérez
Av. Providencia 1234, Depto 301
Providencia, Región Metropolitana
CP: 7500000

MÉTODO DE PAGO: Webpay Plus

PRÓXIMAS ACCIONES:
1. ✅ Verificar pago en Transbank
2. 📦 Preparar paquete
3. 🚚 Generar guía de despacho
4. 📧 Actualizar tracking
```

## 🧪 Testing (Sin API Key)

Si aún no configuras Resend, el sistema funcionará igual pero:

- ✅ Órdenes se crean normalmente
- ✅ Checkout funciona
- ⚠️ Los emails NO se envían
- ℹ️ Los detalles se muestran en la consola

Para ver los emails simulados:
```bash
npm run dev
# Abre la terminal y verás:
# [EMAIL SIMULATION] Customer confirmation email for YAM-12345678
# [EMAIL SIMULATION] Admin notification for order YAM-12345678
```

## 💰 Costos

**Plan Gratis de Resend:**
- ✅ 100 emails/día
- ✅ 3,000 emails/mes
- ✅ Gratis para siempre
- ✅ Suficiente para 50 ventas/mes (2 emails por venta = 100 emails/mes)

**Plan Pro (si creces):**
- $20 USD/mes
- 50,000 emails/mes
- Soporte prioritario

## ✅ Checklist de Configuración

- [ ] Crear cuenta en Resend.com
- [ ] Obtener API Key
- [ ] Agregar RESEND_API_KEY a .env.local (desarrollo)
- [ ] Agregar variables a Vercel (producción)
- [ ] Hacer una compra de prueba
- [ ] Verificar que llegó email a carlos.irigoyen@gmail.com
- [ ] (Opcional) Configurar dominio yaming.cl

## 🆘 Troubleshooting

### No me llegan los emails

1. **Verifica la API Key:**
   ```bash
   echo $RESEND_API_KEY  # Debe mostrar: re_123...
   ```

2. **Verifica la consola:**
   ```bash
   npm run dev
   # Mira los logs después de hacer una compra
   ```

3. **Verifica spam:**
   - Revisa la carpeta de spam de carlos.irigoyen@gmail.com
   - Marca como "No es spam" si está ahí

4. **Verifica en Resend Dashboard:**
   - https://resend.com/emails
   - Verás todos los emails enviados

### Errores comunes

**"Missing API key"**
```bash
Solución: Verifica que .env.local existe y tiene:
RESEND_API_KEY=re_tu_key_aqui
```

**"Invalid API key"**
```bash
Solución: Copia nuevamente la API key desde Resend Dashboard
```

## 📞 Soporte

Si necesitas ayuda:
1. Dashboard de Resend: https://resend.com
2. Documentación: https://resend.com/docs
3. Email de soporte: support@resend.com

## 🎉 Próximos Pasos

Una vez configurado Resend:
1. ✅ Emails funcionando
2. 🔄 Integrar Webpay real (Transbank)
3. 🔄 Panel de administración para ver pedidos
4. 🔄 Sistema de tracking automático
5. 🔄 Integración con couriers (Chilexpress API)

