import TodoItem from "./TodoItem";

function TodoItems({todoItemList}) {
    return (
        <div className="item-container">
            {todoItemList.map((item, index) => {
               return <TodoItem key={index} todoName={item.todoName} todoDate={item.dueDate} ></TodoItem>
            })}

        </div>
    )
}


export default TodoItems;