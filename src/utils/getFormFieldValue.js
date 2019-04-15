import curryRight from 'lodash/curryRight';

export default function getFormFieldValue(fieldName, data, config) {
  const {
    defaultValue,
  } = (config || []).find(c => c.fieldName === fieldName) || {};

  if (typeof defaultValue === 'function') {
    return defaultValue({
      data,
    });
  }

  if (data[fieldName] !== undefined) {
    return data[fieldName];
  }

  return defaultValue;
}

const makeGetFormFieldValue = curryRight(getFormFieldValue);

export {
  makeGetFormFieldValue,
};
