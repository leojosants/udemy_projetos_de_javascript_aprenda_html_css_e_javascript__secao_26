const TodoFormComponent = () => {
    return (
        <div className="todo_form">
            <h2>Criar tarefa:</h2>

            <form>
                <input type="text" placeholder="Digite o título..."/>

                <select>
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