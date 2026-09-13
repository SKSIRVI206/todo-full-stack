import React, { useState, useEffect } from "react";
import { useTodoContext } from "../context/todoContext";
import axios from "axios";

const TodoForm = () => {
  // State
  const [todoInput, setTodoInput] = useState("");
  const { setTodos, showNotification } = useTodoContext();
  

  // Function for adding todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    const newTodo = {
      title: todoInput,
      isCompleted: false,
    };
    try {
      const response = await axios.post("/api", newTodo);
      setTodos((prevTodos) => [...prevTodos, response.data.data]);
      showNotification(response.data.message);
    } catch (error) {
      console.error("Error adding todo:", error);
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
        />
        <button type="submit" className="add-btn">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
