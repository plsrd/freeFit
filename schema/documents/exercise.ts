import { defineField, defineType } from 'sanity';

export const exercise = defineType({
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
      name: 'targets',
      title: 'Main Target Muscles',
      description: 'Select the muscle this exercise targets',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'muscle' }] }],
    }),
    defineField({
      name: 'equipment',
      title: 'Main Equipment',
      description:
        'Select the main piece of equipment needed for this exercise',
      type: 'reference',
      to: [{ type: 'equipment' }],
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
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Equipment',
      name: 'equipmentAsc',
      by: [{ field: 'equipment.name', direction: 'asc' }],
    },
    {
      title: 'Target Muscle',
      name: 'targetAsc',
      by: [{ field: 'target.name', direction: 'asc' }],
    },
  ],
});
