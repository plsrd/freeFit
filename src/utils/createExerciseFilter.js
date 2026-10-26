/**
 * Limits the exercise picker to exercises that match the workout's chosen
 * target muscles and equipment. With neither chosen, every exercise is shown.
 * @param {{target?: Array<{_ref: string}>, equipment?: Array<{_ref: string}>}} [workout]
 * @returns {{filter?: string, params?: {targets: string[], equipment: string[]}}}
 */
export const createExerciseFilter = (workout = {}) => {
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
