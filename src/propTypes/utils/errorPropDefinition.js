export default function errorPropDefinition(prop, propName, componentName) {
  return new Error(`Invalid prop '${propName}' supplied to ${componentName}. Value = ${prop}`);
}
