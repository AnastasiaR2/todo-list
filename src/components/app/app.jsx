import { TodoForm, TodoList } from '~/components/components.js';

import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}></div>
      <h1 className={styles.title}>Get Things Done!</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export { App };
