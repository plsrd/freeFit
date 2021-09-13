import S from '@sanity/desk-tool/structure-builder'
import React from 'react'

import Tile from './static/Tile'

// const createEquipmentLists = () => {
//   return equipment.map(item => 
//     S.listItem()
//       .title(item.title)
//       .icon(() => <Tile equipment={item.value.toLowerCase()} />)
//       .child(
//         S.documentList()
//           .title(item.title)
//           .filter('_type == "exercise" && equipment == $equipment')
//           .params({ equipment: item.value })
//           .menuItems(S.documentTypeList('exercise').getMenuItems())
//       ),
//   )
// }

// const equipmentLists = createEquipmentLists()

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
      .title('Workout Builder')
      .icon(() => <Tile equipment='builder' />)
      .child(
        S.documentList()
          .title('Workouts')
          .filter('_type == "workout"')
          .menuItems(S.documentTypeList('workout').getMenuItems())
      ),
      S.divider(),
      S.listItem()
        .title('All Exercises')
        .icon(() => <Tile equipment='all' />)
        .child(
          S.documentList()
            .title('All Exercises')
            .filter('_type == "exercise"')
            .menuItems(S.documentTypeList('exercise').getMenuItems())
      ),
      S.listItem()
        .title('Exercises By Target')
        .icon(() => <Tile equipment='target' />)
        .child(
          S.documentTypeList('target')
            .title('Exercises By Target')
            .child(targetId =>
              S.documentList()
                .title('Exercises')
                .filter('_type == "exercise" && $targetId == target._ref')
                .params({ targetId })
                .menuItems(S.documentTypeList('exercise').getMenuItems())
            )
        ),
        S.listItem()
        .title('Exercises By Equipment')
        .icon(() => <Tile equipment='equipment' />)
        .child(
          S.documentTypeList('equipment')
            .title('Exercises By Equipment')
            .child(equipmentId =>
              S.documentList()
                .title('Exercises')
                .filter('_type == "exercise" && $equipmentId == equipment._ref')
                .params({ equipmentId })
                .menuItems(S.documentTypeList('exercise').getMenuItems())
            )
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => !['target', 'workout', 'exercise', 'equipment'].includes(listItem.getId()))
    ])