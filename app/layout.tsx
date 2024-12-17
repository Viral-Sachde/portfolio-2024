
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import BlobProvider from "@/components/ui/BlobProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
   <BlobProvider/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ><Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

