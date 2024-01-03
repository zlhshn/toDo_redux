import logo from "../assets/react-redux.png"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

const Todo = () => {
  return (
    <div className="app">
      <div>
        <img src={logo} alt="" height={"70px"} />
      </div>
      <h2>React-Redux Task List</h2>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Todo
