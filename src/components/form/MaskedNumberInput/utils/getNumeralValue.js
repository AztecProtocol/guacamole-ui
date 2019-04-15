function getPureDigits(value) {
  return value.replace(/[^0-9]/g, '');
}

export default function getNumeralValue(value, {
  allowDecimal = false,
  allowNegative = false,
} = {}) {
  let numeral = '';

  const strValue = `${value}`.trim();
  const [integer, ...rest] = strValue.split('.');
  const sign = allowNegative && integer.match(/^([^0-9]){0,}-/) ? '-' : '';

  numeral = `${sign}${getPureDigits(integer)}`;

  if (allowDecimal) {
    if (rest.length) {
      numeral += `.${getPureDigits(rest.join(''))}`;
    } else if (strValue.indexOf('.') >= 0) {
      numeral += '.';
    }
  }

  return numeral;
}
