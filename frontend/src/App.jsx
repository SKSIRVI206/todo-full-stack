import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useTodoContext } from "./context/todoContext.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
const App = () => {
  const { setTodos } = useTodoContext();
  const { notification } = useTodoContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getTodo = async () => {
      setError(null);
      setLoading(true);
      try {
        console.log("Fetching todos from API...");
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        setTodos(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
        setError(error)
      } finally{
        setLoading(false)
      }
    };
    getTodo();
  }, []);

  if(loading){
    return(
      <div className="loading">
        <p>Loading...</p>
      </div>
    )
  }

  if(error){
    return(
      <div className="error">
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>To Do List</h1>
        <p>Welcome to your To-Do List!</p>
        {notification && <p>{notification}</p>}
      </div>
      <div>
        <div className="todo-form-filter">
          <TodoForm />
          <TodoFilter />
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
