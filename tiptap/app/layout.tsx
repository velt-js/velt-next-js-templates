import type { Metadata } from 'next'
import '../styles/globals.css'
import { AppUserProvider } from './userAuth/AppUserContext'

export const metadata: Metadata = {
  title: 'Velt + TipTap Collaborative Editor',
  description: 'Real-time collaborative document editor with Velt and TipTap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppUserProvider>
          {children}
        </AppUserProvider>
      </body>
    </html>
  )
}
