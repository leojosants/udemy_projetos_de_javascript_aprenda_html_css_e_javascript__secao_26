/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoFormComponent = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue('');
        setCategory('');
    };

    return (
        <div className="todo_form">
            <h2>Criar tarefa:</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

                <select value={category} onChange={(event)=>setCategory(event.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Work">Trabalho</option>
                    <option value="Personal">Pessoal</option>
                    <option value="Studies">Estudos</option>
                </select>

                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoFormComponent;