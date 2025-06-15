import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DECOR - Style, Comfort & Affordable Furniture Store",
  description:
    "Discover modern furniture collections including chairs, sofas, tables and home decor. Free installation, 10 years experience, 5 years warranty. Shop now with 10% off all products!",
  keywords: "furniture, chairs, sofas, tables, home decor, modern furniture, affordable furniture, furniture store",
  openGraph: {
    title: "DECOR - Style, Comfort & Affordable Furniture Store",
    description: "Discover modern furniture collections with free installation and 5 years warranty",
    type: "website",
  },
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "DECOR Furniture Store",
              description: "Modern furniture store offering chairs, sofas, tables and home decor",
              url: "https://decor-furniture.com",
              priceRange: "$$",
              paymentAccepted: "Credit Card, PayPal",
              currenciesAccepted: "USD",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
