import { useDispatch } from 'react-redux';
import { todoType } from '~/common/prop-types/prop-types.js';
import PropTypes from 'prop-types';
import { Icon } from '~/components/components.js';
import { getValidClassNames } from '~/helpers/helpers.js';
import { actions as todosActions } from '~/store/todos/todos.js';

import styles from './styles.module.scss';

const cardBackgroundColors = ['#F0E68C', '#ADD8E6', '#FFDAB9', '#FFB6C1'];

const Todo = ({ todo, index }) => {
  const { todo: title, completed, id } = todo;

  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(todosActions.updateTodo({
      id: String(id),
      completed: !completed
    }));
  };

  const handleDeleteTodo = () => {
    dispatch(todosActions.deleteTodo({ id: String(id)}));
  }

  const colorIndex = index % cardBackgroundColors.length;

  const cardStyle = {
    backgroundColor: cardBackgroundColors[colorIndex],
  };

  const isEditing = false;

  return (
    <div style={cardStyle} className={getValidClassNames(styles.todoCard, completed && styles.completedTodo)}>
        <div className={styles.cardHeader}>
          <div className={styles.circlesContainer}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className={styles.todoTitle}>{title}</p>
        </div>
        {!isEditing && 
          <div className={styles.actionButtons}>
            <button className={styles.moreActionsBtn}>
              <Icon iconName="ellipsisVertical" className={getValidClassNames(styles.icon, styles.moreActionsIcon)}/>
            </button>
            <input 
              type="checkbox" 
              checked={completed}
              onChange={handleToggleStatus}
            />
            <button className={styles.iconBtn}>
              <Icon iconName="edit" className={getValidClassNames(styles.icon, styles.editIcon)}/>
            </button>
            <button className={styles.iconBtn} onClick={handleDeleteTodo}>
              <Icon iconName="delete" className={getValidClassNames(styles.icon, styles.deleteIcon)}/>
            </button>
          </div>
        }
        {isEditing && 
          <div className={styles.editingButtons}>
            <button>
                <Icon iconName="checkmark" className={styles.icon}/>
            </button>
            <button>
              <Icon iconName="revert" className={styles.icon}/>
            </button>
          </div>
        }

    </div>
  );
};

Todo.propTypes = {
  todo: todoType.isRequired,
  index: PropTypes.number.isRequired,
};

export { Todo };