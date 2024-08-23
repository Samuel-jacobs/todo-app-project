import React from 'react'
import { useState } from 'react';
import TodoInput from './TodoInput';
import Header from './Header';
import TodoList from './TodoList';
import iconmoon from '../assets/iconmoon.svg';
import iconsun from '../assets/iconsun.svg';
import useToggle from '../hooks/useToggle';

function Home() {
    const { value: isDarkMode, toggle: darkToggle } = useToggle(false);
    let icon = isDarkMode ? iconsun : iconmoon;
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <div className={`background ${isDarkMode ? `background-dark` :  `background-light`} `}>
        <Header toggle ={darkToggle} isDarkMode = {isDarkMode} icon = {icon}/>
        <TodoInput todos={todos} setTodos={setTodos} input={input} setInput={setInput} toggle = {darkToggle} isDarkMode = {isDarkMode} />
        <TodoList todos={todos}input={input} setInput={setInput} isDarkMode = {isDarkMode}/>
    </div>
  )
}

export default Home