import PropTypes from 'prop-types';

export default function generateResponsiveShape(values) {
  return PropTypes.oneOfType([
    PropTypes.oneOf(values),
    PropTypes.shape({
      xl: PropTypes.oneOf(values),
      l: PropTypes.oneOf(values),
      m: PropTypes.oneOf(values),
      s: PropTypes.oneOf(values),
      xs: PropTypes.oneOf(values),
    }),
  ]);
}
