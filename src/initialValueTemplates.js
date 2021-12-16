import T from '@sanity/base/initial-value-template-builder'

export default [
  ...T.defaults(),
  T.template({
    id: 'dumbbell-workout',
    title: 'Dumbell Workout',
    schemaType: 'workout',
    value: {
      equipment: [
        {
          _type: 'reference',
          _ref: '640184ac-8ae4-49a1-bd1a-907a2ec82b8e'
        }
      ]
    }
  })
]