import { useState } from "react";

const TodoFormComponent = () => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (!value || !category) return;
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
                    <option value="work">Trabalho</option>
                    <option value="personal">Pessoal</option>
                    <option value="studies">Estudos</option>
                </select>

                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoFormComponent;