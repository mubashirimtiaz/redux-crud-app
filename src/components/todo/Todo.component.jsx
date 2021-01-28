import React, { useState } from "react";
import "./todo.css";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";
import {
  Delete_Todo,
  Update_Status,
  // Update_Todo,
} from "../../redux/todos/todo.actions";
import { connect, useDispatch } from "react-redux";
// import { GlobalContext } from "../../contexts/Global.context";

const Todo = ({
  id,
  title,
  completed,
  UPDATE_STATUS,
  // UPDATE_TODO,
  DELETE_TODO,
}) => {
  const dispatch = useDispatch();
  // const { dispatch } = useContext(GlobalContext);
  const [editStatus, setEditStatus] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title);

  const handleTodoEdit = () => {
    setEditStatus(!editStatus);
  };
  const handleTodoDelete = () => {
    // dispatch({ type: "DELETE_TODO", payload: id });
    DELETE_TODO(id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch({ type: "UPDATE_TODO", payload: { id, title: todoTitle } });
    // UPDATE_TODO({ id, title: todoTitle });
    dispatch({ type: "UPDATE_TODO", payload: { id, title: todoTitle } });
    setEditStatus(!editStatus);
  };

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleStatusChange = (event) => {
    // dispatch({ type: "UPDATE_STATUS", payload: { id, completed } });
    UPDATE_STATUS({ id, completed });
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
const mapDispatchToProps = (dispatch) => ({
  DELETE_TODO: (todo) => dispatch(Delete_Todo(todo)),
  // UPDATE_TODO: (todo) => dispatch(Update_Todo(todo)),
  UPDATE_STATUS: (todo) => dispatch(Update_Status(todo)),
});
export default connect(null, mapDispatchToProps)(Todo);
