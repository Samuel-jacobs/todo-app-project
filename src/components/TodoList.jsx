import React, { useState } from 'react';
import '../Component.css';
import Todo from './Todo';


function TodoList({isDarkMode, setTodos, todos}) {

  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true; // "all"
  });  

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  // toggle the complete state of the todo item based on the id
  const toggleCompletion = (id) => {
   //this updates the todo item to be completed or not
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    console.log("check")
   }
   const clearComplete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
    console.log("Completed todos deleted");
   }

   const incompleteCount = todos.filter((todo) => !todo.isCompleted).length;
  return (
    <>
    <div className={`todo-list-wrapper ${isDarkMode ? `dark-list` : `light-list` }`}>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo

            isCompleted={todo.isCompleted} 
            toggleCompletion={toggleCompletion}
            text={todo.text} 
            key={todo.id}
            id={todo.id}
            deleteTodo={deleteTodo}
            />
          
        ))}
        
      </ul>
      <div className='todo-settings'>
        <div>
          <p>{incompleteCount} items left</p>
        </div>
        <div className={`todo-category ${isDarkMode ? `dark-category` : `light-category` }`}>
          <button  onClick={() => setFilter("all")} className={filter === "all" ? "active-tab" : ""}>All</button>
          <button  onClick={() => setFilter("active")} className={filter === "active" ? "active-tab" : ""}>Active</button>
          <button  onClick={() => setFilter("completed")} className={filter === "completed" ? "active-tab" : ""}>Completed</button>
        </div>
        <div>
          <button onClick={clearComplete}>clear completed</button>
        </div>
      </div>
      
    </div>
    
  </>
  )

}

export default TodoList