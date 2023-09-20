import { useState } from "react";
import './App.css';

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
    // 
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="todo_list">
        {
          todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
              </div>

              <button>Completar</button>
              <button>X</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
