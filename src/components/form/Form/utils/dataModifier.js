import replaceValue from 'utils/replaceValue';

export const getValue = (data, fieldName) => data[fieldName];

export const addValue = (prevData, fieldName, value) => replaceValue(
  prevData,
  fieldName,
  value,
  true,
);

export const deleteValue = (prevData, fieldName) => {
  if (!(fieldName in prevData)) {
    return prevData;
  }

  const data = {
    ...prevData,
  };
  delete data[fieldName];

  return data;
};

export default {
  get: getValue,
  add: addValue,
  delete: deleteValue,
};
