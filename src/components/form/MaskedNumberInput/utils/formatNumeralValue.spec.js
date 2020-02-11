import formatNumeralValue from './formatNumeralValue';

describe('formatNumeralValue', () => {
  it('return formated numeral string', () => {
    expect(formatNumeralValue('')).toBe('');
    expect(formatNumeralValue('0')).toBe('0');
    expect(formatNumeralValue('00000')).toBe('00,000');
    expect(formatNumeralValue('00,00')).toBe('0,000');
    expect(formatNumeralValue('000,')).toBe('000');
  });

  it('allow decimal', () => {
    const allowDecimal = true;
    expect(formatNumeralValue('000.00', {
      allowDecimal,
    })).toBe('000.00');
    expect(formatNumeralValue('00000.00', {
      allowDecimal,
    })).toBe('00,000.00');
    expect(formatNumeralValue('00000.00000', {
      allowDecimal,
    })).toBe('00,000.00000');
    expect(formatNumeralValue('00000.', {
      allowDecimal,
    })).toBe('00,000.');
  });

  it('allow negative', () => {
    const allowNegative = true;
    expect(formatNumeralValue('-00', {
      allowNegative,
    })).toBe('-00');
    expect(formatNumeralValue('-', {
      allowNegative,
    })).toBe('-');
    expect(formatNumeralValue('-00000', {
      allowNegative,
    })).toBe('-00,000');
    expect(formatNumeralValue('-000000', {
      allowNegative,
    })).toBe('-000,000');
    expect(formatNumeralValue('ab-0000c00', {
      allowNegative,
    })).toBe('-000,000');
  });

  it('can process large numbers', () => {
    expect(formatNumeralValue('12345678987654321')).toBe('12,345,678,987,654,321');
    expect(formatNumeralValue('12345678900000.87654321', {
      allowDecimal: true,
    })).toBe('12,345,678,900,000.87654321');
  });
});
