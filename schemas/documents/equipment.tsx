import {defineField, defineType} from 'sanity'
import Tile from '../../src/components/Tile'

export default defineType({
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({name}) {
      return {
        title: name,
        media: <Tile equipment={name} />,
      }
    },
  },
})
