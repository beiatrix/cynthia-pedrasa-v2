import { defineField, defineType } from 'sanity'

/**
 * @todo: create singleton page
 * https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
 */

export default defineType({
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'string'
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text'
    }),
    defineField({
      name: 'longBio',
      title: 'Long Bio',
      type: 'text'
    })
  ]
})
