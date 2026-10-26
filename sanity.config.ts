import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'
import {structure} from './src/structure'
import {initialValueTemplates} from './src/initialValueTemplates'

export default defineConfig({
  name: 'default',
  title: 'Free Fit',
  projectId: 'krm54zrd',
  dataset: 'development',
  // Vision was only enabled in development in the v2 Studio, so keep it that way
  plugins: [structureTool({structure}), ...(isDev ? [visionTool()] : [])],
  schema: {
    types: schemaTypes,
    templates: initialValueTemplates,
  },
})
