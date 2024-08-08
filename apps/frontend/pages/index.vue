<script setup lang=ts>
// types
import type { About, Project } from '@/types'

/**
 * data fetching
 * ================================================================
 */
const aboutQuery = groq`*[_type == "about"]`
const { data: aboutData } = useSanityQuery<About[]>(aboutQuery)

const projectsQuery = groq`*[_type == "project"]{
  title,
  slug,
  description,
  category
}`
const { data: projectsData } = useSanityQuery<Partial<Project>[]>(
  projectsQuery
)

/**
 * content
 * ================================================================
 */
const about = computed(() => {
  return aboutData.value
    ? aboutData.value[0]
    : undefined
})

const projects = computed(() => {
  return projectsData.value
    ? projectsData.value
    : undefined
})
</script>

<template>
  <div>
    <Header :about="about" />
    <About :about="about" />
    <ListProjects :projects="projects" />
  </div>
</template>
