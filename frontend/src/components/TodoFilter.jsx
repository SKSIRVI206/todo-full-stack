import React from "react";
import { useTodoContext } from "../context/todoContext.jsx";


const TodoFilter = () => {
  const { searchTerm, setSearchTerm, todoStatus, setTodoStatus } = useTodoContext();

  return (
    <div>
      <h2>Filter Todo</h2>
      
      <div className="filter-container">
        <input
          type="search"
          className="filter-input"
          placeholder="🔎︎ search and filter todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        
        <select
          className="filter-select"
          value={todoStatus}
          onChange={(e) => setTodoStatus(e.target.value)}
        >
          <option value="all" className="filter-option">All</option>
          <option value="completed" className="filter-option">Completed</option>
          <option value="pending" className="filter-option">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;