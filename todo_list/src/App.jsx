import { useState } from "react";
import './App.css';
import TodoComponent from "./components/TodoComponent";
import React from "react";
import TodoFormComponent from "./components/TodoFormComponent";

// 
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Tarefa 1.',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Tarefa 2',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Tarefa 3.',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="todo_list">
        {
          todos.map((todo) => (
            <TodoComponent todo={todo} />
          ))
        }
      </div>

      <TodoFormComponent />
    </div>
  );
}

export default App;
