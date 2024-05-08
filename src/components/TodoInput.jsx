import React from 'react';
import '../Component.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function TodoInput({isDarkMode}) {
  const [input, setInput] = useState("")
  return (
    <Form className="form-wrapper">
      <Form.Control type="text" className={`todo-input ${isDarkMode ? `dark-input` : `light-input` }`} required  
      value={input}
      onChange={(e) => setInput(e.target.value)}/>
 
    </Form>
   
  )
}

export default TodoInput;