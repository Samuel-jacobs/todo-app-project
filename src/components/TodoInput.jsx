import React from 'react';
import '../Component.css';
import Form from 'react-bootstrap/Form';
import { FaRegCircle } from "react-icons/fa6";
//import { useState } from 'react';

function TodoInput({isDarkMode, setInput, input, setTodos, todos}) {

  const inputHander = (e) => {
    setInput(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: input, isCompleted: false, id: Math.random() * 1000}
    ]);
    setInput(""); 
  }
  
 
  return (
    <Form onSubmit={submitHandler} className="form-wrapper">
      <Form.Control type="text" placeholder='Create a new todo...' className={`todo-input ${isDarkMode ? `dark-input` : `light-input` }`} required  
      value={input}
      onChange={inputHander}/>
      <FaRegCircle className='input-circle'/>
    </Form>
    
  )
}

export default TodoInput;