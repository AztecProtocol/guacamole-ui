export default function errorPropDefinition(value, propName, componentName) {
  return new Error(`Invalid prop '${propName}' supplied to ${componentName}. Value = ${value}`);
}
