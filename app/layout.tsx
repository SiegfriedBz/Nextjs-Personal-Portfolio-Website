import { FloatingNav } from '@/components/ui/FloatingNav'
import { ThemeProvider } from '@/context/ThemeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NAV_ITEMS } from '@/constants.ts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Siegfried's Next.js Portfolio",
  description: 'Modern & Minimal Next.js Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Siegfried's Next.js Portfolio",
    title: "Siegfried's Next.js Portfolio",
    description: 'Modern & Minimal Next.js Portfolio',
    images: [
      {
        url: process.env.NEXT_PUBLIC_IMG_CLOUDINARY_URL as string,
        width: 1200,
        height: 630,
        alt: "Siegfried's Next.js Portfolio"
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          // enforce dark mode
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={NAV_ITEMS} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
