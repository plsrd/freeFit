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
      name: 'details',
      title: 'Details',
      type: 'details'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'target'
    },
  }
}