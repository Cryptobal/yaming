"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { ShoppingCart, CreditCard, Truck, Package, HelpCircle, Shield } from "lucide-react"
import { motion } from "framer-motion"

const faqCategories = [
  {
    icon: ShoppingCart,
    title: "Compras y Pedidos",
    color: "text-blue-500",
    faqs: [
      {
        question: "¿Cómo puedo realizar una compra en Yaming.cl?",
        answer: "Comprar en nuestro sitio es muy fácil: 1) Haz clic en el botón 'COMPRAR' en el producto que desees, 2) Finaliza tu compra en el carrito completando tus datos y seleccionando tu método de pago, 3) Recibirás un correo de confirmación con los detalles de tu pedido y número de seguimiento.",
      },
      {
        question: "¿Puedo modificar o cancelar mi pedido?",
        answer: "Sí, puedes modificar o cancelar tu pedido dentro de las primeras 2 horas después de realizado. Después de este tiempo, el pedido entra en proceso de preparación. Contáctanos inmediatamente a través de WhatsApp o email si necesitas hacer cambios.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Métodos de Pago",
    color: "text-green-500",
    faqs: [
      {
        question: "¿Cuáles son los métodos de pago aceptados?",
        answer: "Aceptamos múltiples métodos de pago: Tarjetas de crédito y débito (Visa, Mastercard, RedCompra), Webpay 2.0, PayPal, y opciones de pago en cuotas con bancos seleccionados (hasta 12 cuotas sin interés).",
      },
      {
        question: "¿Es seguro pagar en Yaming.cl?",
        answer: "Absolutamente. Utilizamos encriptación SSL/TLS de 256 bits y cumplimos con los estándares PCI-DSS. Todos los pagos son procesados a través de pasarelas de pago certificadas. Nunca almacenamos información completa de tarjetas de crédito en nuestros servidores.",
      },
      {
        question: "¿Puedo pagar en cuotas?",
        answer: "Sí, ofrecemos pagos en cuotas a través de Webpay y tarjetas de crédito participantes. Puedes elegir hasta 12 cuotas sin interés según tu banco emisor.",
      },
    ],
  },
  {
    icon: Truck,
    title: "Envíos y Entregas",
    color: "text-orange-500",
    faqs: [
      {
        question: "¿Realizan envíos a todo Chile?",
        answer: "¡Sí! Hacemos envíos a todo Chile a través de Chilexpress, Starken y Blue Express. Cubrimos todas las regiones del país, desde Arica hasta Punta Arenas, incluyendo Isla de Pascua.",
      },
      {
        question: "¿Cuál es el tiempo estimado de entrega?",
        answer: "Los tiempos de entrega varían según la ubicación: Región Metropolitana: 2-3 días hábiles, Regiones principales: 3-5 días hábiles, Regiones extremas: 5-7 días hábiles. En períodos de alta demanda, los tiempos pueden extenderse 1-2 días adicionales.",
      },
      {
        question: "¿Cuánto cuesta el envío?",
        answer: "El costo de envío varía según la región y el peso del paquete. En la Región Metropolitana el envío es GRATIS en compras sobre $50.000. Para otras regiones, el costo se calcula automáticamente al momento del checkout. Tenemos envío gratis en tu primera compra.",
      },
      {
        question: "¿Realizan envíos internacionales?",
        answer: "Sí, realizamos envíos a países seleccionados de Sudamérica, Norteamérica y Europa a través de DHL y FedEx. Los tiempos de entrega internacional son de 7-15 días hábiles. Contáctanos para cotizar envío a tu país.",
      },
    ],
  },
  {
    icon: Package,
    title: "Seguimiento",
    color: "text-purple-500",
    faqs: [
      {
        question: "¿Puedo rastrear mi pedido?",
        answer: "Sí, una vez que tu pedido haya sido despachado, recibirás un correo con un número de seguimiento para que puedas monitorear el estado de tu envío en tiempo real a través de la página del courier o en tu cuenta de Yaming.",
      },
      {
        question: "¿Qué hago si mi pedido no llega?",
        answer: "Si tu pedido no llega en el tiempo estimado, primero verifica el tracking. Si han pasado más de 3 días del tiempo estimado sin actualización, contáctanos inmediatamente. Trabajaremos con el courier para localizar tu paquete y resolveremos la situación.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Garantía y Devoluciones",
    color: "text-red-500",
    faqs: [
      {
        question: "¿Cuál es la política de garantía?",
        answer: "Todos nuestros productos cuentan con garantía de 2 años contra defectos de fabricación. Si tienes algún problema, contáctanos con tu número de pedido y fotos del producto. Te ayudaremos con el proceso de garantía o reemplazo.",
      },
      {
        question: "¿Puedo devolver un producto?",
        answer: "Sí, aceptamos devoluciones dentro de los primeros 30 días de recibido el producto, siempre que esté en su empaque original y sin uso. Los costos de envío de devolución corren por cuenta del cliente, excepto en caso de defecto de fábrica.",
      },
      {
        question: "¿Cómo proceso una devolución?",
        answer: "Para procesar una devolución: 1) Contáctanos dentro de los 30 días, 2) Envíanos fotos del producto y empaque, 3) Te enviaremos una autorización de devolución, 4) Envía el producto, 5) Una vez recibido y verificado, procesaremos tu reembolso en 5-7 días hábiles.",
      },
    ],
  },
  {
    icon: HelpCircle,
    title: "Producto y Soporte",
    color: "text-indigo-500",
    faqs: [
      {
        question: "¿El producto viene con instrucciones?",
        answer: "Sí, cada kit incluye un manual de usuario en español con instrucciones detalladas de uso, cuidado y mantenimiento. También puedes encontrar tutoriales en video en nuestro canal de YouTube.",
      },
      {
        question: "¿Necesito algún conocimiento técnico para usarlo?",
        answer: "No, el dispositivo es plug-and-play. Simplemente enciéndelo y comenzará a funcionar automáticamente. No requiere instalación de software ni configuración compleja.",
      },
      {
        question: "¿Cómo contacto al servicio al cliente?",
        answer: "Puedes contactarnos por múltiples vías: WhatsApp (respuesta en minutos), Email: soporte@yaming.cl (respuesta en 24 horas), Teléfono: +56 9 XXXX XXXX (Lun-Vie 9:00-18:00). También tenemos chat en vivo en la página.",
      },
    ],
  },
]

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/20 py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Preguntas Frecuentes
              </h1>
              <p className="text-xl text-muted-foreground">
                Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${category.color}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${categoryIndex}-${index}`}
                          className="border-b last:border-0"
                        >
                          <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                ¿No encontraste lo que buscabas?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/56900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8"
                >
                  Chatea con Nosotros
                </a>
                <a
                  href="mailto:soporte@yaming.cl"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8"
                >
                  Enviar Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

