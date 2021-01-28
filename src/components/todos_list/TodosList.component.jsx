import React from "react";
import Todo from "../todo/Todo.component";
import { connect } from "react-redux";

const TodosList = ({ todos }) => {
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
const mapStateToProps = ({ todos: { todos } }) => ({
  todos,
});
export default connect(mapStateToProps)(TodosList);
