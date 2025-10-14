import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Yaming</h3>
            <p className="text-sm text-muted-foreground">
              Tecnología de vanguardia para tu tranquilidad. Líderes en soluciones de privacidad y seguridad.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:contacto@yaming.cl">
                <Mail className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mi-cuenta" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mi Cuenta
                </Link>
              </li>
              <li>
                <Link href="/pedidos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mis Pedidos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Garantía
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Suscríbete para recibir ofertas exclusivas y novedades.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1"
              />
              <Button>Suscribir</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yaming. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

