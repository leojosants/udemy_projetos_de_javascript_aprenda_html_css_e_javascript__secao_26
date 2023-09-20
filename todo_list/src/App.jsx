import { useState } from "react";
import './App.css';
import TodoComponent from "./components/TodoComponent";
import React from "react";
import TodoFormComponent from "./components/TodoFormComponent";

// 
function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 100),
      text: 'Tarefa 1.',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 100),
      text: 'Tarefa 2',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 100),
      text: 'Tarefa 3.',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const new_todos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }];

    setTodos(new_todos);
  };

  const removeTodo = (id) => {
    const new_todos = [...todos];

    const filtered_todos = new_todos.filter((todo) => (
      todo.id !== id ? todo : null
    ));

    setTodos(filtered_todos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="todo_list">
        {
          todos.map((todo) => (
            <TodoComponent todo={todo} key={todo.id} removeTodo={removeTodo} />
          ))
        }
      </div>

      <TodoFormComponent addTodo={addTodo} />
    </div>
  );
};

export default App;
