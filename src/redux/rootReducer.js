import { combineReducers } from "redux";
import { operationsReducer } from "../Todolist/reducers/operations";

const rootReducer = combineReducers({
  operationsReducer,
});

export default rootReducer; // Default export
