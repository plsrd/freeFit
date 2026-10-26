import {defineArrayMember, defineField, defineType} from 'sanity'

import WorkoutTimeCalculator from '../../src/inputs/WorkoutTimeCalculator'
import Tile from '../../src/components/Tile'
import {createReferenceFilter} from '../../src/utils/createReferenceFilter'
import {formatWorkoutSubtitle} from '../../src/utils/formatWorkoutSubtitle'

export default defineType({
  name: 'workout',
  title: 'Workout',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Focus',
      description: 'Select the type of muscle building this workout focuses on',
      name: 'focus',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Hypertrophy', value: 'hypertrophy'},
          {title: 'Strength', value: 'strength'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'target',
      title: 'Target Muscle Group(s)',
      description: 'Select the muscle groups this workout targets.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'target'}],
          options: {
            filter: ({parent}) => createReferenceFilter(parent),
          },
        }),
      ],
    }),
    defineField({
      name: 'equipment',
      title: 'Equipment',
      type: 'requiredEquipment',
    }),
    defineField({
      name: 'exercises',
      title: 'Exercises',
      type: 'array',
      of: [defineArrayMember({type: 'exerciseComponent'})],
    }),
    defineField({
      name: 'workoutLength',
      title: 'Workout Length',
      type: 'number',
      components: {
        input: WorkoutTimeCalculator,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      target0: 'target.0.name',
      target1: 'target.1.name',
      target2: 'target.2.name',
      workoutLength: 'workoutLength',
    },
    prepare({title, target0, target1, target2, workoutLength}) {
      return {
        title: title ?? '',
        subtitle: formatWorkoutSubtitle({
          targets: [target0, target1],
          hasMoreTargets: Boolean(target2),
          workoutLength,
        }),
        media: <Tile equipment="workout" />,
      }
    },
  },
})
