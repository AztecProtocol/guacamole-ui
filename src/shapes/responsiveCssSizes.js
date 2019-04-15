import PropTypes from 'prop-types';
import errorPropDefinition from './utils/errorPropDefinition';
import {
  sizeKeys,
} from '../config/layout';

function isCssValue(value) {
  return value === '' || value.split(' ').every(val => sizeKeys.indexOf(val) >= 0);
}

export function cssSizeValue(props, propName, componentName, location, propFullName) {
  const value = props[propName];
  if (value !== undefined && (typeof value !== 'string' || !isCssValue(value))) {
    return errorPropDefinition(value, propFullName || propName, componentName);
  }
}

export default PropTypes.oneOfType([
  cssSizeValue,
  PropTypes.shape({
    m: cssSizeValue,
    s: cssSizeValue,
    xs: cssSizeValue,
  }),
]);
