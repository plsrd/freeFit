import type {TemplateResolver} from 'sanity'

/**
 * Adds a "Dumbbell Workout" starter template next to the default document templates.
 */
export const initialValueTemplates: TemplateResolver = (prev) => [
  ...prev,
  {
    id: 'dumbbell-workout',
    title: 'Dumbbell Workout',
    schemaType: 'workout',
    value: {
      equipment: [
        {
          _type: 'reference',
          _key: 'dumbbell',
          _ref: '640184ac-8ae4-49a1-bd1a-907a2ec82b8e',
        },
      ],
    },
  },
]
