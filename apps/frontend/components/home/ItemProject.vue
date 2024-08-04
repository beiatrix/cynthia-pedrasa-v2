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
      <button class="text-true-blue hover:text-aqua">
        {{ project.title }}
      </button>
    </h1>
    <p>
      {{ project.description }}
    </p>
  </div>
</template>
