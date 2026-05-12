import { Fraunces, Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Gosnail — Tecnologia e processi unificati',
  description:
    'Il partner strategico che trasforma i tuoi dati e i tuoi flussi di lavoro in un motore di efficienza, controllo e sviluppo commerciale.',
  icons: { icon: '/assets/Gosnail-favico-default.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
