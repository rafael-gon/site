import type { Metadata } from 'next'
import { Inter, Saira } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '600',
    '700',
    '800',
    '900',
  ],
})



export const metadata: Metadata = {
  title: 'Rafael',
  description: 'My showcasing expertise and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
