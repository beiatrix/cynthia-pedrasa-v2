import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'yrzi4rax',
  dataset: 'production',
  title: 'Cynthia Pedrasa',
  apiVersion: '2023-06-24',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemas
  }
})

export default config