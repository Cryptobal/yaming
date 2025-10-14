import { NextResponse } from "next/server"
import { sendCustomerConfirmationEmail, sendAdminNotificationEmail, type OrderEmailData } from "@/lib/email"

// Temporal: Guardamos las órdenes en memoria hasta configurar la base de datos
const orders = new Map<string, any>()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customerData, shippingAddress, items, subtotal, shipping, total, paymentMethod } = body

    // Generar número de orden único
    const orderNumber = `YAM-${Date.now().toString().slice(-8)}`

    // Crear orden
    const order = {
      orderNumber,
      customerData,
      shippingAddress,
      items,
      subtotal,
      shipping,
      total,
      paymentMethod,
      status: paymentMethod === "webpay" ? "PENDING_PAYMENT" : "PENDING_CONFIRMATION",
      createdAt: new Date().toISOString(),
    }

    // Guardar orden (temporal en memoria, luego será en DB)
    orders.set(orderNumber, order)

    // Preparar datos para emails
    const emailData: OrderEmailData = {
      orderNumber,
      customerName: `${customerData.firstName} ${customerData.lastName}`,
      customerEmail: customerData.email,
      customerPhone: customerData.phone,
      customerRut: customerData.rut,
      items: items.map((item: any) => ({
        name: item.productName || item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
      subtotal,
      shipping,
      total,
      shippingAddress,
      paymentMethod: paymentMethod === "webpay" ? "Webpay Plus" : "Transferencia Bancaria",
    }

    // Enviar emails de forma asíncrona (no bloqueante)
    Promise.all([
      sendCustomerConfirmationEmail(emailData),
      sendAdminNotificationEmail(emailData),
    ]).catch(err => console.error("Error sending emails:", err))

    // Si es Webpay, iniciar transacción
    if (paymentMethod === "webpay") {
      // TODO: Integrar con Transbank SDK
      // Por ahora retornamos URL de sandbox
      return NextResponse.json({
        success: true,
        orderNumber,
        url: `/pago/webpay?order=${orderNumber}`, // URL temporal
        message: "Orden creada, redirigiendo a Webpay...",
      })
    }

    // Transferencia bancaria
    return NextResponse.json({
      success: true,
      orderNumber,
      message: "Orden creada exitosamente. Te enviamos los datos bancarios por email.",
    })

  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Error al procesar el pedido. Intenta nuevamente." },
      { status: 500 }
    )
  }
}

// GET para obtener una orden
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const orderNumber = searchParams.get("orderNumber")

  if (!orderNumber) {
    return NextResponse.json({ error: "Order number required" }, { status: 400 })
  }

  const order = orders.get(orderNumber)

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 })
  }

  return NextResponse.json(order)
}

