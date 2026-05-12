import './globals.css'

export const metadata = {
  title: 'Gosnail — Tecnologia e processi unificati',
  description:
    'Il partner strategico che trasforma i tuoi dati e i tuoi flussi di lavoro in un motore di efficienza, controllo e sviluppo commerciale.',
  icons: { icon: '/assets/Gosnail-favico-default.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
