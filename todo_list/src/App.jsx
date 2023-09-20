import { useState } from "react";
import './App.css';
import Todo_Component from "./components/Todo_component";
import React from "react";

// 
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Tarefa 1.',
      category: 'Estudos',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Tarefa 2',
      category: 'Saúde',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Tarefa 3.',
      category: 'Pessoal',
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="todo_list">
        {
          todos.map((todo) => (
            <Todo_Component todo={todo} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
