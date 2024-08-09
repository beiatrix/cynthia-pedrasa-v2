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
        class="text-true-blue transition-colors hover:text-aqua-blue"
        :to="`/projects/${project.slug.current}`"
      >
        {{ project.title }}
      </nuxt-link>
    </h1>
    <div class="sanity-content">
      <SanityContent :blocks="project.description" />
    </div>
  </div>
</template>

<style scoped>
.sanity-content :deep(a) {
  color: var(--color-true-blue);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.sanity-content :deep(a):hover {
  color: var(--color-aqua-blue);
  text-decoration: underline;
}
</style>
