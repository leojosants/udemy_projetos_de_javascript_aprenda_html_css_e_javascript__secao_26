import { useState } from "react";

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
      text: 'Tarefa 2.',
      category: 'Estudos',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Tarefa 3',
      category: 'Saúde',
      isCompleted: false,
    },
    {
      id: 4,
      text: 'Tarefa 4',
      category: 'Saúde',
      isCompleted: false,
    },
    {
      id: 5,
      text: 'Tarefa 5.',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 6,
      text: 'Tarefa 6',
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
