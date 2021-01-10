import React, { useContext } from "react";
import { Todo } from "../";
import { GlobalContext } from "../../contexts/Global.context";

const TodosList = () => {
  const {
    todos: { todos },
  } = useContext(GlobalContext);
  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group p-0">
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
