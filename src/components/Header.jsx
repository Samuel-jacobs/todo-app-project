import React from 'react'

function Header({isDarkMode, toggle, icon}) {
 
  return (
    <div className={`wrapper ${isDarkMode ? `headerbg-dark` :  `headerbg-light`} `}>
      <div className='header-wrapper'>
        <h1>Todo </h1>
        <button onClick={toggle}><img src={icon} alt='alt text' /></button>
      </div>
      
    </div>
  )
}

export default Header;