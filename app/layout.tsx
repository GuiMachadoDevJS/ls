import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cinzel, Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const cinzel = Cinzel({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'LS Manutenção | Manutenção Industrial de Alto Desempenho',
  description:
    '30 anos de experiência em manutenção industrial: mecânica, elétrica, hidráulica, pneumática, ajustagem, alinhamento de máquinas e soldas especiais. Atendimento 24/7.',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#07111e',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} ${cinzel.variable} bg-navy`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
