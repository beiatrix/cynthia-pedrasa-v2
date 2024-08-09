<script setup lang=ts>
// types
import type { About } from '@/types'

/**
 * data fetching
 * ================================================================
 */
const aboutQuery = groq`*[_type == "about"]{
  resume
}`
const { data: aboutData } = useSanityQuery<Partial<About>[]>(aboutQuery)

/**
 * content
 * ================================================================
 */
const about = computed(() => {
  return aboutData.value
    ? aboutData.value[0]
    : undefined
})

const resumeURL = computed(() => {
  return about.value
    ? about.value.resume?.asset._ref
    : undefined
})
</script>

<template>
  <div class="w-screen h-16 px-2 top-0 fixed flex justify-between items-center shadow bg-white">
    <a href="/">
      <img
        src="/cp-logo.svg"
        class="h-6 mx-4"
        alt="logo"
      >
    </a>
    <div>
      <button class="mx-4 hover:text-aqua-blue">
        btn 1
      </button>
      <button class="mx-4 hover:text-aqua-blue">
        <SanityFile
          v-if="resumeURL"
          :asset-id="resumeURL"
        >
          <template #default="{ src }">
            <a
              target="blank"
              :href="src"
            >Resume</a>
          </template>
        </SanityFile>
      </button>
    </div>
  </div>
</template>
