import PropTypes from 'prop-types';
import { iconNameToIcon } from './common.js';

const Icon = ({ iconName, className }) => {
  const SvgIcon = iconNameToIcon[iconName];

  return <SvgIcon className={className} />;
};

export { Icon };

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
}
