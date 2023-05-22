import { Footer, NavBar } from "@/components"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Search for people on github",
  description:
    "Discover profiles of individuals on GitHub and explore their work, repositories, and contributions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} grid min-h-screen place-content-center bg-slate-200 tracking-widest dark:bg-[#141C2F]`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
