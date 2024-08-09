import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'Name of project',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      description: 'This defines the project page URL – click "Generate" to automatically create one',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'description',
      description: 'Short description of project – appears on the home page',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    {
      name: 'content',
      description: 'Project content written in Markdown – appears in the project page',
      title: 'Content',
      type: 'markdown'
    },
    defineField({
      name: 'category',
      description: 'Category of the project',
      title: 'Category',
      type: 'string'
    })
  ]
})
