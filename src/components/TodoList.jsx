import React from 'react';
import '../Component.css'

function TodoList({isDarkMode}) {
  return (
    <div className='todo-list-wrapper'>
      <ul className={`todo-list ${isDarkMode ? `dark-list` : `light-list` }`}>
        <li>buy groceries</li>
        <li>smoke some weed</li>
        <li>have a threesome</li>
        <li>watch a football match</li>
      </ul>
      <div>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </div>
  )
}

export default TodoList