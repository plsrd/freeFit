import React from "react";
import Tile from "../../static/Tile";

export default {
  name: 'workoutComponent',
  title: 'Workout Component',
  type: 'object',
  fields: [
    {
      name: 'exercise',
      title: 'Exercise',
      type: 'reference',
      to: { type: 'exercise'},
      options: {
        filter: ({ document }) => {
          const targets = document.target.map(target => target._ref)
          const equipment = document.equipment.map(equipment => equipment._ref)
          return {
            filter: 'target._ref in $targets && equipment._ref in $equipment',
            params: { targets, equipment}
          }
        }
      }
    },
    {
      name: 'info',
      title: 'Sets/Reps',
      type: 'object',
      options: {
        columns: 2
      },
      fields: [
        {
          name: 'sets',
          title: 'Sets',
          type: 'number',
        },
        {
          name: 'reps',
          title: 'Reps',
          type: 'number',
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'exercise.name',
      subtitle: 'info',
      equipment: 'exercise.equipment.name'
    },
    prepare({ title, subtitle, equipment }){
      return {
        title: title ? title : '', 
        subtitle: subtitle ? `Sets: ${subtitle.sets} | Reps: ${subtitle.reps}` : '',
        media: <Tile equipment={equipment} /> 
      }
    }
  }
}