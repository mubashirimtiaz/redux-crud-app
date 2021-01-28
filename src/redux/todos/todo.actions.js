import TodoActionTypes from "./todo.types";

export const Add_Todo = (payload) => ({
  type: TodoActionTypes.ADD_TODO,
  payload,
});
export const Delete_Todo = (payload) => ({
  type: TodoActionTypes.DELETE_TODO,
  payload,
});
export const Update_Status = (payload) => ({
  type: TodoActionTypes.UPDATE_STATUS,
  payload,
});

export const Update_Todo = (payload) => ({
  type: TodoActionTypes.UPDATE_TODO,
  payload,
});
