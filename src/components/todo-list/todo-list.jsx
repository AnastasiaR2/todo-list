import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as todosActions } from '~/store/todos/todos.js';
// import { DataStatus } from '~/common/enums/enums.js';
import { Todo } from './components/todo/todo.jsx';

import styles from './styles.module.scss';

const TodoList = () => {
  const { todos } = useSelector(state => ({
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

  const totalActiveTasks = todos.reduce((sum, current) => sum + !current.completed, 0);

  return(
    <>
      <h2 className={styles.listTitle}>You have {totalActiveTasks} active tasks:</h2>
      <div className={styles.todosListContainer}>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index} />
        ))}
      </div>
    </>
  );
};

export { TodoList };