import equipment from "../inputs/equipment"

export default {
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'target',
      title: 'Main Target Muscle',
      description: 'Select the muscle this exercise targets',
      type: 'reference',
      to: {type: 'target'}
    },
    {
      name: 'equipment',
      title: 'Main Equipment',
      description: 'Select the main piece of equipment needed for this exercise',
      type: 'string',
      options: {
        list: equipment,
      }
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'target.name',
      media: 'demo'
    },
  },
  orderings: [
    {
      title: 'Equipment',
      name: 'equipment',
      by: [
        {field: 'equipment', direction: 'asc'}
      ]
    },
    {
      title: 'Target Muscle',
      name: 'target',
      by: [
        {field: 'target.name', direction: 'asc'}
      ]
    }
  ]
}