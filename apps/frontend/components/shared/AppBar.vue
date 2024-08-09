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
 * menu items
 * ================================================================
 */
const about = computed(() => {
  return aboutData.value
    ? aboutData.value[0]
    : undefined
})

const menuItems = computed(() => {
  return [
    {
      section: 'about',
      buttonText: 'About'
    },
    {
      section: 'projects',
      buttonText: 'Projects'
    }
  ]
})

const resumeURL = computed(() => {
  return about.value
    ? about.value.resume?.asset._ref
    : undefined
})

/**
 * methods
 * ================================================================
 */
function scrollTo (section: string) {
  const sectionElement = document.getElementById(section)
  if (sectionElement) {
    // Calculate position of section with offset
    const rect = sectionElement.getBoundingClientRect()
    const offset = document.documentElement.scrollTop
    const targetPosition = rect.top + offset - 64

    // Smooth scroll to the section
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}
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
      <button
        v-for="item in menuItems"
        :key="`menu-item-${item}`"
        class="mx-4 transition-colors text-gray-800 hover:text-aqua-blue "
        @click="scrollTo(item.section)"
      >
        {{ item.buttonText }}
      </button>
      <button class="mx-4 transition-colors text-gray-800 hover:text-aqua-blue">
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
