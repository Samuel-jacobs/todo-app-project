import React, { useState } from 'react';
import '../Component.css';
import Todo from './Todo';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function TodoList({isDarkMode, setTodos, todos}) {
  

  const toggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    console.log("Todos after update:", todos);
  };
  
  return (
    <>
    <div className={`todo-list-wrapper ${isDarkMode ? `dark-list` : `light-list` }`}>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <Todo 
          isCompleted={todo.isCompleted} toggleComplete={toggleComplete} text={todo.text} key={todo.id}/>
          
        ))}
        
      </ul>
      <div className='todo-settings'>
        <div>
          <p>5 minutes</p>
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