import { Footer, NavBar } from "@/components"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} grid min-h-screen place-content-center bg-[#141C2F] tracking-widest`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
