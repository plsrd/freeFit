import React from "react"
import Tile from "../../static/Tile"

export default {
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'target',
      title: 'Main Target Muscle',
      description: 'Select the muscle this exercise targets',
      type: 'reference',
      to: {type: 'target'}
    },
    {
      name: 'equipment',
      title: 'Main Equipment',
      description: 'Select the main piece of equipment needed for this exercise',
      type: 'reference',
      to: [
        { type: 'equipment' }
      ]
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'target.name',
      equipment: 'equipment.name'
    },
    prepare({title, subtitle, equipment}){
      return {
        title,
        subtitle,
        media: <Tile equipment={equipment} />
      }
    }
  },
  orderings: [
    {
      title: 'Equipment',
      name: 'equipmentAsc',
      by: [
        {field: 'equipment', direction: 'asc'}
      ]
    },
    {
      title: 'Target Muscle',
      name: 'targetAsc',
      by: [
        {field: 'target.name', direction: 'asc'}
      ]
    }
  ]
}