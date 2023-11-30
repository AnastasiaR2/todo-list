import { todoType } from '~/common/prop-types/prop-types.js';

const Todo = ({ todo }) => {
  const { todo: title, completed, id } = todo;
  return (
    <li>
        <p>{title}</p>
        <span>{completed}</span>
    </li>
  );
};

Todo.propTypes = {
  todo: todoType.isRequired,
};

export { Todo };