import React, {useRef, useState, useEffect } from 'react';
import '../Component.css';
import Todo from './Todo';
import {Reorder} from "framer-motion"


function TodoList({isDarkMode, setTodos, todos}) {

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])




  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true))
        console.log(filteredTodos)
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false))
        console.log(filteredTodos)
        break;
      default: 
      setFilteredTodos(todos);
      break;
    }
  }

  // const filteredTodos = todos.filter((todo) => {
  //   if (filter === "active") return !todo.isCompleted;
  //   if (filter === "completed") return todo.isCompleted;
  //   return true; // "all"
  // });  

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

   //function to clear completed todos
   const clearComplete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
    console.log("Completed todos deleted");
   }

   // get the number of items that are still uncomplete
   const incompleteCount = todos.filter((todo) => !todo.isCompleted).length;

   const dragTodo = useRef(null);
    const dragOverTodo = useRef(null);

  const handleSort = () => {
    const todosClone = [...todos];
    const draggedIndex = todos.findIndex((todo) => todo.id === dragTodo.current);
    const draggedOverIndex = todos.findIndex((todo) => todo.id === dragOverTodo.current);

    // Swap the items in the array
    const [draggedItem] = todosClone.splice(draggedIndex, 1);
    todosClone.splice(draggedOverIndex, 0, draggedItem);

    setTodos(todosClone);
    dragTodo.current = null;
    dragOverTodo.current = null;
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      console.log(todoLocal)
      setTodos(todoLocal);
      console.log(todos)
    }
  }
  
  const textClass = isDarkMode ? "dark-text" : "light-text";
  return (
    <>
    <div className={`todo-list-wrapper ${isDarkMode ? `dark-list` : `light-list` }`}>
      <ul className='todo-list'>
          {filteredTodos.map((todo) => ( 
            <Todo 
              isDarkMode={isDarkMode}
              isCompleted={todo.isCompleted} 
              toggleCompletion={toggleCompletion}
              text={todo.text} 
              key={todo.id}
              id={todo.id}
              deleteTodo={deleteTodo}
              handleSort={handleSort}
              dragOverTodo={dragOverTodo}
              dragTodo={dragTodo}
            />  
        
        ))}
      
       
        
      </ul>
      <div className='todo-settings'>
        <div>
          <p>{incompleteCount} Items left</p>
        </div>
        <div className={`todo-category ${isDarkMode ? `dark-category` : `light-category` }`}>
          <button  onClick={() => setStatus("all")} className={status === "all" ? "active-tab" : ""}>All</button>
          <button  onClick={() => setStatus("active")} className={status === "active" ? "active-tab" : ""}>Active</button>
          <button  onClick={() => setStatus("completed")} className={status === "completed" ? "active-tab" : ""}>Completed</button>
        </div>
       
          <button className={textClass} onClick={clearComplete}>Clear completed</button>
      
      </div>
      
      
    </div>
    <div className={`category-mobile-wrapper ${isDarkMode ? `dark-category-mobile` : `light-category-mobile` }`}>
      <div className={`todo-category-mobile ${isDarkMode ? `dark-category` : `light-category` }`}>
        <button  onClick={() => setStatus("all")} className={status === "all" ? "active-tab" : ""}>All</button>
        <button  onClick={() => setStatus("active")} className={status === "active" ? "active-tab" : ""}>Active</button>
        <button  onClick={() => setStatus("completed")} className={status === "completed" ? "active-tab" : ""}>Completed</button>
      </div>
    </div>
    
    <p className={`drag-text ${textClass}`}>Drag and drop to rearrange</p>
  </>
  )

}

export default TodoList;