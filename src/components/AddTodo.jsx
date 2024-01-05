import { useState } from "react";

function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState('')
    const [dueDate, setDueDate] = useState('')

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonClick = () => {
        onNewItem(todoName, dueDate)
        setTodoName('')
        setDueDate('')
    }

    return (
        <div className="container item-container">
            <div className="row my-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" 
                     value={todoName}
                     onChange={handleNameChange}/>
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} onChange={handleDueDateChange} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success my-button"
                        onClick={handleAddButtonClick}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;