import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../store/todoReducer";

const TodoInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAdd(text))
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="add-button"
        
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
