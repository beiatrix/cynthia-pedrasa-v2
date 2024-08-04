<script setup lang=ts>
// types
import type { Project } from '@/types'

/**
 * route
 * ================================================================
 */
const route = useRoute()

/**
 * data fetching
 * ================================================================
 */
const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  content
}`
const { data: projectData } = useSanityQuery<Partial<Project>[]>(
  projectQuery,
  {
    slug: route.params.slug
  }
)

/**
 * content
 * ================================================================
 */
const project = computed(() => {
  return projectData.value
    ? projectData.value
    : undefined
})
</script>

<template>
  <div
    v-if="project"
    class="py-6"
  >
    <h1 class="text-4xl font-bold font-serif pb-4">
      {{ project.title }}
    </h1>
    <SanityContent :blocks="project.content" />
  </div>
</template>
