import { Resend } from 'resend'

// Lazy initialization de Resend
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured, emails will not be sent")
    return null
  }
  return new Resend(apiKey)
}

const ADMIN_EMAIL = "carlos.irigoyen@gmail.com"
const FROM_EMAIL = process.env.EMAIL_FROM || "Yaming <noreply@yaming.cl>"

export interface OrderEmailData {
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  customerRut: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  subtotal: number
  shipping: number
  total: number
  shippingAddress: {
    street: string
    number: string
    apartment?: string
    city: string
    region: string
    postalCode: string
    instructions?: string
  }
  paymentMethod: string
}

// Email al cliente
export async function sendCustomerConfirmationEmail(data: OrderEmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; }
          .order-number { font-size: 24px; font-weight: bold; color: #667eea; margin: 20px 0; }
          .item { padding: 15px; background: white; margin: 10px 0; border-radius: 8px; }
          .total { background: white; padding: 20px; margin-top: 20px; border-radius: 8px; }
          .footer { text-align: center; padding: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>¡Gracias por tu Compra!</h1>
            <p>Tu pedido ha sido confirmado</p>
          </div>
          
          <div class="content">
            <p class="order-number">Pedido #${data.orderNumber}</p>
            
            <p>Hola ${data.customerName},</p>
            <p>Hemos recibido tu pedido y lo estamos preparando para el envío.</p>
            
            <h2>Resumen de tu Pedido</h2>
            ${data.items.map(item => `
              <div class="item">
                <div style="display: flex; justify-content: space-between;">
                  <div>
                    <strong>${item.name}</strong><br>
                    <span style="color: #666;">Cantidad: ${item.quantity}</span>
                  </div>
                  <div style="font-weight: bold;">
                    $${item.price.toLocaleString('es-CL')}
                  </div>
                </div>
              </div>
            `).join('')}
            
            <div class="total">
              <div style="display: flex; justify-between; margin-bottom: 10px;">
                <span>Subtotal:</span>
                <span>$${data.subtotal.toLocaleString('es-CL')}</span>
              </div>
              <div style="display: flex; justify-between; margin-bottom: 10px;">
                <span>Envío:</span>
                <span>${data.shipping === 0 ? 'GRATIS' : '$' + data.shipping.toLocaleString('es-CL')}</span>
              </div>
              <div style="display: flex; justify-between; font-size: 20px; font-weight: bold; padding-top: 10px; border-top: 2px solid #ddd;">
                <span>Total:</span>
                <span>$${data.total.toLocaleString('es-CL')}</span>
              </div>
            </div>
            
            <h3 style="margin-top: 30px;">Dirección de Envío</h3>
            <div class="item">
              <p style="margin: 5px 0;">${data.shippingAddress.street} ${data.shippingAddress.number}${data.shippingAddress.apartment ? ', ' + data.shippingAddress.apartment : ''}</p>
              <p style="margin: 5px 0;">${data.shippingAddress.city}, ${data.shippingAddress.region}</p>
              <p style="margin: 5px 0;">Código Postal: ${data.shippingAddress.postalCode}</p>
              ${data.shippingAddress.instructions ? `<p style="margin: 5px 0;">Instrucciones: ${data.shippingAddress.instructions}</p>` : ''}
            </div>
            
            <h3 style="margin-top: 30px;">Próximos Pasos</h3>
            <p>Te enviaremos un email con el número de seguimiento una vez que tu pedido sea despachado.</p>
            <p>Tiempo estimado de entrega: ${data.shippingAddress.region === 'metropolitana' ? '2-3 días hábiles' : '3-7 días hábiles'}</p>
            
            <p style="margin-top: 30px;">Si tienes alguna pregunta, no dudes en contactarnos:</p>
            <p>📧 Email: soporte@yaming.cl</p>
            <p>📱 WhatsApp: +56 9 0000 0000</p>
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} Yaming Chile. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    const resend = getResendClient()
    if (!resend) {
      console.log(`[EMAIL SIMULATION] Customer confirmation email for ${data.orderNumber}`)
      console.log(`To: ${data.customerEmail}`)
      console.log(`Subject: Confirmación de Pedido #${data.orderNumber}`)
      return
    }
    
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.customerEmail,
      subject: `Confirmación de Pedido #${data.orderNumber} - Yaming`,
      html,
    })
  } catch (error) {
    console.error("Error sending customer email:", error)
  }
}

// Email al administrador (Carlos)
export async function sendAdminNotificationEmail(data: OrderEmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #10b981; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .item { padding: 10px; background: white; margin: 10px 0; border-left: 4px solid #10b981; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 ¡Nueva Venta!</h1>
            <p style="font-size: 24px; margin: 0;">#${data.orderNumber}</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <h2 style="margin: 0 0 10px 0;">Total: $${data.total.toLocaleString('es-CL')} CLP</h2>
              <p style="margin: 0;">Método de pago: ${data.paymentMethod === 'webpay' ? 'Webpay Plus' : 'Transferencia Bancaria'}</p>
            </div>
            
            <h3>Datos del Cliente</h3>
            <div class="item">
              <p><strong>Nombre:</strong> ${data.customerName}</p>
              <p><strong>Email:</strong> ${data.customerEmail}</p>
              <p><strong>Teléfono:</strong> ${data.customerPhone}</p>
              <p><strong>RUT:</strong> ${data.customerRut}</p>
            </div>
            
            <h3>Productos</h3>
            ${data.items.map(item => `
              <div class="item">
                <strong>${item.name}</strong><br>
                Cantidad: ${item.quantity} × $${item.price.toLocaleString('es-CL')} = $${(item.price * item.quantity).toLocaleString('es-CL')}
              </div>
            `).join('')}
            
            <h3>Dirección de Envío</h3>
            <div class="item">
              <p><strong>${data.customerName}</strong></p>
              <p>${data.shippingAddress.street} ${data.shippingAddress.number}${data.shippingAddress.apartment ? ', ' + data.shippingAddress.apartment : ''}</p>
              <p>${data.shippingAddress.city}, ${data.shippingAddress.region}</p>
              <p>CP: ${data.shippingAddress.postalCode}</p>
              ${data.shippingAddress.instructions ? `<p><strong>Instrucciones:</strong> ${data.shippingAddress.instructions}</p>` : ''}
            </div>
            
            <h3>Totales</h3>
            <div class="item">
              <p>Subtotal: $${data.subtotal.toLocaleString('es-CL')}</p>
              <p>Envío: ${data.shipping === 0 ? 'GRATIS' : '$' + data.shipping.toLocaleString('es-CL')}</p>
              <p style="font-size: 18px; font-weight: bold;">Total: $${data.total.toLocaleString('es-CL')}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e0f2fe; border-radius: 8px;">
              <p style="margin: 0; font-weight: bold;">🚀 Próximas Acciones:</p>
              <ol style="margin: 10px 0;">
                <li>Verificar el pago en ${data.paymentMethod === 'webpay' ? 'Transbank' : 'tu cuenta bancaria'}</li>
                <li>Preparar el paquete</li>
                <li>Generar guía de despacho</li>
                <li>Actualizar tracking en el panel admin</li>
              </ol>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    const resend = getResendClient()
    if (!resend) {
      console.log(`[EMAIL SIMULATION] Admin notification for order ${data.orderNumber}`)
      console.log(`To: ${ADMIN_EMAIL}`)
      console.log(`Total: $${data.total.toLocaleString('es-CL')}`)
      console.log(`Customer: ${data.customerName} (${data.customerEmail})`)
      return
    }
    
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `🎉 Nueva Venta #${data.orderNumber} - $${data.total.toLocaleString('es-CL')}`,
      html,
    })
  } catch (error) {
    console.error("Error sending admin email:", error)
  }
}

