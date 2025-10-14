"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo puedo realizar una compra en Yaming.cl?",
    answer: "Comprar en nuestro sitio es muy fácil: 1) Haz clic en el botón 'COMPRAR', 2) Finaliza tu compra en el carrito completando tus datos y seleccionando tu método de pago, 3) Recibirás un correo de confirmación con los detalles de tu pedido.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer: "Aceptamos los siguientes métodos de pago: Tarjetas de crédito y débito (Visa, Mastercard, RedCompra), Webpay 2.0, y opciones de pago en cuotas con bancos seleccionados.",
  },
  {
    question: "¿Realizan envíos a todo Chile?",
    answer: "¡Sí! Hacemos envíos a todo Chile a través de Chilexpress, Starken y Blue Express. También ofrecemos envíos internacionales a países seleccionados.",
  },
  {
    question: "¿Cuál es el tiempo estimado de entrega?",
    answer: "El tiempo de entrega varía según la ubicación: Región Metropolitana: 2-3 días hábiles, Regiones: 3-7 días hábiles. En períodos de alta demanda, los tiempos pueden extenderse.",
  },
  {
    question: "¿Puedo rastrear mi pedido?",
    answer: "Sí, una vez que tu pedido haya sido despachado, recibirás un correo con un número de seguimiento para que puedas monitorear el estado de tu envío en tiempo real.",
  },
  {
    question: "¿Cuál es la política de garantía?",
    answer: "Todos nuestros productos cuentan con garantía de 2 años contra defectos de fabricación. Si tienes algún problema, contáctanos y te ayudaremos con el proceso de garantía.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

