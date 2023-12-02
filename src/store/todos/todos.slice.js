import { createSlice, isAnyOf, current } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums.js';
import { fetchAll, addTodo } from './actions.js';

const initialState = {
  todos: null,
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'todos',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.todos = [action.payload, ...state.todos.todos];
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addMatcher(
      isAnyOf(
        fetchAll.pending,
        addTodo.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
      isAnyOf(
        fetchAll.rejected,
        addTodo.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
  }
});

export { actions, name, reducer };