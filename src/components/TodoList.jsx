import React from 'react';
import '../Component.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function TodoList({isDarkMode}) {
  return (
    <>
    <div className={`todo-list-wrapper ${isDarkMode ? `dark-list` : `light-list` }`}>
      <ul className='todo-list'>
        <li>buy groceries</li>
        <li>work on my website</li>
        <li>read a book</li>
        <li>watch a football match</li>
      </ul>
      <div className='todo-settings row'>
        <p className='col-4'>5 minutes</p>
        <div className='todo-category col-4'>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p className='col-4'>clear completed</p>
      </div>
      
    </div>
    
  </>
  )

}

export default TodoList