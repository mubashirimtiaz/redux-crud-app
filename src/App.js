import React from "react";
import { AddTodoForm, Header, TodosList } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <AddTodoForm />
      <TodosList />
    </div>
  );
};

export default App;
