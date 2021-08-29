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
      description: 'Select the muscle groups this workout targets',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {title: 'Legs', value: 'legs'},
          {title: 'Back', value: 'back'},
          {title: 'Arms', value: 'arms'},
          {title: 'Abs', value: 'abs'},
          {title: 'Chest', value: 'chest'},
          {title: 'Shoulders', value: 'shoulders'},
          {title: 'Full Body', value: 'full'},
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'releaseDate',
      target: 'target'
    },
    prepare: ({ title, target }) => {
      return {
        title,
        subtitle: target ? target.map(target => `${target[0].toUpperCase()}${target.slice(1)}`).join(' | ') : ''
      }
    }
  }
}