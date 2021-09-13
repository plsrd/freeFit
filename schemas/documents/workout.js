import React from 'react'
import Tile from '../../static/Tile'

export default {
  name: 'workout',
  titlte: 'Workout',
  type: 'document',
  fields: [
    {
      name: 'releaseDate',
      description: 'Date the workout will be released',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YY'
      }
    },
    {
      name: 'target',
      title: 'Target Muscle Group(s)',
      type: 'array',
      of: [ 
        { type: 'reference',
          to: [
            { type: 'target' }
          ]
        }
      ],
    },
    {
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [ 
        { type: 'reference',
          to: [
            { type: 'equipment' }
          ]
        }
      ],
    },
    {
      name: 'exercises',
      title: 'Exercises',
      type: 'array',
      of: [
          { type: 'workoutComponent'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'releaseDate',
      target0: 'target.0.name',
      target1: 'target.1.name',
      target2: 'target.2.name',
    },

    prepare({ title, target0, target1, target2 }){
      const targets = [target0, target1, target2].filter(Boolean)
      const subtitle = `${targets.join(', ')}`

      return {
        title: title ? title : '',  
        subtitle: subtitle ? subtitle : ''
      }
    }
  },
  orderings: [
    {
      title: 'Release Date',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    },
  ]
}