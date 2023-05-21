import SearchIcon from "./icons/SearchIcon"

const SearchBar = () => {
  return (
    <form className="mx-5 my-5 flex items-center justify-center gap-2 rounded-xl bg-[#1f2a48] p-2 md:w-[800px]">
      <SearchIcon width={35} height={35} className="fill-blue-400" />
      <input
        className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
        placeholder="Search Github username..."
      />
      <button className="rounded-md bg-blue-500 p-4 font-bold tracking-widest text-white">
        Search
      </button>
    </form>
  )
}

export default SearchBar
