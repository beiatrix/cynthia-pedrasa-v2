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
    table: resolveComponent('BlockTable')
  }
}

/**
 * styles
 * ================================================================
 */
const projectContentElement = ref<HTMLElement | undefined>(undefined)
function applyStyles () {
  // h1
  // const h1Tags = projectContentElement.value?.getElementsByTagName('h1')
  // if (h1Tags) {
  //   for (const h1 of h1Tags) {
  //     h1.classList.add('text-4xl')
  //     h1.classList.add('font-bold')
  //   }
  // }
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

// console.log('project >>>', project.value?.content)
</script>

<template>
  <div
    v-if="project"
    class="py-6"
  >
    <h1 class="text-4xl font-bold font-serif pb-8 pt-2">
      {{ project.title }}
    </h1>
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
