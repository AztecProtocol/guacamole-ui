import shiftSize from './shiftSize';

describe('shiftSize', () => {
  it('increase sizes', () => {
    expect(shiftSize('xxl', 1)).toBe('xxl');
    expect(shiftSize('xl', 1)).toBe('xxl');
    expect(shiftSize('l', 1)).toBe('xl');
    expect(shiftSize('m', 1)).toBe('l');
    expect(shiftSize('s', 1)).toBe('m');
    expect(shiftSize('xs', 1)).toBe('s');
    expect(shiftSize('xxs', 1)).toBe('xs');

    expect(shiftSize('xs', 4)).toBe('xl');
    expect(shiftSize('xs', 10)).toBe('xxl');
  });

  it('reduce sizes', () => {
    expect(shiftSize('xxl', -1)).toBe('xl');
    expect(shiftSize('xl', -1)).toBe('l');
    expect(shiftSize('l', -1)).toBe('m');
    expect(shiftSize('m', -1)).toBe('s');
    expect(shiftSize('s', -1)).toBe('xs');
    expect(shiftSize('xs', -1)).toBe('xxs');
    expect(shiftSize('xxs', -1)).toBe('xxs');

    expect(shiftSize('xl', -4)).toBe('xs');
    expect(shiftSize('xl', -10)).toBe('xxs');
  });
});
