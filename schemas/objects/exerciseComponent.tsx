import {defineField, defineType} from 'sanity'

import Tile from '../../src/components/Tile'
import {createExerciseFilter} from '../../src/utils/createExerciseFilter'
import {validateForFocus, validateRestTime} from '../../src/utils/validateWorkoutInfo'
import type {WorkoutDocumentValue} from '../../src/types/workout'

export default defineType({
  name: 'exerciseComponent',
  title: 'Exercise Component',
  type: 'object',
  fields: [
    defineField({
      name: 'exercise',
      title: 'Exercise',
      description: `Not seeing the exercises you'd like? Try adjusting your target muscle groups and equipment.`,
      type: 'reference',
      to: [{type: 'exercise'}],
      validation: (rule) => rule.required().error('You must select an exercise'),
      options: {
        // This object only lives inside workout documents
        filter: ({document}) => createExerciseFilter(document as WorkoutDocumentValue),
      },
    }),
    defineField({
      name: 'info',
      title: 'Sets/Reps',
      description:
        'Sets should be between 1-6 for strength focused workouts and 2-3 for hypertrophy focused workouts.',
      type: 'object',
      options: {
        columns: 3,
      },
      fields: [
        defineField({
          name: 'sets',
          title: 'Sets',
          type: 'number',
          validation: (rule) =>
            rule.custom((sets, context) => validateForFocus('sets', sets, context.document?.focus)),
        }),
        defineField({
          name: 'reps',
          title: 'Reps',
          type: 'number',
          validation: (rule) =>
            rule.custom((reps, context) => validateForFocus('reps', reps, context.document?.focus)),
        }),
        defineField({
          name: 'restTime',
          title: 'Rest Time in Seconds',
          type: 'number',
          validation: (rule) => rule.custom(validateRestTime),
        }),
      ],
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      description: '(Optional)',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'exercise.name',
      equipment: 'exercise.equipment.name',
      sets: 'info.sets',
      reps: 'info.reps',
      restTime: 'info.restTime',
    },
    prepare({title, equipment, sets, reps, restTime}) {
      const hasInfo = sets && reps && restTime
      return {
        title: title ?? '',
        subtitle: hasInfo ? `Sets: ${sets} | Reps: ${reps} | Rest: ${restTime} seconds` : '',
        media: <Tile equipment={equipment} />,
      }
    },
  },
})
