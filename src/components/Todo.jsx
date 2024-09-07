import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";


function Todo({text, isCompleted, id, }) {
  const [isComplete, setIsComplete] = useState(isCompleted);
  console.log(isCompleted);
  const completeHandler = () => {
    setIsComplete(!isComplete);
  
    console.log(!isCompleted);
    console.log(!isComplete);
    // console.log("Clicked! Current isCompleted:", isCompleted);
    // toggleComplete(id);
   } 
   
  return (
    <div className='todo-single'>
      <button onClick={completeHandler} className='icon'>{isComplete ? <FaCircleCheck /> : <FaRegCircle />}</button>
      <li className='todo-item'>{text}</li> 
    </div>
  )
}

export default Todo;