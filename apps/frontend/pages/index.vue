<script setup lang=ts>
// types
import type { About } from '@/types'

/**
 * data fetching
 * ================================================================
 */
const aboutQuery = groq`*[_type == "about"]`
const { data: aboutData } = useSanityQuery<About[]>(aboutQuery)

const projectQuery = groq`*[_type == "project"]`
const { data: projectData } = useSanityQuery<Project[]>(projectQuery)

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
  return projectData.value
    ? projectData.value
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
