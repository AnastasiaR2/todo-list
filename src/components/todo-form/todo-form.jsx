import { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { actions as todosActions } from '~/store/todos/todos.js';

import styles from './styles.module.scss';

const mockedUserId = 1;

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState('');

  const handleInputChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim() !== '') {
      dispatch(todosActions.addTodo({
        todo: todoTitle,
        completed: false,
        userId: mockedUserId,
      }));
      setTodoTitle('');
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input 
        type="text" 
        className={styles.todoInput} 
        placeholder="What is the task today?"
        value={todoTitle}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.addBtn}>Add</button>
    </form>
  );
};

export { TodoForm };