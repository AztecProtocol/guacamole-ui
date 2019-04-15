import getFormFieldValue, {
  makeGetFormFieldValue,
} from './getFormFieldValue';

describe('getFormFieldValue', () => {
  it('get value from data by field name', () => {
    const data = {
      name: 'r2d2',
      species: 'droid',
      age: 36,
    };

    expect(getFormFieldValue('name', data)).toBe('r2d2');
    expect(getFormFieldValue('age', data)).toBe(36);
    expect(getFormFieldValue('planet', data)).toBeUndefined();
  });

  it('get default value from config if value is undefined', () => {
    const data = {
      name: 'r2d2',
      height: null,
    };

    const config = [
      {
        fieldName: 'name',
        defaultValue: '',
      },
      {
        fieldName: 'species',
      },
      {
        fieldName: 'age',
        defaultValue: 0,
      },
      {
        fieldName: 'height',
        defaultValue: 1,
      },
    ];

    expect(getFormFieldValue('name', data, config)).toBe('r2d2');
    expect(getFormFieldValue('species', data, config)).toBeUndefined();
    expect(getFormFieldValue('age', data, config)).toBe(0);
    expect(getFormFieldValue('height', data, config)).toBe(null);
    expect(getFormFieldValue('planet', data, config)).toBeUndefined();
  });
});

describe('makegetFormFieldValue', () => {
  it('make function by config', () => {
    const config = [
      {
        fieldName: 'name',
        defaultValue: '',
      },
      {
        fieldName: 'age',
        defaultValue: 10,
      },
    ];

    const getCharacterValue = makeGetFormFieldValue(config);

    const data = {
      name: 'r2d2',
    };

    expect(getCharacterValue('name', data)).toBe('r2d2');
    expect(getCharacterValue('age', data)).toBe(10);
  });

  it('make function by config and data', () => {
    const config = [
      {
        fieldName: 'name',
        defaultValue: '',
      },
      {
        fieldName: 'age',
        defaultValue: 10,
      },
    ];
    const data = {
      name: 'r2d2',
    };

    const getValueByFieldName = makeGetFormFieldValue(data, config);

    expect(getValueByFieldName('name')).toBe('r2d2');
    expect(getValueByFieldName('age')).toBe(10);
  });

  it('make function by config and then by data', () => {
    const config = [
      {
        fieldName: 'name',
        defaultValue: '',
      },
      {
        fieldName: 'age',
        defaultValue: 10,
      },
    ];

    const getCharacterValue = makeGetFormFieldValue(config);

    const getR2d2Value = getCharacterValue({
      name: 'r2d2',
    });
    expect(getR2d2Value('name')).toBe('r2d2');
    expect(getR2d2Value('age')).toBe(10);

    const getBB8Value = getCharacterValue({
      name: 'bb8',
    });
    expect(getBB8Value('name')).toBe('bb8');
    expect(getBB8Value('age')).toBe(10);
  });

  it('if defaultValue is a function, always call it to get the real defaultValue', () => {
    const config = [
      {
        fieldName: 'name',
        defaultValue: ({
          data,
        }) => {
          const {
            gender,
            name,
          } = data;

          if (name) {
            return name;
          }

          return gender
            ? gender === 'F' ? 'MS' : 'MR'
            : '';
        },
      },
      {
        fieldName: 'gender',
        defaultValue: '',
      },
    ];

    const getValue = makeGetFormFieldValue(config);

    expect(getValue(
      'name',
      {},
    )).toBe('');

    expect(getValue(
      'name',
      {
        gender: 'F',
      },
    )).toBe('MS');

    expect(getValue(
      'name',
      {
        name: 'Leia',
      },
    )).toBe('Leia');

    expect(getValue(
      'name',
      {
        name: 'Leia',
        gender: 'F',
      },
    )).toBe('Leia');

    expect(getValue(
      'name',
      {
        name: '',
        gender: 'F',
      },
    )).toBe('MS');
  });
});
