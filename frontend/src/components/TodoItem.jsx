import React from "react"; 
import { useTodoContext } from "../context/todoContext"; 
import axios from "axios"; 
import { useState } from "react"; 
const TodoItem = ({ todo }) => { 
  // from global state 
  const { setTodos, showNotification } = useTodoContext(); 
  // local state variable 
  const [isEditing, setIsEditing] = useState(false); // for ui 
  const [editTodo, setEditTodo] = useState({ 
    title: todo.title, 
    isCompleted: todo.isCompleted, 
  }); // for edit data 
  const [isStatusUpdate, setIsStatusUpdate] = useState(false); // for ui 
  const [editStatus, setEditStatus] = useState(todo.isCompleted); // for todo status 
 
  // todo delete with its id 
  const handleDelete = async (id) => { 
    console.log("Deleting todo with id:", id); 
    try { 
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}${id}`); 
      showNotification(response.data.message); 
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id)); 
    } catch (error) { 
      console.error("Error deleting todo:", error); 
      showNotification(error.response.data.message); 
    } 
  }; 
  // todo edit with its id 
  const handleEdit = async (id) => { 
    console.log("Editing todo with id:", id); 
    console.log("Updated todo:", editTodo); 
    try { 
      const response = await axios.put(`${import.meta.env.VITE_API_URL}${id}`, editTodo); 
      showNotification(response.data.message); 
      setTodos((prevTodos) => 
        prevTodos.map((todo) => (todo._id === id ? response.data.data : todo)), 
      ); 
    } catch (error) { 
      console.error("Error updating todo:", error); 
      showNotification(error.response.data.message); 
    } finally { 
      setIsEditing(false); 
    } 
  }; 
  // todo status update with its id 
  const handleUpdateStatus = async (id) => { 
    try { 
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, { 
        isCompleted: editStatus, 
      }); 
      console.log(response.data.data); 
      showNotification(response.data.message); 
      setTodos((prevTodos) => 
        prevTodos.map((todo) => (todo._id === id ? response.data.data : todo)), 
      ); 
      setIsStatusUpdate(false); 
    } catch (error) { 
      console.error("Error updating todo:", error); 
      showNotification(error.response.data.message); 
    } 
  }; 
 
  //jsx 
  return ( 
    <div 
      className={`todo-item ${todo.isCompleted ? "todo-completed" : "todo-pending"}`} 
    > 
      {/* Main Todo Item  */} 
      <div className="todo-item-details"> 
        <h3 className="todo-title">{todo.title}</h3> 
        <p>{todo.isCompleted ? "Completed" :"Pending"}</p> 
        <div className="todo-action"> 
          <button 
            className="update-btn" 
            onClick={() => { 
              setIsStatusUpdate(!isStatusUpdate); 
              setIsEditing(false); 
              setEditStatus(todo.isCompleted); 
            }} 
          > 
            Update Status 
          </button> 
 
          <button 
            className="edit-btn" 
            onClick={() => { 
              setIsEditing(!isEditing); 
              setIsStatusUpdate(false); 
              setEditTodo({ 
                title: todo.title, 
                isCompleted: todo.isCompleted, 
              }); 
            }} 
          > 
            Edit 
          </button> 
 
          <button className="delete-btn" onClick={() => handleDelete(todo._id)}> 
            Delete 
          </button> 
        </div> 
      </div> 
 
      {/* 1. Edit Todo */} 
      {isEditing && ( 
        <div className="editing"> 
          <input 
            type="text" 
            value={editTodo.title} 
            onChange={(e) => 
              setEditTodo({ ...editTodo, title: e.target.value }) 
            } 
            className="edit-todo-input" 
          /> 
          <label> 
            <input 
              type="checkbox" 
              checked={editTodo.isCompleted} 
              onChange={(e) => 
                setEditTodo({ ...editTodo, isCompleted: e.target.checked }) 
              } 
              className="input-checkmark" 
            /> 
            {editTodo.isCompleted ? "Completed" : "Pending"} 
          </label> 
          <div className="todo-action"> 
            <button className="save-btn" onClick={() => handleEdit(todo._id)}> 
              Save 
            </button> 
            <button className="cancel-btn" onClick={() => setIsEditing(false)}> 
              Cancel 
            </button> 
          </div> 
        </div> 
      )} 
 
      {/* 2. Status Update Panel */} 
      {isStatusUpdate && ( 
        <div className="updating"> 
          <label> 
            <input 
              type="checkbox" 
              checked={editStatus} 
              onChange={(e) => setEditStatus(e.target.checked)} 
              className="input-checkmark" 
            /> 
            Mark as {editStatus ? "Pending" : "Completed"} 
          </label> 
          <div className="todo-action"> 
            <button 
              className="save-btn" 
              onClick={() => handleUpdateStatus(todo._id)} 
            > 
              Save 
            </button> 
            <button 
              className="cancel-btn" 
              onClick={() => { 
                setIsStatusUpdate(false); 
                setEditStatus(todo.isCompleted); 
              }} 
            > 
              Cancel 
            </button> 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default TodoItem;

