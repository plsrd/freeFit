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
      name: 'exercises',
      title: 'Exercises',
      type: 'array',
      of: [{ type: 'exercise'}]
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