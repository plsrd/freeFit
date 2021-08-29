import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import workout from './documents/workout'
import exercise from './documents/exercise'
import details from './objects/details'
import link from './objects/link'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    workout,
    exercise,
    details,
    link
  ]),
})
