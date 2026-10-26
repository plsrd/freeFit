/**
 * Adds a "Dumbbell Workout" starter template next to the default document templates.
 * @param {import('sanity').Template[]} prev - The Studio's default templates
 * @returns {import('sanity').Template[]}
 */
export const initialValueTemplates = (prev) => [
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
