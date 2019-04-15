export default function isObjectEmpty(obj) {
  for (const key in obj) { // eslint-disable-line no-restricted-syntax
    if (Object.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
