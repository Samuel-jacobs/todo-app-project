import React from 'react';

import { FaGenderless } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";


function Todo({text, isCompleted, id}) {
  return (
    <div className='todo-single'>
      <FaGenderless className='icon'/>
      <li className='todo-item'>{text}</li> 
    </div>
  )
}

export default Todo;