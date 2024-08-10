import Prism from 'prismjs'
import 'prismjs/components/prism-python.min.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-xml-doc.js'
import 'prismjs/themes/prism-tomorrow.css'

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      Prism
    }
  }
})
