import React from 'react'
import './Header.css'

const Header = ({ content, artist }) => {
  return (
    <div className='header-bg' >
      <div className='header-text' style={{ color: 'white', fontSize: '2rem' , margin: "2rem, 2rem"}}>
        {content} by <span className='text-secondary'>{artist}</span>
      </div>
    </div>
  )
}

export default Header
