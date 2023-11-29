import { createSlice } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums.js';
import { fetchAll } from './actions.js';

const initialState = {
  todos: [],
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'todos',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.getArticleStatus = DataStatus.FULFILLED;
    });
  }
});

export { actions, name, reducer };