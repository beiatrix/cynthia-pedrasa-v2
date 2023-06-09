import { createClient, groq } from 'next-sanity'
import { Project } from '@/types/Project'

export async function getProjects (): Promise<Project[]> {
  const client = createClient({
    projectId: 'yrzi4rax',
    dataset: 'production',
    apiVersion: '2023-06-24'
  })

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`
  )
}