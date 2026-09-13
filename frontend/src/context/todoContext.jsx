import { createContext, useContext, useState } from "react";

const TodoContext = createContext();


export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
};

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [notification, setNotification] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [todoStatus, setTodoStatus] = useState('all');
    const showNotification = (message) => {
        setNotification(message);
        setTimeout(()=>{
          setNotification('');
        },1000)
    };
    return <TodoContext.Provider value={{ todos, setTodos, notification, showNotification, searchTerm, setSearchTerm, todoStatus, setTodoStatus }}>
        {children}
    </TodoContext.Provider>;
}