import React, { useEffect } from 'react'
import { FormField } from '@sanity/base/components'
import {withDocument} from 'part:@sanity/form-builder'
import { Card, Text } from '@sanity/ui'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import { useId } from "@reach/auto-id"

const workoutTimeCalculator = React.forwardRef((props, ref) => {

  const { 
    document,
    onChange 
  } = props

  const calculateLength = () => {
   return Math.round(document.exercises.map(exercise => {
      return (exercise.info.sets * exercise.info.restTime) + (exercise.info.sets * (exercise.info.reps * 4))
    }).reduce((a, b) => a + b) / 60)

  }

  const length = calculateLength()
  const inputId = useId()


  useEffect(() => {
    onChange(PatchEvent.from(length ? set(length) : unset()))
  }, [length])

  return (
    <FormField inputId={inputId}>
      <Card 
      padding={[3, 3, 4]} 
      radius={2} 
      shadow={1}
      >
        <Text 
          align="center" 
          size={[2, 2, 3]}
        >
          Workout Length: {length} mins
        </Text>
      </Card>
    </FormField>
  )
})

export default withDocument(workoutTimeCalculator)