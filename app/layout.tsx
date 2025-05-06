import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Doomsday Exam Countdown",
  description: "The final countdown to academic judgment day",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
