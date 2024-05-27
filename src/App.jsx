// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodo';
import DeleteTodoButton from './components/deleteTodo';
import TodoCheckbox from './components/todocheckbox';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className={`flex items-center justify-between p-2 border-b border-gray-200 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
      <TodoCheckbox onToggle={onToggle} id={todo.id} completed={todo.completed} />
      <span>{todo.text}</span>
      <DeleteTodoButton onDelete={onDelete} id={todo.id} />
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load todos from local storage when component mounts
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever there's a change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="App flex flex-col min-h-96 min-w-64 items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-w-md mx-auto mt-8">
      <h1 className="text-3xl mt-5 font-bold mb-4 flex justify-center">Todo App</h1>
      <AddTodoForm onAdd={addTodo} />
      <div className="todos flex flex-col items-center ">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
