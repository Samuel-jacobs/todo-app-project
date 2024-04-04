import React from 'react'
import Form from '../components/Form';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import iconmoon from '../assets/iconmoon.svg';
import iconsun from '../assets/iconsun.svg';
import useToggle from '../hooks/useToggle';

function Home() {
    const { value: isDarkMode, toggle: darkToggle } = useToggle(false);
    let icon = isDarkMode ? iconsun : iconmoon;
  return (
    <div className={`background ${isDarkMode ? `background-dark` :  `background-light`} `}>
        <Header toggle ={darkToggle} isDarkMode = {isDarkMode} icon = {icon}/>
        <Form />
        <TodoList />
    </div>
  )
}

export default Home