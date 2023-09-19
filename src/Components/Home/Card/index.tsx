import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostInfoProps {
  id: number
  name: string
  created_at: string
  description: string
  url: string
}

export function Card(props: PostInfoProps) {
  return (
    <div className="w-[416px] p-8 bg-[#112131] flex flex-col justify-center  rounded-[10px] border-transparent border-2 hover:border-2 hover:border-[#7B96B2] cursor-pointer duration-500">
        <div className="flex justify-between gap-4 w-full mb-5">
          <h2 className="text-[#E7EDF4] text-xl font-bold">{props.name}</h2>
          <p className="text-[#7B96B2] text-sm whitespace-nowrap">
            {formatDistanceToNow(new Date(props.created_at), 
            {
              addSuffix: true,
              locale: ptBR,
            })}
            </p>
        </div>
        <p className="text-[#AFC2D4] overflow-hidden line-clamp-3">
          {props.description}
        </p>
    </div>
  )
}