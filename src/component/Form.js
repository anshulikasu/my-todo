import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../Todolist/actions";
import "./Form.css";

function TodoForm({ editFormVisibility, editTodo, cancelUpdate }) {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todoss);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <>
      {editFormVisibility === false ? (
        <form className="form_main" onSubmit={handleSubmit}>
          <label>Add your todo-items</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit" className="form_add_button">
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form_input" onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div className="input_button">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" className="form_update_button">
              UPDATE
            </button>
            <button
              type="button"
              className="form_update_back"
              onClick={cancelUpdate}
            >
              BACK
            </button>
          </div>
          {/* <button
            type="button"
            className="form_update_back"
            onClick={cancelUpdate}
          >
            BACK
          </button> */}
        </form>
      )}
    </>
  );
}

export default TodoForm;
