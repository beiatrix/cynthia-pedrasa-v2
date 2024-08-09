<script setup lang=ts>
// types
import type { About } from '@/types'

/**
 * props
 * ================================================================
 */
interface Props {
  about: Partial<About> | undefined
}
const props = defineProps<Props>()

/**
 * content
 * ================================================================
 */
const longBio = computed(() => {
  return props.about
    ? props.about.longBio
    : ''
})
</script>

<template>
  <div
    id="about"
    class="grid grid-cols-12 gap-4 py-4 border-b-2 border-gray-300"
  >
    <div class="col-span-12 md:col-span-3 flex">
      <h2 class="text-4xl font-bold font-serif p-4">
        About Me
      </h2>
    </div>
    <div class="col-span-12 md:col-span-9 p-4 content-center">
      <p class="whitespace-pre-wrap">
        {{ longBio }}
      </p>
    </div>
  </div>
</template>
