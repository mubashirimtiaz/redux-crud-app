import React, { useContext, useState } from "react";
import "./todo.css";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";
import { GlobalContext } from "../../contexts/Global.context";

const Todo = ({ id, title, completed }) => {
  const { dispatch } = useContext(GlobalContext);
  const [editStatus, setEditStatus] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title);

  const handleTodoEdit = () => {
    setEditStatus(!editStatus);
  };
  const handleTodoDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_TODO", payload: { id, title: todoTitle } });
    setEditStatus(!editStatus);
  };

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleStatusChange = (event) => {
    dispatch({ type: "UPDATE_STATUS", payload: { id, completed } });
  };
  return (
    <li
      className={`todo list-group-item d-flex align-items-center justify-content-between ${
        completed ? "done" : "tobedone"
      } `}
    >
      {!editStatus ? (
        <p
          className="lead todo-title text-muted my-auto"
          onClick={handleStatusChange}
        >
          {title}
        </p>
      ) : (
        <form className="w-75" onSubmit={handleSubmit}>
          <input
            type="text"
            name="todoTitle"
            value={todoTitle}
            onChange={handleTitleChange}
            className="form-control form-control-md"
          />
        </form>
      )}
      <div className="d-block text-right d-md-flex">
        <img
          src={editIcon}
          className="img-fluid icons"
          alt="edit-icon"
          onClick={handleTodoEdit}
        />
        <img
          src={deleteIcon}
          className="img-fluid icons"
          alt="delete-icon"
          onClick={handleTodoDelete}
        />
      </div>
    </li>
  );
};

export default Todo;
