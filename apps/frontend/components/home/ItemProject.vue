<script setup lang="ts">
// types
import type { Project } from '@/types'

/**
 * props
 * ================================================================
 */
interface Props {
  project?: Partial<Project> | undefined
}
defineProps<Props>()
</script>

<template>
  <div
    v-if="project"
    class="mb-8"
  >
    <h1 class="text-2xl font-bold mb-2">
      <nuxt-link
        class="text-true-blue hover:text-aqua"
        :to="`/projects/${project.slug.current}`"
      >
        {{ project.title }}
      </nuxt-link>
    </h1>
    <SanityContent :blocks="project.description" />
  </div>
</template>
