<script setup lang="ts">
/**
 * props
 * ================================================================
 */
interface Props {
  code: string
  language?: string
}
withDefaults(defineProps<Props>(), {
  language: 'plaintext'
})

/**
 * code highlighting
 * ================================================================
 */
const languageMap = {
  javascript: 'js',
  python: 'py'
} as { [key: string]: string }

function getLanguageClass (language: string) {
  return language in languageMap
    ? `lang-${languageMap[language]}`
    : `lang-${language}`
}

onMounted(() => {
  const { $Prism } = useNuxtApp()
  $Prism.highlightAll()
})
</script>

<template>
  <pre>
    <code :class="getLanguageClass(language)">{{ code }}</code>
  </pre>
</template>

<style scoped>
pre {
  white-space: pre-line;
  overflow-x: auto;
}
</style>
