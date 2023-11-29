import PropTypes from 'prop-types';

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
  todo: PropTypes.object.isRequired,
};

export { Todo };