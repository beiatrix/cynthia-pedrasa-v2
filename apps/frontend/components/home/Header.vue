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

const certifications = computed(() => {
  return about.value
    ? about.value.certifications
    : ''
})

const shortBio = computed(() => {
  return about.value
    ? about.value.shortBio
    : ''
})

/**
 * @todo: present images
 * https://www.sanity.io/docs/presenting-images
 */
</script>

<template>
  <div class="grid grid-cols-12 gap-4 my-6 py-6 border-b-2 border-gray-300">
    <div class="col-span-12 md:col-span-3 flex justify-center items-center">
      <img
        src="https://place-hold.it/300"
        alt="Placeholder Image"
        class="circular-image"
      >
    </div>
    <div class="col-span-12 md:col-span-9 p-4 content-center">
      <h1 class="text-6xl text-center sm:text-start font-bold font-serif mb-4">
        Cynthia Pedrasa
      </h1>
      <h2 class="text-2xl text-center sm:text-start text-true-blue font-bold mb-4">
        {{ certifications }}
      </h2>
      <h3 class="font-bold text-center whitespace-pre-wrap sm:text-start text-xl">
        {{ shortBio }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.circular-image {
  width: auto;
  max-height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
