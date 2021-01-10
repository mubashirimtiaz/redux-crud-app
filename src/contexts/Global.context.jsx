import React, { createContext, useReducer, useEffect } from "react";
import { globalReducer } from "../reducers/global.reducer";
const initialState = {
  todos: [
    { id: 1, title: "Play Guitar", completed: false },
    { id: 2, title: "Watch Netflix new Series", completed: true },
  ],
};
export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(globalReducer, initialState, () => {
    return JSON.parse(
      localStorage.getItem("todos") || JSON.stringify(initialState)
    );
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <GlobalContext.Provider value={{ todos, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
