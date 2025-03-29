'use client'

import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'], // Adicione os pesos que você deseja usar
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: '#663399',
              color: '#fff',
              zIndex: 9999,
            },
          }}
        />
      </body>
    </html>
  )
}
