<script setup lang=ts>
// types
import type { About, Project } from '@/types'

/**
 * data fetching
 * ================================================================
 */
const aboutQuery = groq`*[_type == "about"]{
  certifications,
  longBio,
  profileImage,
  resume,
  shortBio
}`
const {
  data: aboutData,
  error: aboutError,
  status: aboutStatus
} = useSanityQuery<Partial<About>[]>(aboutQuery)

const projectsQuery = groq`*[_type == "project"]{
  title,
  slug,
  description,
  category,
  hidden
}`
const {
  data: projectsData,
  error: projectsError,
  status: projectsStatus
} = useSanityQuery<Partial<Project>[]>(projectsQuery)

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
  <div v-if="aboutStatus === 'pending' || projectsStatus === 'pending'">
    <div class="flex items-center justify-center mt-[-64px] min-h-screen">
      <div class="loader" />
    </div>
  </div>
  <div v-else-if="aboutError || projectsError">
    <Error />
  </div>
  <div
    v-else
    class="not-prose"
  >
    <Header :about="about" />
    <SectionAbout :about="about" />
    <SectionProjects :projects="projects" />
  </div>
</template>
