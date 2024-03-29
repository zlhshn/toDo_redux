import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../store/todoReducer";

const TodoInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text){
      dispatch(todoAdd(text))
    
    }else{
        alert("Please add task!")
    }
    
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add Task"
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
