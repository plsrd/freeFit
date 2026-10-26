import {defineField, defineType} from 'sanity'
import Tile from '../../src/components/Tile'

export default defineType({
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'target',
      title: 'Main Target Muscle',
      description: 'Select the muscle this exercise targets',
      type: 'reference',
      to: [{type: 'target'}],
    }),
    defineField({
      name: 'equipment',
      title: 'Main Equipment',
      description: 'Select the main piece of equipment needed for this exercise',
      type: 'reference',
      to: [{type: 'equipment'}],
    }),
    defineField({
      name: 'demo',
      title: 'Demo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'target.name',
      equipment: 'equipment.name',
    },
    prepare({title, subtitle, equipment}) {
      return {
        title,
        subtitle,
        media: <Tile equipment={equipment} />,
      }
    },
  },
  orderings: [
    {
      title: 'Equipment',
      name: 'equipmentAsc',
      by: [{field: 'equipment.name', direction: 'asc'}],
    },
    {
      title: 'Target Muscle',
      name: 'targetAsc',
      by: [{field: 'target.name', direction: 'asc'}],
    },
  ],
})
