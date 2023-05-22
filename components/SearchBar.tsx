import SearchIcon from "./icons/SearchIcon"

interface Props {
  getUser: (userName: string) => Promise<void>
}

const SearchBar = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userName = e.currentTarget.username.value
    if (!userName) return
    await getUser(userName)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fade-in mx-5 my-5 flex items-center justify-center gap-2 rounded-xl bg-white p-2 shadow-lg dark:bg-[#1f2a48] md:w-[800px]"
    >
      <SearchIcon width={35} height={35} className="fill-blue-400" />
      <input
        name="username"
        className="w-full bg-transparent text-2xl text-slate-800 focus:outline-none dark:text-white placeholder:dark:text-white"
        placeholder="Search Github username..."
      />
      <button className="rounded-md bg-blue-500 p-4 font-bold tracking-widest text-white">
        Search
      </button>
    </form>
  )
}

export default SearchBar
