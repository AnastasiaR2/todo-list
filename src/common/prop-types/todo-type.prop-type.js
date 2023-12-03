import PropTypes from 'prop-types';

import { TodoKey } from '~/common/enums/enums.js';

const todoType = PropTypes.exact({
  [TodoKey.ID]: PropTypes.number.isRequired,
  [TodoKey.TODO]: PropTypes.string.isRequired,
  [TodoKey.COMPLETED]: PropTypes.bool.isRequired,
  [TodoKey.USER_ID]: PropTypes.number.isRequired,
});

export { todoType };
