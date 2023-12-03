import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { actions as todosActions } from '~/store/todos/todos.js';

import { Todo } from './components/todo/todo.jsx';
import styles from './styles.module.scss';

const ITEMS_PER_PAGE = 8;

const TodoList = () => {
  const { todos } = useSelector((state) => ({
    todos: state.todos?.todos,
  }));

  const [currentPage, setCurrentPage] = useState(0);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const dispatch = useDispatch();

  const handleEditTodo = (todoId) => {
    setEditingTodoId(todoId);
  };

  const handleConfirmEdit = (id, todo) => {
    dispatch(
      todosActions.updateTodo({
        id: String(id),
        todo,
      }),
    );
    setEditingTodoId(null);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(todos?.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const subset = todos?.slice(startIndex, endIndex);

  useEffect(() => {
    if (todos) {
      return;
    }
    dispatch(todosActions.fetchAll());
  }, [dispatch, todos]);

  const totalActiveTasks = todos?.reduce(
    (sum, current) => sum + !current.completed,
    0,
  );

  return (
    <>
      <h2 className={styles.listTitle}>
        You have {totalActiveTasks} active tasks:
      </h2>
      <div className={styles.todosListContainer}>
        {subset &&
          subset.map((todo, index) => (
            <Todo
              key={todo.id}
              todo={todo}
              index={index}
              isEditing={editingTodoId === todo.id}
              onEditTodo={handleEditTodo}
              onConfirmEdit={handleConfirmEdit}
              onCancelEdit={handleCancelEdit}
            />
          ))}
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          containerClassName={styles.paginationContainer}
          activeLinkClassName={styles.activePage}
          disabledLinkClassName={styles.disabledControl}
        />
      )}
    </>
  );
};

export { TodoList };
