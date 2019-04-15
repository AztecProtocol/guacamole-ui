import {
  getError,
  addError,
  deleteError,
} from './errorsModifier';

const errors = {
  name: 'This field is required',
};

describe('getError', () => {
  it('get error from an error object by key', () => {
    expect(getError(errors, 'name')).toBe('This field is required');
    expect(getError(errors, 'email')).toBeUndefined();
  });
});

describe('addError', () => {
  it('return new object when adding error of new field', () => {
    const newErrors = addError(errors, 'email', 'Wrong format');
    expect(newErrors).toEqual({
      name: 'This field is required',
      email: 'Wrong format',
    });
    expect(errors).toEqual({
      name: 'This field is required',
    });
    expect(newErrors).not.toBe(errors);
  });

  it('return the original object when adding the same message to existing field', () => {
    const newErrors = addError(errors, 'name', 'This field is required');
    expect(newErrors).toEqual({
      name: 'This field is required',
    });
    expect(newErrors).toBe(errors);
  });

  it('return new object when adding different message to existing field', () => {
    const newErrors = addError(errors, 'name', 'Wrong format');
    expect(newErrors).toEqual({
      name: 'Wrong format',
    });
    expect(errors).toEqual({
      name: 'This field is required',
    });
    expect(newErrors).not.toBe(errors);
  });
});

describe('deleteError', () => {
  it('return new object when deleting a field', () => {
    const newErrors = deleteError(errors, 'name');
    expect(newErrors).toEqual({});
    expect(errors).toEqual({
      name: 'This field is required',
    });
    expect(newErrors).not.toBe(errors);
  });

  it('return the original object when deleting a non existing field', () => {
    const newErrors = deleteError(errors, 'email');
    expect(newErrors).toEqual({
      name: 'This field is required',
    });
    expect(newErrors).toBe(errors);
  });
});
