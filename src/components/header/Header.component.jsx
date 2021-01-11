import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/Global.context";

const Header = () => {
  const {
    todos: { todos },
  } = useContext(GlobalContext);
  const thingsTodo = todos.filter((todo) => todo.completed === false);
  return (
    <div className="row">
      <div className="col-md-12 text-center my-3">
        {thingsTodo.length ? (
          <p className="lead text-muted">
            You have{" "}
            <span className="display-4 text-info">{thingsTodo.length}</span>{" "}
            {thingsTodo.length > 1 ? "things" : "thing"} to do.
          </p>
        ) : (
          <p className="lead text-muted">
            You have nothing to do yet. :) chill..
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
