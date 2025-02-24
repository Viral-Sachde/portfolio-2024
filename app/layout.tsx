import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import BlobProvider from "@/components/ui/BlobProvider";
import localFont from "next/font/local";
import Aurora from "@/components/Backgrounds/Aurora/Aurora";
import ClickSpark from "@/components/Animations/ClickSpark/ClickSpark";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const cals = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cals",
});

export const metadata: Metadata = {
  title: "Portfolio | Viral Sachde",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cals.variable} overflow-x-hidden`}>

        <ClickSpark
          sparkColor='#fff'
          sparkSize={18}
          sparkRadius={40}
          sparkCount={8}
          duration={400}
        >
          {/* Your content here */}
          <BlobProvider />
          <Aurora
            colorStops={["#00d8ff", "#7cff67", "#9370d8"]}
            blend={0}
            amplitude={1.4}
            speed={1.2}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </ClickSpark>

      </body>
    </html>
  );
}
