import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as todosActions } from '~/store/todos/todos.js';
import { DataStatus } from '~/common/enums/enums.js';

const App = () => {
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

  return (
    <main>
      <h1>TODO List</h1>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <p>{item.todo}</p>
              <span>{item.completed}</span>
            </li>
          ))}
        </ul>
    </main>
  );
};

export default App;