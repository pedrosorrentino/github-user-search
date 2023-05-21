"use client"
import { useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

const NavBar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="mx-5 my-5 flex items-center justify-between tracking-widest text-slate-800 dark:text-white md:w-[800px]">
      <h1 className="text-2xl font-bold ">devfinder</h1>
      <button onClick={handleClick} className="flex items-center gap-2">
        {theme === "light" ? (
          <>
            <p>DARK</p>
            <MoonIcon
              width={20}
              height={20}
              className="fill-slate-800 dark:fill-white"
            />
          </>
        ) : (
          <>
            <p>LIGHT</p>
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
