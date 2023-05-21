import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex justify-center text-sm text-slate-800 dark:text-white">
      <p>
        Made by{" "}
        <Link
          className="font-bold"
          href={"https://pedrosorrentino.com"}
          target="_blank"
        >
          OrdepDev
        </Link>
      </p>
    </footer>
  )
}

export default Footer
