import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";


function Todo({text, isCompleted, toggleComplete, id, }) {
  // const [isComplete, setIsComplete] = useState(isCompleted);
  
  const completeHandler = () => {
    // setIsComplete(!isComplete);
    // isCompleted = !isCompleted;
    // console.log(isCompleted);
    console.log("Clicked! Current isCompleted:", isCompleted);
    toggleComplete(id);
   } 
   console.log(isCompleted)
  return (
    <div className='todo-single'>
      <button onClick={completeHandler} className='icon'>{isCompleted ? <FaCircleCheck /> : <FaRegCircle />}</button>
      <li className='todo-item'>{text}</li> 
    </div>
  )
}

export default Todo;