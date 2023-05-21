import SunIcon from "./icons/SunIcon"

const NavBar = () => {
  return (
    <header className="mx-5 my-5 flex items-center justify-between tracking-widest text-white md:w-[800px]">
      <h1 className="text-2xl font-bold ">devfinder</h1>

      <div className="flex items-center gap-2 ">
        <p>LIGHT</p>
        <SunIcon width={20} height={20} className="fill-white" />
      </div>
    </header>
  )
}

export default NavBar
