import type { Metadata } from 'next'
import { Oswald, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const oswald = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
})

const sourceSerif = Source_Serif_4({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-source-serif',
})

export const metadata: Metadata = {
  title: 'Marx en el siglo XXI — Historia económica y economía marxista',
  description: 'Historia económica · México y mundo · Enfoque marxista y didáctico. Simulador de la fábrica, línea de tiempo, conceptos y recursos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${oswald.variable} ${sourceSerif.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
