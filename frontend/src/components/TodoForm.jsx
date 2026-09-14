import React, { useState, useEffect } from "react"; 
import { useTodoContext } from "../context/todoContext"; 
import axios from "axios"; 
 
const TodoForm = () => { 
  // State 
  const [todoInput, setTodoInput] = useState(""); 
  const { setTodos, showNotification } = useTodoContext(); 
  const [isAdding, setIsAdding] = useState(false); 
   
 
  // Function for adding todo 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    if (todoInput.trim() === "") return alert("Todo is required")
    const newTodo = { 
      title: todoInput, 
      isCompleted: false, 
    }; 
    setIsAdding(true); 
    try { 
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`, newTodo); 
      setTodos((prevTodos) => [...prevTodos, response.data.data]); 
      showNotification(response.data.message); 
    } catch (error) { 
      console.error("Error adding todo:", error); 
    } finally { 
      setIsAdding(false); 
    } 
    setTodoInput(""); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit} > 
      <h2>Add Todo</h2> 
      <div> 
        <input 
          type="text" 
          placeholder="Add a new todo..." 
          value={todoInput} 
          onChange={(e) => setTodoInput(e.target.value)} 
          className="add-todo-input" 
          disabled={isAdding} 
        /> 
        <button type="submit" className="add-btn" disabled={isAdding}> 
          {isAdding ? "Adding..." : "Add Todo"} 
        </button> 
      </div> 
    </form> 
  ); 
}; 
 
export default TodoForm;
