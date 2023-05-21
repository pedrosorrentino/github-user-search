import LocationIcon from "./icons/LocationIcon"
import LinkIcon from "./icons/LinkIcon"
import TwitterIcon from "./icons/TwitterIcon"
import BuildingIcon from "./icons/BuildingIcon"
import Image from "next/image"

const CardUser = () => {
  return (
    <div className="m-5 rounded-xl bg-[#1f2a48] p-8 text-white md:w-[800px]">
      <div className="mb-10 flex items-center gap-5 ">
        <div>
          {/* <Image
            width={20}
            height={20}
            alt="Avatar"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          /> */}
          <img
            className="w-20"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">Username</h2>
          <p className="text-blue-500">Tag name</p>
          <p>User join</p>
        </div>
      </div>

      <div className="mb-10">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </div>

      <div className="mb-10 flex justify-around rounded-lg bg-[#141C2F] p-4 ">
        <div>
          <h3>Repos</h3>
          <p className="text-center font-bold">8</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p className="text-center font-bold">8</p>
        </div>
        <div>
          <h3>Following</h3>
          <p className="text-center font-bold">8</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex gap-3">
          <LocationIcon width={20} height={20} className="fill-white" />
          <p>San Francisco</p>
        </div>
        <div className="flex gap-3">
          <LinkIcon width={20} height={20} className="fill-white" />
          <p>https://github.xom</p>
        </div>
        <div className="flex gap-3">
          <TwitterIcon width={20} height={20} className="fill-white" />
          <p>@twittergituhb</p>
        </div>
        <div className="flex gap-3">
          <BuildingIcon width={20} height={20} className="fill-white" />
          <p>@profilegithub</p>
        </div>
      </div>
    </div>
  )
}

export default CardUser
