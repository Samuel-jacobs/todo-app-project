import React from 'react';
import '../Component.css';
import Form from 'react-bootstrap/Form';
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
      <Form.Control type="text" className={`todo-input ${isDarkMode ? `dark-input` : `light-input` }`} required  
      value={input}
      onChange={inputHander}/>
    </Form>
    
  )
}

export default TodoInput;