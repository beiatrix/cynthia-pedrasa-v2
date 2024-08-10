<script setup lang="ts">
// types
import type { Image } from '@/types'

/**
 * props
 * ================================================================
 */
interface Props {
  asset: Partial<Image>
  alt?: string
  caption?: string
}
withDefaults(defineProps<Props>(), {
  alt: '',
  caption: ''
})
</script>

<template>
  <div>
    <SanityImage
      class="mx-auto"
      :asset-id="asset._ref"
      :alt="alt"
    />
    <p class="text-center text-gray-700">
      {{ caption }}
    </p>
  </div>
</template>
