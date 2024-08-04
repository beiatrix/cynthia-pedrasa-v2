<script setup lang="ts">
// types
import type { Project } from '@/types'

/**
 * props
 * ================================================================
 */
interface Props {
  projects?: Partial<Project>[] | undefined
}
const props = withDefaults(defineProps<Props>(), {
  projects: () => []
})

/**
 * projects
 * ================================================================
 */
const projectsByCategory = computed(() => {
  return props.projects.reduce((categories, project) => {
    if (project.category) {
      if (project.category in categories) {
        categories[project.category].push(project)
      } else {
        categories[project.category] = [project]
      }
    }
    return categories
  }, {} as { [key: string]: Partial<Project>[] })
})
</script>

<template>
  <div class="grid grid-cols-12 gap-4 py-6">
    <div class="col-span-12 md:col-span-3 flex">
      <h2 class="text-4xl font-bold font-serif p-4">
        Projects
      </h2>
    </div>
    <div class="col-span-12 md:col-span-9 p-4 content-center">
      <div
        v-for="(categoryProjects, category) in projectsByCategory"
        :key="`item-category-${category}`"
      >
        <h1
          v-if="category"
          class="uppercase font-bold text-gray-500 tracking-wider border-b-2 border-gray-300 pb-2 mb-4"
        >
          {{ category }}
        </h1>
        <ItemProject
          v-for="project in categoryProjects"
          :key="`item-project-${project._id}`"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>
