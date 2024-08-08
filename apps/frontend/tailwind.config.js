/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        light: '#edf2f4',
        'navy-blue': '#03045E',
        'true-blue': '#0077B6',
        'aqua-blue': '#00B4D8',
        'sky-blue': '#90E0EF',
        'powder-blue': '#CAF0F8'
      }
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif']
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      const colors = theme('colors')
      const newColors = Object.keys(colors).reduce((acc, key) => {
        const value = colors[key]
        if (typeof value === 'string') {
          acc[`--color-${key}`] = value
        }
        return acc
      }, {})

      addBase({
        ':root': newColors
      })
    })
  ]
}
