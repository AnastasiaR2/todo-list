import { createSlice, isAnyOf, current } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums.js';
import { fetchAll, addTodo, updateTodo, deleteTodo } from './actions.js';

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
      const { todos } = state.todos;
      state.todos.todos = [action.payload, ...todos];
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const { todos } = state.todos;
      const updatedTodo = action.payload;
      state.todos.todos = todos.map((todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      })
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const { todos } = state.todos;
      const todo = action.payload;
      state.todos.todos = todos.filter((item) => item.id !== todo.id);
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addMatcher(
      isAnyOf(
        fetchAll.pending,
        addTodo.pending,
        updateTodo.pending,
        deleteTodo.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
      isAnyOf(
        fetchAll.rejected,
        addTodo.rejected,
        updateTodo.rejected,
        deleteTodo.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
  }
});

export { actions, name, reducer };