export default {
  name: 'programDay',
  title: 'Program Day',
  type: 'object',
  options: {
    columns: 2
  },
  fields: [
    {
      name: 'week',
      title: 'Week',
      type: 'number',
    },
    {
      name: 'day',
      title: 'Day',
      type: 'number',
    },
    {
      name: 'workout',
      title: 'Workout',
      type: 'reference',
      to: [{ type: 'workout' }],
      options: {
        filter: ({ document }) => {
          const { focus, equipment } = document
          return {
            filter: 'focus == $focus && equipment match $equipment',
            params: { focus, equipment }
          }
        }
      }
    },
  ]
}