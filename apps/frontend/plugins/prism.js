import Prism from 'prismjs'
import 'prismjs/components/prism-python.min.js' // Import Python language support
import 'prismjs/themes/prism-tomorrow.css'

// https://lesterlambac.com/blogs/setup-prismjs-with-nuxt3

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      Prism
    }
  }
})
