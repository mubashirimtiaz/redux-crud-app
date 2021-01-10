import React from "react";
import { AddTodoForm, Header, TodosList } from "./components";
import GlobalContextProvider from "./contexts/Global.context";
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Header />
        <AddTodoForm />
        <TodosList />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
