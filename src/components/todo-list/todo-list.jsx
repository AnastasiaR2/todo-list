import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as todosActions } from '~/store/todos/todos.js';
import { DataStatus } from '~/common/enums/enums.js';
import { Todo } from './components/todo/todo.jsx';

const TodoList = () => {
  const { todos, dataStatus } = useSelector(state => ({
    todos: state.todos.todos,
    dataStatus: state.todos.dataStatus,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) {
      return;
    }
    dispatch(todosActions.fetchAll());
  }, [dispatch, todos]);

  return(
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export { TodoList };