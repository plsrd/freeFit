export default {
  name: 'details',
  title: 'Details',
  type: 'object',
  fieldsets: [{ name: 'info', title: 'Info' }],
  options: {
    columns: 2
  },
  fields: [
    {
      name: 'target',
      title: 'Main Target Muscle',
      description: 'Select the muscle this exercise targets',
      type: 'string',
      options: {
        list: [
          {title: 'Calves', value: 'calves'},
          {title: 'Quads', value: 'quads'},
          {title: 'Hamstrings', value: 'hamstrings'},
          {title: 'Glutes', value: 'glutes'},
          {title: 'Abs', value: 'abs'},
          {title: 'Back', value: 'back'},
          {title: 'Biceps', value: 'biceps'},
          {title: 'Triceps', value: 'triceps'},
          {title: 'Shoulders', value: 'shoulders'},
          {title: 'Traps', value: 'traps'},
          {title: 'Full Body', value: 'full'},
        ],
        layout: 'radio'
      }
    },
    {
      name: 'equipment',
      title: 'Required Equipment',
      description: 'Select all that apply',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {title: 'Dumbbells', value: 'dumbbells'},
          {title: 'Machine', value: 'machine'},
          {title: 'Bench', value: 'bench'},
          {title: 'Barbell', value: 'barbell'},
          {title: 'Rack', value: 'rack'},
          {title: 'Kettlebell', value: 'Kettlebell'},
          {title: 'Bands', value: 'Bands'},
          {title: 'None', value: 'none'},
        ],
      }
    },
  ]
}