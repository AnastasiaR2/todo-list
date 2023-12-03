import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from './common.js';

const fetchAll = createAsyncThunk(
  ActionType.FETCH_All,
  async (_, { extra }) => {
    return await extra.todosService.getAll();
  },
);

const addTodo = createAsyncThunk(ActionType.ADD, async (payload, { extra }) => {
  return await extra.todosService.create(payload);
});

const updateTodo = createAsyncThunk(
  ActionType.UPDATE,
  async (payload, { extra }) => {
    return await extra.todosService.partialUpdate(payload.id, payload);
  },
);

const deleteTodo = createAsyncThunk(
  ActionType.DELETE,
  async (payload, { extra }) => {
    return await extra.todosService.delete(payload.id);
  },
);

export { addTodo, deleteTodo, fetchAll, updateTodo };
