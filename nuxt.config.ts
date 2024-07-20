// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cynthia Pedrasa',
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'I am a Registered Nurse working as a Clinical Informatics Specialist at Northwell Health. Computers, information science, and their applications in the healthcare setting have always fascinated me.'
        }
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  googleFonts: {
    display: 'swap',
    families: {
      'DM Sans': true
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ]
})
