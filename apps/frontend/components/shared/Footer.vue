<script setup lang=ts>
/**
 * contact items
 * ================================================================
 */
const contactItems = computed(() => {
  return [
    {
      icon: 'mdi:linkedin',
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cynthiapedrasa/'
    },
    {
      icon: 'material-symbols:mail',
      text: 'Mail',
      url: 'mailto:cpedrasa@gmail.com'
    },
    {
      icon: 'mdi:github',
      text: 'GitHub',
      url: 'https://github.com/cynthiapedrasa/'
    },
    {
      icon: 'mdi:post-it-note-edit',
      text: 'Blog',
      url: 'https://cpedrasa.github.io/'
    },
    {
      icon: 'mdi:instagram',
      text: 'Instagram',
      url: 'https://www.instagram.com/rndatasci/'
    }
  ]
})
</script>

<template>
  <div
    id="footer"
    class="w-screen h-20 px-2 bottom-0 fixed flex justify-center items-center bg-gray-800"
  >
    <a
      v-for="item in contactItems"
      :key="`menu-item-${item.text}`"
      class="px-4 text-white transition-colors hover:text-aqua-blue"
      :href="item.url"
      target="_blank"
    >
      <Icon
        :name="item.icon"
        size="32"
      />
    </a>
  </div>
</template>
