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
const { data: projectData } = useSanityQuery<Partial<Project>>(
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

const serializers = {
  types: {
    image: resolveComponent('BlockImage'),
    table: resolveComponent('BlockTable'),
    code: resolveComponent('BlockCode')
  }
}
</script>

<template>
  <div
    v-if="project"
    class="py-16"
  >
    <client-only>
      <div
        ref="projectContentElement"
        class="prose"
      >
        <SanityContent
          :blocks="project.content"
          :serializers="serializers"
        />
      </div>
    </client-only>
  </div>
</template>
