import {
  getValue,
  addValue,
  deleteValue,
} from './dataModifier';

const data = {
  name: 'Leia',
};

describe('getValue', () => {
  it('get value from an data object by key', () => {
    expect(getValue(data, 'name')).toBe('Leia');
    expect(getValue(data, 'email')).toBeUndefined();
  });
});

describe('addValue', () => {
  it('return new object when adding value of new field', () => {
    const newData = addValue(data, 'email', 'leia@my.space');
    expect(newData).toEqual({
      name: 'Leia',
      email: 'leia@my.space',
    });
    expect(data).toEqual({
      name: 'Leia',
    });
    expect(newData).not.toBe(data);
  });

  it('return the original object when adding the same value to existing field', () => {
    const newData = addValue(data, 'name', 'Leia');
    expect(newData).toEqual({
      name: 'Leia',
    });
    expect(newData).toBe(data);
  });

  it('return new object when adding different value to existing field', () => {
    const newData = addValue(data, 'name', 'Leia Organa');
    expect(newData).toEqual({
      name: 'Leia Organa',
    });
    expect(data).toEqual({
      name: 'Leia',
    });
    expect(newData).not.toBe(data);
  });
});

describe('deleteValue', () => {
  it('return new object when deleting a field', () => {
    const newData = deleteValue(data, 'name');
    expect(newData).toEqual({});
    expect(data).toEqual({
      name: 'Leia',
    });
    expect(newData).not.toBe(data);
  });

  it('return the original object when deleting a non existing field', () => {
    const newData = deleteValue(data, 'email');
    expect(newData).toEqual({
      name: 'Leia',
    });
    expect(newData).toBe(data);
  });
});
