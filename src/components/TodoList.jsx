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
        <li>Complete an article</li>
      </ul>
      <div className='todo-settings'>
        <div>
          <p >5 minutes</p>
        </div>
        <div className='todo-category'>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <div>
          <p>clear completed</p>
        </div>
      </div>
      
    </div>
    
  </>
  )

}

export default TodoList