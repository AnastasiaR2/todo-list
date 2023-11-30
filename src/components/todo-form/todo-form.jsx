import styles from './styles.module.scss';

const TodoForm = () => {
  return (
    <form className={styles.todoForm}>
      <input type="text" className={styles.todoInput} placeholder="What is the task today?"/>
      <button type="submit" className={styles.addBtn}>Add</button>
    </form>
  );
};

export { TodoForm };