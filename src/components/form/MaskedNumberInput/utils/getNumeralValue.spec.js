import getNumeralValue from './getNumeralValue';

describe('getNumeralValue', () => {
  it('remove all non-digit characters', () => {
    expect(getNumeralValue('100')).toBe('100');
    expect(getNumeralValue('100 ')).toBe('100');
    expect(getNumeralValue('10 0')).toBe('100');
    expect(getNumeralValue('100a00')).toBe('10000');
    expect(getNumeralValue('100a0b0c')).toBe('10000');
    expect(getNumeralValue('10,000')).toBe('10000');
    expect(getNumeralValue('100.12')).toBe('100');
    expect(getNumeralValue('12,480.12')).toBe('12480');
    expect(getNumeralValue(10000)).toBe('10000');
    expect(getNumeralValue(100.12)).toBe('100');
    expect(getNumeralValue('-100')).toBe('100');
    expect(getNumeralValue('43-10')).toBe('4310');
  });

  it('allow decimal', () => {
    const allowDecimal = true;
    expect(getNumeralValue('100.123', {
      allowDecimal,
    })).toBe('100.123');
    expect(getNumeralValue('100.123.45', {
      allowDecimal,
    })).toBe('100.12345');
    expect(getNumeralValue(100.00, {
      allowDecimal,
    })).toBe('100');
    expect(getNumeralValue(100.123, {
      allowDecimal,
    })).toBe('100.123');
    expect(getNumeralValue('100.123ab.1', {
      allowDecimal,
    })).toBe('100.1231');
    expect(getNumeralValue('100.00', {
      allowDecimal,
    })).toBe('100.00');
    expect(getNumeralValue('100.', {
      allowDecimal,
    })).toBe('100.');
  });

  it('allow negative', () => {
    const allowNegative = true;
    expect(getNumeralValue('-100', {
      allowNegative,
    })).toBe('-100');
    expect(getNumeralValue('-', {
      allowNegative,
    })).toBe('-');
    expect(getNumeralValue('a-100', {
      allowNegative,
    })).toBe('-100');
    expect(getNumeralValue('400-100', {
      allowNegative,
    })).toBe('400100');
    expect(getNumeralValue('aac-400-100', {
      allowNegative,
    })).toBe('-400100');
  });
});
