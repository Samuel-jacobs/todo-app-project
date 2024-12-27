import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import {FaTrash} from "react-icons/fa6";
import { useRef } from 'react';



function Todo({
  text, 
  isCompleted, 
  toggleCompletion, 
  id, 
  deleteTodo,
  dragOverTodo,
  dragTodo,
  handleSort,
  isDarkMode
}) {

  
  
  return (
    <div className={`todo-wrapper ${isDarkMode ? `todo-wrapper-dark` : `todo-wrapper-light`}`}>
      <div className={`todo-single ${isCompleted ? `completed-list` : `not-complete`}`} draggable 
          onDragStart={() => (dragTodo.current = id)}
          onDragEnter={() => (dragOverTodo.current = id)}
          onDragEnd={handleSort}
          >
          
            <div className='todo-main'>
              <button onClick={() => toggleCompletion(id)} className='icon'>
                {isCompleted ? <FaCircleCheck /> : <FaRegCircle />}
              </button>
              <li className='todo-item'>{text}</li> 
            </div>
            
            <button onClick={() => deleteTodo(id)}  className={`trash ${isDarkMode ? `dark-trash` : `light-trash`}`}><FaTrash> </FaTrash></button>
      </div>
    </div>
    
  )
}

export default Todo;