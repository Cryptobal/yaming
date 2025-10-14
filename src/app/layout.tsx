import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaming - Libertad sin Interrupciones",
  description: "Tecnología de vanguardia para tu tranquilidad. Inhibidores de Bluetooth de alcance profesional.",
  keywords: ["yaming", "inhibidor bluetooth", "tecnología", "privacidad", "chile"],
  authors: [{ name: "Yaming" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://yaming.cl",
    siteName: "Yaming",
    title: "Yaming - Libertad sin Interrupciones",
    description: "Tecnología de vanguardia para tu tranquilidad",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaming - Libertad sin Interrupciones",
    description: "Tecnología de vanguardia para tu tranquilidad",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

