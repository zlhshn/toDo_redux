import React from "react";
import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { todoComp, todoDelete } from "../store/todoReducer";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(todoComp(id))
  };

  const handleDelete = () => {
    dispatch(todoDelete(id));
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#010221",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
     

    <div className="text-ok">
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
   
      
  
           <h3 className="todoText">{text}</h3>
    </div>
          
    
   
         <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
   
       
 
    </div>
  );
};

export default TodoItem;
