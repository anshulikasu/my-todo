import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo, handleCheckbox } from "../Todolist/actions";
import "./Todoss.css";

const Todoss = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  return todos.map((todo) => (
    <div className="todo_box_main">
      <div key={todo.id} className="todo-box">
        <div className="content">
          <p
            style={
              todo.completed === true
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.todo}
          </p>
        </div>
        <div className="actions-box">
          {editFormVisibility === false && (
            <>
              <span onClick={() => handleEditClick(todo)}>
                <Icon icon={edit2} />
              </span>
              <span onClick={() => dispatch(removeTodo(todo.id))}>
                <Icon icon={trash} />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  ));
};

export default Todoss;
