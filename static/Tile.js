import React from 'react'

const Tile = ({ children, color, background, equipment }) => {

  const getIcon = () => {
    const legs = ['Quads', 'Calves', 'Hamstrings', 'Glutes']
    const torso = ['Chest', 'Shoulders']
    const arms = ['Biceps', 'Triceps', 'Forearms']

    switch (true) {
      case legs.includes(equipment):
        return 'legs'
      case arms.includes(equipment): 
        return 'target'
      case torso.includes(equipment):
        return 'torso'
      case (equipment == 'Trap Bar'):
        return 'barbell'
      default:
        return equipment
    }
  }
  
  
  return (
    <span
      style={{
        alignItems: 'center',
        backgroundColor: color,
        backgroundImage: background ? `url(${background})` : '',
        backgroundSize: 'contain',
        borderRadius: '4px',
        display: 'flex',
        fontWeight: '500',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}>
        {
          equipment &&
          <img
            src={`/static/${getIcon().toLowerCase().split(' ')[0]}.png`}
          />
        }
    </span>
  )
}

export default Tile