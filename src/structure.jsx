import Tile from './components/Tile'

const CUSTOM_LIST_TYPES = ['target', 'workout', 'exercise', 'equipment']

/**
 * Groups exercises by target muscle and equipment, and puts the workout builder first.
 * @type {import('sanity/structure').StructureResolver}
 */
export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Workout Builder')
        .icon(() => <Tile equipment="builder" />)
        .child(S.documentTypeList('workout').title('Workout Builder')),
      S.divider(),
      S.listItem()
        .title('All Exercises')
        .icon(() => <Tile equipment="all" />)
        .child(S.documentTypeList('exercise').title('All Exercises')),
      S.listItem()
        .title('Exercises By Target')
        .icon(() => <Tile equipment="target" />)
        .child(
          S.documentTypeList('target')
            .title('Exercises By Target')
            .child((targetId) =>
              S.documentTypeList('exercise')
                .title('Exercises')
                .filter('_type == "exercise" && $targetId == target._ref')
                .params({targetId}),
            ),
        ),
      S.listItem()
        .title('Exercises By Equipment')
        .icon(() => <Tile equipment="equipment" />)
        .child(
          S.documentTypeList('equipment')
            .title('Exercises By Equipment')
            .child((equipmentId) =>
              S.documentTypeList('exercise')
                .title('Exercises')
                .filter('_type == "exercise" && $equipmentId == equipment._ref')
                .params({equipmentId}),
            ),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !CUSTOM_LIST_TYPES.includes(listItem.getId()),
      ),
    ])
