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
      name: 'demo',
      title: 'Demo',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'href',
          type: 'link',
        },
        { type: 'file'},
        { type: 'image' }
      ]
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