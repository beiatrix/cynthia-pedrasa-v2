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
withDefaults(defineProps<Props>(), {
  project: undefined
})
</script>

<template>
  <ul v-if="project">
    <li class="font-bold">
      <span class="text-gray-600">
        •
      </span>
      <nuxt-link
        class="text-true-blue transition-colors font-bold hover:text-aqua-blue"
        :to="`/projects/${project.slug.current}`"
      >
        {{ project.title }}
      </nuxt-link>
    </li>
  </ul>
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
