import React from 'react'

const Tile = ({ children, color, background, equipment }) => (
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
  {children}
  </span>
)

export default Tile