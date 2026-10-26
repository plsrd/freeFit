interface FormatWorkoutSubtitleOptions {
  /** The first few target names */
  targets: Array<string | undefined>
  /** Whether there are targets beyond those shown */
  hasMoreTargets: boolean
  /** Length in minutes */
  workoutLength?: number
}

/**
 * Builds the workout preview subtitle, e.g. "Chest, Triceps... | 45 mins".
 */
export const formatWorkoutSubtitle = ({
  targets,
  hasMoreTargets,
  workoutLength,
}: FormatWorkoutSubtitleOptions): string => {
  const shownTargets = targets.filter((target): target is string => Boolean(target))
  const targetText =
    shownTargets.length > 0 ? `${shownTargets.join(', ')}${hasMoreTargets ? '...' : ''}` : ''
  const lengthText = workoutLength ? `${workoutLength} min${workoutLength === 1 ? '' : 's'}` : ''

  return [targetText, lengthText].filter(Boolean).join(' | ')
}
