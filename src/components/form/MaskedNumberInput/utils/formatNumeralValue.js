import getNumeralValue from './getNumeralValue';

export default function formatNumeralValue(value, {
  allowDecimal = false,
  allowNegative = false,
} = {}) {
  const numberValue = getNumeralValue(value, {
    allowDecimal,
    allowNegative,
  });
  const [, sign, integer, decimal, rest] = numberValue.match(/^(-?)([0-9]{0,})(\.?)([0-9]{0,})$/);
  let newValue = '';

  const len = integer.length;
  for (let i = 0; i < len; i += 1) {
    if (i > 0 && i % 3 === 0) {
      newValue = `,${newValue}`;
    }
    newValue = `${integer[len - i - 1]}${newValue}`;
  }

  if (allowDecimal && decimal) {
    newValue += `${decimal}${rest}`;
  }

  if (allowNegative && sign) {
    newValue = `${sign}${newValue}`;
  }

  return newValue;
}
