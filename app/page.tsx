"use client"
import { CardUser, LoadingIcon, SearchBar, ToastMessage } from "@/components"
import { UserGithub } from "@/interfaces/UserGithub"
import { useState } from "react"

export default function Home() {
  const [user, setUser] = useState<UserGithub | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getUserGithub = async (userName: string) => {
    try {
      setIsLoading(true)
      const res = await fetch(`https://api.github.com/users/${userName}`)
      const data = await res.json()

      if (data.message) throw new Error(data.message)
      setUser(data)
      setIsLoading(false)
      setError(null)
    } catch (e) {
      setError((e as Error).message)
    }
  }

  return (
    <main>
      <SearchBar getUser={getUserGithub} />
      {isLoading && !error && (
        <div className="flex justify-center">
          <LoadingIcon width={100} fill="#ffffff" />
        </div>
      )}
      {error && <ToastMessage message={error} />}
      {!isLoading && !error && user && <CardUser user={user} />}
    </main>
  )
}
