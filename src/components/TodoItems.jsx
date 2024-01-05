import TodoItem from "./TodoItem";

function TodoItems({todoItemList, onDeleteClick}) {
    return (
        <div className="item-container">
            {todoItemList.map((item, index) => {
               return <TodoItem key={index} 
               todoName={item.todoName} 
               todoDate={item.dueDate} 
               onDeleteClick={onDeleteClick}
               ></TodoItem>
            })}

        </div>
    )
}


export default TodoItems;