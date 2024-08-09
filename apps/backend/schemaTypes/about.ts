import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description:
        'Upload your picture, then use the crop tool for best results!',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      description: 'What are your titles or certifications?',
      type: 'string'
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      description:
        'A short bio, for the site header (max 200 characters)',
      type: 'text',
      validation: (Rule) => {
        return Rule.max(200)
          .warning('Content should not exceed 200 characters.')
      }
    }),
    defineField({
      name: 'longBio',
      title: 'Long Bio',
      description: 'A longer bio, for the "About" section',
      type: 'text'
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      description: 'Upload your resume here (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf'
      }
    })
  ]
})
