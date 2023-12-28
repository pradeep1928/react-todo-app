import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {
  const todoItemList = [
    {
      todoName: 'learn React',
      dueDate: '31/12/2023'
    },
    {
      todoName: 'learn Nodejs',
      dueDate: '05/01/2024'
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItemList={todoItemList} />
    </center>
  )
}

export default App;
