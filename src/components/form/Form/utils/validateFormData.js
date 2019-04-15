import {
  getValue,
} from './dataModifier';
import {
  addError,
} from './errorsModifier';

const findFieldsErrors = (data, fields = []) => {
  let errors = [];

  fields.forEach(({
    fieldName, fieldValidators, fields: subFields,
  }) => {
    if (fieldValidators) {
      const value = getValue(data, fieldName);
      const failed = fieldValidators.find(({
        validator,
      }) => !validator(value));
      if (failed) {
        errors.push({
          fieldName,
          error: failed.errorMessage,
        });
      }
    }
    if (subFields) {
      const subErrors = findFieldsErrors(data, subFields);
      if (subErrors.length) {
        errors = [
          ...errors,
          ...subErrors,
        ];
      }
    }
  });

  return errors;
};

export default function validateFormData(data, fieldsConfig) {
  let formatedErrors = {};
  fieldsConfig.forEach(({
    fields,
  }) => {
    const errors = findFieldsErrors(data, fields);
    errors.forEach(({
      fieldName, error,
    }) => {
      formatedErrors = addError(formatedErrors, fieldName, error);
    });
  });

  return formatedErrors;
}
