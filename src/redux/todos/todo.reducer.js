import { v4 as uuid } from "uuid";
import TodoActionTypes from "./todo.types";
import { updateStatus, updateElem } from "../../utils";

const INITIAL_STATE = {
  todos: [],
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuid(), title: action.payload, completed: false },
        ],
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodoActionTypes.UPDATE_STATUS:
      return {
        ...state,
        todos: [
          ...updateStatus(
            state.todos,
            action.payload.id,
            action.payload.completed
          ),
        ],
      };

    case "UPDATE_TODO":
      const id = action.payload.id;
      const updatedTitle = action.payload.title;
      return {
        ...state,
        todos: [...updateElem(state.todos, id, updatedTitle)],
      };
    default:
      return state;
  }
};
