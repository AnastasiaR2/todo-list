import { todoType } from '~/common/prop-types/prop-types.js';
import PropTypes from 'prop-types';
import { Icon } from '~/components/components.js';
import { getValidClassNames } from '~/helpers/helpers.js';

import styles from './styles.module.scss';

const cardBackgroundColors = ['#F0E68C', '#ADD8E6', '#FFDAB9', '#FFB6C1'];

const Todo = ({ todo, index }) => {
  const { todo: title, completed, id } = todo;

  const colorIndex = index % cardBackgroundColors.length;

  const cardStyle = {
    backgroundColor: cardBackgroundColors[colorIndex],
  };

  return (
    <div style={cardStyle} className={styles.todoCard}>
        <div className={styles.circlesContainer}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>{title}</p>
        <div className={styles.actionButtons}>
          <input type="checkbox" />
          <button>
            <Icon iconName="edit" className={getValidClassNames(styles.icon, styles.editIcon)}/>
          </button>
          <button>
            <Icon iconName="delete" className={getValidClassNames(styles.icon, styles.deleteIcon)}/>
          </button>
        </div>
    </div>
  );
};

Todo.propTypes = {
  todo: todoType.isRequired,
  index: PropTypes.number.isRequired,
};

export { Todo };