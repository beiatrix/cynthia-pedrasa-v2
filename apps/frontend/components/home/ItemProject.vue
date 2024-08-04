<script setup lang="ts">
// types
import type { Project } from '@/types'

/**
 * props
 * ================================================================
 */
interface Props {
  project?: Project | undefined
}
defineProps<Props>()
</script>

<template>
  <div
    v-if="project"
    class="mb-8"
  >
    <h1 class="text-2xl font-bold font-serif mb-2">
      <nuxt-link
        class="text-true-blue hover:text-aqua"
        :to="`/projects/${project.slug.current}`"
      >
        {{ project.title }}
      </nuxt-link>
    </h1>
    <p>
      {{ project.description }}
    </p>
  </div>
</template>
