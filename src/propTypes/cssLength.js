import errorPropDefinition from './utils/errorPropDefinition';

function isCSSLength(value) {
  return /^\d+(\.\d+)?(px|%)?$/i.test(value) || value === 'auto';
}

export default function cssLength(props, propName, componentName) {
  const {
    [propName]: prop,
  } = props;
  if (prop !== undefined && !isCSSLength(prop)) {
    return errorPropDefinition(prop, propName, componentName);
  }
  return null;
}
