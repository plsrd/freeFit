import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = S =>
  S.list()
    .title('Tools')
    .items([
      S.listItem()
        .title('Workout Builder')
        .child(S.documentTypeList('workout').title('Workout Builder')),
      S.divider().title('Exercises'),
      S.listItem()
        .title('All Exercises')
        .child(S.documentTypeList('exercise').title('All Exercises')),
      S.listItem()
        .title('Exercises By Target')
        .child(
          S.documentTypeList('muscle')
            .title('Exercises By Target')
            .child(muscleId =>
              S.documentTypeList('exercise')
                .title('Exercises')
                .filter('_type == "exercise" && $muscleId == muscle._ref')
                .params({ muscleId }),
            ),
        ),
      S.listItem()
        .title('Exercises By Equipment')
        .child(
          S.documentTypeList('equipment')
            .title('Exercises By Equipment')
            .child(equipmentId =>
              S.documentTypeList('exercise')
                .title('Exercises')
                .filter('_type == "exercise" && $equipmentId == equipment._ref')
                .params({ equipmentId }),
            ),
        ),
      S.divider().title('Taxonomy'),
      S.documentTypeListItem('equipment'),
      S.documentTypeListItem('muscle'),
      S.documentTypeListItem('category'),
    ]);
