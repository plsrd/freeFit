// Recommended ranges per workout focus. Hypertrophy sets were 2-4 in the original rules,
// even though the field description says 2-3, so the validation is kept as it was.
const RANGES = {
  sets: {
    strength: {min: 1, max: 6},
    hypertrophy: {min: 2, max: 4},
  },
  reps: {
    strength: {min: 2, max: 6},
    hypertrophy: {min: 8, max: 15},
  },
}

const MIN_REST_SECONDS = 30

/**
 * Checks sets or reps against the recommended range for the workout's focus.
 * @param {'sets' | 'reps'} field
 * @param {number | undefined} amount
 * @param {string | undefined} focus - The workout's focus ('strength' or 'hypertrophy')
 * @returns {true | string} true when valid, otherwise the message to show
 */
export const validateForFocus = (field, amount, focus) => {
  const range = RANGES[field][focus]
  if (!range) return `Please select a focus for this workout before adding ${field}`

  const {min, max} = range
  const isInRange = amount >= min && amount <= max
  return isInRange ? true : `${field[0].toUpperCase()}${field.slice(1)} should be between ${min}-${max} for ${focus} focused workouts`
}

/**
 * @param {number | undefined} restTime - Rest in seconds
 * @returns {true | string}
 */
export const validateRestTime = (restTime) =>
  restTime >= MIN_REST_SECONDS
    ? true
    : `Each exercise should have a rest of at least ${MIN_REST_SECONDS} seconds`
