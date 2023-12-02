import { useDispatch } from 'react-redux';
import { useState } from 'react'; 
import { todoType } from '~/common/prop-types/prop-types.js';
import PropTypes from 'prop-types';
import { IconButton } from '~/components/components.js';
import { getValidClassNames } from '~/helpers/helpers.js';
import { actions as todosActions } from '~/store/todos/todos.js';

import styles from './styles.module.scss';

const cardBackgroundColors = ['#F0E68C', '#ADD8E6', '#FFDAB9', '#FFB6C1'];

const Todo = ({ todo, index, isEditing, onEditClick, onConfirmEdit, onCancelEdit }) => {
  const { todo: title, completed, id } = todo;
  const [editedTitle, setEditedTitle] = useState(title);

  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(todosActions.updateTodo({
      id: String(id),
      completed: !completed
    }));
  };

  const handleEditClick = () => {
    onEditClick(id);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleConfirmEdit = () => {
    onConfirmEdit(id, editedTitle);
  };

  const handleCancelEdit = () => {
    setEditedTitle(title);
    onCancelEdit();
  };

  const handleDeleteTodo = () => {
    dispatch(todosActions.deleteTodo({ id: String(id)}));
  }

  const colorIndex = index % cardBackgroundColors.length;

  const cardStyle = {
    backgroundColor: cardBackgroundColors[colorIndex],
  };

  return (
    <div style={cardStyle} className={getValidClassNames(styles.todoCard, completed && styles.completedTodo)}>
        <div className={styles.cardHeader}>
          <div className={styles.circlesContainer}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {isEditing ? (
            <textarea
              value={editedTitle}
              className={styles.todoEditForm}
              onChange={handleTitleChange}
              autoFocus={true}
            />
          ) : (
            <p className={styles.todoTitle}>{title}</p>
          )}
        </div>
        {isEditing ? (
          <div className={styles.editingButtons}>
            <IconButton 
              iconName="checkmark"
              iconClassName={styles.confirmIcon}
              onClick={handleConfirmEdit}
            />
            <IconButton 
              iconName="revert"
              iconClassName={styles.revertIcon}
              onClick={handleCancelEdit}
            />
          </div>
        ) : (
          <div className={styles.actionButtons}>
            <IconButton 
              iconName="ellipsisVertical"
              className={styles.moreActionsBtn}
              iconClassName={getValidClassNames(styles.icon, styles.moreActionsIcon)}
            />
            <input 
              type="checkbox" 
              checked={completed}
              onChange={handleToggleStatus}
            />
            <IconButton 
              iconName="edit"
              className={getValidClassNames(completed && styles.disabledBtn, styles.iconBtn)}
              iconClassName={getValidClassNames(styles.icon, styles.editIcon)}
              onClick={handleEditClick}
              disabled={completed}
            />
            <IconButton 
              iconName="delete"
              className={styles.iconBtn}
              iconClassName={getValidClassNames(styles.icon, styles.deleteIcon)}
              onClick={handleDeleteTodo}
            />
          </div>
        )}
    </div>
  );
};

Todo.propTypes = {
  todo: todoType.isRequired,
  index: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onConfirmEdit: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
};

export { Todo };