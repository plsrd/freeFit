import React from 'react'

const Tile = ({ children, color, background, equipment }) => {

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
            src={`/static/${equipment == 'Trap Bar' ? 'barbell' : equipment.toLowerCase().split(' ')[0]}.png`}
          />
        }
    </span>
  )
}

export default Tile