import formatNumeralValue from './formatNumeralValue';

export default function getNextCursorPosition(
  inputValue,
  prevValue,
  position,
  {
    allowDecimal = false,
    allowNegative = false,
  } = {},
) {
  const value = formatNumeralValue(inputValue, {
    allowDecimal,
    allowNegative,
  });
  let offset = 0;

  const diff = value.length - prevValue.length;
  if (diff === 0) {
    if (inputValue.length > value.length) {
      offset = -1;
    } else {
      offset = 0;
    }
  } else {
    if (position > 1 && Math.abs(diff) > 1) {
      offset = diff > 0 ? 1 : -1;
    }

    if (value[(position + offset) - 1] === ',') {
      offset -= 1;
    }
  }

  return Math.min(
    position + offset,
    value.length,
  );
}
