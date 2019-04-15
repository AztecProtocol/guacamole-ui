import replaceValue from 'utils/replaceValue';

export const getError = (errors, fieldName) => errors[fieldName];

export const addError = (prevErrors, fieldName, error) => replaceValue(
  prevErrors,
  fieldName,
  error,
  true,
);

export const deleteError = (prevErrors, fieldName) => {
  if (!(fieldName in prevErrors)) {
    return prevErrors;
  }

  const errors = {
    ...prevErrors,
  };
  delete errors[fieldName];

  return errors;
};

export default {
  get: getError,
  add: addError,
  delete: deleteError,
};
