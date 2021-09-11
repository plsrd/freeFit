import S from '@sanity/desk-tool/structure-builder'
import equipment from './schemas/inputs/equipment'

const createEquipmentLists = () => {
  return equipment.map(item => 
    S.listItem()
      .title(item.title)
      .child(
        S.documentList()
          .title(item.title)
          .filter('_type == "exercise" && equipment == $equipment')
          .params({ equipment: item.value })
          .menuItems(S.documentTypeList('exercise').getMenuItems())
      ),
  )
}

const equipmentLists = createEquipmentLists()

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
      .title('Workout Builder')
      .child(
        S.documentList()
          .title('Workouts')
          .filter('_type == "workout"')
          .menuItems(S.documentTypeList('workout').getMenuItems())
      ),
      S.divider(),
      S.listItem()
      .title('All Exercises')
      .child(
        S.documentList()
          .title('All Exercises')
          .filter('_type == "exercise"')
          .menuItems(S.documentTypeList('exercise').getMenuItems())
      ),
      S.listItem()
        .title('Exercises By Target')
        .child(
          S.documentTypeList('target')
            .title('Exercises By Target')
            .child(targetId =>
              S.documentList()
                .title('Posts')
                .filter('_type == "exercise" && $targetId == target._ref')
                .params({ targetId })
                .menuItems(S.documentTypeList('exercise').getMenuItems())
            )
        ),
        S.listItem()
          .title('Exercises by Equipment')
          .child(
            S.list()
            .title('Exercises by Equipment')
            .items([
              ...equipmentLists
            ])
          ),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => !['target', 'workout', 'exercise'].includes(listItem.getId()))
    ])