export default {
  name: 'workout',
  titlte: 'Workout',
  type: 'document',
  fields: [
    {
      name: 'releaseDate',
      description: 'Date the workout will be released',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YY'
      }
    },
    {
      name: 'target',
      title: 'Target Muscle Group(s)',
      type: 'array',
      of: [ 
        { type: 'reference',
          to: [
            { type: 'target' }
          ]
        }
      ],
    },
    {
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [ 
        { type: 'reference',
          to: [
            { type: 'equipment' }
          ]
        }
      ],
    },
    {
      name: 'exercises',
      title: 'Exercises',
      type: 'array',
      of: [
          { type: 'workoutComponent'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'releaseDate',
    }
  },
  orderings: [
    {
      title: 'Release Date',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    },
  ]
}