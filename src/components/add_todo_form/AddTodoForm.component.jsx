import React, { useState } from "react";
// import { GlobalContext } from "../../contexts/Global.context";
import { useDispatch } from "react-redux";
import { Add_Todo } from "../../redux/todos/todo.actions";

const AddTodoForm = ({ ADD_TODO }) => {
  // const { dispatch } = useContext(GlobalContext);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleTodoSubmit = (event) => {
    event.preventDefault();
    // dispatch({ type: "ADD_TODO", payload: newTodo });
    dispatch(Add_Todo(newTodo));
    setNewTodo("");
  };
  return (
    <form onSubmit={handleTodoSubmit} className="mb-3">
      <label htmlFor="newTodo" className="small text-muted">
        Add Todo
      </label>
      <input
        type="text"
        id="newTodo"
        name="newTodo"
        value={newTodo}
        onChange={handleChange}
        className="form-control lead py-3"
      />
    </form>
  );
};

// const mapDispatchToProp = (dispatch) => ({
//   ADD_TODO: (newTodo) => dispatch(Add_Todo(newTodo)),
// });

export default AddTodoForm;
