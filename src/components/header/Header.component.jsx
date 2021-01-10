import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/Global.context";

const Header = () => {
  const {
    todos: { todos },
  } = useContext(GlobalContext);
  return (
    <div className="row">
      <div className="col-md-12 text-center my-3">
        {todos.length ? (
          <p className="lead text-muted">
            You have <span className="display-4 text-info">{todos.length}</span>{" "}
            {todos.length > 1 ? "things" : "thing"} to do.
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
