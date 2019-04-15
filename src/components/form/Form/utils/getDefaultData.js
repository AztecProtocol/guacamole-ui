import {
  getValue,
  addValue,
} from './dataModifier';

const defaultValueMap = {
  text: '',
  number: '',
};

const findFieldsValue = (data, fields = []) => {
  let values = [];

  fields.forEach(({
    fieldName,
    inputType,
    defaultValue,
    fields: subFields,
  }) => {
    let value = getValue(data, fieldName);
    if (value === undefined) {
      value = defaultValue;
    }
    if (value === undefined) {
      value = defaultValueMap[inputType];
    }
    values.push({
      fieldName,
      value,
    });

    if (subFields) {
      const subValues = findFieldsValue(data, subFields);
      if (subValues.length) {
        values = [
          ...values,
          ...subValues,
        ];
      }
    }
  });

  return values;
};

export default function getDefaultData(prevData, fieldsConfig) {
  let data = {};
  fieldsConfig.forEach(({
    fields,
  }) => {
    const values = findFieldsValue(prevData, fields);
    values.forEach(({
      fieldName, value,
    }) => {
      data = addValue(data, fieldName, value);
    });
  });

  return data;
}
