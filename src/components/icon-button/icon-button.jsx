import PropTypes from 'prop-types';
import { Icon } from '~/components/components.js';
import { getValidClassNames } from '~/helpers/helpers.js';

import styles from './styles.module.scss';

const IconButton = ({
  iconName,
  onClick,
  label = '',
  className = '',
  iconClassName = '',
}) => (
  <button
    className={getValidClassNames(styles.iconButton, className)}
    type="button"
    onClick={onClick}
  >
    <Icon iconName={iconName} className={iconClassName} />
    {label}
  </button>
);

export { IconButton };

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
}
