import type {ReferenceFilterSearchOptions} from 'sanity'
import type {WorkoutDocumentValue} from '../types/workout'

/**
 * Limits the exercise picker to exercises that match the workout's chosen
 * target muscles and equipment. With neither chosen, every exercise is shown.
 * @param workout - The workout document being edited
 */
export const createExerciseFilter = (
  workout: WorkoutDocumentValue = {},
): ReferenceFilterSearchOptions => {
  const targets = (workout.target ?? []).map(({_ref}) => _ref)
  const equipment = (workout.equipment ?? []).map(({_ref}) => _ref)

  const clauses = [
    targets.length > 0 && 'target._ref in $targets',
    equipment.length > 0 && 'equipment._ref in $equipment',
  ].filter(Boolean)

  if (clauses.length === 0) return {}

  return {
    filter: clauses.join(' && '),
    params: {targets, equipment},
  }
}
