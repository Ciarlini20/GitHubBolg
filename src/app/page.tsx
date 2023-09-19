'use client'
import { Card } from "@/Components/Home/Card";
import { Profile } from "@/Components/Home/Profile";
import { SearchForm } from "@/Components/Home/SearchForm";
import { GitHubContext } from "@/context/GithubContext";
import Link from "next/link";
import { useContext } from "react";



export default function Home() {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const { gitHubProfile, reposInfo } = useContext(GitHubContext)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <main >
      
      <Profile
        name={gitHubProfile.name}
        avatar_url={gitHubProfile.avatar_url}
        html_url={gitHubProfile.html_url}
        bio={gitHubProfile.bio}
        company={gitHubProfile.company}
        login={gitHubProfile.login}
        followers={gitHubProfile.followers}
      />

      <SearchForm public_repos={gitHubProfile.public_repos}/>
      <div className="grid grid-cols-2 gap-8 mt-12 w-[864px] mx-auto">
        {reposInfo.map((repos) => {
          return (
            <Link href={{pathname:`/post/${repos.id}`, query: { keyword: `${repos.id}` }}} passHref key={repos.id}> 
            <Card
              id={repos.id}
              name={repos.name}
              description={repos.description}
              created_at={repos.created_at}
              url={repos.html_url}
            />
            </Link>
          )
        })}
      </div>
    </main>
  )
}
