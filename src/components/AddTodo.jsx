import { useRef } from "react";

function AddTodo({ onNewItem }) {

    const todoNameElement = useRef()
    const dueDateElement = useRef()

    // const [todoName, setTodoName] = useState('')
    // const [dueDate, setDueDate] = useState('')

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value)
    // }

    // const handleDueDateChange = (event) => {
    //     setDueDate(event.target.value)
    // }

    const handleAddButtonClick = (event) => {
        event.preventDefault()              // use only while using form
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value
        todoNameElement.current.value = ''
        dueDateElement.current.value = ''
        onNewItem(todoName, dueDate)

        // Use while using useState 
        // setTodoName('')
        // setDueDate('')
    }

    // return (
    //     <div className="container item-container">
    //         <div className="row my-row">
    //             <div className="col-6">
    //                 <input type="text" placeholder="Enter todo here" 
    //                  value={todoName}
    //                  onChange={handleNameChange}/>
    //             </div>
    //             <div className="col-4">
    //                 <input type="date" value={dueDate} onChange={handleDueDateChange} />
    //             </div>
    //             <div className="col-2">
    //                 <button type="button" className="btn btn-success my-button"
    //                     onClick={handleAddButtonClick}>
    //                     Add
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );

    // Add todos using form 
    return (
        <div className="container item-container">
            <form className="row my-row" onSubmit={handleAddButtonClick}>
                <div className="col-6">
                    <input type="text"
                        ref={todoNameElement}
                        placeholder="Enter todo here"
                    />
                </div>
                <div className="col-4">
                    <input type="date"
                        ref={dueDateElement}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success my-button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );

}

export default AddTodo;