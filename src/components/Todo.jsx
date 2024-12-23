import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import {FaTrash} from "react-icons/fa6";


function Todo({text, isCompleted, toggleCompletion, id, deleteTodo}) {

  
  return (
    <div className={`todo-single ${isCompleted ? `completed-list` : `not-complete`}`}>
      <button onClick={() => toggleCompletion(id)} className='icon'>
        {isCompleted ? <FaCircleCheck /> : <FaRegCircle />}
      </button>
      <li className='todo-item'>{text}</li> 
      <button onClick={() => deleteTodo(id)}  className='icon'><FaTrash> </FaTrash></button>
    </div>
  )
}

export default Todo;