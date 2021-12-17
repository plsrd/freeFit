import { createReferenceFilter } from "../../src/utils/createReferenceFilter";

export default {
  name: 'requiredEquipment',
  title: 'Equipment',
  description: 'Select the equipment you need for these exercises.',
  type: 'array',
  of: [ 
    { type: 'reference',
      to: [
        { type: 'equipment' }
      ],
      options: {
        filter: ({ document }) => createReferenceFilter(document, 'requiredEquipment')
      }
    }
  ],
}