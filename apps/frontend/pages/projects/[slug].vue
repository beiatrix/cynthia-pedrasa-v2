<script setup lang=ts>
// types
import type { Project } from '@/types'

// markdown
import Markdown from 'vue3-markdown-it'

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

/**
 * images
 * ================================================================
 */
const projectContentElement = ref<HTMLElement | undefined>(undefined)
function applyStyles () {
  const h1Tags = projectContentElement.value?.getElementsByTagName('h1')
  if (h1Tags) {
    for (const h1 of h1Tags) {
      h1.classList.add('text-4xl')
    }
  }
}

// lifecycle hooks
onMounted(async () => {
  await nextTick()
  applyStyles()
})

onUpdated(async () => {
  await nextTick()
  applyStyles()
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
    <client-only>
      <div ref="projectContentElement">
        <Markdown
          v-if="project.content"
          :source="project.content"
        />
      </div>
    </client-only>
  </div>
</template>
