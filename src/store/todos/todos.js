import { fetchAll, addTodo } from "./actions.js";
import { actions } from './todos.slice.js';

const allActions = {
  ...actions,
  fetchAll,
  addTodo,
};

export { allActions as actions };
export { reducer } from './todos.slice.js';



