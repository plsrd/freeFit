import React from "react";
import Tile from "../../static/Tile";

export default {
  name: 'exerciseComponent',
  title: 'Exercise Component',
  type: 'object',
  fields: [
    {
      name: 'exercise',
      title: 'Exercise',
      description: `Not seeing the exercises you'd like? Try adjusting your target muscle groups and equipment.`,
      type: 'reference',
      to: { type: 'exercise'},
      validation: Rule => Rule.required().error('You must select an exercise'),
      options: {
        filter: ({ document }) => {
          const targets = document.target ? document.target.map(target => target._ref) : []
          const equipment = document.equipment ? document.equipment.map(equipment => equipment._ref) : []
          
          const filter = `${targets.length > 0 ? 'target._ref in $targets' : ''}${targets.length > 0 && equipment.length ? ' && ' : ''}${equipment.length > 0 ? 'equipment._ref in $equipment': ''}`

          return {
            filter: filter,
            params: { targets, equipment}
          }
        }
      }
    },
    {
      name: 'info',
      title: 'Sets/Reps',
      description: 'Sets should be between 1-6 for strength focused workouts and 2-3 for hypertrophy focused workouts.',
      type: 'object',
      options: {
        columns: 3
      },
      fields: [
        {
          name: 'sets',
          title: 'Sets',
          type: 'number',
          validation: Rule => Rule.custom((sets, context) => {
            switch (context.document.focus) {
              case 'strength':
                return sets > 0 && sets <= 6 ? true: 'Sets should be between 1-6 for strength focused workouts'
              case 'hypertrophy':
                return sets >= 2 && sets <= 4 ? true: 'Sets should be between 2-4 for hypertrophy focused workouts'
              default:
                return 'Please select a focus for this workout before adding sets'
            }
          })
        },
        { 
          name: 'reps',
          title: 'Reps',
          type: 'number',
          validation: Rule => Rule.custom((reps, context) => {
            switch (context.document.focus) {
              case 'strength':
                return reps >= 2 && reps <= 6 ? true: 'Reps should be between 2-6 for strength focused workouts'
              case 'hypertrophy':
                return reps >= 8 && reps <= 15 ? true: 'Reps should be between 8-15 for hypertrophy focused workouts'
              default:
                return 'Please select a focus for this workout before adding reps'
            }
          })
        },
        {
          name: 'restTime',
          title: 'Rest Time in Seconds',
          type: 'number',
          validation: Rule => Rule.custom((rest) => {
            return rest >= 30 ? true: 'Each exercise should have a rest of at least 30 seconds'
          })
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'exercise.name',
      equipment: 'exercise.equipment.name',
      sets: 'info.sets',
      reps: 'info.reps',
      restTime: 'info.restTime'
    },
    prepare({ title, equipment, sets, reps, restTime }){
      return {
        title: title ? title : '', 
        subtitle: sets && reps && restTime ? `Sets: ${sets} | Reps: ${reps} | Rest: ${restTime} seconds` : '' ,
        media: <Tile equipment={equipment} /> 
      }
    }
  }
}