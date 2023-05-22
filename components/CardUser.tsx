import LocationIcon from "./icons/LocationIcon"
import LinkIcon from "./icons/LinkIcon"
import TwitterIcon from "./icons/TwitterIcon"
import BuildingIcon from "./icons/BuildingIcon"
import Image from "next/image"
import { UserGithub } from "@/interfaces/UserGithub"
import { dateFormatted } from "@/utils"
import Link from "next/link"

interface Props {
  user: UserGithub
}

const CardUser = ({ user }: Props) => {
  return (
    <div className="fade-in m-5 rounded-xl bg-white p-8 text-slate-800 shadow-xl dark:bg-[#1f2a48] dark:text-white md:w-[800px] ">
      <div className="mb-10 flex items-center gap-5 ">
        <div>
          <Image
            width={100}
            height={100}
            alt="Avatar"
            src={user.avatar_url}
            className="rounded-full"
          />
        </div>
        <div className="grid w-full items-center sm:grid-cols-2">
          <h2 className="text-xl font-bold sm:text-3xl">{user.name}</h2>
          <p className="text-slate-500 sm:text-right">
            Joined {dateFormatted(user.created_at)}
          </p>
          <p className="text-blue-500">@{user.login}</p>
        </div>
      </div>

      <div className="mb-10">{user.bio || "Don´t have Bio"}</div>

      <div className="mb-10 flex justify-around rounded-lg bg-slate-200 p-4 dark:bg-[#141C2F] ">
        <div>
          <h3>Repos</h3>
          <p className="text-center font-bold">{user.public_repos}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p className="text-center font-bold">{user.followers}</p>
        </div>
        <div>
          <h3>Following</h3>
          <p className="text-center font-bold">{user.following}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <LocationIcon
            width={20}
            height={20}
            className="fill-slate-800 dark:fill-white"
          />
          <p>{user.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <LinkIcon
            width={20}
            height={20}
            className="fill-slate-800 dark:fill-white"
          />
          {user.blog ? (
            <Link
              className="flex gap-3 truncate hover:underline"
              href={user.blog}
              title={`Personal Web`}
              target="_blank"
            >
              {user.blog}
            </Link>
          ) : (
            "Not Found"
          )}
        </div>
        <div className="flex items-center gap-3">
          <TwitterIcon
            width={20}
            height={20}
            className="fill-slate-800 dark:fill-white"
          />
          {user.twitter_username ? (
            <Link
              className="flex gap-3 hover:underline"
              href={`https://twitter.com/${user.twitter_username}`}
              title={`Twitter Profile`}
              target="_blank"
            >
              <p>@{user.twitter_username}</p>
            </Link>
          ) : (
            "Not Found"
          )}
        </div>
        <div className="flex items-center gap-3">
          <BuildingIcon
            width={20}
            height={20}
            className="fill-slate-800 dark:fill-white"
          />
          <Link
            className="hover:underline"
            href={user.html_url}
            title={`Github Profile`}
            target="_blank"
          >
            {user.login}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardUser
