import React from 'react'
import {useTodoContext} from '../context/todoContext.jsx'
import TodoItem from './TodoItem.jsx'
const TodoList = () => {
  const { todos, searchTerm,todoStatus } = useTodoContext();
  const filteredTodos = todos.filter(todo => {
    const matchesSearchTerm = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = todoStatus === 'all' ? true : todoStatus === 'completed' ? todo.isCompleted : !todo.isCompleted;
    return matchesSearchTerm && matchesStatus;
  });
  return (
    <div className='todo-list'>
      {filteredTodos.length === 0 ? <p className='no-todo'> No todos found</p> : filteredTodos.map(todo => <TodoItem key={todo._id} todo={todo} />)}
    </div>
  )
}

export default TodoList