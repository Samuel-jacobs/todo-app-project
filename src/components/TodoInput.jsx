import React from 'react';
import '../Component.css';
import Form from 'react-bootstrap/Form'

function TodoInput({isDarkMode}) {
  return (
    <Form className="form-wrapper">
      <Form.Control type="text" className={`todo-input ${isDarkMode ? `dark-input` : `light-input` }`} required />
    </Form>
  )
}

export default TodoInput;