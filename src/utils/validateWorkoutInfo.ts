import type {WorkoutFocus} from '../types/workout'

type InfoField = 'sets' | 'reps'

interface Range {
  min: number
  max: number
}

// Recommended ranges per workout focus. Hypertrophy sets were 2-4 in the original rules,
// even though the field description says 2-3, so the validation is kept as it was.
const RANGES: Record<InfoField, Record<WorkoutFocus, Range>> = {
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

const isWorkoutFocus = (focus: unknown): focus is WorkoutFocus =>
  focus === 'strength' || focus === 'hypertrophy'

/**
 * Checks sets or reps against the recommended range for the workout's focus.
 * @param field - Which part of the info block is being validated
 * @param amount - The entered value
 * @param focus - The workout's focus, straight from the untyped document
 * @returns true when valid, otherwise the message to show
 */
export const validateForFocus = (
  field: InfoField,
  amount: number | undefined,
  focus: unknown,
): true | string => {
  if (!isWorkoutFocus(focus)) {
    return `Please select a focus for this workout before adding ${field}`
  }

  const {min, max} = RANGES[field][focus]
  const isInRange = amount !== undefined && amount >= min && amount <= max
  if (isInRange) return true

  const label = `${field[0]?.toUpperCase() ?? ''}${field.slice(1)}`
  return `${label} should be between ${min}-${max} for ${focus} focused workouts`
}

/**
 * @param restTime - Rest in seconds
 */
export const validateRestTime = (restTime: number | undefined): true | string =>
  restTime !== undefined && restTime >= MIN_REST_SECONDS
    ? true
    : `Each exercise should have a rest of at least ${MIN_REST_SECONDS} seconds`
