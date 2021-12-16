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
        filter: ({ document }) => {
          const existingEquipment = document.equipment.map(equipment => equipment._ref).filter(Boolean)
          return {
            filter: '!(_id in $existingEquipment)',
            params: {
              existingEquipment
            }
          }
        }
      }
    }
  ],
}