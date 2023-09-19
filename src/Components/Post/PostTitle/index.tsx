import ArrowSquareOut from "@/assets/icons/ArrowSquareOut";
import CalendarBlank from "@/assets/icons/CalendarBlank";
import CaretLeft from "@/assets/icons/CaretLeft";
import ChatCircle from "@/assets/icons/ChatCircle";
import GithubLogo from "@/assets/icons/GithubLogo";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";

interface PostInfoProps {
  id: number
  name?: string
  created_at: string
  description?: string
  html_url?: string
  owner?: string
  watchers?: number
}

export function PostTitle(props: PostInfoProps) {

  return (
    <div className="bg-[#0B1B2B] w-[864px] absolute top-[208px] left-[calc(50%-864px/2)] p-8 flex gap-8 rounded-[10px] text-[#AFC2D4]">
      <div className="w-full">
        <div className="mb-5 flex w-full justify-between ">
          <Link
            passHref
            href="/"
            className="flex justify-center items-center gap-1 border-b-2 border-b-transparent text-xs text-[#3294F8] font-bold hover:border-b-[#3294F8]"
          >
            <CaretLeft size={12} /> VOLTAR
          </Link>
          <a
            target="_blank"
            href={props.html_url}
            className="flex justify-center items-center gap-1 border-b-2 border-b-transparent text-xs text-[#3294F8] font-bold hover:border-b-[#3294F8]"
            rel="noreferrer"
          >
            VER NO GITHUB <ArrowSquareOut size={12} />
          </a>
        </div>
        <h2 className="mb-6 text-2xl text-[#E7EDF4]">{props.name}</h2>
        <div className="flex gap-8">
          <p className="flex gap-2 items-center justify-center">
            <span className="text-[#3A536B]">
              <GithubLogo size={18} />
            </span>
            {props.owner}
          </p>

          <p className="flex gap-2 items-center justify-center">
            <span className="text-[#3A536B]">
              <CalendarBlank size={18} />
            </span>
            {formatDistanceToNow(new Date(props.created_at), 
            {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>

          <p className="flex gap-2 items-center justify-center">
            <span className="text-[#3A536B]">
              <ChatCircle size={18} />
            </span>
            {props.watchers} visualizações
          </p>
        </div>
      </div>
    </div>
  )
}
