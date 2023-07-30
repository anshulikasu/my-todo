import "./App.css";
import Form from "./component/Form";
import { useState } from "react";
import Todoss from "./component/Todoss";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./Todolist/actions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <div className="App">
      <br></br>
      <h1>TODO-APP USING REACT REDUX</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todoss
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />

      {Todoss.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
