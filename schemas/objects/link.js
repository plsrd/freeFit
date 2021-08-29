export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }
  ]
}