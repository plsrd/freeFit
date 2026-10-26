import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './schema';
import { structure } from './src/structure';
import { initialValueTemplates } from './src/initialValueTemplates';

export default [
  defineConfig({
    name: 'prefilled',
    title: 'Free Fit v1',
    basePath: '/v1',
    projectId: 'krm54zrd',
    dataset: 'development',
    plugins: [structureTool({ structure })],
    schema: {
      types: schemaTypes,
      templates: initialValueTemplates,
    },
  }),
  defineConfig({
    name: 'v2',
    title: 'Free Fit v2',
    basePath: '/v2',
    projectId: 'krm54zrd',
    dataset: 'free-fit-dev',
    plugins: [structureTool({ structure })],
    schema: {
      types: schemaTypes,
      templates: initialValueTemplates,
    },
  }),
];
