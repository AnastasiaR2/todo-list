import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common.js';

const fetchAll = createAsyncThunk(ActionType.FETCH_All, async (_, { extra }) => {
  return await extra.todosService.getAll();
});

export { fetchAll };