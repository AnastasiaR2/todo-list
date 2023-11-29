import { fetchAll } from "./actions.js";
import { actions } from './todos.slice.js';

const allActions = {
  ...actions,
  fetchAll,
};

export { allActions as actions };
export { reducer } from './todos.slice.js';



