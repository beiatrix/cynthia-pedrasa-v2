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
    {
      name: 'content',
      description: 'Project content – appears in the project page',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        },
        {
          type: 'object',
          name: 'table',
          title: 'Table',
          fields: [
            {
              name: 'rows',
              title: 'Rows',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'cells',
                      title: 'Cells (Columns)',
                      type: 'array',
                      of: [{ type: 'string' }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'object',
          name: 'code',
          title: 'Code Block',
          fields: [
            {
              name: 'language',
              title: 'Language',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: '' },
                  { title: 'JavaScript', value: 'javascript' },
                  { title: 'Python', value: 'python' },
                  { title: 'SQL', value: 'sql' },
                  { title: 'XML', value: 'xml' }
                ]
              },
              initialValue: 'python'
            },
            {
              name: 'code',
              title: 'Code',
              type: 'text',
              options: {
                rows: 10
              }
            }
          ]
        }
      ]
    },
    defineField({
      name: 'category',
      description: 'Category of the project',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      description: 'Hide this project from the home page – useful for viewing in-progress pages at /projects/[slug]'
    })
  ]
})
