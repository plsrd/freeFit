/**
 * Builds the workout preview subtitle, e.g. "Chest, Triceps... | 45 mins".
 * @param {object} options
 * @param {Array<string | undefined>} options.targets - The first few target names
 * @param {boolean} options.hasMoreTargets - Whether there are targets beyond those shown
 * @param {number} [options.workoutLength] - Length in minutes
 * @returns {string}
 */
export const formatWorkoutSubtitle = ({targets, hasMoreTargets, workoutLength}) => {
  const shownTargets = targets.filter(Boolean)
  const targetText =
    shownTargets.length > 0 ? `${shownTargets.join(', ')}${hasMoreTargets ? '...' : ''}` : ''
  const lengthText = workoutLength ? `${workoutLength} min${workoutLength === 1 ? '' : 's'}` : ''

  return [targetText, lengthText].filter(Boolean).join(' | ')
}
