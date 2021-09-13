import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import workout from './documents/workout'
import exercise from './documents/exercise'
import target from './documents/target'
import workoutComponent from './objects/workoutComponent'
import equipment from './documents/equipment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    workout,
    exercise,
    target,
    workoutComponent,
    equipment
  ]),
})
