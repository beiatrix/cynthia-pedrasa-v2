<script setup lang=ts>
/**
 * contact items
 * ================================================================
 */
const contactItems = computed(() => {
  return [
    {
      url: 'https://www.linkedin.com/in/cynthiapedrasa/',
      text: 'LinkedIn'
    },
    {
      url: 'mailto:cpedrasa@gmail.com',
      text: 'Mail'
    },
    {
      url: 'https://github.com/cynthiapedrasa/',
      text: 'GitHub'
    },
    {
      url: 'https://cpedrasa.github.io/',
      text: 'Blog'
    },
    {
      url: 'https://www.instagram.com/rndatasci/',
      text: 'Instagram'
    }
  ]
})
</script>

<template>
  <div
    id="footer"
    class="w-screen h-16 px-2 bottom-0 fixed flex justify-center items-center bg-gray-800"
  >
    <a
      v-for="item in contactItems"
      :key="`menu-item-${item.text}`"
      class="px-2 text-white transition-colors hover:text-aqua-blue"
      :href="item.url"
      target="_blank"
    >
      <!-- <img
        src="/cp-logo.svg"
        class="h-6 mx-4"
        alt="logo"
      > -->
      {{ item.text }}
    </a>
  </div>
</template>
