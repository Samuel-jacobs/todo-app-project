import React from 'react'
import iconmoon from '../assets/iconmoon.svg';
import iconsun from '../assets/iconsun.svg';
import useToggle from '../hooks/useToggle';

function Header() {
  const { value: isDarkMode, toggle: darkToggle } = useToggle(false);

  let icon = isDarkMode ? iconsun : iconmoon;
 
  return (
    <div className={`wrapper ${isDarkMode ? `headerbg-dark` :  `headerbg-light`} `}>
      <div className='header-wrapper'>
        <h1>Todo </h1>
        <button onClick={darkToggle}><img src={icon} alt='alt text' /></button>
      </div>
      
    </div>
  )
}

export default Header;