// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cynthia Pedrasa',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'MS, RN-BC, PMP, CPHIMS'
        }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  devtools: {
    enabled: true
  },
  googleFonts: {
    display: 'swap',
    families: {
      'DM Sans': true,
      'DM Serif Display': true
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production'
  }
})
