import { fetchAll, addTodo, updateTodo, deleteTodo } from "./actions.js";
import { actions } from './todos.slice.js';

const allActions = {
  ...actions,
  fetchAll,
  addTodo,
  updateTodo,
  deleteTodo,
};

export { allActions as actions };
export { reducer } from './todos.slice.js';



