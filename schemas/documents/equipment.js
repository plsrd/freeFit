import React from "react"
import Tile from "../../static/Tile"

export default {
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    }
  ],
  preview: {
    select: {
      'name': 'name',
    },
    prepare({ name }){
      return {
        title: name,
        media: <Tile equipment={name} />
      }
    }
  }
}