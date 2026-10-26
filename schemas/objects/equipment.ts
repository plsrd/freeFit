import {defineArrayMember, defineType} from 'sanity'
import {createReferenceFilter} from '../../src/utils/createReferenceFilter'

export default defineType({
  name: 'requiredEquipment',
  title: 'Equipment',
  description: 'Select the equipment you need for these exercises.',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'reference',
      to: [{type: 'equipment'}],
      options: {
        // For an array member, `parent` is the array itself
        filter: ({parent}) => createReferenceFilter(Array.isArray(parent) ? parent : []),
      },
    }),
  ],
})
