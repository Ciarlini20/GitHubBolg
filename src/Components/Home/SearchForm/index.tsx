'use client'

import { GitHubContext } from "@/context/GithubContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  public_repos: number
}

export function SearchForm(props: SearchFormProps) {
  const {fetchReposInfo} = useContext(GitHubContext)

  const {register, handleSubmit} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchRepositorys(data: SearchFormInputs){
     await fetchReposInfo(data.query)
  }

  return (
    <div className="w-[864px] mx-auto mt-[156px]">
      <div className="flex justify-between mb-3">
        <h2 className="text-[#C4D4E3]  font-bold text-lg">
          Publicações
        </h2>
        <p className="text-[#7B96B2]  text-sm">
        {props.public_repos} publicações
        </p>
      </div>

      <form>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="w-full px-4 py-3 bg-[#040F1A] rounded-md border-[#1C2F41] border-2 placeholder:text-[#3A536B] text-[#C4D4E3] focus:outline-none focus:border-[#3294F8]"
          {...register('query')}
          onSubmit={handleSubmit(handleSearchRepositorys)}
        />
      </form>
    </div>
  )
}