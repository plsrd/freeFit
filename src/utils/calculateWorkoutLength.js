// Rough time each rep takes, in seconds
const SECONDS_PER_REP = 4

/**
 * Estimates how long a workout takes from each exercise's sets, reps and rest time.
 * @param {Array<{info?: {sets?: number, reps?: number, restTime?: number}}>} [exercises]
 * @returns {number} Length in whole minutes, or 0 when there's nothing to count
 */
export const calculateWorkoutLength = (exercises = []) => {
  const totalSeconds = exercises
    .map(({info}) => {
      if (!info) return 0
      const {sets = 0, reps = 0, restTime = 0} = info
      const restSeconds = sets * restTime
      const workSeconds = sets * reps * SECONDS_PER_REP
      return restSeconds + workSeconds
    })
    .reduce((total, seconds) => total + seconds, 0)

  return Math.round(totalSeconds / 60)
}
