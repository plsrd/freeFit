import {useEffect} from 'react'
import {set, unset, useFormValue} from 'sanity'
import {Card, Text} from '@sanity/ui'

import {calculateWorkoutLength} from '../utils/calculateWorkoutLength'

/**
 * Read-only input that keeps `workoutLength` in sync with the workout's exercises,
 * so the length can be queried and shown in previews without recalculating it.
 * @param {import('sanity').NumberInputProps} props
 */
export default function WorkoutTimeCalculator({value, onChange}) {
  const exercises = useFormValue(['exercises'])
  const length = calculateWorkoutLength(exercises)

  useEffect(() => {
    const hasChanged = (value ?? 0) !== length
    if (!hasChanged) return
    onChange(length ? set(length) : unset())
  }, [length, value, onChange])

  return (
    <Card padding={[3, 3, 4]} radius={2} shadow={1}>
      <Text align="center" size={[2, 2, 3]}>
        Workout Length: {length} min{length === 1 ? '' : 's'}
      </Text>
    </Card>
  )
}
