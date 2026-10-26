import { defineField, defineType } from 'sanity';

export const muscle = defineType({
  name: 'muscle',
  title: 'Muscle',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{ type: 'muscle' }],
    }),
  ],
});
