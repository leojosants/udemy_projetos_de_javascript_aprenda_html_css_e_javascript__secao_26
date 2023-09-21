import { useState } from "react";
import './App.css';
import React from "react";
import TodoFormComponent from "./components/TodoFormComponent";
import SearchComponent from "./components/SearchComponent";
import TodoComponent from "./components/TodoComponent";
import FilterComponent from "./components/FilterComponent";

// 
function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      text: 'Tarefa 1.',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: 'Tarefa 2',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: 'Tarefa 3.',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

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

  const completeTodo = (id) => {
    const new_todos = [...todos];

    new_todos.map((todo) => (
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    ));

    setTodos(new_todos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <SearchComponent search={search} setSearch={setSearch} />

      <FilterComponent filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo_list">
        {
          todos
            .filter((todo) => (
              filter === 'All' ? true
                : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted
            ))
            .filter((todo) => (todo.text.toLowerCase().includes(search.toLowerCase())))
            .sort((a, b) => (sort === 'Asc'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
            ))
            .map((todo) => (
              <TodoComponent todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />
            ))
        }
      </div>

      <TodoFormComponent addTodo={addTodo} />
    </div>
  );
};

export default App;
