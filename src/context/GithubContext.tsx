'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'


interface GitHubProfileProps {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  company: string
  login: string
  followers: number
  public_repos: number
}

interface PostInfoProps {
  id: number
  name: string
  created_at: string
  description: string
  html_url: string
  owner: {
    login: string
  }
  watchers: number
}

interface GitHubContextType {
  gitHubProfile: GitHubProfileProps
  reposInfo: PostInfoProps[]
  fetchReposInfo: (query?: string) => Promise<void>
}

interface GitHuProviderProps {
  children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider({ children }: GitHuProviderProps) {
  const [gitHubProfile, setGitHubProfile] = useState<GitHubProfileProps>({
    name: '',
    avatar_url: '',
    html_url: '',
    bio: '',
    company: '',
    login: '',
    followers: 0,
    public_repos: 0,
  })

  const [reposInfo, setReposInfo] = useState<PostInfoProps[]>([])

  async function fetchGitHubProfile() {
    const response = await fetch('https://api.github.com/users/Ciarlini20')
    const data = await response.json()

    setGitHubProfile(data)
  }

  async function fetchReposInfo(query?: string) {
    const url = new URL('https://api.github.com/users/Ciarlini20/repos')

    if (query){
      url.searchParams.append('q', query)
    }
    
    const response = await fetch(url)
    
    const data = await response.json()

    setReposInfo(data)
  }

  useEffect(() => {
    fetchGitHubProfile()
    fetchReposInfo()
  }, [])

  return (
    <GitHubContext.Provider value={{ 
      gitHubProfile, 
      reposInfo, 
      fetchReposInfo 
    }}>
      {children}
    </GitHubContext.Provider>
  )
}