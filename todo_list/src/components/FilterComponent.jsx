/* eslint-disable react/prop-types */
const FilterComponent = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>

            <div className="filter_options">
                <div>
                    <p>Status:</p>

                    <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>

                <div>
                    <p>Ordem alfabética:</p>
                    <button>Asc</button>
                    <button>Desc</button>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;