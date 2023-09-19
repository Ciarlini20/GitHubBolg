'use client'
import { PostTitle } from "@/Components/Post/PostTitle";
import { GitHubContext } from "@/context/GithubContext";
import { useContext, useEffect, useState } from "react";


export default function Post({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {


  const {reposInfo} = useContext(GitHubContext)

  const repositorie = reposInfo.find(repos => `${repos.id}` === params.id
)

//  async function fetchRepositorieReademe(){
//    const response = await fetch(`https://raw.githubusercontent.com/Ciarlini20/${repositorie?.name}/main`)


//   console.log(response)
//  }

  return (
    <div>
      <PostTitle 
      html_url={repositorie?.html_url}
      name={repositorie?.name}
      owner={repositorie?.owner.login}
      created_at={repositorie?.created_at}
      watchers={repositorie?.watchers}
      />

      <div className="px-8 py-10 mt-[88px] text-[#AFC2D4] w-[864px] mx-auto">
        <p>
          {repositorie?.description}
        </p>
      </div>
    </div>
  )
}


 