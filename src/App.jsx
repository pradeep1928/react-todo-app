import { useState } from 'react'

import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import NoTodoItems from './components/NoTodoItems'

function App() {
  // const todoItemList = [
  //   {
  //     todoName: 'learn React',
  //     dueDate: '31/12/2023'
  //   },
  //   {
  //     todoName: 'learn Nodejs',
  //     dueDate: '05/01/2024'
  //   },
  //   {
  //     todoName: 'learn todo',
  //     dueDate: '05/01/2024'
  //   }
  // ];

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date: ${itemDueDate}`)
    const newTodoItem = [
      ...todoItems,
      { todoName: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem)
  }

  const handleDeleteItem = (itemName) => {
    console.log(`Item deleted: ${itemName}`)
    const newTodoItems = todoItems.filter(item => item.todoName !== itemName)
    setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <NoTodoItems></NoTodoItems>}
      <TodoItems todoItemList={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  )
}

export default App;
