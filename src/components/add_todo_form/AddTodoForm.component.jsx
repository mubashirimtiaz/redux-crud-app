import React, { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/Global.context";

const AddTodoForm = () => {
  const { dispatch } = useContext(GlobalContext);
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleTodoSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
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

export default AddTodoForm;
