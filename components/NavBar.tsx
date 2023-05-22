"use client"
import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

// const initialThemeState = () => {
//   if (typeof window !== "undefined") {
//     if (localStorage.getItem("theme")) {
//       return localStorage.getItem("theme") as "light" | "dark"
//     }
//     return window.matchMedia("(prefers-color-scheme:dark)").matches
//       ? "dark"
//       : "light"
//   }
//   return "light"
// }

const NavBar = () => {
  // const [hasMounted, setHasMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(
    "light"
    // initialThemeState() || "light"
  )

  // useEffect(() => {
  //   setHasMounted(true)
  // }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  // if (!hasMounted) {
  //   return (
  //     <div className="fade-in mx-5 my-5 text-center text-2xl">Loading...</div>
  //   )
  // }

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="fade-in mx-5 my-5 flex items-center justify-between tracking-widest text-slate-800 dark:text-white md:w-[800px]">
      <h1 className="text-2xl font-bold ">devfinder</h1>
      <button onClick={handleClick} className="flex items-center gap-2">
        {theme === "light" ? (
          <>
            <p>DARK MODE</p>
            <MoonIcon
              width={20}
              height={20}
              className="fill-slate-800 dark:fill-white"
            />
          </>
        ) : (
          <>
            <p>LIGHT MODE</p>
            <SunIcon
              width={20}
              height={20}
              className="fill-slate-800 dark:fill-white"
            />
          </>
        )}
      </button>
    </header>
  )
}

export default NavBar
