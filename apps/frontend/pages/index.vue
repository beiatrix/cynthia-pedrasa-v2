<script setup lang=ts>
// types
import type { About } from '@/types'

/**
 * data fetching
 * ================================================================
 */
const query = groq`*[_type == "about"]`
const { data } = useSanityQuery<About[]>(query, { topic: 'News' })

/**
 * content
 * ================================================================
 */
const about = computed(() => {
  return data.value
    ? data.value[0]
    : undefined
})
</script>

<template>
  <div>
    <Header :about="about" />
    <About :about="about" />
    <ListProjects />
  </div>
</template>
