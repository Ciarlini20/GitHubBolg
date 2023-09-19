import Image from "next/image";
import ArrowSquareOut from "@/assets/icons/ArrowSquareOut";
import GithubLogo from "@/assets/icons/GithubLogo";
import Buildings from "@/assets/icons/Buildings";
import Users from "@/assets/icons/Users";


interface GitHubProfileProps {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  company: string
  login: string
  followers: number
}

export function Profile(props : GitHubProfileProps) {
  return (
    <div className="bg-[#0B1B2B] w-[864px] absolute top-[208px] left-[calc(50%-864px/2)] p-8 flex gap-8 rounded-[10px] text-[#AFC2D4]">
        <Image
        src={props.avatar_url}
        alt="Profile picture"
        width={148}
        height={148}
        className=" rounded-lg"
      />   
      <div className="w-full">
        <div className="mb-2 flex w-full justify-between">
          <h2 className="text-[#E7EDF4] text-2xl font-bold">{props.name}</h2>
          <a
            target="_blank"
            href={props.html_url}
            className="flex justify-center items-center gap-1  text-xs text-[#3294F8] font-bold border-b border-b-transparent hover:border-b-[#3294F8]"
            rel="noreferrer"
          >
            GITHUB <ArrowSquareOut size={12} />
          </a>
        </div>
        <p className="mb-6">{props.bio}</p>
        <div className="flex gap-6">
          <p className="flex gap-2 items-center justify-center">
            <span className="text-[#3A536B]">
              <GithubLogo size={18} />
            </span>
            {props.login}
          </p>

          <p className="flex gap-2 items-center justify-center">
            <span className="text-[#3A536B]">
              <Buildings size={18} />
            </span>
            { props.company === null ? 'Sem Empresa' : props.company }
          </p>

          <p className="flex gap-2 items-center justify-center">
            <span className="text-[#3A536B]">
              <Users size={18} />
            </span>
            {props.followers}
          </p>
        </div>
      </div>
    </div>
  )
}
