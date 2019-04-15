import PropTypes from 'prop-types';

export default {
  size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l']),
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconRotate: PropTypes.oneOf([0, 90, 180, 270]),
  avatar: PropTypes.shape({
    src: PropTypes.string,
  }),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};
