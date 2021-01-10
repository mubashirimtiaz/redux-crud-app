import { v4 as uuid } from "uuid";
import { updateElem, updateStatus } from "../utils";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuid(), title: action.payload, completed: false },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_STATUS":
      return {
        ...state,
        todos: updateStatus(
          state.todos,
          action.payload.id,
          action.payload.completed
        ),
      };
    case "UPDATE_TODO":
      const id = action.payload.id;
      const updatedTitle = action.payload.title;
      return {
        ...state,
        todos: updateElem(state.todos, id, updatedTitle),
      };
    default:
      return state;
  }
};
