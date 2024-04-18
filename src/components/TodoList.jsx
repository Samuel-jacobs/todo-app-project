import React from 'react';
import '../Component.css'

function TodoList({isDarkMode}) {
  return (
    <div className={`todo-list-wrapper ${isDarkMode ? `dark-list` : `light-list` }`}>
      <ul className='todo-list'>
        <li>buy groceries</li>
        <li>smoke some weed</li>
        <li>have a threesome</li>
        <li>watch a football match</li>
      </ul>
      <div className='todo-settings'>
        <p>5 minutes</p>
        <div className='todo-category'>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear completed</p>
      </div>
    </div>
  )
}

export default TodoList