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
</script>

<template>
  <pre class="bg-gray-800 text-white p-4 rounded">
    <code class="language-{{ language }}">
      {{ code }}
    </code>
  </pre>
</template>

<style scoped>
/* Add styles to format the code block */
pre {
  overflow-x: auto;
}
</style>
