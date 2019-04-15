import PropTypes from 'prop-types';
import listItemShape from './listItemShape';

export const makeItemGroupShape = extraItemFields => ({
  caption: PropTypes.shape(listItemShape),
  toggleable: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    ...listItemShape,
    ...extraItemFields,
  })),
});

const defaultItemGroupShape = makeItemGroupShape({
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
  Link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
});

export default PropTypes.shape(defaultItemGroupShape);
