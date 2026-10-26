import type {Reference} from 'sanity'

/** The two training goals a workout can be built around. Drives sets/reps validation. */
export type WorkoutFocus = 'strength' | 'hypertrophy'

/** The sets/reps/rest block on an exercise component. All fields are optional while editing. */
export interface ExerciseInfo {
  sets?: number
  reps?: number
  restTime?: number
}

/** One entry in a workout's `exercises` array. */
export interface ExerciseComponentValue {
  _key: string
  exercise?: Reference
  info?: ExerciseInfo
  notes?: string
}

/**
 * The subset of the `workout` document that filters and validators read.
 * Values are partial because the document is still being edited when they run.
 */
export interface WorkoutDocumentValue {
  focus?: WorkoutFocus
  target?: Reference[]
  equipment?: Reference[]
  exercises?: ExerciseComponentValue[]
}
