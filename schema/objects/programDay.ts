import { defineField, defineType } from 'sanity';

export const programDay = defineType({
  name: 'programDay',
  title: 'Program Day',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'week',
      title: 'Week',
      type: 'number',
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'number',
    }),
    defineField({
      name: 'workout',
      title: 'Workout',
      type: 'reference',
      to: [{ type: 'workout' }],
      options: {
        filter: ({ document }) => {
          const { focus, equipment } = document;
          return {
            filter: 'focus == $focus && equipment match $equipment',
            params: { focus, equipment },
          };
        },
      },
    }),
  ],
});
