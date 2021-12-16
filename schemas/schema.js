import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import workout from './documents/workout'
import exercise from './documents/exercise'
import target from './documents/target'
import exerciseComponent from './objects/exerciseComponent'
import equipment from './documents/equipment'
import programDay from './objects/programDay'
import requiredEquipment from './objects/equipment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    workout,
    exercise,
    target,
    exerciseComponent,
    equipment,
    programDay,
    requiredEquipment
  ]),
})
