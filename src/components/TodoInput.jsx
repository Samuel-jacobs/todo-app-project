import React from 'react';
import '../Form.css';
import Form from 'react-bootstrap/Form'

function TodoInput() {
  return (
    <Form className="form-wrapper">
      <Form.Control type="text" className="todo-input" required />
    </Form>
  )
}

export default TodoInput;